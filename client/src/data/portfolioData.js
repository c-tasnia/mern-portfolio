import { University } from "lucide-react";

export const profile = {
  name: "Tasnia Chowdhury",
  role: "Full-Stack Developer",
  tagline:
    "I build fast, reliable web applications from database to browser — TypeScript, MongoDB, Prisma, Express, React, Tailwind, and Node.js, end to end.",
  location: "Chattogram, Bangladesh",
  email: "ctasnia1812@gmail.com",
  //phone: "+880 1XXXXXXXXX",
  resumeFile: "/tcresume.pdf",
  profileImage: "/mypic.png", 
  social: {
    github: "https://github.com/c-tasnia",
    // linkedin: "https://linkedin.com/in/yourusername",
    // twitter: "https://twitter.com/yourusername",
  },
};

export const about = {
  summary: [
    "I'm a full-stack developer who works across the MERN stack designing schemas in MongoDB, building APIs in Express and Node, and shipping interfaces in React that people actually enjoy using.",
    "I care about clean architecture, readable code, and shipping things that hold up in production, not just in a demo. I like picking apart a problem until the simplest solution is obvious.",
  ],
  stack: {
    languages: ["Python", "JavaScript", "Java", "TypeScript", "C", "C#", "SQL"],
    frontend: ["React", "Redux Toolkit", "Tailwind CSS", "DaisyUI", "TypeScript", "Vite", "Axios", "JavaScript (ES6+)", "HTML", "CSS"],
    backend: ["Node.js", "Express.js", "TypeScript", "Prisma", "REST APIs", "JWT Auth", "Socket.io"],
    database: ["MongoDB", "Mongoose", "PostgreSQL", "Redis"],
    tools: ["Git & GitHub", "Docker", "Vercel", "Postman", "VS Code", "Figma"],
  },
};

export const experience = [
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2026 — Present",
    points: [
      "Delivered full MERN applications for small business clients, end to end.",
      "Handled deployment on Vercel/Render and basic DevOps for client projects.",
    ],
  },
  {
    role: "Freelance Graphics Designer",
    company: "Fiverr, Upwork",
    period: "2022 — Present",
    points: [
      "Designed logos, brand identities, and marketing materials for clients across various industries.",
      "Created social media posts, banners, flyers, brochures, and promotional graphics.",
      "Collaborated with clients to transform concepts into visually compelling designs.",
      "Used Adobe Photoshop, Illustrator, Canva, and Figma to create professional visual content.",
    ],
  },
];


export const education = [
  {
    university: "Premier University Chattogram",
    subject: "Bsc in CSE",
    period: "2023 — 2027",
  },
];


export const projects = [
  {
    slug: "happy-paws",
    title: "Happy Paws",
    description:
      "A full-stack platform connecting donors with street animals in need of medical care, food, and shelter across Bangladesh.",
    longDescription:
      "HappyPaws is a full-stack web application designed to support animal welfare in Bangladesh. The platform connects compassionate donors with street animals in need of medical care, food, and shelter. It provides a transparent and secure way for the public to donate, view rescued animals, and support an animal rescue network operating across Bangladesh.",
    techStack: ["MongoDB", "Express", "React", "Node.js", "SSLCommerz", "REST API"],
    tags: ["MongoDB", "Express", "React", "Node.js", "sslcommerz", "API"],
    github: "https://github.com/c-tasnia/happypaws2.0",
    live: "https://happypaws2-0-1sen.vercel.app/",
    image: "/happypaws12.png",
    challenges:
      "TODO: e.g. integrating SSLCommerz payment gateway securely, handling real-time donation tracking, verifying rescue reports from the public.",
    improvements:
      "TODO: e.g. add an admin dashboard for shelters, push notifications for urgent rescue cases, a mobile app version.",
  },

  {
    slug: "task-management-dashboard",
    title: "Task Management Dashboard",
    description:
      "Kanban-style task manager with drag-and-drop boards, team workspaces, and role-based access control.",
    longDescription:
      "Kanban-style task manager with drag-and-drop boards, team workspaces, and role-based access control.",
    techStack: ["React", "Node.js", "Vite", "Tailwind CSS", "Express"],
    tags: ["React", "Node.js", "Vite", "Tailwind", "Express"],
    github: "https://github.com/c-tasnia/taskflow",
    live: "https://taskflow-rho-eight-29.vercel.app/",
    image: "/taskflow12.png",
    challenges:
      "TODO: e.g. implementing smooth drag-and-drop across boards, managing role-based permissions cleanly, real-time sync between team members.",
    improvements:
      "TODO: e.g. add real-time collaboration with websockets, activity/audit logs, calendar view integration.",
  },

  {
    slug: "real-time-budget-tracker",
    title: "Real-Time Budget Tracker",
    description:
      "Client-side budget tracking app with localStorage-based persistence, recurring transaction scheduling, and CSV export.",
    longDescription:
      "Client-side budget tracking app with localStorage-based persistence, recurring transaction scheduling, and CSV export for offline financial logging.",
    techStack: ["HTML", "CSS", "JavaScript"],
    tags: ["html", "css", "js"],
    // github: "https://github.com/yourusername/chat-app",
    live: "https://budget-tracker-iota-green.vercel.app/",
    image: "/ledger.png",
    challenges:
      "TODO: e.g. designing recurring transaction logic without a backend, keeping localStorage data structured and reliable, generating accurate CSV exports.",
    improvements:
      "TODO: e.g. add a backend with account sync, data visualization/charts for spending trends, multi-currency support.",
  },

  {
    slug: "world-cup-2026-tracker",
    title: "World Cup 2026 Tracker",
    description:
      "Live scoreboard dashboard with real-time group standings, fixtures, top scorers, and an interactive knockout bracket.",
    longDescription:
      "Live scoreboard dashboard for the tournament with real-time group standings, fixtures, top scorers, and an interactive knockout bracket.",
    techStack: ["JavaScript", "HTML5", "CSS3", "REST API"],
    tags: ["JavaScript", "HTML5", "CSS3", "Data Visualization", "REST API", "Responsive Design"],
    // github: "https://github.com/yourusername/ecommerce-app",
    live: "https://wc2026-liard-sigma.vercel.app/",
    image: "/wc2026.png",
    challenges:
      "TODO: e.g. consuming and normalizing live sports data from a REST API, keeping the knockout bracket state accurate as results come in, handling API rate limits.",
    improvements:
      "TODO: e.g. add push notifications for goal updates, historical stats comparison, dark/light theme toggle.",
  },
];