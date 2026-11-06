export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  photo: string;
  links: LinkItem[];
};

// 보여주기용 더미 값입니다. 실제 내용은 나중에 교체하세요.
export const profile: Profile = {
  name: "김현우",
  bio: "클로드 코드 마스터가 되고 싶은 클코병아리",
  photo: "/profile.png",
  links: [
    { id: "github", title: "🐙 깃허브", url: "https://github.com/pht9144" },
    {
      id: "notion",
      title: "📝 노션",
      url: "https://app.notion.com/p/35a574f3c1848092ba4ce99c266d0cca?v=35a574f3c184809a9beb000cee244572&source=copy_link",
    },
    { id: "email", title: "📮 이메일", url: "mailto:pht9144@gmail.com" },
  ],
};
