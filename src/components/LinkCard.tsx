"use client";

import { useState } from "react";
import type { LinkItem } from "@/data/profile";

type Props = LinkItem & { initialCount: number };

export default function LinkCard({ id, title, url, initialCount }: Props) {
  const [count, setCount] = useState(initialCount);

  function handleClick() {
    setCount((c) => c + 1);
    // 새 탭으로 이동해도 요청이 끊기지 않도록 keepalive를 쓴다.
    fetch("/api/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
      keepalive: true,
    }).catch(() => {});
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="flex w-full items-center justify-between rounded-xl border border-neutral-300 bg-white px-5 py-4 font-medium transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800"
    >
      <span>{title}</span>
      <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
        {count.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
