"use client";

import { useEffect, useState } from "react";
import type { LinkItem } from "@/data/profile";
import LinkCard from "./LinkCard";

export default function LinkList({ links }: { links: LinkItem[] }) {
  // 서버 값이 도착하기 전에는 0회로 보이고, 도착하면 실제 값으로 바뀐다.
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/click", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : {}))
      .then((data: Record<string, number>) => setCounts(data))
      .catch(() => {});
  }, []);

  function handleClick(id: string) {
    setCounts((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));
    // 새 탭으로 이동해도 요청이 끊기지 않도록 keepalive를 쓴다.
    fetch("/api/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
      keepalive: true,
    }).catch(() => {});
  }

  return (
    <ul className="mt-10 flex flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            {...link}
            count={counts[link.id] ?? 0}
            onClick={() => handleClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
