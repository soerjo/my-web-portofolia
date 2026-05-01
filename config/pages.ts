import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description:
      "Backend Engineer specializing in scalable, high-availability systems.",
    metadata: {
      title: "Home",
      description: "Suryo Hastomo - Backend Engineer Portfolio",
    },
  },
  skills: {
    title: "Skills",
    description:
      "Technical skills across backend engineering, cloud infrastructure, and full-stack development.",
    metadata: {
      title: "Skills",
      description:
        "Suryo Hastomo's technical skills in TypeScript, .NET, Java, Go, and cloud technologies.",
    },
  },
  projects: {
    title: "Projects",
    description:
      "Professional projects across healthcare, fintech, IoT, and GIS industries.",
    metadata: {
      title: "Projects",
      description:
        "Suryo Hastomo's professional projects building scalable backend systems.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and discuss opportunities.",
    metadata: {
      title: "Contact",
      description: "Contact Suryo Hastomo for collaboration and opportunities.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions",
      description: "Suryo Hastomo's open-source contributions.",
    },
  },
  resume: {
    title: "Resume",
    description: "Suryo Hastomo's resume.",
    metadata: {
      title: "Resume",
      description: "Suryo Hastomo's professional resume.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional experience building scalable backend systems.",
    metadata: {
      title: "Experience",
      description:
        "Suryo Hastomo's professional experience across healthcare, fintech, GIS, and IoT industries.",
    },
  },
};
