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
  reduxCart,
  spotifyApp,
  quizApp,
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
    name: "Redux Cart",
    description:
      "A simple cart application built using ReactJS and Redux with Redux Toolkit. This app demonstrates effective state management in React, focusing on the power of Redux for handling complex state interactions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
    ],
    image: reduxCart , 
    source_code_link: "https://github.com/HawraaYounes/redux-cart",
    live_demo_link: "https://redux-cart-red.vercel.app/",
  },
  {
    name: "Hi Link",
    description:
      "A fully responsive travel camping landing page built using React.js, Next.js 13, and Tailwind CSS. It features a modern, sleek UI/UX designed to offer an optimal browsing experience across various devices and screen sizes.",
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
    live_demo_link: "https://hi-link-seven.vercel.app/", 
  },
  {
    name: "Shipping App",
    description:
      "This project is a shipping application built using ReactJS for the frontend and NodeJS (ExpressJs) with Sequelize ORM for the backend. The main objective of this app is to provide an intuitive and responsive interface for managing shipments.",
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
    live_demo_link: "https://drive.google.com/file/d/1SijnA-ftL2o-Ane8hXO_7rDhcnvlN9xB/view?usp=sharing"
  },
  {
    name: "Nike",
    description:
      "A landing page for the Nike app, built using ReactJS and Tailwind CSS. It aims to showcase my skills in frontend development, particularly in creating dynamic user interfaces and ensuring responsiveness across various devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nikeApp,
    source_code_link: "https://github.com/HawraaYounes/nike-app",
    live_demo_link: "https://nike-app-ochre.vercel.app/"
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
    live_demo_link: "https://drive.google.com/file/d/1TR0JOXqnOQ4PbaDVFlv0Lt7zxaxD9zzG/view?usp=sharing"
  },
  {
    name: "React Quiz App",
    description:
      "A ReactJS quiz app that offers an interactive platform for solving multiple-choice questions and viewing results. It highlights my skills in frontend development, dynamic UI creation, and state management with React hooks.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: quizApp,
    source_code_link: "https://github.com/HawraaYounes/quiz-app",
    live_demo_link: "https://quiz-app-hawraa-younes-projects.vercel.app/"
  },
];


export { services, technologies, experiences, projects };
