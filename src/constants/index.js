import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  pinpuntodicon,
  simplevia,
  cyber,
  webvengers,
  pinpuntod,
  vanitydept,
  threejs,
  lit,
  tps,
  ticap17,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  {
    title: "Mobile App Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Project Manager",
    company_name: "iTECHs",
    icon: pinpuntodicon,
    iconBg: "#383E56",
    date: "November 2023 - December 2024",
    points: [
      "Overseeing the development and maintenance of web and mobile applications while ensuring alignment with client needs.",
      "Collaborating with cross-functional teams including the designer, product manager, and other developers to create high-quality product.",
      "Guiding the implementation of responsive design and ensuring cross-browser compatibility to enhance user experience.",
      "Code reviews and providing constructive feedback, while also managing client communications and requirements during the design scrum.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Simplevia Technologies Inc.",
    icon: simplevia,
    iconBg: "#E6DEDD",
    date: "Dec 2024 - Mar 2025",
    points: [
      "Developing and maintaining web applications using Laravel and Vue.js, ensuring an optimal user experience.",
      "Collaborating with cross-functional teams, including designers and product managers, to create high-quality, intuitive products.",
      "Implementing responsive design principles to ensure seamless performance across various devices and browsers.",
      "Participating in code reviews and offering constructive feedback to team members while actively contributing to the development process.",
    ],
  },
  {
    title: "Junior Software Engineer",
    company_name: "Cybersoft Content Services, Inc.",
    icon: cyber,
    iconBg: "#383E56",
    date: "May 2025 - Aug 2025",
    points: [
      "Assisting in the development and maintenance of web applications using Ruby on Rails and Tailwind CSS, focusing on responsive and visually appealing designs.",
      "Collaborating with cross-functional teams to understand project requirements and contribute to the delivery of high-quality software solutions.",
      "Implementing responsive design features to enhance user experience across different devices and ensure cross-browser compatibility.",
      "Engaging in code reviews, providing constructive feedback, and participating in knowledge-sharing sessions to improve team performance and product quality.",
    ],
  },
];

const achievements = [
  {
    achievement:
      "Recognized for maintaining high academic performance throughout the program.",
    name: "Student Recognitions",
    event: "Tams",
    school: "Far Eastern University",
    //image: "/src/assets/tps.jpg",
    image: tps,
  },
  {
    achievement:
      "Awarded for the Best Capstone Project and Best Website, highlighting effective solutions and engaging web designs.",
    name: "Awards Night",
    event: "TiCap 17",
    school: "FEU",
    //image: "/src/assets/ticap17.jpg",
    image: ticap17,
  },
  {
    achievement:
      "Best Director for Animated Short Film - Honored as Best Director for short film literature.",
    name: "Awarding Ceremony",
    event: "21st Literature Festival",
    school: "St. Clare College of Caloocan",
    //image: "/src/assets/LIT.png",
    image: lit,
  },
];

const projects = [
  {
    name: "Pin Puntod",
    description:
      "This project features a web and mobile grave locator specifically for Heroes' Cemetery (Libingan ng mga Bayani - LNMB PH), utilizing GPS and Google Maps. Designed to be user-friendly, it helps users easily find and navigate to gravesites. The tool provides a comprehensive database, making it an invaluable resource for personal visits and genealogical research.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "kotlin",
        color: "pink-text-gradient",
      },
    ],
    image: pinpuntod,
    images: [pinpuntod],
    source_code_link: "https://github.com/",

    videos: [
      {
        url: "https://drive.google.com/file/d/1U6ZqdO5JsRl-xZMsrn7te8HB_UhLwTxM/view",
        embedUrl: "https://drive.google.com/file/d/1U6ZqdO5JsRl-xZMsrn7te8HB_UhLwTxM/preview"
      }
    ]
  },
  {
    name: "Vanity Dept.",
    description:
      "Vanity Dept. is an eCommerce website that specializes in trendy clothing accessories, including jewelry and stylish bags. With a user-friendly design and secure payment options, it empowers customers to easily find and express their unique style through high-quality products.",
    tags: [
      {
        name: "eCommerce management",
        color: "blue-text-gradient",
      },
      {
        name: "API Integration",
        color: "green-text-gradient",
      },
      {
        name: "Payment Gateways",
        color: "pink-text-gradient",
      },
    ],
    image: vanitydept,
    images: [vanitydept],
    source_code_link: "https://github.com/",
  },
  {
    name: "WEBVengers",
    description:
      "A web-based platform offering outsourced software development services through a dedicated team of skilled professionals. We provide tailored solutions that empower businesses to thrive in a competitive market. Committed to excellence, we leverage the latest technologies to deliver innovative and scalable software solutions that drive client success.",
      tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: webvengers,
    images: [webvengers],
    source_code_link: "https://www.linkedin.com/in/aldrinjohndeguzman/details/projects/1754119282295/single-media-viewer/?profileId=ACoAADM-k5QBSgwa64zWAf2mFAQJepkA7jyCxkE",
  },
];

export { services, technologies, experiences, achievements, projects };
