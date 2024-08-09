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
  docker,
  nestjs,
  carrent,
  jobit,
  tripguide,
  threejs,
  seFactoryIcon,
  whiteStorkIcon,
  postgresql,
  hiLink,
  nikeApp,
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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Front-End Developer",
    icon: mobile,
  },
  {
    title: "Back-End Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
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
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Nest JS",
    icon: nestjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "docker",
    icon: docker,
  },
];
const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "White Stork",
    icon: whiteStorkIcon, // Assuming you have an icon for White Stork
    iconBg: "#383E56",
    date: "June 2023 - February 2024",
    points: [
      "Contributed as a full-stack developer in a collaborative team, utilizing VueJs, NestJs, and NocoDB.",
      "Achieved a 60% increase in the speed of software development process by understanding and customizing NocoDB's open-source code to align with business requirements.",
      "Collaborated with a team on an existing project to add new features and functionalities following domain-driven design principles based on customer requirements.",
      "Enhanced old code characterized by advanced and complex SQL queries into NestJs, adhering to clean code principles.",
      "Optimized database schema within a three-week timeframe, resulting in a notable reduction in reported client bugs, reducing query execution time by 40%, and enhancing application performance.",
      "Skilled in Docker for streamlining the deployment process and facilitating seamless collaboration among development teams.",
    ],
  },
  {
    title: "FSW Bootcamp - Internship",
    company_name: "SE Factory",
    icon: seFactoryIcon, // Assuming you have an icon for SE Factory
    iconBg: "#E6DEDD",
    date: "August 2022 - December 2022",
    points: [
      "Intensive full stack web development program covering cloud architecture, front and back-end development, source control, and web application security over 14 weeks of lectures, workshops and projects.",
      "Developed a home automation web application utilizing IoT technology to remotely control internet-connected electronic devices at home, with ReactJs for the frontend and Laravel for the backend.",
    ],
  },
  {
    title: "Foundations of Computer Science Program",
    company_name: "SE Factory",
    icon: seFactoryIcon, // Assuming you have an icon for SE Factory
    iconBg: "#383E56",
    date: "July 2022 - August 2022",
    points: [
      "Intensive foundation of computer science program covering foundational concepts of Computer Science using Python, complexity analysis, data structures, algorithms over 4 weeks of lectures.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Hi Link",
    description:
      "A landing page for the Nike app, built using ReactJS and TailwindCSS. It Showcase my skills in creating user interfaces and ensuring responsiveness across various devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hiLink,
    source_code_link: "https://github.com/HawraaYounes/hi-link",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
