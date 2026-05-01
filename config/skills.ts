import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "TypeScript",
    description:
      "Building type-safe, scalable backend services and full-stack applications with modern TypeScript.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "NestJS",
    description:
      "Designing modular, scalable microservices and RESTful APIs using NestJS framework.",
    rating: 5,
    icon: Icons.nestjs,
  },
  {
    name: "Node.js",
    description:
      "Developing high-performance server-side applications and real-time systems.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "Express",
    description:
      "Building lightweight, fast REST APIs and middleware pipelines with Express.js.",
    rating: 5,
    icon: Icons.express,
  },
  {
    name: ".NET Core",
    description:
      "Developing enterprise-grade backend services and APIs with C# and .NET Core.",
    rating: 5,
    icon: Icons.dotnet,
  },
  {
    name: "C#",
    description:
      "Writing robust, object-oriented backend logic and services with C#.",
    rating: 5,
    icon: Icons.csharp,
  },
  {
    name: "Java",
    description:
      "Building enterprise applications, data pipelines, and backend services with Java.",
    rating: 4,
    icon: Icons.java,
  },
  {
    name: "Java Spring",
    description:
      "Developing scalable enterprise applications and RESTful services with Spring Framework.",
    rating: 4,
    icon: Icons.spring,
  },
  {
    name: "Go",
    description:
      "Building high-performance, concurrent backend services and CLI tools with Go.",
    rating: 4,
    icon: Icons.go,
  },
  {
    name: "PostgreSQL",
    description:
      "Designing optimized relational database schemas and complex queries for production systems.",
    rating: 5,
    icon: Icons.postgresql,
  },
  {
    name: "MySQL",
    description:
      "Managing and optimizing relational databases for data-driven applications.",
    rating: 4,
    icon: Icons.mysql,
  },
  {
    name: "Redis",
    description:
      "Implementing caching, session management, and real-time data processing with Redis.",
    rating: 4,
    icon: Icons.redis,
  },
  {
    name: "SQL",
    description:
      "Writing optimized queries, stored procedures, and managing complex database operations.",
    rating: 5,
    icon: Icons.postgresql,
  },
  {
    name: "ReactJS",
    description:
      "Building interactive user interfaces and single-page applications with React.",
    rating: 4,
    icon: Icons.react,
  },
  {
    name: "Next.js",
    description:
      "Developing full-stack web applications with server-side rendering and API routes.",
    rating: 4,
    icon: Icons.nextjs,
  },
  {
    name: "AWS",
    description:
      "Deploying and managing cloud infrastructure on AWS including compute, storage, and networking.",
    rating: 4,
    icon: Icons.amazonaws,
  },
  {
    name: "Docker",
    description:
      "Containerizing applications and building reproducible deployment environments.",
    rating: 4,
    icon: Icons.docker,
  },
  {
    name: "Linux",
    description:
      "Server administration, shell scripting, and managing production Linux environments.",
    rating: 4,
    icon: Icons.linux,
  },
  {
    name: "MQTT",
    description:
      "Implementing lightweight IoT messaging protocols for real-time device communication.",
    rating: 4,
    icon: Icons.mqtt,
  },
  {
    name: "Socket.io",
    description:
      "Enabling real-time, bidirectional communication between clients and servers.",
    rating: 4,
    icon: Icons.socketio,
  },
  {
    name: "REST API",
    description:
      "Designing and consuming RESTful APIs with proper authentication, versioning, and documentation.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "Microservices",
    description:
      "Architecting distributed systems with service discovery, message queues, and API gateways.",
    rating: 5,
    icon: Icons.nestjs,
  },
  {
    name: "Git",
    description:
      "Version control, branching strategies, and collaborative development workflows.",
    rating: 5,
    icon: Icons.gitBranch,
  },
  {
    name: "Postman",
    description:
      "API testing, collection management, and automated testing workflows.",
    rating: 4,
    icon: Icons.postman,
  },
  {
    name: "Javascript",
    description:
      "Building interactive and dynamic web experiences with modern JavaScript.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "HTML 5",
    description:
      "Structuring web content with semantic HTML5 elements and accessibility best practices.",
    rating: 4,
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    description:
      "Styling responsive, modern web interfaces with CSS3 and preprocessor workflows.",
    rating: 4,
    icon: Icons.css3,
  },
  {
    name: "Tailwind CSS",
    description:
      "Building responsive, utility-first UI designs efficiently with Tailwind CSS.",
    rating: 4,
    icon: Icons.tailwindcss,
  },
  {
    name: "MongoDB",
    description:
      "Storing and retrieving data with flexible NoSQL document databases.",
    rating: 4,
    icon: Icons.mongodb,
  },
  {
    name: "GraphQL",
    description:
      "Designing flexible, efficient data query APIs with GraphQL schemas and resolvers.",
    rating: 3,
    icon: Icons.graphql,
  },
  {
    name: "Unit Testing",
    description:
      "Writing comprehensive unit tests to ensure code reliability and prevent regressions.",
    rating: 5,
    icon: Icons.postman,
  },
  {
    name: "Integration Testing",
    description:
      "Testing service interactions and API integrations end-to-end for system reliability.",
    rating: 5,
    icon: Icons.postman,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
