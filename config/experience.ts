import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "siloam-hospitals",
    position: "Full Stack Engineer",
    company: "Siloam Hospitals Group",
    location: "Remote / Hybrid, Indonesia",
    startDate: new Date("2024-09-01"),
    endDate: "Present",
    description: [
      "Developed backend services using Node.js and .NET to streamline hospital operations for over 100,000 users.",
      "Owned Unit & Integration Testing lifecycle and used debugging tools to ensure 99%+ system reliability.",
      "Integrated secure payment gateways for efficient and safe transaction processing.",
      "Optimized RESTful APIs to improve data sharing across hospital systems.",
    ],
    achievements: [
      "Developed backend services using Node.js and .NET for hospital operations serving 100,000+ users.",
      "Owned Unit & Integration Testing lifecycle, achieving 99%+ system reliability.",
      "Integrated secure payment gateways for safe and efficient hospital transaction processing.",
      "Optimized RESTful APIs to improve data sharing across hospital systems.",
    ],
    skills: [
      "Node.js",
      ".NET Core",
      "TypeScript",
      "C#",
      "SQL",
      "Redis",
      "REST API",
      "Unit Testing",
      "Integration Testing",
      "Git",
    ],
    companyUrl: "https://www.siloamhospitals.com",
    logo: "/experience/siloam-logo.png",
  },
  {
    id: "datacakra",
    position: "Backend Developer",
    company: "Datacakra",
    location: "Indonesia",
    startDate: new Date("2023-10-01"),
    endDate: new Date("2024-09-01"),
    description: [
      "Built scalable microservices backend using TypeScript and NestJS for TNI AL (Indonesian Navy).",
      "Developed real-time IoT backend using MQTT and Socket.IO.",
      "Integrated geospatial services for BP Batam GIS Web App.",
      "Automated data processing with batch jobs to reduce manual workload.",
    ],
    achievements: [
      "Built scalable microservices backend using TypeScript and NestJS for TNI AL (Indonesian Navy).",
      "Developed real-time IoT backend using MQTT and Socket.IO for live device data streaming.",
      "Integrated geospatial services for BP Batam GIS Web App, enabling map-based data visualization.",
      "Automated data processing with batch jobs, significantly reducing manual workload.",
    ],
    skills: [
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "MQTT",
      "Socket.io",
      "Microservices",
      "REST API",
      "Git",
    ],
    companyUrl: "https://datacakra.com",
    logo: "/experience/datacakra-logo.png",
  },
  {
    id: "budimind",
    position: "Backend Developer",
    company: "BudiMind Digital Agency",
    location: "Remote, Indonesia",
    startDate: new Date("2023-06-01"),
    endDate: new Date("2023-11-01"),
    description: [
      "Built backend services using NestJS, Go, and MySQL.",
      "Automated system updates and handled critical issues using batch jobs.",
    ],
    achievements: [
      "Built backend services using NestJS, Go, and MySQL for digital agency projects.",
      "Automated system updates and handled critical production issues using batch jobs.",
      "Improved system reliability through proactive monitoring and issue resolution.",
    ],
    skills: ["Go", "NestJS", "MySQL", "Redis", "REST API", "Git"],
    companyUrl: "https://budimind.com",
    logo: "/experience/budimind-logo.png",
  },
  {
    id: "dewatic",
    position: "Full Stack Engineer",
    company: "Dewatic",
    location: "Indonesia",
    startDate: new Date("2022-07-01"),
    endDate: new Date("2023-06-01"),
    description: [
      "Built HRIS system (Dhita Management) for payroll & attendance managing 500+ employees.",
      "Developed Anoa Crypto Wallet backend with blockchain integration.",
      "Built web game review platform with payments and real-time crypto price scraping.",
      "Automated data scraping & batch jobs, reducing manual work by 40%.",
    ],
    achievements: [
      "Built HRIS system (Dhita Management) for payroll & attendance managing 500+ employees.",
      "Developed Anoa Crypto Wallet backend with blockchain integration.",
      "Built web game review platform with payments and real-time crypto price scraping.",
      "Automated data scraping & batch jobs, reducing manual work by 40%.",
    ],
    skills: ["Node.js", "ReactJS", "MySQL", "REST API", "Git"],
    companyUrl: "https://dewatic.com",
    logo: "/experience/dewatic-logo.png",
  },
];
