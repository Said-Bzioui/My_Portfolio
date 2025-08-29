
//THECK STACK
export const STACK = [
    { id: 1, title: "HTML", photo: '/stack/html.svg' },
    { id: 2, title: "CSS", photo: '/stack/css.svg' },
    { id: 3, title: "JavaScript", photo: '/stack/javascript.svg' },
    { id: 4, title: "React", photo: '/stack/reactjs.svg' },
    { id: 5, title: "Node.js", photo: '/stack/nodejs.svg' },
    { id: 6, title: "Python", photo: '/stack/python.svg' },
    { id: 7, title: "PhP", photo: '/stack/php.svg' },
    { id: 8, title: "Laravel", photo: '/stack/laravel.svg' },
    { id: 9, title: "TailwindCss", photo: '/stack/tailwind.svg' },
    { id: 10, title: "ExpressJs", photo: '/stack/expressjs.svg' },
    { id: 11, title: "Git", photo: '/stack/git.svg' },
    { id: 12, title: "Github", photo: '/stack/github.svg' },
    { id: 13, title: "Mongodb", photo: '/stack/mongodb.svg' },
    { id: 14, title: "Mysql", photo: '/stack/mysql.svg' },
    { id: 15, title: "Nextjs", photo: '/stack/nextjs.svg' },
    { id: 16, title: "Typescript", photo: '/stack/typescript.svg' },
    { id: 17, title: "C", photo: '/stack/c.svg' },
    { id: 18, title: "Arduino", photo: '/stack/arduino.svg' },
    { id: 19, title: "Wordpress", photo: '/stack/wordpress.svg' },
    { id: 20, title: "restful", photo: '/stack/restful.png' },

]
// PROJECTS
export const PROJECTS = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "A personal portfolio website built with React and TailwindCSS to showcase projects and skills.",
        stack: ["React", "TailwindCss", "JavaScript"],
        link: "https://yourportfolio.com",
        github: "https://github.com/yourusername/portfolio-website",
        photo: "/projects/portfolio.png",
        pictures: ["/projects/project1_1.png", "/projects/project1_2.png", "/projects/project1_3.png", "/projects/project1_4.png"],
        Features: [
            "Responsive Design",
            "Dark Mode",
            "Smooth Scrolling",
            "Contact Form"
        ]
    },
    {
        id: 2,
        title: "E-commerce Store",
        description: "An online store built with Next.js, Node.js, and MongoDB, featuring user authentication and payment integration.",
        stack: ["Nextjs", "Node.js", "MongoDB"],
        link: "https://mystore.com",
        github: "https://github.com/yourusername/ecommerce-store",
        photo: "/projects/ecommerce.png",
        pictures: ["/projects/project1_1.png", "/projects/project1_2.png", "/projects/project1_3.png", "/projects/project1_4.png"],

        Features: [
            "User Authentication",
            "Product Catalog",
            "Shopping Cart",
            "Payment Integration"
        ]
    },
    {
        id: 3,
        title: "Blog Platform",
        description: "A full-featured blog platform using Laravel and MySQL, supporting markdown posts and comments.",
        stack: ["Laravel", "MySQL", "PhP"],
        link: "https://myblog.com",
        github: "https://github.com/yourusername/blog-platform",
        photo: "/projects/blog.png",
        pictures: ["/projects/project1_1.png", "/projects/project1_2.png", "/projects/project1_3.png", "/projects/project1_4.png"],

        Features: [
            "Markdown Support",
            "Comments Section",
            "User Profiles"
        ]
    },
    {
        id: 4,
        title: "Task Manager App",
        description: "A productivity app for managing tasks, built with ExpressJs, React, and Typescript.",
        stack: ["ExpressJs", "React", "Typescript"],
        link: "https://taskmanager.com",
        github: "https://github.com/yourusername/task-manager-app",
        photo: "/projects/taskmanager.png",
        pictures: ["/projects/project1_1.png", "/projects/project1_2.png", "/projects/project1_3.png", "/projects/project1_4.png"],

        Features: [
            "Task Creation",
            "Due Dates",
            "User Authentication"
        ]
    },
    {
        id: 5,
        title: "Weather Dashboard",
        description: "A weather dashboard using HTML, CSS, and JavaScript, fetching data from a public API.",
        stack: ["HTML", "CSS", "JavaScript"],
        link: "https://weatherdashboard.com",
        github: "https://github.com/yourusername/weather-dashboard",
        photo: "/projects/weather.png",
        pictures: ["/projects/project1_1.png", "/projects/project1_2.png", "/projects/project1_3.png", "/projects/project1_4.png", "/projects/project1_5.png", "/projects/project1_6.png"],

        Features: [
            "Responsive Design",
            "API Integration",
            "Real-time Data"
        ]
    },
    {
        id: 6,
        title: "IoT Home Automation",
        description: "An Arduino-based IoT project for home automation, with a web dashboard built using Node.js.",
        stack: ["Arduino", "Node.js", "JavaScript"],
        link: "https://homeiot.com",
        github: "https://github.com/yourusername/iot-home-automation",
        photo: "/projects/iot.png",
        pictures: ["/projects/project1_1.png", "/projects/project1_2.png", "/projects/project1_3.png", "/projects/project1_4.png"],
        Features: [
            "Home Automation",
            "Remote Access",
            "Real-time Monitoring"
        ]
    }
]
// CERTIFICATES
export const CERTIFICATES = [
    {
        photo: '/certifes/certife_1.jpg'
    },
    {
        photo: '/certifes/certife_2.jpg'
    },
    {
        photo: '/certifes/certife_3.jpg'
    },
    {
        photo: '/certifes/certife_4.jpg'
    }
]
// EDUCATIONS
export const EDUCATIONS = [
    {
        side: "left",
        title: "Technicien Spécialisé En Développement Digital option web full stack",
        date: "2023-2025",
        description: "Cités des Métiers et des Compétences | Rabat",
        photo: '/education/cmc.jpg'
    },
    {
        side: "right",
        title: "Baccalauréat Sciences Physiques",
        date: "2021-2022",
        description: "Zineb Nafzaouia | Sidi Slimane",

    }
]
// EXPERIANCES
export const EXPERIANCES = [
    {
        side: "left",
        title: "Développeur Web Full Stack (Stagiaire)",
        date: "Avril–Juin 2025",
        description: "DigiSense SARL – Rabat Agdal",
        photo: '/education/cmc.jpg'
    }
]
// PARASCOLAIRRE
export const PARASCOLAIRRE = [
    {
        id: 1,
        title: "Participation au Compétition Robotics AGADIR",
        description: "Participation à une compétition nationale de robotique (Sumo Robot) à Agadir. Conception, programmation et optimisation d’un robot autonome, tout en développant l’esprit de compétition et le travail en équipe.",
        photo: "/activities/AGADIR/agadir_3.jpg",
        pictures: [
            "/activities/AGADIR/agadir_1.jpg",
            "/activities/AGADIR/agadir_2.jpg",
            "/activities/AGADIR/agadir_3.jpg",
            "/activities/AGADIR/agadir_4.jpg",
            "/activities/AGADIR/agadir_5.jpg",
            "/activities/AGADIR/agadir_6.jpg",
            "/activities/AGADIR/agadir_7.jpg",
            "/activities/AGADIR/agadir_8.jpg",
            "/activities/AGADIR/agadir_9.jpg",
            "/activities/AGADIR/agadir_10.jpg",
            "/activities/AGADIR/agadir_11.jpeg",
            "/activities/AGADIR/agadir_12.jpeg",
            "/activities/AGADIR/agadir_13.jpeg",
            "/activities/AGADIR/agadir_14.jpg",
            "/activities/AGADIR/agadir_15.jpg",
            "/activities/AGADIR/agadir_16.jpeg",
            "/activities/AGADIR/agadir_17.jpeg",
            "/activities/AGADIR/agadir_18.jpeg",
            "/activities/AGADIR/agadir_19.jpeg",
            "/activities/AGADIR/agadir_20.jpeg",
        ],
        instagram: "https://www.instagram.com/saidbzioui_1/",
        linkedin: "https://www.linkedin.com/in/said-bzioui"
    },
    {
        id: 2,
        title: "[Superviseur] Compétition locale de robotique ",
        description: "Encadrement et supervision des participants lors d’une compétition locale de robotique. Accompagnement des équipes, gestion de l’organisation technique et soutien dans la résolution des problèmes rencontrés.",
        photo: "/activities/LOCAL/local_1.jpg",
        pictures: [
            "/activities/LOCAL/local_1.jpg",
            "/activities/LOCAL/local_2.jpg",
            "/activities/LOCAL/local_3.jpg",
            "/activities/LOCAL/local_4.jpg",
            "/activities/LOCAL/local_5.jpg",
            "/activities/LOCAL/local_6.jpg",
            "/activities/LOCAL/local_7.jpg",
            "/activities/LOCAL/local_8.jpg",
            "/activities/LOCAL/local_9.jpg",
            "/activities/LOCAL/local_10.jpg",
            "/activities/LOCAL/local_11.jpg",
            "/activities/LOCAL/local_12.jpg",
            "/activities/LOCAL/local_13.jpg",
            "/activities/LOCAL/local_14.jpg",
            "/activities/LOCAL/local_15.jpg",
            "/activities/LOCAL/local_16.jpg",
            "/activities/LOCAL/local_17.jpg",
            "/activities/LOCAL/local_18.jpg",
            "/activities/LOCAL/local_19.jpg",
            "/activities/LOCAL/local_20.jpg",
            "/activities/LOCAL/local_21.jpg",
            "/activities/LOCAL/local_22.jpg",
            "/activities/LOCAL/local_23.jpg",
            "/activities/LOCAL/local_24.jpg",
        ],
        instagram: "https://www.instagram.com/p/DFYJyLIM2D2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        linkedin: "https://www.linkedin.com/in/said-bzioui"
    },

    {
        id: 3,
        title: "[Formateur] au club de robotique",
        description: "Animation de formations au sein du club de robotique. Initiation des nouveaux membres aux bases de l’électronique, de la programmation et à l’utilisation d’outils de conception et de simulation.",
        photo: "/activities/FORMATION/formation_1.jpg",
        pictures: [
            "/activities/FORMATION/formation_1.jpg",
            "/activities/FORMATION/formation_2.jpg",
            "/activities/FORMATION/formation_3.jpg",
            "/activities/FORMATION/formation_4.jpg",
            "/activities/FORMATION/formation_5.jpg",
            "/activities/FORMATION/formation_6.jpg",
            "/activities/FORMATION/formation_7.jpg",
            "/activities/FORMATION/formation_8.jpg",
            "/activities/FORMATION/formation_9.jpg",
            "/activities/FORMATION/formation_10.jpg",
            "/activities/FORMATION/formation_11.jpg",
            "/activities/FORMATION/formation_12.jpg",
        ],
        instagram: "https://www.instagram.com/p/DC4NaCgsUTq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        linkedin: "https://www.linkedin.com/in/said-bzioui"
    },
]