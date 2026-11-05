import { NextResponse } from "next/server";
import { profile } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const id = body?.id;

  // 등록된 링크 id만 허용한다.
  if (typeof id !== "string" || !profile.links.some((l) => l.id === id)) {
    return NextResponse.json({ error: "invalid id" }, { status: 400 });
  }

  try {
    const col = await getClicksCollection();
    if (!col) {
      return NextResponse.json({ error: "db not configured" }, { status: 503 });
    }
    await col.updateOne({ _id: id }, { $inc: { count: 1 } }, { upsert: true });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "db error" }, { status: 500 });
  }
}
