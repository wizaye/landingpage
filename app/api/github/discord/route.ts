import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(`https://discord.com/api/v10/invites/${process.env.NEXT_PUBLIC_DISCORD_INVITE_CODE}?with_counts=true&with_expiration=true`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch Discord data');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching Discord data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Discord data' },
      { status: 500 }
    );
  }
}