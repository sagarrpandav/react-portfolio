import React from "react";
import {
    AssignmentOutlined,
    Devices,
    GitHub,
    Language,
    LinkedIn,
    Twitter,
    WebOutlined,
    YouTube
} from "@mui/icons-material";
import Resume from "../assets/SAGAR_PANDAV_Resume.pdf";

export const resumeData = {
    name: "Sagar Pandav",
    title: "Full-Stack Developer",

    birthday: "03rd January 1996",
    email: "srp8070@nyu.edu",
    address: "New York",
    phone: "+1 929 3209172",

    socials: {
        // Facebook: {
        //   link: "https://www.facebook.com",
        //   text: "SamIsCoding",
        //   icon: <FacebookIcon />,
        // },
        // Twitter: {
        //     link: "https://twitter.com/Nephew_Sam_",
        //     text: "Nephew_Sam_",
        //     icon: <Twitter/>,
        // },
        LinkedIn: {
            link: "https://www.linkedin.com/in/sagar-rpandav/",
            text: "sagar-rpandav",
            icon: <LinkedIn/>,
        },
        GitHub: {
            link: "https://github.com/sagarrpandav",
            text: "sagarrpandav",
            icon: <GitHub/>,
        },
    },

    resume: Resume,

    about:
        "I'm a front end engineer with experience developing complex, high profile web applications collaborating with both small and large teams. I specialise in JavaScript, thriving in an agile environment leveraging modern technologies such as React/Next, Redux and Firebase. I pride myself in writing scalable, elegant code — creating simple solutions to complex problems.",

    experiences: [
        {
            institute: "Mediaocean",
            title: "Software Engineer",
            date: "Jul 2018 - Jul 2021",
            description: "● Delivered enterprise-grade software using REST/JSON APIs, SQL/NoSQL databases, Agile, DevOps, CI/CD, Docker/Kubernetes, and\n" +
                "TDD. Completed 30+ sprints with CICD for timely high-quality solutions\n" +
                "● Deployed innovative features using Express, Spring, and React, leading to a 20% boost in customer satisfaction metrics\n" +
                "● Achieved an 85% Java/JS TDD coverage for front-end and back-end solutions, ensuring code quality and minimizing post-deployment issues\n" +
                "● Fostered a collaborative team environment through regular one-on-one meetings, open communication channels, and mentorship\n" +
                "opportunities, resulting in a 90% satisfaction rate among team members\n" +
                "● Engineered and dispatched a seamless data migration project, transferring 800,000 rows through the implementation of a Java Cron job on\n" +
                "production servers, resulting in minimal disruption and ensuring a smooth data transition\n" +
                "● Identified areas for improvement, optimized code quality, achieved 95% Java/JS TDD coverage, minimizing bugs\n" +
                "● Coordinated inter-team integration of microservices and databases (relational Oracle SQL, non-relational MongoDB, and Greenplum),\n" +
                "managing end-to-end ETL process for data extraction, transformation, and loading from diverse sources with 100% accuracy, ensuring precise flow and timely transformations within a 6-hour interval"
        },
        {
            institute: "New York University",
            title: "Javascript Developer",
            date: "Sep 2021 - Jan 2022",
            description:
                "● Developed easyeyes.app, a website dedicated to managing and conducting psychological experiments concerning vision using PsychoPy for test execution\n" +
                "● Leveraged expertise in frontend technologies such as HTML, CSS, JavaScript, and Bootstrap to create a visually appealing and user-friendly website, increaseing participant engagement by 20% after introducing a new look to the website, resulting in higher participation rates for the conducted experiments\n" +
                "● Implemented OAuth2 for secure authentication and authorization, reducing three-page transitions and enhancing the overall user experience\n" +
                "● Received positive feedback from participants and scientists alike after seamlessly integrating GitLab, Pavlovia, and Prolific, streamlining the experiment process and improving collaboration\n" +
                "● Collaborated with the developers of Prolific to ensure efficient completion and payment tracking for participants, further enhancing the overall experience and satisfaction of both researchers and participants\n" +
                "● Demonstrated excellent coordination and communication skills during meetings with the Prolific team, fostering successful integration and garnering positive responses from stakeholders",
        },
        {
            institute: "New York University",
            title: "ITP Networks Assistant",
            date: "Mar 2022 - May 2022",
            description:
                "● Led the development of http://hub.itp.io:5000/, a dynamic platform for student project showcasing, resulting in a 40% increase in student project submissions\n" +
                "● Utilized JavaScript, React, Python, and Node.js to create a seamless integration between the frontend and backend, enabling efficient data scraping and retrieval\n" +
                "● Leveraged Bootstrap to create an aesthetically pleasing user interface, enhancing the platform's visual appeal and attracting more student engagement\n" +
                "● Demonstrated strong leadership skills by collaborating with a multidisciplinary team, providing guidance and expertise in frontend development, data scraping, and UI/UX design",
        },
        {
            institute: "Mediaocean",
            title: "Development Intern",
            date: "Jun 2022 - Aug 2022",
            description:
                "● Optimized API calls across 10+ Spring microservices, leveraging Oracle SQL to create real-time data visualization dashboards. Reduced system response times by 20%, improving user experience and increasing system availability by 30%\n" +
                "● Revamped the L2 engineer dashboard by introducing real-time ticket tracking, resulting in a 40% reduction in average resolution time and a 15% improvement in customer satisfaction\n" +
                "● Demonstrated effective communication by orchestrating daily stand-up meetings and weekly retrospectives, leading to a 30% reduction in miscommunication-related errors\n" +
                "● Integrated existing technologies into a new React-based dashboard, streamlining processes and reducing redundancy by 30% for the development team\n" +
                "● Designed and pioneered a streamlined API strategy, resulting in a 40% reduction in call time and enabling real-time data updates across all microservices using Oracle SQL\n" +
                "● Spearheaded cross-functional collaboration to resolve technical debt, migrate to React, and implement new technologies, resulting in a 30% reduction in development time and an 80% increase in user satisfaction\n" +
                "● Improved support ticket resolution by 50% with the L2 engineer dashboard, optimizing customer experience and reducing response times",
        },
        {
            institute: "New York University",
            title: "API Developer",
            date: "Aug 2022 - May 2023",
            description:
                "● Designed and deployed a robust API ecosystem using Python Flask and ReactJS at New York University, enabling seamless integration, efficient data flow, and generating 100+ requests through the NYU API/Data Portal\n" +
                "● Maintained and managed over 15 API endpoints in a Python Flask and ReactJS environment, with a strong focus on OAuth2 security implementation via Shibboleth\n" +
                "● Accelerated the development process by establishing a local development environment for Python Flask and ReactJS, resulting in a remarkable 70% increase in developer efficiency\n" +
                "● Addressed and resolved production issues within a 24-hour time-frame, employing a meticulous approach to ensure minimal downtime and uninterrupted operations\n" +
                "● Streamlined frontend interface by integrating AntD and ReactJS; created visual hierarchy, used design systems, and optimized UI elements to deliver an intuitive and engaging user experience; reduced bounce rate by 25%\n" +
                "● Implemented meticulous design practices, including the avoidance of prop drilling and separation of concerns, resulting in clean and maintainable code across the frontend and backend systems and a 35% reduction in UI-related bugs\n" +
                "● Ensured 100% accuracy in database migration from Snowflake to MySQL through meticulous modeling and execution, followed by the establishment of initial connections",
        },
    ],

    educations: [
        {
            title: "Bachelor in Engineering in Computer Science",
            institute: "Pune Institute of Computer Technology, MH, IN",
            date: "May 2018",
            description: "Completed the foundation year with an overall Distinction.",
        },
        {
            title: "Master of Science in Computer Science",
            institute: "New York University, NY, USA",
            date: "May 2023",
            description:
                "Graduated a Bachelors of Science degree with a first-class Honours.",
        }
    ],

    skills: [
        {
            title: 'Frontend',
            description: ['HTML'
                , 'JavaScript libraries including KnockoutJS and ReactJS'
                , 'Styling (CSS, SCSS, CSS in JS)'
                , 'React Component Libraries (Bootstrap, Material UI)'
                , 'React State Management using Redux'
                , 'Progressive Web App tools (Service Worker Workbox)']
        },
        {
            title: 'Backend',
            description: ['C++', 'Java', 'JavaScript', 'Python', 'VBScript', 'NodeJS', 'Express', 'Flask', 'Django', 'Spring MVC4', 'Spring Boot', 'Hibernate', 'JPA', 'GraphQL']
        },
        {
            title: 'Databases',
            description: ['MySQL', 'MongoDB', 'Firebase']
        },
        {
            title: 'SRC Control & DW Methodologies',
            description: ['Git', 'GitHub', 'Bitbucket', 'Agile']
        }
    ],
    // skills: [
    //     {
    //         title: "FRONT-END",
    //         description: [
    //             "ReactJS",
    //             "React Native",
    //             "JavaScript",
    //             "TypeScript",
    //             "Bootstrap",
    //             "Material UI",
    //         ],
    //     },
    //     {
    //         title: "BACK-END",
    //         description: ["Firebase", "NodeJS", "Java", "Python", "Solidity"],
    //     },
    //     {
    //         title: "DATABASES",
    //         description: ["Firebase", "Ms SQL Server", "MySQL", "MongoDB"],
    //     },
    //     {
    //         title: "SOURCE CONTROL",
    //         description: ["Git", "GitHub", "Bitbucket", "SCRUM/Agile"],
    //     },
    // ],

    projects: [
        {
            tag: "React",
            images: [],
            title: "Munch Pocket",
            caption: "Maker Academy",
            description:
                "(Turn on full screen view for these images)\n\nThis is the fully-responsive, localized and themed Maker Academy project created during my time at MakerDAO. Users can read articles or take courses with assessments. Users with special permissions can also contribute to the app by submitting a new article or course – which goes through an admin approval process. The project allows users to authenticate via gmail, email/password or web3 auth. \n\nWe worked in a team of 5; A product manager, a designer, me as the full-stack developer and 2 content writers. \n\nTechnologies used:\n• Front-end => NextJS and Material UI as the design library, Redux, Rainbow Kit UI for the web3 auth.\n• Back-end => Firebase Firestore, Storage, Cloud Functions and Google Analytics.",
            links: [
                {
                    link: "https://makerdao.academy/",
                    icon: <Language/>,
                },
                {
                    link: "https://github.com/MakerAcademy/maker-academy-v2",
                    icon: <GitHub/>,
                },
            ],
        },
        {
            tag: "React",
            images: [],
            title: "Institutional Trader Simulator",
            caption: "1inch network aggregator",
            description:
                "(Turn on full screen view for these images)\n\nI've created a clone of the 1inch network aggregator! I built out the front-end landing page, swapping page, and implemented the swapping features. It's been a really challenging but rewarding experience.\n\nTechnologies I used:\n• ReactJS and Material UI as the design library\n• thirdweb sdk to connect metamask wallet, fetch wallet details and perform transactions\n• 1inch Network API to fetch best conversion prices and TX data to perform transactions.\n\nI also recorded a youtube video of me creating the landing page from scratch in under 4 hours - https://lnkd.in/gDvrBMUu",
            links: [
                {
                    link: "https://web3-1inch-clone.vercel.app/",
                    icon: <Language/>,
                },
                {
                    link: "https://github.com/salmanfazal01/web3-1inch-clone",
                    icon: <GitHub/>,
                },
                {
                    link: "https://youtu.be/4MrDn0ClJDQ",
                    icon: <YouTube/>,
                },
            ],
        },
        {
            tag: "React",
            images: [],
            title: "Twitter Clone",
            caption: "Score Predictor Game",
            description:
                "This was collaboration game with the biggest football podcast show on YouTube - The Big 6ix show. I created full responsive football predictor app where users can sign up, join leagues, and predict scores to compete against other users and against the official TheBig6ix team too. n\nTechnologies used:\n• Front-end => NextJS and Material UI v5 as the design library.\n• Back-end => Firebase Firestore and Cloud Functions, api-sports API to fetch latest game fixtures and results. \n•Deployement => Vercel",
            links: [
                {
                    link: "https://www.thebig6ix.com/",
                    icon: <Language/>,
                },
            ],
        },
        {
            tag: "React",
            images: [],
            title: "Organic Store",
            caption: "ForexLens Portal",
            description:
                "This project was with ForexLens that includes features and services for Forex and crypto education, signals and portfolio management.\n\nTechnologies used:\n• ReactJS\n• Redux\n• Material UI\n• Firebase",
            links: [{link: "https://portal.forexlens.com/", icon: <Language/>}],
        },
        {
            tag: "React",
            images: [],
            title: "Portfolio",
            caption: "Web3 Crowdfunding",
            description:
                "I created a simple, fully responsive web3 crowdfunding application over the weekend where you can sign in with metamask, create a campaign and donate to campaigns using your Goerli testnet ETH.\n\nTechnologies used:\nFrontend => ReactJS + Material UI for the design library + thirdweb to connect to metamask and read/call the smart contract.\nBackend => Solidity + hardhat + thirdweb for contract deployment.",
            links: [
                {
                    link: "https://web3-crowdfunding-nine.vercel.app/",
                    icon: <Language/>,
                },
                {
                    link: "https://github.com/salmanfazal01/web3-crowdfunding",
                    icon: <GitHub/>,
                },
            ],
        },
        {
            tag: "React",
            images: [],
            title: "Spotify Meta",
            caption: "NFT Marketplace",
            description:
                "(Turn on full screen view for these images)\n\nThis app is still under development. You can track my progress on my LinkedIn activity.\nWhilst learning web3 programming using Moralis, I chose to build a complete NFT marketplace. The UI is almost complete and the backend features are now being developed.\n\nTechnologies used:\n• Front-end => ReactJS and Material UI.\n• Back-end => Moralis, Metamask Authentication and Firebase.",
            links: [
                {
                    link: "https://nft-marketplace-kohl.vercel.app/",
                    icon: <Language/>,
                },
                {
                    link: "https://github.com/salmanfazal01/nft-marketplace",
                    icon: <GitHub/>,
                },
            ],
        },
        {
            tag: "React",
            images: [],
            title: "Music Player",
            caption: "Company registration + receipts",
            description:
                "I've created a mini company registration and receipt system dApp. I developed a system where companies can register themselves and wait for an authorized admin to approve their registration. Once approved, they can issue receipts on sales, all authenticated using Metamask.\n\nTechnologies used:\n• Reactjs and Material-UI as my design library.\n• Solidity to write the smart contract\n• Thirdweb to deploy, test and interact with the smart contract, and also for Metamask authenticaion.",
            links: [
                {
                    link: "https://web3-receipts-registration.vercel.app/",
                    icon: <Language/>,
                },
                {
                    link: "https://github.com/salmanfazal01/web3-receipts",
                    icon: <GitHub/>,
                },
                {
                    link: "https://youtu.be/wpg08Bx2Z7Y",
                    icon: <YouTube/>,
                },
            ],
        },
        {
            tag: "React",
            images: [],
            title: "Budget Planner",
            caption: "Ether Block Explorer",
            description:
                "I built a mini functional Etherscan clone from start to finish, using #NextJS, #MaterialUI, and Moralis Web3. The application allows users to get the latest blocks, the latest transactions, and also display all information of a specific hash, all in real-time.",
            links: [
                {
                    link: "https://biconomy-frontend-assessment.vercel.app/transactions",
                    icon: <Language/>,
                },
                {
                    link: "https://github.com/salmanfazal01/biconomy-frontend-assessment",
                    icon: <GitHub/>,
                },
                {
                    link: "https://www.youtube.com/watch?v=qcYxW0f5X5c&feature=youtu.be&ab_channel=SalmanFazal",
                    icon: <YouTube/>,
                },
            ],
        }
    ],
};
