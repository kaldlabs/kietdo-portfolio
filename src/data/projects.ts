import { Project } from '../types/project';

// Export all projects
export const projects: Project[] = [
  {
    category: "Computer Vision",
    title: "AI Vehicle & License Plate Recognition System",
    description: "Advanced AI system for real-time Vietnamese license plate detection, vehicle classification, and tracking using state-of-the-art deep learning models. The system achieves 98% accuracy in license plate recognition under various lighting and weather conditions.",
    image: "/lab-portfolio/images/mockup/aicamera.png",
    techStack: ["Python", "PyTorch", "YOLOv8", "OpenCV", "FastAPI", "Redis", "PostgreSQL"],
    features: [
      "Real-time license plate detection and OCR with 98% accuracy",
      "Multi-vehicle tracking across multiple camera streams",
      "Vehicle classification (cars, motorcycles, trucks, buses)",
      "Speed estimation and violation detection",
      "Cloud-based processing with edge computing support",
      "RESTful API for easy integration",
      "Comprehensive dashboard for monitoring and analytics"
    ],
    timeline: {
      startDate: "2024-10-01",
      endDate: "2024-10-31"
    },
    role: "AI Research & Development Team",
    team: {
      size: "8 members",
      composition: "Including AI Master's degree holder with 10+ years of experience, 3 senior ML engineers, 2 computer vision specialists, and 2 backend developers"
    }
  },

  {
    category: "Computer Vision",
    title: "Traffic Violation Detection System",
    description: "Intelligent AI system for automated traffic violation detection including red light running, wrong-way driving, illegal parking, and lane violations. Integrates seamlessly with existing traffic camera infrastructure.",
    image: "/lab-portfolio/images/mockup/traffic_violation_mockup.png",
    techStack: ["Python", "TensorFlow", "YOLOv8", "OpenCV", "MongoDB"],
    features: [
      "Multi-type violation detection (red light, wrong lane, speeding, illegal parking)",
      "Vehicle tracking and trajectory analysis",
      "Automatic evidence capture and documentation",
      "License plate extraction for violation records",
      "Real-time alert system for traffic management",
      "Integration with existing traffic camera networks",
      "Comprehensive reporting and analytics dashboard",
      "Historical data analysis and pattern recognition"
    ],
    timeline: {
      startDate: "2025-08-01",
      endDate: "2025-08-31"
    },
    role: "The team was led by an experienced engineer with over a decade in Computer Science and 10 members",

    },
  
  {
    category: "Natural Language Processing",
    title: "RAG-Based Intelligent Chatbot",
    description: "Advanced Retrieval-Augmented Generation (RAG) chatbot leveraging large language models and vector databases to provide accurate, context-aware responses. Designed for enterprise knowledge management and customer support automation.",
    image: "/lab-portfolio/images/mockup/rag_chatbot_mockup.png",
    techStack: ["Python", "LangChain", "OpenAI GPT-4", "Pinecone", "FastAPI", "React", "Docker"],
    features: [
      "Advanced RAG architecture with semantic search",
      "Multi-document processing and indexing",
      "Context-aware conversational AI",
      "Custom knowledge base integration",
      "Multi-language support (Vietnamese, English)",
      "Real-time response streaming",
      "Admin dashboard for content management",
      "Usage analytics and conversation logging"
    ],
    timeline: {
      startDate: "2025-07",
      endDate: "2025-07"
    },
    role: "NLP & Full-Stack Development Team",
    team: {
      size: "7 members",
      composition: "Led by AI Master's with 10+ years experience, including 2 NLP engineers, 2 full-stack developers, 1 DevOps engineer, and 1 UX designer"
    }
  },

  // {
  //   category: "Data Analytics",
  //   title: "Real-Time Traffic Analytics Dashboard",
  //   description: "Comprehensive analytics platform for processing and visualizing real-time traffic data from multiple sources. Provides insights for urban planning, traffic optimization, and incident management.",
  //   image: "/lab-portfolio/images/mockup/traffic_analytics_mockup.png",
  //   techStack: ["Python", "Apache Spark", "Kafka", "TimescaleDB", "Grafana", "React", "D3.js"],
  //   features: [
  //     "Real-time traffic flow analysis and visualization",
  //     "Predictive congestion modeling",
  //     "Incident detection and impact analysis",
  //     "Historical trend analysis and reporting",
  //     "Multi-source data integration (cameras, sensors, GPS)",
  //     "Customizable dashboards and alerts",
  //     "API for third-party integrations",
  //     "Export capabilities for reports and presentations"
  //   ],
  //   timeline: {
  //     startDate: "2024-12-01",
  //     endDate: "2025-01-31"
  //   },
  //   role: "Data Engineering & Analytics Team",
  //   team: {
  //     size: "6 members",
  //     composition: "Including 2 data engineers, 2 backend developers, 1 frontend developer, and 1 data analyst, supervised by AI Master's with 10+ years experience"
  //   }
  // }
];