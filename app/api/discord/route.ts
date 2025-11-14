import { NextResponse } from 'next/server';

// This route aggregates public Discord invite data with (optional) guild widget data.
// Widget data gives presence count, channels & members list without needing a bot token
// (requires the "Server Widget" to be enabled in Discord > Server Settings > Widget).
export async function GET() {
  try {
    const inviteCode = process.env.NEXT_PUBLIC_DISCORD_INVITE_CODE;
    const guildId = process.env.NEXT_PUBLIC_DISCORD_SERVER_ID;

    if (!inviteCode) {
      return NextResponse.json({ error: 'Missing invite code' }, { status: 400 });
    }

    // Base invite metadata (counts, guild info)
    const inviteRes = await fetch(
      `https://discord.com/api/v10/invites/${inviteCode}?with_counts=true&with_expiration=true`,
      { headers: { 'Content-Type': 'application/json' } }
    );
    if (!inviteRes.ok) {
      throw new Error(`Invite fetch failed: ${inviteRes.status}`);
    }
    const inviteData = await inviteRes.json();

    let widgetData: any = null;
    if (guildId) {
      try {
        const widgetRes = await fetch(`https://discord.com/api/guilds/${guildId}/widget.json`, {
          headers: { 'Content-Type': 'application/json' },
          // No auth header; widget must be enabled
        });
        if (widgetRes.ok) {
          widgetData = await widgetRes.json();
        }
      } catch (e) {
        // Silently ignore widget errors; still return invite data
        console.warn('Widget fetch failed (likely disabled):', e);
      }
    }

    const combined = {
      guild: {
        id: inviteData.guild?.id,
        name: inviteData.guild?.name,
        description: inviteData.guild?.description ?? widgetData?.id ? widgetData.name : null,
        icon: inviteData.guild?.icon,
        features: inviteData.guild?.features ?? [],
      },
      invite: {
        code: inviteData.code,
        expires_at: inviteData.expires_at ?? null,
      },
      counts: {
        approximate_member_count: inviteData.approximate_member_count ?? null,
        approximate_presence_count: inviteData.approximate_presence_count ?? null,
        presence_count: widgetData?.presence_count ?? null,
        channels_count: widgetData?.channels?.length ?? null,
        members_listed: widgetData?.members?.length ?? null,
      },
      widget: widgetData ? { enabled: true } : { enabled: false },
    };

    return NextResponse.json(combined, { status: 200 });
  } catch (error) {
    console.error('Error fetching Discord data:', error);
    return NextResponse.json({ error: 'Failed to fetch Discord data' }, { status: 500 });
  }
}