import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

export const resumeData = {
    "name": "Sagar Pandav",
    "title": "Full Stack Web Developer",
    "birthDate": "3rd January 1996",
    "email": "srp8070@nyu.edu",
    "personalEmail": "sagar.rpandav@gmail.com",
    "phone": "+91 7276457633",
    "about": "I am a hands-on full stack developer with experience in designing and developing websites and applications using a varied range of technologies and programming languages. I have proven ability to build interactive and user friendly websites and applications. I am personally known to be a very hard working, passionate, adaptable and skilled individual, always striving to get better and achieve.",
    "socials": {
        "github": {
            icon: <GitHubIcon/>,
            link: "https://github.com/sagarrpandav",
            text: "sagarrpandav"
        },
        "facebook": {
            icon: <FacebookIcon/>,
            link: "https://www.facebook.com/sagar.pandav.58/",
            text: "sagar.pandav.58"
        },
        "linkedin": {
            icon: <LinkedInIcon/>,
            link: "https://www.linkedin.com/in/sagar-rpandav/",
            text: "sagar-rpandav"
        },
        "instagram": {
            icon: <InstagramIcon/>,
            link: "https://www.instagram.com/sagar.rpandav/",
            text: "sagar.rpandav"
        }
    },
    "experiences": [
        {
            title: 'Software Engineer - Development',
            company: 'Mediaocean',
            location: 'Pune, India',
            date: 'April 2020 - July 2021',
            description: 'Worked as a full-stack developer leveraging backend and frontend technologies such as Java, Spring, Express, NodeJS, Javascript, KnockoutJS ReactJS, for web applications on a daily basis, delivering good quality code in sprints.'
        },
        {
            title: 'Associate Software Engineer - Development',
            company: 'Mediaocean',
            location: 'Pune, India',
            date: 'July 2018 - March 2020',
            description: 'Worked as a full-stack developer web-development technologies to resolve bugs leading to a cleaner codebase.'
        }
    ],
    "education": [
        {
            title: 'Masters in Computer Science',
            location: 'NYU, NYC',
            date: 'Sep 2021 - Present',
            description: 'Studying courses Algorithms, Information Visualization, Artificial Intelligence.'
        },
        {
            title: 'BE Computer Science',
            location: 'PICT, Pune, India',
            date: 'Jun 2014 – Jun 2018',
            description: 'Graduated in Bachelor of Computer Science degree with a first-class with distinction Honours.'
        }
    ],
    skills: [
        {
            title: 'Frontend',
            items: ['HTML'
                , 'JavaScript libraries including KnockoutJS and ReactJS'
                , 'Styling (CSS, SCSS, CSS in JS)'
                , 'React Component Libraries (Bootstrap, Material UI)'
                , 'React State Management using Redux'
                , 'Progressive Web App tools (Service Worker Workbox)']
        },
        {
            title: 'Backend',
            items: ['C++', 'Java', 'JavaScript', 'Python', 'VBScript', 'NodeJS', 'Express', 'Flask', 'Django', 'Spring MVC4', 'Spring Boot', 'Hibernate', 'JPA', 'GraphQL']
        },
        {
            title: 'Databases',
            items: ['MySQL', 'MongoDB', 'Firebase']
        },
        {
            title: 'SRC Control & DW Methodologies',
            items: ['Git', 'GitHub', 'Bitbucket', 'Agile']
        }
    ]

}