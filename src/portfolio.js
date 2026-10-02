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
    url: "https://my-portfolio-umber-zeta-83.vercel.app",
  },
};

//Home Page
const greeting = {
  title: "Heng Jing Yu",
  logo_name: "HengJingYu",
  nickname: "jingyu09",
  roles: [
    "UM CS Student 💻",
    "Backend Engineer 🪄",
    "High-Concurrency Enthusiast 🎀",
  ],
  subTitle:
    "Year 2 Computer Science student at University of Malaya, building high-concurrency backend systems with Java, Spring Boot, Redis and RabbitMQ.",
  resumeLink: "",
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
      title: "Backend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Built the backend of a high-concurrency flash-sale system (Blueprint Seckill) using Java and Spring Boot",
        "⚡ Prevented overselling under concurrent requests using Redis + Lua scripting for atomic inventory deductions",
        "⚡ Decoupled database writes with RabbitMQ and kept data consistent using Snowflake IDs and MySQL unique indexes",
        "⚡ Validated the system with Apache JMeter load testing, reaching a 0% error rate with zero oversold items",
        "⚡ Developed a Vanilla JS frontend console for real-time order polling",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
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
      website_link: "https://www.kmj.matrik.edu.my/",
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
        {
          title: "7S Exco Kerohanian",
          company: "Kolej Matrikulasi Johor",
          company_url: "https://www.kmj.matrik.edu.my/",
          logo_path: "KMJ_logo.png",
          duration: "Jul 2024 - May 2025",
          location: "Tangkak, Johor",
          description:
            "Served as a member of the 7S Exco under the Student Representative Council (Jawatankuasa Perwakilan Pelajar) for the 2024/2025 session. Acted as a bridge between students and the Exco Kerohanian unit, coordinating meaningful and value-driven activities.",
          color: "#C8102E",
        },
        {
          title: "PAL Leader",
          company: "Kolej Matrikulasi Johor",
          company_url: "https://www.kmj.matrik.edu.my/",
          logo_path: "KMJ_logo.png",
          duration: "Jul 2024 - May 2025",
          location: "Tangkak, Johor",
          description:
            "Facilitated peer learning sessions to help students strengthen their understanding of core subjects.",
          color: "#C8102E",
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
    profile_image_path: "jingyu.jpg",
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
