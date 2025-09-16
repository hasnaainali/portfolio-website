import { Globe, Database, PenTool, Smartphone, Code2, Video } from "lucide-react";

export const skills = [
  {
    category: "Frontend",
    color: "#4DB5FF",
    icon: Globe,
    skills: [
      {
        name: "HTML & CSS",
        level: 90,
        description:
          "Semantic HTML and modern CSS with Flexbox, Grid, animations, and responsive design.",
        experience: "2+ years",
        projects: ["Portfolio Website", "Landing Pages", "Blog Platform"],
      },
      {
        name: "JavaScript",
        level: 80,
        description:
          "ES6+, DOM manipulation, asynchronous programming, and modern patterns.",
        experience: "2+ years",
        projects: ["Blog Platform", "Real-time Chat App"],
      },
      {
        name: "React.js",
        level: 75,
        description:
          "Functional components, hooks, context API, and state management.",
        experience: "1.5+ years",
        projects: ["Portfolio Website", "Social Media Dashboard"],
      },
    ],
  },
  {
    category: "Backend",
    color: "#4DB5FF",
    icon: Database,
    skills: [
      {
        name: "Node.js",
        level: 70,
        description:
          "Server-side development, REST APIs, and database integration.",
        experience: "1.5+ years",
        projects: ["E-commerce App", "Blog Platform"],
      },
      {
        name: "MongoDB",
        level: 65,
        description:
          "NoSQL database design, aggregation pipelines, and data modeling.",
        experience: "1.5+ years",
        projects: ["E-commerce App", "Blog Platform"],
      },
      {
        name: "React Native",
        level: 70,
        description:
          "Cross-platform mobile app development with focus on performance and native features.",
        experience: "1+ year",
        projects: [
          "Face Disease Detection & Treatment Recommendation System",
        ],
      },
    ],
  },
];

export const services = [
  {
    title: "Web Development",
    description:
      "Building modern, responsive websites and web applications using the MERN stack.",
    icon: Code2,
  },
  {
    title: "UI/UX Design",
    description:
      "Creating clean, user-friendly, and engaging designs with focus on accessibility and usability.",
    icon: PenTool,
  },
  {
    title: "Mobile App Development",
    description:
      "Developing cross-platform mobile apps with React Native, delivering native-like performance.",
    icon: Smartphone,
  },
  {
    title: "API Development & Integration",
    description:
      "Designing REST APIs and integrating third-party services for seamless functionality.",
    icon: Database,
  },
  {
    title: "Video Editing",
    description:
      "Editing and producing high-quality videos with smooth transitions, effects, and storytelling techniques.",
    icon: Video,
  },
];

export const projects = [
  {
    title: "Quran Insights",
    description: "A web app to explore Quranic ayahs with reflection, meaning, and insights.",
    image: `${process.env.PUBLIC_URL}/images/Quran Insights.png`,
    githubUrl: "https://github.com/hasnaainali/quran-ayah-reflector",
    videoUrl: "https://drive.google.com/file/d/1pyByYTqJJTXC1UW711lg74QtaL-BYkpW/preview"
  },
  {
    title: "Hot or Cold",
    description: "A fun number guessing game with instant Hot and Cold feedback, built using HTML, CSS, and JavaScript.",
    image: `${process.env.PUBLIC_URL}/images/Hot or Cold.png`,
    githubUrl: "https://github.com/hasnaainali/Hot-OR-Cold-Game",
    videoUrl: "https://drive.google.com/file/d/1Wot6sz8d1aI9ttR5Uq3CRn89tIlV4PmQ/preview"
  },
  {
    title: "Mood Detector",
    description: "An interactive project that guesses your mood from color, food, and number choices with fun animations and emojis.",
    image: `${process.env.PUBLIC_URL}/images/Mood Detector.png`,
    githubUrl: "https://github.com/hasnaainali/Mood-Detector",
    videoUrl: "https://drive.google.com/file/d/139vrLyrZwDuN28GjWED7bNk8AXiClejD/preview"
  },
  {
    title: "TaskFlow Web Page",
    description: "Built a clean, modern, and responsive one-page website for a fictional task management app.",
    image: `${process.env.PUBLIC_URL}/images/TaskFlow.png`,
    githubUrl: "https://github.com/hasnaainali/Elevvo/tree/main/taskflow-app",
    videoUrl: "https://drive.google.com/file/d/1CaUNBVU8cPVLnjDfQ7PCdwppAqLsIwK5/preview"
  },
  {
    title: "My Blog",
    description: "Developed a fully responsive personal blog showcasing posts,  navigation, and a professional layout.",
    image: `${process.env.PUBLIC_URL}/images/My Blog.png`,
    githubUrl: "https://github.com/hasnaainali/Elevvo/tree/main/personal-blog",
    videoUrl: "https://drive.google.com/file/d/102oPCQc8kZFxghSS-CqSa1QhtuMxFyNH/preview"
  },
  {
    title: "Weather Dashboard",
    description: "Created a real-time weather dashboard with search, forecasts, and dynamic weather updates for multiple cities.",
    image: `${process.env.PUBLIC_URL}/images/Weather Dashboard.png`,
    githubUrl: "https://github.com/hasnaainali/Elevvo/tree/main/weather-dashboard",
    videoUrl: "https://drive.google.com/file/d/1X8Px2QccgggR3ubBcL6mfd7whjuO01F6/preview"
  }
];