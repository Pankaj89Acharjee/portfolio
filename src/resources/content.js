import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Pankaj",
  lastName: "Acharjee",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Web Developer",
  avatar: "/images/avatar.png",
  email: "pankaj2007acharjee@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system/nextjs-starter",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building intuitive ideas into code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Priest AI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Pankaj, a Full Stack Web Developer at <Logo icon="/trademarks/wordmark-dark.svg" style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.15em" }} />, committed to creating elegant and user-friendly web solutions.
      <br />I channel my expertise into building and managing my own portfolio of projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `Portfolio – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Leveraging deep expertise in NodeJS, ReactJS, and AWS, I am a Full Stack Developer focused on architecting, developing, and deploying highly scalable web and IoT applications. My commitment is to deliver robust, enterprise-grade solutions that provide clear business impact. I manage full lifecycle projects from concept to deployment, optimizing cloud-native systems and integrating real-time functionalities to achieve technical excellence for my clients.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "EBIW Info Analytics Pvt Ltd",
        timeframe: "2023 - Present",
        role: "Full Stack Developer - Lead",
        achievements: [
          <>
            Led development & deployment of monolithic application (NodeJS + AWS) for IoT solutions, ensuring
            high availability and security.
          </>,
          <>
            Designed real-time dashboards (ReactJS + MQTT + Socket.io) for high-frequency data streaming and
            visualization.
          </>,
          <>
            Built and documented RESTful APIs with NodeJS (ExpressJS) and Swagger; optimized API response time
            by 40%.
          </>,
          <>
            Implemented microservices deployment via Docker Compose, containers and automated CI/CD pipelines with Github
            Actions.
          </>,
          <>
            Conducted code reviews, mentored junior developers, and enforced best practices (security, scalability).
          </>,
          <>
            Strengthened application security through VAPT resolution and API hardening (OAuth, JWT)
          </>

        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/dash.jpeg",
            alt: "IoT dashboard",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/dash.jpeg",
            alt: "IoT dashboard",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/dash.jpeg",
            alt: "IoT dashboard",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/dash.jpeg",
            alt: "IoT dashboard",
            width: 16,
            height: 9,
          },
        ],
      },


      {
        company: "Hashcash Consultants",
        timeframe: "2022 - 2023",
        role: "NodeJS Developer",
        achievements: [
          <>
            Developed scalable backend services for blockchain-based fund transfers and transaction management.
          </>,
          <>
            Built fund transfer microservice for internal crypto wallet systems with async validation, secure transaction queueing, and JWT-authenticated endpoints.
          </>,
          <>
            Managed secure integration with Razorpay and AWS Secret Manager for key storage.
          </>,
          <>
            Designed internal REST APIs using Express and deployed via Dockerized containers.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Vidyasagar University",
        description: <>MSc in Computer Science.</>,
      },
      {
        name: "IGNOU",
        description: <>Bachelor of Computer Applications.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "NodeJS",
        description: <>Express.js, RESTful APIs, Microservices, Asynchronous Programming, Scaling, Database Integrations (PostgreSQL, MongoDB, MySQL).</>,
        images: [],
      },
      {
        title: "Next.js",
        description: <>Architecting scalable frontend solutions with Next.js for the PriestAI project, focusing on dynamic content, API integration, and optimal user experience.</>,
        images: [
          {
            src: "/images/projects/project-01/PriestPage1.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/PriestPage2.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/PriestPage3.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/PriestPage4.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Cloud & DevOps",
        description: <>AWS (S3, Beanstalk, RDS, Secret Manager), Docker Compose, CI/CD (GitHub Actions).</>,
        images: [],
      },
      {
        title: "Security",
        description: <> OAuth 2.0, JWT, API Security Best Practices, VAPT Issue Resolution, Firebase.</>,
        images: [],
      },
      {
        title: "Monitoring & Logging",
        description: <> Node-Clinic, Prometheus, Grafana .</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
