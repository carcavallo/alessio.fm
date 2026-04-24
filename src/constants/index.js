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
  alpinsignals,
  urklang,
  alpinsignalsCompany,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'services',
    title: 'Services',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Site Reliability Engineer',
    icon: creator,
  },
  {
    title: 'Full-Stack Developer',
    icon: web,
  },
  {
    title: 'Daytrader',
    icon: mobile,
  },
  {
    title: 'Entrepreneur',
    icon: backend,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Co-Founder & Trader',
    company_name: 'Alpin Signals',
    icon: alpinsignalsCompany,
    iconBg: '#000000',
    date: 'April 2025 - Present',
    points: [
      'Aufbau einer Trading-Community mit Fokus auf US-Indizes (NQ/ES) und Gold.',
      'Entwicklung eines Telegram-Bots für automatisierte Session-Analysen und Marktdaten.',
      'Coaching und Mentoring von Tradern im ICT/SMC-Stil.',
      'Technische Infrastruktur: Cloudflare Pages, Node.js API, Stripe Integration.',
    ],
    company_link: 'https://alpinsignals.com',
  },
  {
    title: 'Site Reliability Engineer',
    company_name: 'Inventx AG',
    icon: inventx,
    iconBg: 'white',
    date: 'Februar 2024 - Present',
    points: [
      'Überwachung, Wartung und Migration von IT-Systemen und Infrastrukturen zur Sicherstellung der Hochverfügbarkeit.',
      'Automatisierung von Betriebsprozessen mit Ansible zur Effizienzsteigerung und Fehlerreduktion.',
      'Optimierung und Implementierung von Monitoring-Lösungen zur frühzeitigen Erkennung und Behebung von Systemproblemen.',
    ],
    company_link: 'https://inventx.ch',
  },
  {
    title: 'Informatikpionier',
    company_name: 'Schweizer Armee',
    icon: army,
    iconBg: 'red',
    date: 'Juli 2024 - November 2024',
    points: [
      'Absolvierung der Rekrutenschule als Informatikpionier.',
      'Erlernen von IT-spezifischen Fähigkeiten in einem militärischen Umfeld.',
      'Aufbau, Wartung und Sicherung von IT-Systemen unter strengen Anforderungen.',
    ],
    company_link: 'https://www.armee.ch/de',
  },
  {
    title: 'Software Engineer',
    company_name: 'pr24',
    icon: pr24,
    iconBg: 'black',
    date: 'November 2023 - February 2024',
    points: [
      'Einarbeitung und Betreuung von bestehenden Kundenprojekten.',
      'Durchführung von PHP-Migrationen und Optimierung von Backends.',
      'Betreuung von Lernenden als erster Ansprechpartner bei Softwareproblemen.',
      'Entwicklung der Flip-Flop-App für medizinische Anwendungen.',
    ],
    company_link: 'https://pr24.ch/',
  },
  {
    title: 'Software Engineer',
    company_name: 'Softwarehaus 08EINS AG',
    icon: starbucks,
    iconBg: '#fff',
    date: 'August 2019 - August 2023',
    points: [
      'Entwicklung und Wartung von WordPress-Plugins und PHP-basierten Webanwendungen.',
      'Durchführung von Website- und PHP-Migrationen sowie Anpassung und Verwaltung von DNS-Einträgen.',
      'Erstellung eines Raumverwaltungssystems mit Integration von Microsoft-Kalendern.',
      'Erstellung einer Sonos-App für zentralen Zugriff auf die Sonos-SoundBoxen.',
      'Betreuung der MINT-Academy als Lehrperson und Vermittlung von IT-Wissen an Schüler.',
      'Tiefgehende Arbeit mit Atlassian-Produkten wie Jira, Confluence und Bitbucket.',
    ],
    company_link: 'https://softwarehaus.net/',
  },
  {
    title: 'Praktikant Softwareentwicklung',
    company_name: 'Softwarehaus 08EINS AG',
    icon: starbucks,
    iconBg: '#fff',
    date: 'February 2019 - August 2019',
    points: [
      'Einstieg in die Softwareentwicklung.',
      'Unterstützung von Teams bei der Entwicklung und Pflege von bestehenden Webanwendungen.',
    ],
    company_link: 'https://softwarehaus.net/',
  },
];

const projects = [
  {
    name: 'Alpin Signals',
    description:
      'Trading-Community-Plattform mit automatisierten Marktanalysen, Telegram-Bot, Stripe-Payment und Member-Management.',
    tags: [
      {
        name: 'node.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'telegram-api',
        color: 'green-text-gradient',
      },
      {
        name: 'cloudflare',
        color: 'pink-text-gradient',
      },
    ],
    image: alpinsignals,
    source_code_link: 'https://alpinsignals.com',
  },
  {
    name: 'Urklang Kinesiologie',
    description:
      'Professionelle Website für eine Kinesiologie-Praxis. Modernes Design mit sanften Farben, responsive Layout und Kontaktformular.',
    tags: [
      {
        name: 'webdesign',
        color: 'blue-text-gradient',
      },
      {
        name: 'freelance',
        color: 'green-text-gradient',
      },
      {
        name: 'responsive',
        color: 'pink-text-gradient',
      },
    ],
    image: urklang,
    source_code_link: 'https://urklang-kinesiologie.ch',
  },
];

const offerings = [
  {
    title: 'Web Development',
    description: 'Professionelle Websites und Web-Applikationen. Von der Planung über das Design bis zur Umsetzung — responsive, modern und performant.',
    features: ['Landing Pages', 'Business Websites', 'Web Apps', 'E-Commerce'],
    cta: { text: 'Anfrage senden', link: '#contact' },
  },
  {
    title: 'Trading Community',
    description: 'Werde Teil von Alpin Signals — einer Community für ambitionierte Trader mit täglichen Marktanalysen, Live Sessions und 1:1 Coaching.',
    features: ['Tägliche Analysen', 'Live Sessions', '1:1 Coaching', 'Telegram Community'],
    cta: { text: 'Zu Alpin Signals', link: 'https://alpinsignals.com' },
  },
];

export { services, technologies, experiences, projects, offerings };
