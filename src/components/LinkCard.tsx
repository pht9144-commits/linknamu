"use client";

import type { LinkItem } from "@/data/profile";

type Props = Omit<LinkItem, "id"> & { count: number; onClick: () => void };

export default function LinkCard({ title, url, count, onClick }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="flex w-full items-center justify-between rounded-2xl border border-white/60 bg-white/40 px-6 py-[18px] font-medium shadow-[0_8px_24px_-12px_rgba(120,70,30,0.25)] backdrop-blur-md transition duration-200 hover:-translate-y-px hover:bg-white/60 hover:shadow-[0_12px_28px_-12px_rgba(120,70,30,0.3)] dark:border-white/10 dark:bg-white/5 dark:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)] dark:hover:bg-white/10"
    >
      <span>{title}</span>
      <span className="text-sm font-normal text-[#a38b7c] dark:text-[#a99384]">
        {count.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
