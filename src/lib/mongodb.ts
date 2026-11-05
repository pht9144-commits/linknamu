import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// dev 서버의 핫 리로드마다 연결이 새로 생기지 않도록 전역에 캐시한다.
export function getClient(): Promise<MongoClient> | null {
  if (!uri) return null;
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = new MongoClient(uri).connect();
  }
  return global._mongoClientPromise;
}

export async function getClicksCollection() {
  const client = await getClient();
  if (!client) return null;
  return client
    .db("linknamu")
    .collection<{ _id: string; count: number }>("clicks");
}

export async function getClickCounts(): Promise<Record<string, number>> {
  try {
    const col = await getClicksCollection();
    if (!col) return {};
    const docs = await col.find().toArray();
    return Object.fromEntries(docs.map((d) => [d._id, d.count]));
  } catch {
    return {};
  }
}
