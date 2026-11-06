import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-md flex-col px-6 pb-16 pt-24">
      <ThemeToggle />
      <ProfileHeader
        name={profile.name}
        bio={profile.bio}
        photo={profile.photo}
      />
      <LinkList links={profile.links} />
    </main>
  );
}
