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
    horizon,
    idyll,
    threejs,
    apple,
    carepulse,
    idyll_logo,
    discord_clone,
    hippo_ui
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    // {
    //     id: "work",
    //     title: "Work",
    // },
    {
        id: "projects",
        title: "Projects",
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
    //     title: "React Native Developer",
    //     icon: mobile,
    // },
    {
        title: "Backend Developer",
        icon: backend,
    },
    // {
    //     title: "Content Creator",
    //     icon: creator,
    // },
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
        title: "Freelance Web Developer",
        company_name: "Idyll Dating",
        icon: idyll_logo,
        iconBg: "#383E56",
        date: "September 2024",
        points: [
            "Developed a responsive and user-friendly website for Idyll, a dating app startup, using HTML, Tailwind CSS, and JavaScript in just 15 days.",
            "Improved overall performance and enhanced user experience with modern, clean design.",
        ],
    },
    // {
    //     title: "React.js Developer",
    //     company_name: "Starbucks",
    //     icon: starbucks,
    //     iconBg: "#383E56",
    //     date: "March 2020 - April 2021",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "React Native Developer",
    //     company_name: "Tesla",
    //     icon: tesla,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2021 - Feb 2022",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#383E56",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
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
        name: "Horizon",
        description:
            "Horizon is a full-stack banking application designed for efficient financial management. It features real-time transactions via Dwolla, secure data fetching with Plaid, an expense tracker, and transaction history.",
        tags: [
            {
                name: "Next.js",
                color: "blue-text-gradient",
            },
            {
                name: "Typescript",
                color: "green-text-gradient",
            },
            {
                name: "Appwrite",
                color: "pink-text-gradient",
            },
            {
                name: "Plaid",
                color: "blue-text-gradient",
            },
            {
                name: "Dwolla",
                color: "green-text-gradient",
            },
            {
                name: "shadcn UI",
                color: "pink-text-gradient",
            },
            {
                name: "Tailwind CSS",
                color: "blue-text-gradient",
            },
        ],
        image: horizon,
        source_code_link: "https://github.com/Purnima-Vats/Banking-app",
        live_link: "https://expense-banking-app.vercel.app",
    },
    {
        name: "Hippo UI",
        description:
            "Hippo UI is a digital marketplace that facilitates product registration, purchase, and sale. Sellers can manage their products and access their earnings dashboard. Stripe ensures secure transactions and payment management. The platform is built using Next.js, Tailwind CSS, Shadcn UI, Kinde Auth, Uploadthing, Resend Email, Stripe Checkout and Connect, Supabase, and Prisma.",
        tags: [
            {
                name: "Next.js",
                color: "blue-text-gradient",
            },
            {
                name: "Supabase",
                color: "green-text-gradient",
            },
            {
                name: "Postgres SQL",
                color: "pink-text-gradient",
            },
            {
                name: "UploadThing",
                color: "green-text-gradient",
            },
            {
                name: "Kinde Auth",
                color: "pink-text-gradient",
            },
            {
                name: "Stripe",
                color: "blue-text-gradient",
            },
        ],
        image: hippo_ui,
        source_code_link: "https://github.com/Purnima-Vats/digital-marketplace",
        live_link: "https://digital-marketplace-lovat.vercel.app",
    },
    // {
    //     name: "Discord Clone",
    //     description:
    //         "Built a real-time messaging platform with 1:1 video calls, message attachments, and role-based management. Integrated WebSocket messaging via Socket.io, Prisma with MySQL (Planetscale), and authentication using Clerk. The responsive UI, designed with TailwindCSS and ShadcnUI, supports light/dark modes for all devices.",
    //     tags: [
    //         {
    //             name: "Next.js",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "socket.io",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "Prisma",
    //             color: "pink-text-gradient",
    //         },
    //         {
    //             name: "MySQL",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "UploadThing",
    //             color: "pink-text-gradient",
    //         },
    //         {
    //             name: "LightDarkMode",
    //             color: "green-text-gradient",
    //         },
    //     ],
    //     image: discord_clone,
    //     source_code_link: "https://github.com/Purnima-Vats/discord_clone",
    //     live_link: "https://discordd.up.railway.app/",
    // },
    {
        name: "Carepulse",
        description:
            "A Patient management system that streamlines patient registration, appointment scheduling, medical records and complex forms with admin dashboard.",
        tags: [
            {
                name: "Next.js",
                color: "blue-text-gradient",
            },
            {
                name: "Typescript",
                color: "green-text-gradient",
            },
            {
                name: "Appwrite",
                color: "pink-text-gradient",
            },
            {
                name: "zod",
                color: "blue-text-gradient",
            },
            {
                name: "shadcn UI",
                color: "green-text-gradient",
            },
            {
                name: "Tailwind CSS",
                color: "pink-text-gradient",
            },
        ],
        image: carepulse,
        source_code_link: "https://github.com/Purnima-Vats/carepulse",
        live_link: "https://carepulse-patient.vercel.app",
    },
    {
        name: "Apple Website UI Clone",
        description:
            "Recreated the Apple iPhone 15 Pro product page using React.js, combining GSAP animations and Three.js for 3D models.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "GSAP",
                color: "green-text-gradient",
            },
            {
                name: "Three.js",
                color: "pink-text-gradient",
            },
        ],
        image: apple,
        source_code_link:
            "https://github.com/Purnima-Vats/apple-iPhone15-clone",
        live_link: "https://appoll.netlify.app",
    },
];

const techStack = [
    // {
    //     name: "C Language",
    //     link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg",
    // },
    {
        name: "TypeScript",
        link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    },
    {
        name: "Express",
        link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    },

    {
        name: "NodeJS",
        link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
        name: "Postman",
        link: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    },

    // {
    //     name: "Dart",
    //     link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
    // },
    // {
    //     name: "Flutter",
    //     link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-plain.svg",
    // },
    // {
    //     name: "React Native",
    //     link: "https://pagepro.co/blog/wp-content/uploads/2020/03/react-native-logo-884x1024.png",
    // },
    {
        name: "HTML",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
        name: "CSS",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
    },
    // {
    //     name: "Bootstrap",
    //     link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
    // },
    // {
    //     name: "Sass",
    //     link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
    // },

    {
        name: "Javascript",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
        name: "Redux",
        link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    },
    {
        name: "Tailwind CSS",
        link: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },
    {
        name: "React",
        link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    },
    {
        name: "Next",
        link: "https://www.svgrepo.com/show/354113/nextjs-icon.svg"
    },
    {
        name: "MySQL",
        link: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Database-mysql.svg/1200px-Database-mysql.svg.png",
    },
    {
        name: "Mongo DB",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
    },
    {
        name: "Clerk",
        link: "https://imgix.cosmicjs.com/9d8bc340-e63d-11ee-b074-b5c8fe3ef189-clerk.webp?w=1200&auto=format,compression",
    },
    // {
    //     name: "Heroku",
    //     link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg",
    // },
    // { name: "Azure", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-plain.svg" },
    {
        name: "Git",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
    },
    // { name: "Docker", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg" },
    // {
    //     name: "Firebase",
    //     link: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    // },

    // { name: "Bash", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
    // { name: "Vim", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg" },

    // { name: "VS Code", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    // {name: "", link: "https://repository-images.githubusercontent.com/59065830/b62be480-45d2-11ea-9989-803db0f9c44d"}
];

export { services, technologies, experiences, testimonials, projects, techStack };
