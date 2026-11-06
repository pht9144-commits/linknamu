type Props = {
  name: string;
  bio: string;
  photo: string;
};

export default function ProfileHeader({ name, bio, photo }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo}
        alt={`${name} 프로필 사진`}
        className="h-28 w-28 rounded-full border-4 border-white/80 object-cover shadow-[0_12px_30px_-8px_rgba(120,70,30,0.35)] ring-1 ring-black/5 dark:border-white/10 dark:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.6)] dark:ring-white/10"
      />
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-[#8a6f60] dark:text-[#c9b3a5]">
        {bio}
      </p>
    </header>
  );
}
