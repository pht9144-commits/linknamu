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
  name: "홍길동",
  bio: "클로드 코드 마스터",
  photo: "/avatar.svg",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com" },
    { id: "linkedin", title: "LinkedIn", url: "https://linkedin.com" },
    { id: "blog", title: "블로그", url: "https://velog.io" },
  ],
};
