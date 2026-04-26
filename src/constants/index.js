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
    title: 'Websites & Landing Pages',
    description: 'Dein Webauftritt — professionell, modern und mobilfreundlich. Vom einfachen One-Pager bis zur kompletten Business-Website mit CMS, SEO-Optimierung und Analytics.',
    features: ['One-Pager / Landing Pages', 'Business Websites', 'Portfolio-Seiten', 'E-Commerce / Shops', 'SEO & Analytics'],
    price: 'Ab CHF 500',
    cta: { text: 'Anfrage senden', link: '#contact?service=Websites%20%26%20Landing%20Pages' },
  },
  {
    title: 'Web-Applikationen & APIs',
    description: 'Massgeschneiderte Applikationen für dein Business. Von einfachen Tools und Dashboards bis hin zu komplexen Plattformen mit Datenbanken, User-Management und API-Integrationen.',
    features: ['Custom Web Apps', 'REST & GraphQL APIs', 'Dashboards & Admin-Panels', 'Datenbank-Design', 'Third-Party Integrationen', 'Automatisierungen'],
    price: 'Ab CHF 2\'000',
    cta: { text: 'Projekt anfragen', link: '#contact?service=Web-Applikationen%20%26%20APIs' },
  },
  {
    title: 'Mobile & Desktop Apps',
    description: 'Kleinere bis mittlere Applikationen für iOS, Android oder Desktop. Cross-Platform mit React Native oder Electron — ein Codebase, alle Plattformen.',
    features: ['iOS & Android Apps', 'Desktop-Applikationen', 'Cross-Platform', 'App Store Deployment', 'Push Notifications'],
    price: 'Ab CHF 3\'000',
    cta: { text: 'Projekt anfragen', link: '#contact?service=Mobile%20%26%20Desktop%20Apps' },
  },
  {
    title: 'IT-Support & Technik-Hilfe',
    description: 'Probleme mit Laptop, Handy oder anderen Geräten? Ich helfe vor Ort oder remote — unkompliziert und ohne Fachchinesisch. Egal ob Einrichtung, Reparatur oder einfach Fragen.',
    features: ['Laptop & PC Setup', 'Handy-Einrichtung & Transfer', 'WLAN & Netzwerk', 'Software-Installation', 'Datensicherung & Recovery', 'Smart Home Setup'],
    price: 'CHF 80/h (vor Ort Region GR) · CHF 50/h (remote)',
    cta: { text: 'Support anfragen', link: '#contact?service=IT-Support%20%26%20Technik-Hilfe' },
  },
  {
    title: 'Hosting & Wartung',
    description: 'Deine Website oder App läuft — aber wer kümmert sich darum? Ich übernehme Hosting, Updates, Backups und Monitoring. Damit du dich auf dein Business konzentrieren kannst.',
    features: ['Domain & Hosting Setup', 'SSL-Zertifikate', 'Regelmässige Backups', 'Security Updates', 'Uptime Monitoring', 'Performance-Optimierung'],
    price: 'Ab CHF 50/Monat',
    cta: { text: 'Anfrage senden', link: '#contact?service=Hosting%20%26%20Wartung' },
  },
  {
    title: 'Trading Community',
    description: 'Werde Teil von Alpin Signals — der Schweizer Trading-Community für ambitionierte Trader. Tägliche Marktanalysen, Live Sessions, Discord Voice-Calls und persönliches 1:1 Coaching.',
    features: ['Tägliche Session-Analysen', 'Live Trading Sessions', '1:1 Coaching', 'Discord & Telegram Community', 'Prop-Firm Beratung'],
    price: 'CHF 50/Monat · 7 Tage gratis testen',
    cta: { text: 'Zu Alpin Signals', link: 'https://alpinsignals.com' },
  },
];

export { services, technologies, experiences, projects, offerings };
