import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Information Technology Analyst",
        company_name: "Binghamton University",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "July 2025 - Present",
        points: [
            "Engineered the integration of AI/ML frameworks (PyTorch, TensorFlow) with large-scale software architectures, enhancing system reliability and scalability.",
            " Leveraged predictive analytics to drive operational efficiency, enabling proactive decision-making and cost reduction.",
            " Designed and implemented solutions using Python, and JavaScript streamlining development workflows and automating critical processes using real-time monitoring.",
            "Collaborated cross-functionally with engineering and data science teams to deploy intelligent simulations, improving system performance and reducing downtime.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Accenture Solutions Pvt Ltd",
        icon: tesla,
        iconBg: "#afafff",
        date: "September 2021 - Feb 2023",
        points: [
            "Developed scalable, fault-tolerant multimodal data pipelines in Python using Kafka and Spark Streaming to ingest text, video, and audio embeddings from LLMs and VLMs.",
            "Integrated PyTorch-based ML workflows to improve the reliability, performance, and accuracy of media search and retrieval systems.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Participating in code reviews and providing constructive feedback to other developers.",
           
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Godaam Innovations Pvt Ltd",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "February 2020 - January 2021",
        points: [
            "Designed and developed robust RESTful APIs using Python and Flask, enabling seamless communication between frontend applications and backend services while ensuring scalability and maintainability.",
            "Built responsive and dynamic user interfaces with React and Tailwind CSS, delivering intuitive experiences across devices and screen sizes while maintaining a consistent design system.",
            "Deployed applications on AWS using EC2 and S3, implementing cloud infrastructure best practices for high availability, performance, and secure data storage.",
            
        ],
    },
    {
        title: "Full Stack Developer Intern",
        company_name: "Friends IT & Software Solutions",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "June 2019 - July 2019",
        points: [
            "Designed intuitive, user-friendly forms that improved the user experience and boosted submissions.",
            "Implemented real-time validation and error handling in forms, minimizing user frustration and decreasing submission errors.",
            "Integrated backend services and APIs to streamline data flow from user inputs to databases, improving reliability and reducing manual processing.",

        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/DavangeSam',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/samruddhi-davange/',
    }
];

export const projects = [
     {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Data Compression',
        description: 'Implemented and evaluated multiple data compression techniques on structured, noisy, and sparse datasets to improve storage efficiency and reconstruction quality, demonstrating trade‑offs between compression ratios and data fidelity.',
        link: 'https://github.com/DavangeSam/Data-Compression-Techniques-for-Structured-Noisy-and-Sparse-Datasets',
    },
      {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'API Gateway',
        description: 'Created a full-stack API Gateway with Rate Limiting and Admin Dashboard, enabling secure API key management, request throttling, and real-time monitoring of API usage.',
        link: 'https://github.com/DavangeSam/API_Gateway',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Peer to Peer Chat System',
        description: 'Developed a peer‑to‑peer chat system enabling real‑time messaging between users using socket programming and network protocols, demonstrating low‑latency communication without a centralized server.',
        link: 'https://github.com/DavangeSam/Peer-to-Peer-Chat-System',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Autism Spectrum Disorder Detection',
        description: 'Developed a Machine Learning system to detect Autism from behavioral and diagnostic data, demonstrating classification performance and analysis of predictive features',
        link: 'https://github.com/DavangeSam/Detection-of-Autism-using-SVM',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Smart Clustering',
        description: 'Implemented a smart clustering system that applies advanced unsupervised learning techniques to segment data into meaningful groups, improving pattern discovery and analysis for structured datasets.',
        link: 'https://github.com/DavangeSam/Smart-Clustering',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Predicting Income Levels',
        description: 'Built a machine learning pipeline using the UCI Adult Income dataset to preprocess demographic data and train classifiers (e.g., Random Forest, XGBoost) that predict whether an individual’s income exceeds $50K annually.',
        link: 'https://github.com/DavangeSam/Predicting-Income-Levels',
    },
    
    
];