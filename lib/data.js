export const profile = {
  name: "Viraj Raiyani",
  firstName: "Viraj",
  lastName: "Raiyani",
  roles: [
    "Full Stack Developer",
    "Senior Frontend Engineer",
    "MERN Stack Specialist",
    "React & Next.js Builder",
  ],
  tagline:
    "Software engineer with 3+ years building scalable web applications across the MERN stack. I obsess over performant interfaces, clean state, and shipping things that feel right.",
  location: "Ahmedabad, Gujarat",
  phone: "+91 7041649800",
  email: "virajraiyani162@gmail.com",
  resumeUrl: process.env.NEXT_PUBLIC_RESUME_URL || "public/viraj_resume.pdf",
  githubUsername: "VIRAJ116",
  // TODO: confirm exact usernames/URLs
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/VIRAJ116",
      handle: "@VIRAJ116",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/raiyaniviraj",
      handle: "/in/viraj-raiyani",
    },
    {
      label: "Email",
      href: "mailto:virajraiyani162@gmail.com",
      handle: "virajraiyani162@gmail.com",
    },
    { label: "Phone", href: "tel:+917041649800", handle: "+91 70416 49800" },
  ],
  stats: [
    { label: "Years engineering", value: "3+" },
    { label: "Production apps", value: "15+" },
    { label: "Companies shipped at", value: "3" },
    { label: "Languages spoken", value: "3" },
  ],
};

export const skills = {
  Frontend: [
    { name: "React.js", level: 95 },
    { name: "Next.js", level: 92 },
    { name: "JavaScript", level: 94 },
    { name: "Tailwind CSS", level: 95 },
    { name: "SCSS / CSS3", level: 88 },
  ],
  Backend: [
    { name: "Node.js", level: 90 },
    { name: "Express.js", level: 88 },
    { name: "MongoDB", level: 82 },
    { name: "Redis", level: 80 },
    { name: "Kafka", level: 75 },
    { name: "MySQL", level: 78 },
    { name: "Drizzle ORM", level: 80 },
    { name: "Sequelize ORM", level: 75 },
  ],
  "State & Data": [
    { name: "Redux Toolkit", level: 90 },
    { name: "React Query", level: 90 },
    { name: "Zustand", level: 92 },
    { name: "Axios", level: 92 },
    { name: "REST APIs", level: 94 },
    { name: "GraphQL", level: 72 },
  ],
  "Tools & Workflow": [
    { name: "Git", level: 90 },
    { name: "AWS EC2", level: 78 },
    { name: "D3.js", level: 75 },
    { name: "JWT / Auth + RBAC", level: 85 },
    { name: "Razorpay", level: 78 },
    { name: "Agile / Scrum", level: 88 },
    { name: "Responsive UI", level: 95 },
  ],
  "Generative AI": [
    { name: "LLM Integration", level: 85 },
    { name: "Prompt Engineering", level: 82 },
    { name: "RAG", level: 80 },
    { name: "SSE Streaming", level: 88 },
  ],
};

export const marqueeTech = [
  "React",
  "Next.js",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Redis",
  "Kafka",
  "MySQL",
  "Drizzle ORM",
  "Redux Toolkit",
  "React Query",
  "Zustand",
  "Tailwind CSS",
  "SCSS",
  "D3.js",
  "Axios",
  "Razorpay",
  "REST APIs",
  "AWS EC2",
  "LLM Integration",
  "SSE Streaming",
];

