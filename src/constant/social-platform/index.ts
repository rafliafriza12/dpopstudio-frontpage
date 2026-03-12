export interface ISocialPlatform {
  id: number;
  name: string;
  icon: string;
  url: string;
  hoverColor: string;
  hoverBg: string;
}

export const socialPlatforms: ISocialPlatform[] = [
  {
    id: 1,
    name: "Dribbble",
    icon: "/img/icon/social/dribble.png",
    url: "https://dribbble.com",
    hoverColor: "#EA4C89",
    hoverBg: "#EA4B8B",
  },
  {
    id: 2,
    name: "UI8",
    icon: "/img/icon/social/UI8.png",
    url: "https://apple.com",
    hoverColor: "#555555",
    hoverBg: "#1D1D1F",
  },
  {
    id: 3,
    name: "Behance",
    icon: "/img/icon/social/behance.png",
    url: "https://behance.net",
    hoverColor: "#1769FF",
    hoverBg: "#0050FD",
  },
  {
    id: 4,
    name: "Instagram",
    icon: "/img/icon/social/instagram.png",
    url: "https://instagram.com",
    hoverColor: "#E4405F",
    hoverBg: "#D9178D",
  },
  {
    id: 5,
    name: "X",
    icon: "/img/icon/social/twitter.png",
    url: "https://x.com",
    hoverColor: "#1D1D1F",
    hoverBg: "#000000",
  },
  {
    id: 6,
    name: "LinkedIn",
    icon: "/img/icon/social/linkedin.png",
    url: "https://linkedin.com",
    hoverColor: "#0A66C2",
    hoverBg: "#017ABA",
  },
];
