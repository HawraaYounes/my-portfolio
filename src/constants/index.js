import {
  mobile,
  backend,
  creator,
  web,
  tripguide,
  seFactoryIcon,
  whiteStorkIcon,
  hiLink,
  nikeApp,
  shippingApp,
  spotifyApp,
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
  threejs,
  postgresql,
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
    icon: whiteStorkIcon,
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
    icon: seFactoryIcon,
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
    icon: seFactoryIcon,
    iconBg: "#383E56",
    date: "July 2022 - August 2022",
    points: [
      "Intensive foundation of computer science program covering foundational concepts of Computer Science using Python, complexity analysis, data structures, algorithms over 4 weeks of lectures.",
    ],
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
    name: "Shipping App",
    description:
      "This project is a shipping application built using ReactJS for the frontend and NodeJS (ExpressJs) with Sequelize ORM for the backend. The main objective of this app is to provide an intuitive and responsive interface for managing shipments. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "tawilwind",
        color: "pink-text-gradient",
      },
    ],
    image: shippingApp,
    source_code_link: "https://github.com/HawraaYounes/shipping-app",
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
  {
    name: "Spotify Artist Search",
    description:
      "This ReactJS Spotify app lets users search artists, view album details, and explore discographies, highlighting my skills in dynamic, responsive UI and API integration.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "react-bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "SpotifyAPI",
        color: "pink-text-gradient",
      },
    ],
    image: spotifyApp,
    source_code_link: "https://github.com/HawraaYounes/SpotifySearcher",
  },
];

export { services, technologies, experiences, projects };
