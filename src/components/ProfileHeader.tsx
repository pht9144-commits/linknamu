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
        className="h-28 w-28 rounded-full border border-neutral-300 object-cover dark:border-neutral-700"
      />
      <h1 className="mt-5 text-2xl font-bold">{name}</h1>
      <p className="mt-1 text-neutral-600 dark:text-neutral-400">{bio}</p>
    </header>
  );
}