export const projects = [
  {
    title: "PieRush",
    subtitle: "Full-stack pizza ordering platform",
    description:
      "Production pizza ordering app with JWT cookie auth, role-based access control, Razorpay checkout, and a dynamic-pricing pizza customizer. Self-hosted on AWS EC2 (t3.micro free tier) — end-to-end ownership across schema, API, UI, payments, and deploy.",
    tech: [
      "React 19",
      "Node.js",
      "Express",
      "MySQL",
      "Drizzle ORM",
      "Razorpay",
      "AWS EC2",
      "Gemini AI",
      "SSE Streaming",
    ],
    image: "/projects/pierush.png",
    github: "https://github.com/VIRAJ116/mern",
    live: "https://www.pierush.xyz/",
    featured: true,
    accent: "from-amber-400 to-red-500",
  },
  {
    title: "NetAI Network Manager",
    subtitle: "Interactive device topology for network ops",
    description:
      "A network management application for NetAI Inc. with interactive D3.js device-topology visualizations, REST APIs orchestrated via React Query, scalable state in Zustand, and a fully responsive Tailwind UI.",
    tech: ["Next.js", "D3.js", "React Query", "Zustand", "Tailwind", "REST"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    github: "",
    live: "",
    featured: false,
    accent: "from-cyan-400 to-blue-500",
  },
  {
    title: "Streaming AI Chatbot",
    subtitle: "Real-time conversational UI for NetAI",
    description:
      "An AI-powered assistant consuming server-sent chunk-by-chunk streams. Rendered responses token-by-token for a smooth, low-latency conversational UX that feels native.",
    tech: ["Next.js", "Server-Sent Events", "Zustand", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
    github: "",
    live: "",
    featured: false,
    accent: "from-violet-500 to-fuchsia-500",
  },
];

export const experience = [
  {
    role: "Senior Software Engineer",
    company: "NetAI Inc.",
    period: "Aug 2024 — Present",
    location: "Ahmedabad",
    description:
      "Built a network-management app with interactive device-topology visualizations in Next.js, D3.js, and ForeGraph. Engineered an AI chatbot with real-time SSE streaming for low-latency UX. Architected scalable state with Zustand and integrated REST APIs via Axios + React Query. On the backend, built REST services on Node.js, Express, and MongoDB with Mongoose, and owned the real-time alerting pipeline — socket-based alerts fanned out to multiple downstream services over Kafka, with Redis pub/sub backing cross-instance socket delivery and low-latency alert state.",
    tags: [
      "Next.js",
      "D3.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Kafka",
      "Redis",
      "Zustand",
      "React Query",
    ],
  },
  // MKS Digitech role — temporarily hidden (NetAI now spans this period).
  // {
  //   role: "Software Engineer",
  //   company: "MKS Digitech",
  //   period: "Aug 2024 — Dec 2024",
  //   location: "Ahmedabad",
  //   description:
  //     "Developed dynamic React.js interfaces with Redux Toolkit for centralized state. Designed and shipped RESTful CRUD APIs on Node.js, Express.js, and Sequelize ORM. Integrated third-party APIs to streamline data flow across the product.",
  //   tags: ["React", "Redux Toolkit", "Node.js", "Express", "Sequelize"],
  // },
  {
    role: "Software Engineer",
    company: "Brainvire Infotech",
    period: "Jan 2023 — Aug 2024",
    location: "Ahmedabad",
    description:
      "Built feature-rich UIs across React.js, Tailwind CSS, and SCSS for multiple client products, meeting accessibility and design standards. Integrated REST + GraphQL APIs via Axios and Redux Toolkit. Delivered in an Agile sprint cadence.",
    tags: ["React", "GraphQL", "Tailwind", "Redux Toolkit", "Agile"],
  },
  {
    role: "B.E. Computer Science & Engineering",
    company: "Parul University",
    period: "2019 — 2023",
    location: "Vadodara",
    description:
      "Graduated with an 8.2 GPA. Built foundations across data structures, databases, and web — capped off with a Java DSA mentorship under Shradha Khapra (Apna College).",
    tags: ["CS Fundamentals", "Databases", "DSA"],
  },
];

// TODO: replace placeholders with real quotes once collected
export const testimonials = [
  {
    quote:
      "Viraj ships fast and clean. He owns problems end-to-end and our roadmap moved a quarter ahead after he joined.",
    name: "Engineering Lead",
    title: "NetAI Inc.",
    avatar: "NA",
  },
  {
    quote:
      "Reliable, thoughtful, and a clear communicator. The kind of frontend engineer you want on every project.",
    name: "Product Manager",
    title: "MKS Digitech",
    avatar: "MK",
  },
  {
    quote:
      "He picks up new stacks remarkably fast and treats UI quality as a first-class concern. Rare combination.",
    name: "Tech Lead",
    title: "Brainvire Infotech",
    avatar: "BI",
  },
];

export const achievements = [
  { label: "Years engineering", value: "3+" },
  { label: "Production projects", value: "15+" },
  { label: "Companies shipped at", value: "3" },
  { label: "Academic GPA", value: "8.2" },
];
