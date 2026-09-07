/**
 * Every word on the site lives here. Edit copy in this file, not in the
 * components — the components only handle layout and motion.
 *
 * Source: Tanvi_Resume.pdf. Nothing here is invented; anything the resume
 * doesn't state (GitHub / LinkedIn URLs, live project links) is simply absent.
 */

export const site = {
  name: "Tanvi Dobariya",
  firstName: "Tanvi",
  email: "tanvidobaria@gmail.com",
  phone: "+91 92651 70031",
  phoneHref: "+919265170031",
  location: "Gujarat, India",
  availability: "Open to opportunities — Remote, worldwide",
};

// Only links that exist. Add GitHub / LinkedIn here once you send the URLs.
export const socials = [
  { label: "Email", href: `mailto:${site.email}` },
  { label: "Phone", href: `tel:${site.phoneHref}` },
];

export const nav = [
  { num: "01", label: "About", href: "#about" },
  { num: "02", label: "Experience", href: "#experience" },
  { num: "03", label: "Projects", href: "#work" },
  { num: "04", label: "Skills", href: "#skills" },
  { num: "05", label: "Education", href: "#education" },
  { num: "06", label: "Contact", href: "#contact" },
];

export const hero = {
  roles: ["Frontend Developer", "Software Development Engineer"],
  // The headline reads as one sentence with the name inside it.
  headlineLead: "Tanvi Dobariya builds",
  headlineAccent: "production interfaces",
  headlineTail: "that ship.",
  // Small mono column that sits to the left of the intro paragraph.
  // Mono column under the headline: stack, then phone. Line one is the
  // rotating job title, so it isn't repeated here.
  meta: ["React · Next.js · TypeScript", "+91 92651 70031"],
  intro:
    "4.6+ years across banking and enterprise platforms — building secure onboarding journeys with Aadhaar verification, biometric authentication and GST validation, and the reusable React components and Next.js interfaces that carry them into production.",
};

export const stats = [
  { value: 4.6, suffix: "+", label: "Years building for the web", decimals: 1 },
  { value: 4, suffix: "", label: "Production platforms delivered" },
  { value: 8.67, suffix: "", label: "CGPA, BCA Computer Science", decimals: 2 },
];

export const about = {
  eyebrow: "01 — About",
  title: "A frontend developer building for banking and enterprise.",
  paragraphs: [
    "I design and build scalable, high-performance web applications with React.js, Next.js and TypeScript. Most of that work has been production-grade platforms for banking and enterprise clients — secure onboarding workflows, Aadhaar and biometric verification, and GST validation.",
    "My day-to-day sits in REST API integration, component-driven architecture, responsive UI development and performance optimisation. I build reusable components and interfaces that stay maintainable long after the first release.",
    "I work in Agile teams, collaborate across functions, and mentor junior developers on React best practices — contributing to coding standards and solution design along the way.",
  ],
};

export type Job = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
};

export const experience: Job[] = [
  {
    role: "Software Development Engineer",
    company: "Venox Technologies",
    location: "Gujarat, India",
    period: "February 2022 — Present",
    points: [
      "Developed and maintained a Next.js-based banking onboarding platform for current account customers, supporting end-to-end digital account opening.",
      "Integrated Aadhaar verification, biometric authentication, GST validation and nominee management into secure customer onboarding workflows.",
      "Built reusable React components and responsive user interfaces, improving maintainability and overall user experience.",
      "Partnered with backend teams to integrate REST APIs and implement robust error handling across critical workflows.",
      "Led a 6-month client-facing project on mobile application testing, incorporating AI-assisted issue detection workflows.",
      "Participated in code reviews, bug fixes, feature development and production support to ensure release quality.",
      "Mentored junior developers on React best practices and contributed to coding standards and solution design discussions.",
    ],
  },
];

export type Project = {
  num: string;
  title: string;
  tagline: string;
  stack: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    num: "01",
    title: "Kotak Mahindra Bank",
    tagline: "Digital account onboarding for a leading banking platform.",
    stack: ["Next.js", "Tailwind CSS", "JavaScript", "Azure"],
    highlights: [
      "Built Current and Savings Account onboarding journeys, integrating Aadhaar verification, biometric authentication and GST validation.",
      "Implemented secure onboarding workflows including BCIF error handling, FSSAI integration, preferred number selection, and debit/credit card management.",
      "Collaborated with cross-functional teams to deliver scalable, user-friendly banking solutions on Azure.",
    ],
  },
  {
    num: "02",
    title: "Cosmolex",
    tagline: "A legal services management platform.",
    stack: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "ShadCN UI",
      "Microservices",
    ],
    highlights: [
      "Developed legal practice management modules covering calendar scheduling, case tracking and document management.",
      "Implemented microservices-based integrations and consumed REST APIs to support legal operations and workflow automation.",
      "Built reusable data tables, responsive UI components and validation mechanisms using Next.js and Tailwind CSS.",
    ],
  },
  {
    num: "03",
    title: "Express Labs",
    tagline: "AI-powered mobile application testing.",
    stack: ["React.js", "SCSS", "WebSockets", "GitHub"],
    highlights: [
      "Built a testing platform for Android and iOS applications featuring AI-driven issue detection and automated testing workflows.",
      "Developed dashboards for test execution, issue tracking, reporting and defect management.",
    ],
  },
  {
    num: "04",
    title: "Thriveworks",
    tagline: "Booking and provider search for a healthcare platform.",
    stack: ["Next.js", "Tailwind CSS", "Redux", "Node.js", "MongoDB"],
    highlights: [
      "Built responsive React/Next.js UI components for Thriveworks' booking and provider-search flows.",
      "Improved performance and cross-browser accessibility across the healthcare platform's frontend.",
    ],
  },
];

export const toolkit = [
  {
    group: "Languages",
    items: ["HTML5", "CSS3 / SASS", "JavaScript (ES6+)", "TypeScript"],
  },
  {
    group: "Frameworks",
    items: [
      "React.js",
      "Next.js",
      "Redux",
      "React Hooks",
      "Node.js",
      "Tailwind CSS",
      "Material UI",
      "Ant Design",
      "Bootstrap",
    ],
  },
  {
    group: "APIs & Data",
    items: ["REST APIs", "WebSockets", "Microservices Architecture"],
  },
  {
    group: "Testing",
    items: ["Jest", "React Testing Library"],
  },
  {
    group: "Tools & Cloud",
    items: ["Git", "GitHub", "Azure", "Vite", "Figma"],
  },
  {
    group: "Database",
    items: ["MongoDB"],
  },
];

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  field: "Computer Science",
  school:
    "Shri Shambhubhai V Patel College of Computer Science and Business Management",
  location: "Surat",
  period: "2020 — 2023",
  grade: "CGPA 8.67",
};

export const contact = {
  eyebrow: "06 — Contact",
  title: "Let's build something.",
  body: "I'm open to frontend roles and remote work worldwide. If you have a project, a role, or a question about anything above, send it over.",
};
