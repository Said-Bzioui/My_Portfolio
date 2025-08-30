
//THECK STACK
export const STACK = [
    { id: 1, title: "HTML", photo: 'https://res.cloudinary.com/datjizbe8/image/upload/v1756574134/html_atqkii.svg' },
    { id: 2, title: "CSS", photo: 'https://res.cloudinary.com/datjizbe8/image/upload/v1756574317/css_mtimyc.svg' },
    { id: 3, title: "JavaScript", photo: 'https://res.cloudinary.com/datjizbe8/image/upload/v1756574135/javascript_unwbfn.svg' },
    { id: 4, title: "React", photo: 'https://res.cloudinary.com/datjizbe8/image/upload/v1756574139/reactjs_nuifch.svg' },
    { id: 5, title: "Node.js", photo: 'https://res.cloudinary.com/datjizbe8/image/upload/v1756574137/nodejs_ceav25.svg' },
    { id: 6, title: "Python", photo: 'https://res.cloudinary.com/datjizbe8/image/upload/v1756574138/python_l5x8ek.svg' },
    { id: 7, title: "PhP", photo: 'https://res.cloudinary.com/datjizbe8/image/upload/v1756574137/php_vpjrjq.svg' },
    { id: 8, title: "Laravel", photo: 'https://res.cloudinary.com/datjizbe8/image/upload/v1756574135/laravel_lynxzv.svg' },
    { id: 9, title: "TailwindCss", photo: 'https://res.cloudinary.com/datjizbe8/image/upload/v1756574140/tailwind_moixhj.svg' },
    { id: 10, title: "ExpressJs", photo: 'https://res.cloudinary.com/datjizbe8/image/upload/v1756574133/expressjs_p7kx4z.svg' },
    { id: 11, title: "Git", photo: 'https://res.cloudinary.com/datjizbe8/image/upload/v1756574134/git_ujj3hj.svg' },
    { id: 12, title: "Github", photo: 'https://res.cloudinary.com/datjizbe8/image/upload/v1756574134/github_fstq0p.svg' },
    { id: 13, title: "Mongodb", photo: 'https://res.cloudinary.com/datjizbe8/image/upload/v1756574136/mongodb_nqqmai.svg' },
    { id: 14, title: "Mysql", photo: 'https://res.cloudinary.com/datjizbe8/image/upload/v1756574136/mysql_cw8kmc.svg' },
    { id: 15, title: "Nextjs", photo: 'https://res.cloudinary.com/datjizbe8/image/upload/v1756574137/nextjs_kgzwea.svg' },
    { id: 16, title: "Typescript", photo: 'https://res.cloudinary.com/datjizbe8/image/upload/v1756574141/typescript_cwnvr8.svg' },
    { id: 17, title: "C", photo: 'https://res.cloudinary.com/datjizbe8/image/upload/v1756574132/c_lnjlsv.svg' },
    { id: 18, title: "Arduino", photo: 'https://res.cloudinary.com/datjizbe8/image/upload/v1756574132/arduino_s4lcxe.svg' },
    { id: 19, title: "Wordpress", photo: 'https://res.cloudinary.com/datjizbe8/image/upload/v1756574142/wordpress_cdnids.svg' },
    { id: 20, title: "restful", photo: 'https://res.cloudinary.com/datjizbe8/image/upload/v1756574151/restful_rfexwt.png' },

]
// PROJECTS
export const PROJECTS = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "Un site web de portfolio personnel créé avec React et TailwindCSS pour présenter des projets et des compétences.",
        stack: ["React", "TailwindCss", "JavaScript"],
        link: "https://yourportfolio.com",
        github: "https://github.com/yourusername/portfolio-website",
        photo: "",
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
        photo: "",
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
        photo: "",
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
        photo: 'https://res.cloudinary.com/datjizbe8/image/upload/v1756573680/certife_1_xmpn24.jpg'
    },
    {
        photo: 'https://res.cloudinary.com/datjizbe8/image/upload/v1756573757/certife_2_oyrv3u.jpg'
    },
    {
        photo: 'https://res.cloudinary.com/datjizbe8/image/upload/v1756573774/certife_3_ayecqe.jpg'
    },
    {
        photo: 'https://res.cloudinary.com/datjizbe8/image/upload/v1756573738/certife_4_v6g2te.jpg'
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
        photo: "https://res.cloudinary.com/datjizbe8/image/upload/v1756553172/agadir_3_gcvjy9.jpg",
        pictures: [
            "/activities/AGADIR/agadir_1.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756554062/agadir_2_l85igi.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756553172/agadir_3_gcvjy9.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756554140/agadir_4_goovq9.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756553223/agadir_5_ewumik.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756554087/agadir_6_gk2l4t.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756554095/agadir_7_nenzf2.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756554088/agadir_8_rpnoir.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756554111/agadir_9_v0n2em.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756554172/agadir_10_qp6bfu.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756554161/agadir_11_hcms87.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756554235/agadir_12_ohlbru.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756554143/agadir_13_omxxb8.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756554165/agadir_14_wcadiq.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756554251/agadir_15_v3aoew.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756554195/agadir_16_j7eqpi.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756554250/agadir_17_gtrcvy.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756554244/agadir_18_ifzucd.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756554247/agadir_19_vjyrp0.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756554239/agadir_20_d2bmli.jpg",
        ],
        instagram: "https://www.instagram.com/saidbzioui_1/",
        linkedin: "https://www.linkedin.com/in/said-bzioui"
    },
    {
        id: 2,
        title: "[Superviseur] Compétition locale de robotique ",
        description: "Encadrement et supervision des participants lors d’une compétition locale de robotique. Accompagnement des équipes, gestion de l’organisation technique et soutien dans la résolution des problèmes rencontrés.",
        photo: "https://res.cloudinary.com/datjizbe8/image/upload/v1756556379/local_5_tn0sk3.jpg",
        pictures: [
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756556063/local_1_hu2na8.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756556131/local_2_lfrys0.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756556242/local_3_jawqzk.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756555786/local_4_nfhuja.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756556379/local_5_tn0sk3.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756555817/local_6_wq6sxd.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756556745/local_7_f619lw.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756557025/local_8_gext9r.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756561217/local_9_twnle1.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756561282/local_10_fhb4wx.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756561304/local_11_hnn8er.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756557973/local_12_scd9wx.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756558096/local_13_coy1sy.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756558172/local_14_mpzboy.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756558173/local_15_wahwum.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756558335/local_16_fcleu5.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756558207/local_17_hotkot.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756558420/local_18_g9zxxc.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756558429/local_19_zmphch.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756558404/local_20_t52t6w.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756558412/local_21_ytqugg.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756558490/local_22_eoht3y.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756558513/local_23_ihabd5.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756558515/local_24_ihysmm.jpg",
        ],
        instagram: "https://www.instagram.com/p/DFYJyLIM2D2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        linkedin: "https://www.linkedin.com/in/said-bzioui"
    },

    {
        id: 3,
        title: "[Formateur] au club de robotique",
        description: "Animation de formations au sein du club de robotique. Initiation des nouveaux membres aux bases de l’électronique, de la programmation et à l’utilisation d’outils de conception et de simulation.",
        photo: "https://res.cloudinary.com/datjizbe8/image/upload/v1756554626/formation_1_na8olo.jpg",
        pictures: [
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756554626/formation_1_na8olo.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756554636/formation_2_yaqwiw.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756554644/formation_3_y2pedg.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756554666/formation_4_oxm3ed.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756554687/formation_5_hdbqyp.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756554667/formation_6_p72nwj.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756554679/formation_7_xtczbh.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756554644/formation_8_hvkur3.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756554648/formation_9_p0sqvn.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756554668/formation_10_aylz0t.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756554691/formation_11_zgjfbx.jpg",
            "https://res.cloudinary.com/datjizbe8/image/upload/v1756554696/formation_12_rci8eo.jpg",
        ],
        instagram: "https://www.instagram.com/p/DC4NaCgsUTq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        linkedin: "https://www.linkedin.com/in/said-bzioui"
    },
]