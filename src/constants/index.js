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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  pr24,
  army,
  inventx,
  flipflopapp,
  djselect,
  sonos,
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
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "System Engineer",
    icon: creator,
  },
  {
    title: "Site Reliability Engineer",
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    title: "Site Reliability Engineer",
    company_name: "Inventx AG",
    icon: inventx,
    iconBg: "white",
    date: "Februar 2024 - Now",
    points: [
      "Überwachung, Wartung und Migration von IT-Systemen und Infrastrukturen zur Sicherstellung der Hochverfügbarkeit.",
      "Automatisierung von Betriebsprozessen mit Ansible zur Effizienzsteigerung und Fehlerreduktion.",
      "Optimierung und Implementierung von Monitoring-Lösungen zur frühzeitigen Erkennung und Behebung von Systemproblemen.",
    ],
    company_link: "https://inventx.ch",
  },
  {
    title: "Informatikpionier",
    company_name: "Schweizer Armee",
    icon: army,
    iconBg: "red",
    date: "July 2024 - November 2024",
    points: [
      "Absolvierung der Rekrutenschule als Informatikpionier.",
      "Erlernen von IT-spezifischen Fähigkeiten in einem militärischen Umfeld.",
      "Aufbau, Wartung und Sicherung von IT-Systemen unter strengen Anforderungen.",
    ],
    company_link: "https://www.armee.ch/de",
  },
  {
    title: "Software Engineer",
    company_name: "pr24",
    icon: pr24,
    iconBg: "black",
    date: "November 2023 - February 2024",
    points: [
      "Einarbeitung und Betreuung von bestehenden Kundenprojekten.",
      "Durchführung von PHP-Migrationen und Optimierung von Backends.",
      "Betreuung von Lernenden als erster Ansprechpartner bei Softwareproblemen.",
      "Entwicklung der Flip-Flop-App für medizinische Anwendungen.",
    ],
    company_link: "https://pr24.ch/",
  },
  {
    title: "Software Engineer",
    company_name: "Softwarehaus 08EINS AG",
    icon: starbucks,
    iconBg: "#fff",
    date: "August 2019 - August 2023",
    points: [
      "Entwicklung und Wartung von WordPress-Plugins und PHP-basierten Webanwendungen.",
      "Durchführung von Website- und PHP-Migrationen sowie Anpassung und Verwaltung von DNS-Einträgen.",
      "Erstellung eines Raumverwaltungssystems mit Integration von Microsoft-Kalendern.",
      "Erstellung einer Sonos-App für zentralen Zugriff auf die Sonos-SoundBoxen.",
      "Betreuung der MINT-Academy als Lehrperson und Vermittlung von IT-Wissen an Schüler.",
      "Tiefgehende Arbeit mit Atlassian-Produkten wie Jira, Confluence und Bitbucket.",
    ],
    company_link: "https://softwarehaus.net/",
  },
  {
    title: "Praktikant Softwareentwicklung",
    company_name: "Softwarehaus 08EINS AG",
    icon: starbucks,
    iconBg: "#fff",
    date: "February 2019 - August 2019",
    points: [
      "Einstieg in die Softwareentwicklung.",
      "Unterstützung von Teams bei der Entwicklung und Pflege von bestehenden Webanwendungen.",
    ],
    company_link: "https://softwarehaus.net/",
  },
];

const projects = [
  {
    name: "Sonosphere",
    description:
      "WebApp for remote controlling Sonos Box via Sonos API using Node.js backend and React frontend.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: sonos,
    source_code_link: "https://github.com/carcavallo/sonosphere",
  },
  {
    name: "Flip-Flop-App",
    description:
      "A WebApp to calculate FlipFlopScores for medical use, developed with PHP and React.",
    tags: [
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: flipflopapp,
    source_code_link: "https://github.com/carcavallo/webappwizard",
  },
  {
    name: "Event-Management-System",
    description:
      "A platform for managing events and applications for DJs, featuring React frontend and PHP backend.",
    tags: [
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: djselect,
    source_code_link: "https://github.com/carcavallo/djselect",
  },
];

export { services, technologies, experiences, projects };
