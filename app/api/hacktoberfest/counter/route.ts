import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "hacktoberfest.json");

type Counters = { visits: number };

async function readCounters(): Promise<Counters> {
  try {
    const buf = await fs.readFile(DATA_FILE, "utf8");
    const json = JSON.parse(buf);
    return { visits: Number(json.visits || 0) };
  } catch (err: any) {
    if (err.code === "ENOENT") {
      return { visits: 0 };
    }
    throw err;
  }
}

async function writeCounters(counters: Counters): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(counters, null, 2), "utf8");
}

export async function GET() {
  try {
    const { visits } = await readCounters();
    return NextResponse.json({ visits });
  } catch {
    return NextResponse.json({ error: "Failed to read counters" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const type = body?.type as "visit" | undefined;
    const counters = await readCounters();
    if (type === "visit") {
      counters.visits += 1;
      await writeCounters(counters);
    }
    return NextResponse.json(counters);
  } catch {
    return NextResponse.json({ error: "Failed to update counters" }, { status: 500 });
  }
}


