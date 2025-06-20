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
    gym,
    cafe,
    portfolio,
    deni,
    jobit,
    tripguide,
    threejs,
    gsap,
    cleaner,
    smc,
    climeup,
    mui,
    AWS,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
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
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Video Editor",
      icon: mobile,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS ",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Gsap",
      icon: gsap,
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
     {
      name: "MUI",
      icon: mui,
    },
     {
      name: "AWS",
      icon: AWS
    },
  ];
  
  const experiences = [
    {
      title: "React Developer Intern",
      company_name: "Pumo Technovation ,Coimbatore",
      icon: starbucks,
      iconBg: "#383E56",
      date: "June 2024 - December 2024",
      points: [
        "Built and deployed responsive web applications using React, Node.js, Express.js, and MongoDB.",
         "Designed and developed reusable React components to improve development efficiency.",
        "Collaborated with a team to deliver a customer-facing dashboard with seamless user experience and interactive UI elements.",
         "Learned project deployment strategies, code versioning, and collaboration using GitHub."
      ],
    },
    {
      title: "Freelance Web Developer",
      company_name: "Sri Murugan Cafe Website",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "December 2024",
      points: [
        "Designed and developed a fully responsive freelance website for Sri Murugan Cafe, showcasing its brand identity and services.",
       "Used HTML, CSS, JavaScript, and React to create a user-friendly interface with smooth navigation.",
       "Optimized the site for faster load times and better SEO rankings.",
        "Integrated feedback loops with the client to ensure design met expectations."
        
      ],
    },
    {
      title: "OTHER",
      company_name: "others",
      icon: shopify,
      iconBg: "#383E56",
      date: "2024 -2025",
      points: [
        "Created and edited professional-grade videos for promotional content using CapCut and DaVinci Resolve.",
        "Mainly I am good at mobile Editing(Capcut)"
      ],
    },
      {
      title: "Jr Software Engineer",
      company_name: "Climeup",
      icon: climeup,
      iconBg: "#383E56",
      date: "2025 - still",
      points: [
        "In my current role as a Full Stack Developer (Software Engineer), I have gained hands-on experience in advanced web development practices.",

"On the frontend, I work extensively with React using Vite as the build tool. For UI design and components, we use Material UI (MUI).",

"We manage global state using Redux Toolkit and follow modern frontend architecture.",

"On the backend, our team uses NestJS with MongoDB to build scalable APIs. I will be transitioning into backend work soon to contribute end-to-end.",

"We deploy applications using AWS cloud services, and I am actively learning more about DevOps and infrastructure tools.:",

"I continuously explore and integrate new libraries and tools as part of my learning and project work.",

"I contribute primarily to the frontend, but as a full stack developer, I’m expanding my skills to deliver across the entire tech stack.",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Naveen proved me wrong.",
      name: "Bala Murugan",
      designation: "CEO",
      company: "Sri Murugan cafe",
      image: tesla,
    },
    {
      testimonial:
       "I've never met a web developer who genuinely cares about their mentor's success as much as Naveen does.",
      name: "Kowsalya",
      designation: "Tutor",
      company: "PUMO Technovation",
      image: starbucks,
    },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "GYM",
      description:
        "This gym website is a full-stack application with a React frontend and an Express.js backend. It uses MongoDB to store user information and Nodemailer to send email notifications for inquiries.It showcasing efficient full-stack development.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
      ],
      image: gym,
      source_code_link: "https://github.com/SNaweenkumAR/Gym",
      liv_link:"https://gym-steel.vercel.app/",
    },
    {
      name: "SRI MURUGAN CAFE",
      description:
        "Srimurugan Cafe's website features a dynamic video background and an Instagram Reels carousel using Swiper.js. It offers a modern, responsive design with seamless navigation, showcasing the cafe’s ambiance  effectively.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
      ],
      image: smc,
      source_code_link: "https://github.com/SNaweenkumAR/SriMurugan",
      liv_link:"https://sri-murugan.vercel.app/",
    },
    {
      name: "CAFE",
      description:
        "This café website is a frontend project built with React, offering a responsive and engaging user interface. It showcases the café's menu, location, and services, providing visitors with an intuitive browsing experience",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "React-router-dom",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: cafe,
      source_code_link: "https://github.com/SNaweenkumAR/FOOD",
      liv_link:"https://srimurugancafe-demo.netlify.app/",
    },
    {
      name: "CLEANING SERVICE",
      description:
        "Created a modern and responsive cleaning service website using React, Vite, and Tailwind CSS, featuring service listings, pricing details, a contact form, and user-friendly design for seamless navigation and improved customer engagement.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: cleaner,
      source_code_link: "https://github.com/SNaweenkumAR/webnox",
      liv_link:"https://webnox-ten.vercel.app/",
    },
    {
      name: "Demo Portfolio",
      description:
        "During the early stages of learning React, I developed my own portfolio website optimized for large screens. I integrated email functionality using the Web3 API to handle contact form submissions.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/SNaweenkumAR/MY-WEBSITES",
      liv_link:"https://my-websites-tau.vercel.app/"
    },
    {
      name: "Cosmetic",
      description:
        "Developed using HTML, CSS, and Bootstrap, this cosmetic e-commerce website features a design optimized for large screens, allowing users to browse and purchase products seamlessly.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: deni,
      source_code_link: "https://github.com/SNaweenkumAR/Bootstrap",
      liv_link:"https://bootstrap-flame-six.vercel.app/"
    },
    
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };