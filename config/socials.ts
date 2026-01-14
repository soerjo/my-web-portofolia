import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@soerjo",
    icon: Icons.gitHub,
    link: "https://github.com/soerjo",
  },
  {
    name: "LinkedIn",
    username: "Suryo Hastomo",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/suryo-hastomo-786110166",
  },
  {
    name: "Twitter",
    username: "@soerj0",
    icon: Icons.twitter,
    link: "https://twitter.com/soerj0",
  },
  {
    name: "Gmail",
    username: "ryohastomo",
    icon: Icons.gmail,
    link: "mailto:ryohastomo@gmail.com",
  },
];
