import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "siloam-hospital-system",
    companyName: "Siloam Hospitals - Hospital Management System",
    type: "Professional",
    category: ["Healthcare", "Backend", "Full Stack"],
    shortDescription:
      "Backend services for hospital operations serving 100,000+ users with secure payment integration and optimized RESTful APIs.",
    techStack: [
      "Node.js",
      ".NET Core",
      "TypeScript",
      "C#",
      "SQL",
      "Redis",
      "REST API",
    ],
    startDate: new Date("2024-09-01"),
    endDate: new Date("2026-05-01"),
    companyLogoImg: "https://minio.soerjoprod.fun/test/Gemini_Generated_Image_xibdlcxibdlcxibd.png",
    pagesInfoArr: [
      {
        title: "Hospital Management Dashboard",
        description:
          "Backend services powering hospital operations for 100,000+ users",
        imgArr: ["https://minio.soerjoprod.fun/test/Gemini_Generated_Image_xibdlcxibdlcxibd.png"],
      },
      {
        title: "Payment Gateway Integration",
        description:
          "Secure payment processing system for hospital transactions",
        imgArr: ["https://minio.soerjoprod.fun/test/Gemini_Generated_Image_xibdlcxibdlcxibd.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Developed backend services using Node.js and .NET to streamline hospital operations for over 100,000 users across multiple hospital branches.",
        "Owned the Unit & Integration Testing lifecycle, using debugging tools to ensure 99%+ system reliability in a healthcare-critical environment.",
        "Integrated secure payment gateways for efficient and safe transaction processing, handling sensitive patient financial data.",
      ],
      bullets: [
        "Developed backend services using Node.js and .NET for hospital operations serving 100,000+ users.",
        "Owned Unit & Integration Testing lifecycle, ensuring 99%+ system reliability.",
        "Integrated secure payment gateways for safe hospital transaction processing.",
        "Optimized RESTful APIs to improve data sharing across hospital systems.",
      ],
    },
  },
  {
    id: "tni-al-microservices",
    companyName: "TNI AL Microservices Platform (Datacakra)",
    type: "Professional",
    category: ["Backend", "IoT", "GIS"],
    shortDescription:
      "Scalable microservices backend using TypeScript and NestJS for the Indonesian Navy, with real-time IoT and GIS integration.",
    techStack: [
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "MQTT",
      "Socket.io",
      "Microservices",
    ],
    startDate: new Date("2023-10-01"),
    endDate: new Date("2024-09-01"),
    companyLogoImg: "https://minio.soerjoprod.fun/test/Gemini_Generated_Image_xibdlcxibdlcxibd.png",
    pagesInfoArr: [
      {
        title: "Microservices Architecture",
        description:
          "Scalable backend microservices architecture for naval operations",
        imgArr: ["https://minio.soerjoprod.fun/test/Gemini_Generated_Image_xibdlcxibdlcxibd.png"],
      },
      {
        title: "IoT Dashboard",
        description:
          "Real-time IoT data visualization using MQTT and Socket.IO",
        imgArr: ["https://minio.soerjoprod.fun/test/Gemini_Generated_Image_xibdlcxibdlcxibd.png"],
      },
      {
        title: "GIS Integration",
        description: "Geospatial services integration for BP Batam GIS Web App",
        imgArr: ["https://minio.soerjoprod.fun/test/Gemini_Generated_Image_xibdlcxibdlcxibd.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Built scalable microservices backend using TypeScript and NestJS for TNI AL (Indonesian Navy), handling critical operational data.",
        "Developed real-time IoT backend using MQTT and Socket.IO, enabling live device data streaming and monitoring.",
        "Integrated geospatial services for BP Batam GIS Web App, enabling map-based data visualization for regional planning.",
        "Automated data processing with batch jobs to significantly reduce manual workload and improve operational efficiency.",
      ],
      bullets: [
        "Built scalable microservices backend for TNI AL using TypeScript and NestJS.",
        "Developed real-time IoT backend using MQTT and Socket.IO.",
        "Integrated geospatial services for BP Batam GIS Web App.",
        "Automated data processing with batch jobs to reduce manual workload.",
      ],
    },
  },
  {
    id: "dhita-management-hris",
    companyName: "Dhita Management HRIS (Dewatic)",
    type: "Professional",
    category: ["Full Stack", "Backend", "Fintech"],
    shortDescription:
      "HRIS system for payroll & attendance management for 500+ employees, plus Anoa Crypto Wallet with blockchain integration.",
    techStack: ["Node.js", "ReactJS", "MySQL", "REST API"],
    startDate: new Date("2022-07-01"),
    endDate: new Date("2023-06-01"),
    companyLogoImg: "https://minio.soerjoprod.fun/test/Gemini_Generated_Image_xibdlcxibdlcxibd.png",
    pagesInfoArr: [
      {
        title: "HRIS Dashboard",
        description:
          "Payroll and attendance management system for 500+ employees",
        imgArr: ["https://minio.soerjoprod.fun/test/Gemini_Generated_Image_xibdlcxibdlcxibd.png"],
      },
      {
        title: "Anoa Crypto Wallet",
        description:
          "Crypto wallet backend with blockchain integration and real-time price scraping",
        imgArr: ["https://minio.soerjoprod.fun/test/Gemini_Generated_Image_xibdlcxibdlcxibd.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Built HRIS system (Dhita Management) for payroll & attendance management serving 500+ employees across the organization.",
        "Developed Anoa Crypto Wallet backend with blockchain integration, handling secure crypto transactions.",
        "Built a web game review platform with payments and real-time crypto price scraping capabilities.",
        "Automated data scraping & batch jobs, reducing manual work by 40% and improving data accuracy.",
      ],
      bullets: [
        "Built HRIS system for payroll & attendance managing 500+ employees.",
        "Developed Anoa Crypto Wallet backend with blockchain integration.",
        "Built web game review platform with payments and real-time crypto price scraping.",
        "Automated data scraping & batch jobs, reducing manual work by 40%.",
      ],
    },
  },
  {
    id: "budimind-backend",
    companyName: "BudiMind Agency Backend Services",
    type: "Professional",
    category: ["Backend", "Web Dev"],
    shortDescription:
      "Backend services using NestJS, Go, and MySQL with automated batch jobs for system updates and critical issue handling.",
    techStack: ["Go", "NestJS", "MySQL", "Redis", "REST API"],
    startDate: new Date("2023-06-01"),
    endDate: new Date("2023-11-01"),
    companyLogoImg: "https://minio.soerjoprod.fun/test/Gemini_Generated_Image_xibdlcxibdlcxibd.png",
    pagesInfoArr: [
      {
        title: "API Architecture",
        description:
          "Backend services built with NestJS and Go for digital agency projects",
        imgArr: ["https://minio.soerjoprod.fun/test/Gemini_Generated_Image_xibdlcxibdlcxibd.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Built backend services using NestJS, Go, and MySQL for various digital agency client projects.",
        "Automated system updates and handled critical production issues using batch jobs, ensuring high availability.",
        "Improved system reliability through proactive monitoring and rapid issue resolution.",
      ],
      bullets: [
        "Built backend services using NestJS, Go, and MySQL.",
        "Automated system updates and handled critical issues using batch jobs.",
        "Improved system reliability through proactive monitoring and issue resolution.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
