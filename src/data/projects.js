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
    subtitle: "Real-Time Messaging, WebRTC Video Calling & Live Screen Monitoring Suite",
    tagline: "Instant real-time messaging, WebRTC P2P video calling, live screen broadcasting, and presence tracking.",
    description: "A full-stack real-time communication suite built with the MERN stack, Socket.io, and WebRTC for low-latency messaging, peer-to-peer audio/video calling, and live screen monitoring.",
    longDescription: "InstantTalk is an enterprise-grade real-time communication suite built using the MERN stack. It leverages Socket.io for low-latency bidirectional messaging and presence tracking, alongside WebRTC mesh architecture for encrypted peer-to-peer voice/video calls and live screen broadcasting. Complete with JWT authentication, OTP verification, and automated Playwright E2E testing.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "WebRTC", "Playwright", "CSS3"],
    featured: false,
    liveUrl: "https://instant-talk-six.vercel.app",
    githubUrl: "https://github.com/Devang456/InstantTalk",
    statusBadge: "Live Production Project",
    deploymentNotice: null,
    overview: "A modern, high-performance communication platform engineered for real-time messaging, WebRTC audio/video meetings, and encrypted screen broadcasting.",
    problemSolved: "Replaces fragmented communication tools with an integrated MERN + WebRTC suite featuring instant event emission, real-time presence indicators, encrypted media streams, and verified multi-device responsiveness.",
    features: [
      "Low-Latency Messaging & Presence: Instant bidirectional messaging powered by Socket.io with typing indicators, online/offline presence, and read receipts.",
      "WebRTC Video Calls & Live Screen Monitoring: Peer-to-peer voice/video calling and encrypted real-time browser screen broadcasting.",
      "Production Security & Persistence: JWT handshake authentication, OTP email verification, Google OAuth 2.0, and MongoDB message storage.",
      "Fully Responsive & E2E Tested: Automated Playwright test suite covering 17 viewports from 320px mobile to 4K desktop with zero layout overflow."
    ]
  }
];
