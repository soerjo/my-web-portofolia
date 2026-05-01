export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "minimal-next-portfolio",
    contibutionDescription:
      "Forked and customized the open-source Next.js portfolio template for personal use.",
    repoOwner: "namanbarkiya",
    link: "https://github.com/soerjo/my-web-portofolia",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
