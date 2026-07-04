// Edit everything below with your own details.
// This is the only file most people need to touch to personalize the site.

export const profile = {
  name: "Tasnia Chowdhury",
  role: "Full-Stack Developer",
  tagline:
    "I build fast, reliable web applications from database to browser — TypeScript, MongoDB, Prisma, Express, React, Tailwind, and Node.js, end to end.",
  location: "Chattogram, Bangladesh",
  email: "ctasnia1812@gmail.com",
  //phone: "+880 1XXXXXXXXX",
  resumeFile: "/tcresume.pdf", // drop your resume PDF into client/public/resume.pdf
  profileImage: "/mypic.png", // drop your photo into client/public/profile.jpg
  social: {
    github: "https://github.com/c-tasnia",
    // linkedin: "https://linkedin.com/in/yourusername",
    // twitter: "https://twitter.com/yourusername",
  },
};

export const about = {
  summary: [
    "I'm a full-stack developer who works across the MERN stack — designing schemas in MongoDB, building APIs in Express and Node, and shipping interfaces in React that people actually enjoy using.",
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

export const projects = [
  {
    title: "Happy Paws",
    description:
      "HappyPaws is a full-stack web application designed to support animal welfare in Bangladesh. The platform connects compassionate donors with street animals in need of medical care, food, and shelter. It provides a transparent and secure way for the public to donate, view rescued animals, and support an animal rescue network operating across Bangladesh.",
    tags: ["MongoDB", "Express", "React", "Node.js", "sslcommerz", "API"],
    github: "https://github.com/c-tasnia/happypaws2.0",
    live: "https://happypaws2-0-1sen.vercel.app/",
    image: "/happypaws12.png",
  },

  {
    title: "Task Management Dashboard",
    description:
      "Kanban-style task manager with drag-and-drop boards, team workspaces, and role-based access control.",
    tags: ["React", "Node.js", "Vite", "Tailwind", "Express"],
    github: "https://github.com/c-tasnia/taskflow",
    live: "https://taskflow-rho-eight-29.vercel.app/",
    image: "/projects/task-manager.png",
  },

  {
    title: "Real-Time Budget Tracker",
    description:
      "Client-side budget tracking app with localStorage-based persistence, recurring transaction scheduling, and CSV export for offline financial logging.",
    tags: ["html", "css", "js"],
    // github: "https://github.com/yourusername/chat-app",
    live: "https://budget-tracker-iota-green.vercel.app/",
    image: "/projects/chat-app.png",
  },
  
  {
    title: "E-Commerce Platform",
    description:
      "Full MERN e-commerce app with product catalog, cart, Stripe checkout, and an admin dashboard for order management.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Stripe", "PostgreSQL"],
    github: "https://github.com/yourusername/ecommerce-app",
    live: "https://your-demo-link.vercel.app",
    
  },
];