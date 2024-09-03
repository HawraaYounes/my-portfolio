import {
  mobile,
  backend,
  creator,
  web,
  seFactoryIcon,
  whiteStorkIcon,
  lightBulb,
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
    title: "Professional Development",
    company_name: "",
    icon: lightBulb, 
    iconBg: "#383E56",
    date: "March 2024 – Present",
    points: [
      "Learned Redux and Redux Toolkit for advanced state management in React applications.",
      "Acquired proficiency in React Query for efficient data caching and synchronization.",
      "Mastered ReactJS, including hooks, custom hooks, form validation, React Context API, and API data fetching, applying these skills across multiple projects.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "White Stork",
    icon: whiteStorkIcon,
    iconBg: "#383E56",
    date: "June 2023 – February 2024",
    points: [
      "Collaborated within a team to customize NocoDB's open-source code, developing solutions that aligned with business rules, while utilizing VueJs, NestJs, and NocoDB.",
      "Participated with a team to enhance an existing project by adding new features and updating functionalities, applying domain-driven design principles in response to customer requirements.",
      "Refactored legacy code with complex raw SQL queries into NestJs and TypeScript, adhering to clean code principles.",
      "Optimized the database schema by adding indexing, fixing foreign keys, and using TypeORM relations, reducing query execution time by 40%, eliminating complex joins, and improving performance.",
    ],
  },
  {
    title: "FSW Bootcamp - Internship",
    company_name: "SE Factory",
    icon: seFactoryIcon,
    iconBg: "#E6DEDD",
    date: "August 2022 – December 2022",
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
    date: "July 2022 – August 2022",
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
