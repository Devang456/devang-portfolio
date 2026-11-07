export const projects = [
  {
    id: "solar-management-system",
    title: "Solar Management System",
    subtitle: "Enterprise Solar Asset & IoT Energy Management Platform",
    tagline: "Real-time solar asset tracking, performance telemetry, and interactive monitoring dashboard.",
    description: "A comprehensive full-stack MERN application designed to monitor solar energy production, track inverter telemetry, manage installations, and visualize energy generation insights through an intuitive, dynamic dashboard.",
    longDescription: "Solar Management System (SolarOps) is an enterprise-grade solar asset management platform. As the primary full-stack developer on the backend and core dashboard components, I architected the server-side services from scratch using Node.js and MongoDB to manage real-time solar tracking data and engineered dynamic React-based monitoring interfaces for operational visibility.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "RESTful API", "JavaScript", "CSS3"],
    featured: true,
    liveUrl: "https://solar-management-system-liard.vercel.app",
    githubUrl: "https://github.com/Devang456/Solar_Management_System",
    statusBadge: "Live Production Project",
    overview: "A modern renewable energy management solution that tracks solar energy yields, inverter operations, and maintenance workflows in real-time.",
    problemSolved: "Traditional solar monitoring involves manual data logging and fragmented asset tracking. This platform unifies inverter telemetry, operational health, and performance analytics into a centralized web platform.",
    features: [
      "Architected complete backend services from scratch using Node.js and MongoDB to handle solar asset telemetry.",
      "Designed and integrated interactive React dashboard components for dynamic real-time asset tracking and monitoring.",
      "Implemented secure RESTful API endpoints with middleware validation and error handling.",
      "Structured optimized MongoDB database schemas for multi-asset telemetry and performance logging.",
      "Built responsive, accessible frontend views delivering seamless usability across desktop and mobile screens."
    ]
  },
  {
    id: "instant-talk",
    title: "InstantTalk",
    subtitle: "Real-Time One-to-One Communication & Messaging Application",
    tagline: "Instant real-time messaging with WebSockets, typing indicators, and token-based authentication.",
    description: "A full-stack real-time chat application built with the MERN stack and WebSockets for seamless one-to-one communication, presence tracking, and real-time messaging updates.",
    longDescription: "InstantTalk is a modern real-time messaging platform built using the MERN stack. It leverages WebSockets for bidirectional instant message exchange and WebRTC architecture for low-latency peer communication, supported by secure authentication mechanisms and real-time user status notifications.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "CSS3"],
    featured: false,
    liveUrl: null, // Currently not deployed per instructions
    githubUrl: "https://github.com/Devang456/InstantTalk",
    statusBadge: "GitHub Project • Active Codebase",
    deploymentNotice: "Codebase available on GitHub. Deployment link will be added upon live release.",
    overview: "A responsive, low-latency messaging platform built for direct one-to-one conversations with real-time feedback.",
    problemSolved: "Enables instant peer-to-peer communication with minimal server latency, reliable message delivery tracking, and authenticated private conversations.",
    features: [
      "Engineered real-time one-to-one messaging flow powered by WebSockets for bidirectional event streaming.",
      "Designed secure JWT-based user authentication and integrated Google authentication workflows.",
      "Implemented live presence status indicators (online/offline) and real-time typing indicators.",
      "Built message delivery and read receipt status tracking for transparent user communication.",
      "Developed an intuitive, responsive chat interface designed with clean modular React components."
    ]
  }
];
