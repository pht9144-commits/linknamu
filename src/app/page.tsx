import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";
import { getClickCounts } from "@/lib/mongodb";

// 클릭 수가 항상 최신이 되도록 요청마다 렌더링한다.
export const dynamic = "force-dynamic";

export default async function Home() {
  const counts = await getClickCounts();

  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-md flex-col px-6 pb-16 pt-24">
      <ThemeToggle />
      <ProfileHeader
        name={profile.name}
        bio={profile.bio}
        photo={profile.photo}
      />
      <ul className="mt-10 flex flex-col gap-4">
        {profile.links.map((link) => (
          <li key={link.id}>
            <LinkCard {...link} initialCount={counts[link.id] ?? 0} />
          </li>
        ))}
      </ul>
    </main>
  );
}
