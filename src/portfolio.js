/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // 如果你觉得每次刷新网页时的开场动画太浪费时间，可以把这里改成 false
};

//SEO Related settings
const seo = {
  title: "Heng Jing Yu | Backend Developer",
  description:
    "Year 2 Computer Science student at University of Malaya, specializing in backend development, Java, and high-concurrency database systems.",
  og: {
    title: "Heng Jing Yu Portfolio",
    type: "website",
    url: "https://github.com/jingyu09", // TODO: 等之后 Vercel 部署成功了，再换成 Vercel 给你生成的网址
  },
};

//Home Page
const greeting = {
  username: "HENG JING YU",
  title: "Hi all, I'm Jing Yu",
  subTitle:
    "Year 2 Computer Science (Information Systems) student at the University of Malaya with a strong foundation in backend development, Java, and database systems. Experienced in building high-concurrency systems and managing project logistics. Quick learner, adaptable, and comfortable working in multilingual environments (Fluent in English, Chinese, and Malay; Conversational in French).",
  resumeLink: "YOUR_PDF_RESUME_LINK_HERE", // 请在此处填入简历PDF的云端链接
  displayGreeting: true,
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/jingyu09",
    fontAwesomeIcon: "fab fa-github",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/heng-jing-yu-212015392",
    fontAwesomeIcon: "fab fa-linkedin-in",
  },
  {
    name: "Gmail",
    link: "mailto:jingyu20958@gmail.com",
    fontAwesomeIcon: "fas fa-envelope",
  },
];

//Skills Page
const skillsSection = {
  title: "What I do",
  subTitle:
    "Backend Developer specializing in high-concurrency architecture and distributed systems.",
  data: [
    {
      title: "Backend & Systems Architecture",
      lottieAnimationFile: "build", // 模板自带的动画名
      skills: [
        "⚡ Developing RESTful APIs and backend services using Java and Spring Boot",
        "⚡ Architecting high-concurrency systems using Redis, RabbitMQ, and MySQL",
        "⚡ Optimizing databases and integrating middleware for distributed systems",
        "⚡ Handling load testing and performance impact validation using Apache JMeter",
      ],
      softwareSkills: [
        { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
        { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
        { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
        { skillName: "Database", fontAwesomeClassname: "fas fa-database" },
        { skillName: "Git", fontAwesomeClassname: "fab fa-git" },
      ],
    },
  ],
  display: true,
};

// Education Page
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Malaya",
      logo: require("./assets/images/UM_logo.webp"),
      subHeader: "Bachelor of Computer Science (Information System)",
      duration: "Oct 2025 - Mar 2029",
      desc: "CGPA: 3.90 | Core: OOP, Data Structures, Distributed Systems",
      descBullets: [
        "Specializing in high-concurrency architecture and backend development.",
      ],
    },
    {
      schoolName: "Johor Matriculation College",
      logo: require("./assets/images/KMJ_logo.png"),
      subHeader: "Computer Science Program",
      duration: "2024 - 2025",
      desc: "CGPA: 4.00",
    },
  ],
};

// Experience Page
const workExperiences = {
  display: true,
  experience: [
    {
      role: "HOD of Logistics",
      company: "Mental Health Week 2025",
      companylogo: require("./assets/images/PEKOM_logo.jpeg"),
      date: "Oct 2025 – Dec 2025",
      desc:
        "Directed a logistics committee to execute end-to-end campus event operations for 178 attendees.",
      descBullets: [
        "Managed a strict RM3,000 budget by strategically procuring 85 essential items.",
        "Developed an inventory tracking and financial budgeting system using Google Sheets.",
        "Streamlined material distribution, achieving zero delivery delays.",
      ],
    },
  ],
};

// Projects Page
const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME OF MY FEATURED ARCHITECTURAL WORK",
  projects: [
    {
      image: require("./assets/images/BlueprintSeckill.png"),
      projectName: "Blueprint Seckill",
      projectDesc:
        "Designed and engineered a 4-layer high-concurrency architecture (Rate Limiting ➔ Redis ➔ MQ ➔ MySQL) independently to handle massive traffic spikes.",
      footerLink: [
        {
          name: "View Project",
          url: "https://jingyu09.github.io/blueprint-seckill",
        },
      ],
      descBullets: [
        "Solved critical race conditions and overselling issues by implementing Redis + Lua scripting.",
        "Optimized system throughput by decoupling database writes via RabbitMQ.",
        "Validated a 0% error rate under high-stress JMeter load testing.",
      ],
    },
  ],
  display: true,
};

// Competitive programming sites
const competitiveSites = {
  competitiveSites: [],
};

// Certifications
const certifications = {
  certifications: [],
};

const achievementSection = {
  title: "",
  subtitle: "",
  achievementsCards: [],
  display: false,
};
const blogSection = {
  title: "",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false,
};
const talkSection = { title: "", subtitle: "", talks: [], display: false };
const podcastSection = { title: "", subtitle: "", podcast: [], display: false };
const openSource = {
  githubConvertedToken: "",
  githubUserName: "jingyu09",
  display: false,
};
const degrees = { degrees: [], display: false };
const skills = skillsSection; // 直接复用已有的技能内容
const contactInfo = {
  title: "Contact Me",
  subtitle: "",
  number: "+6011-5369-1109",
  email_address: "jingyu20958@gmail.com",
};
const experience = {
  title: "Experience",
  subtitle: "",
  description: "",
  header_image_path: "experience.svg",
  sections: [],
};

const projectsHeader = {
  title: "Projects",
  description: "Some of my backend and systems projects.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "jingyu.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Backend Architecture, Java Spring Boot, High-Concurrency Systems, and Database Optimization.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Kuala Lumpur, Selangor, Malaysia",
    locality: "Kuala Lumpur",
    country: "Malaysia",
    region: "Selangor",
    postalCode: "",
    streetAddress: "University of Malaya",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.google.com/?q=Kuala+Lumpur",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+6011-5369-1109",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  certifications,
  competitiveSites,
  workExperiences,
  bigProjects,
  contactPageData,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  openSource,
  degrees,
  skills,
  contactInfo,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
};
