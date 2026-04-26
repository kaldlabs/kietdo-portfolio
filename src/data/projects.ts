import { Project } from '../types/project';

// Export all projects
export const projects: Project[] = [
  {
    category: "Computer Vision",
    title: "Vietnamese License Plate & Vehicle Recognition",
    description: "An AI camera tracking real-time Vietnamese license plate detection, vehicle classification, and tracking using state-of-the-art deep learning models. The system achieves 98% accuracy in license plate recognition under various lighting and weather conditions.",
    image: "/lab-portfolio/images/mockup/aicamera.png",
    detailsImage: "/lab-portfolio/images/mockup/aicamera_details.gif",
    techStack: ["Python", "PyTorch", "YOLOv8", "OpenCV", "FastAPI", "PostgreSQL"],
    features: [
      "Achieved 98% accuracy in license plate detection and OCR for Vietnamese plates using custom pretrained YOLOv8 model.",
      "Analytics for multi-camera vehicle tracking, type classification",      
      "Deploy to ubuntu server with a full-featured dashboard for real-time monitoring, data visualization"
    ],
    timeline: {
      startDate: "2024-10",
      endDate: "2024-10"
    },
    role: "AI Research & Development Team",
    team: {
      size: "8 members",
      composition: "Led by senior computer science engineer with 10+ years of experience"
    }
  },

  
  {
    category: "Multimodal AI",
    title: "RAG-Based Video Retrieval Chatbot",
    description: "Intelligent video retrieval platform that enables users to search for specific scenes, actions, or dialogues within videos using natural language queries. The system leverages multimodal AI models for semantic understanding and context-based video indexing, delivering accurate and relevant search results.",
    image: "/lab-portfolio/images/mockup/rag_chatbot_mockup.png",
    detailsImage: "/lab-portfolio/images/mockup/rag_chatbot_details.png",
    techStack: ["Python", "PyTorch", "OpenAI CLIP", "FAISS", "FastAPI", "React", "Docker"],
    features: [
      "AI-driven video retrieval using multimodal (text–vision) embeddings for deep semantic understanding",
      "Automatic scene segmentation with object, action, and speech recognition for precise content indexing",
      "Natural language search enabling users to find moments, dialogues, or events intuitively",
      "Context-aware retrieval with related scene recommendations and scalable vector-based search engine"
    ],
    timeline: {
      startDate: "2025-07",
      endDate: "2025-07"
    },
    role: "AI & Full-Stack Development Team",
    team: {
      size: "4 members",
      composition: "Led by AI Master's with 10+ years experience, including 2 computer vision engineers, 2 full-stack developers, 1 DevOps engineer, and 1 UX designer"
    }
  },

  {
    category: "Computer Vision",
    title: "Traffic Violation Detection System",
    description: "Developed a AI system for automated traffic violation detection including red light running, wrong-way driving, illegal parking, and lane violations. Integrates seamlessly with existing traffic camera infrastructure.",
    image: "/lab-portfolio/images/mockup/traffic_violation_mockup.png",
    detailsImage: "/lab-portfolio/images/mockup/traffic_violation_details.gif",
    techStack: ["Python", "TensorFlow", "YOLOv8", "OpenCV", "MongoDB"],
    features: [
      "AI-powered detection of multiple traffic violations including red light running, speeding, and illegal parking",
      "Real-time vehicle tracking with trajectory prediction and behavioral analysis",
      "Automated evidence capture, license plate recognition, and violation documentation",
      "Instant alerting system integrated with existing traffic camera infrastructure",
      "Comprehensive analytics dashboard for reporting, insights, and historical pattern analysis"
    ],
    timeline: {
      startDate: "2025-08",
      endDate: "2025-08"
    },
    role: "AI Development Team",
    team: {
      size: "4 members",
      composition: "Led by an experienced engineer with over a decade in Computer Science"
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