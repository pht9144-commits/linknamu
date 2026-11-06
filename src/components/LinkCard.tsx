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
      className="flex w-full items-center justify-between rounded-2xl border border-white/60 bg-white/40 px-6 py-[18px] font-medium shadow-[0_8px_24px_-12px_rgba(120,70,30,0.25)] backdrop-blur-md transition duration-200 hover:-translate-y-px hover:bg-white/60 hover:shadow-[0_12px_28px_-12px_rgba(120,70,30,0.3)] dark:border-white/10 dark:bg-white/5 dark:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)] dark:hover:bg-white/10"
    >
      <span>{title}</span>
      <span className="text-sm font-normal text-[#a38b7c] dark:text-[#a99384]">
        {count.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
