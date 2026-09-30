/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: false, // 开场动画目前是模板作者的 "AH"，先关掉；换成自己的动画后再改回 true
};

//SEO Related settings
const seo = {
  title: "Heng Jing Yu | Backend Developer",
  description:
    "Year 2 Computer Science student at University of Malaya, specializing in backend development, Java, and high-concurrency database systems.",
  og: {
    title: "Heng Jing Yu Portfolio",
    type: "website",
    url: "https://my-portfolio-jingyu3.vercel.app/",
  },
};

//Home Page
const greeting = {
  title: "Hi all, I'm Jing Yu",
  logo_name: "HengJingYu",
  nickname: "jingyu09",
  subTitle:
    "Year 2 Computer Science (Information Systems) student at the University of Malaya with a strong foundation in backend development, Java, and database systems. Experienced in building high-concurrency systems and managing project logistics. Quick learner, adaptable, and comfortable working in multilingual environments (Fluent in English, Chinese, and Malay; Conversational in French).",
  resumeLink: "", // TODO: 填入简历 PDF 的云端链接
  portfolio_repository: "https://github.com/jingyu09/my-portfolio",
  githubProfile: "https://github.com/jingyu09",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/jingyu09",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/heng-jing-yu-212015392",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:jingyu20958@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

//Skills Page
const skills = {
  data: [
    {
      title: "Backend & Systems Architecture",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing RESTful APIs and backend services using Java and Spring Boot",
        "⚡ Architecting high-concurrency systems using Redis, RabbitMQ, and MySQL",
        "⚡ Optimizing databases and integrating middleware for distributed systems",
        "⚡ Handling load testing and performance impact validation using Apache JMeter",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:openjdk",
          style: { color: "#ED8B00" },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: { color: "#6DB33F" },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: { color: "#DC382D" },
        },
        {
          skillName: "RabbitMQ",
          fontAwesomeClassname: "simple-icons:rabbitmq",
          style: { color: "#FF6600" },
        },
        {
          skillName: "Apache JMeter",
          fontAwesomeClassname: "simple-icons:apachejmeter",
          style: { color: "#D22128" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#1488C6" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { backgroundColor: "#000000", color: "#F7DF1E" },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "University of Malaya",
      subtitle: "Bachelor of Computer Science (Information System)",
      logo_path: "UM_logo.webp",
      alt_name: "University of Malaya",
      duration: "Oct 2025 - Mar 2029",
      descriptions: [
        "⚡ CGPA: 3.90",
        "⚡ Core courses: OOP, Data Structures, Distributed Systems.",
        "⚡ Specializing in high-concurrency architecture and backend development.",
      ],
      website_link: "https://www.um.edu.my/",
    },
    {
      title: "Johor Matriculation College",
      subtitle: "Computer Science Program",
      logo_path: "KMJ_logo.png",
      alt_name: "Johor Matriculation College",
      duration: "2024 - 2025",
      descriptions: ["⚡ CGPA: 4.00"],
      website_link: "https://kmj.matrik.edu.my/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Leadership and Volunteership",
  description:
    "I enjoy organising events and managing project logistics, turning tight budgets and deadlines into smooth execution.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Leadership",
      work: true,
      experiences: [
        {
          title: "HOD of Logistics",
          company: "Mental Health Week 2025",
          company_url: "https://www.um.edu.my/",
          logo_path: "PEKOM_logo.jpeg",
          duration: "Oct 2025 - Dec 2025",
          location: "Kuala Lumpur, Malaysia",
          description:
            "Directed a logistics committee to execute end-to-end campus event operations for 178 attendees. Managed a strict RM3,000 budget by strategically procuring 85 essential items, developed an inventory tracking and financial budgeting system using Google Sheets, and streamlined material distribution with zero delivery delays.",
          color: "#1F70C1",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Some of my backend and systems projects, focused on high-concurrency architecture and database optimization.",
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
  blogSection: {
    title: "GitHub",
    subtitle: "Check out my projects and code on GitHub.",
    link: "https://github.com/jingyu09",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "University of Malaya, Kuala Lumpur, Malaysia",
    locality: "Kuala Lumpur",
    country: "Malaysia",
    region: "Kuala Lumpur",
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
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
