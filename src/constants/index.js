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
    starbucks,
    tesla,
    shopify,
    carrent,
    pro1,
    pro2,
    pro3,
    jobit,
    tripguide,
    threejs,
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
      title: "Web Designer",
      icon: web,
    },
    {
      title: "React JS Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
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
      title: "HTML Developer",
      company_name: "SHMT, Noida",
      icon: starbucks,
      iconBg: "#383E56",
      date: "January 2021 - June 2021",
      points: [
        "Developing and maintaining web applications using HTML,CSS, Javacript and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "ReactJS Developer",
      company_name: "Mavenmagnet, New York",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "July 2022 - October 2022",
      points: [
        "Collaborating with a talented team of developers and designers to develop a dashboard using ReactJS, which allowed users to visualize and analyze large sets of data in an intuitive and interactive manner.",
        "Leveraging my proficiency in JavaScript and JQuery to enhance the dashboard’s functionality",
        "Designing and developing graphs using the different libraries present in ReactJS",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "RTL Design Verification And Trainee",
      company_name: "Mavensilicon, Bangalore",
      icon: shopify,
      iconBg: "#383E56",
      date: "19th May, 2023- 26th June, 2023",
      points: [
        "The aim of the project was RISC-V RV321 RTL Design using Verilog HDL",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        " Designing all the submodules using Verilog HDL and integrated the codes in the final code.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Sewanti proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Sewanti does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Sewanti optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Heart Rate Monitoring and Heart Attack Prediction",
      description:
        "Web-based platform with a hardware device that will monitor the heart rate, use ML, to identify any patterns of heart attack and notify the concerned personnel about the condition.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image:pro1,
      source_code_link: "https://github.com/",
    },
    {
      name: "3-Degree of Freedom (DOF) Self Stabilising Platform",
      description:
        "A 3-DOF self-stabilizing platform using PID and Kalman filter to obtain filtered values of the position of MPU6050 as feedback which it then uses to remain in the calibrated position despite a displacement and servo motor.",
      tags: [
        {
          name: "Arduino Uno",
          color: "blue-text-gradient",
        },
        {
          name: "Gyroscope",
          color: "green-text-gradient",
        },
      ],
      image: pro2,
      source_code_link: "https://drive.google.com/file/d/1k3Q1wT-6kx1Vu54_M-hTxr3A1ySYeqfh/view",
    },
    {
      name: "SEES-( Smart Evaluation and Execution System )",
      description:
        "Automating operations like automatic smoke sensing, door opening, initialisation of sprinkler systems, and notifying the owner or the safety or the officer immediately in times of need without human intervention.",
      tags: [
        {
          name: "Arduino",
          color: "blue-text-gradient",
        },
        {
          name: "Smoke Sensors",
          color: "green-text-gradient",
        },
        {
          name: "ESP8266",
          color: "pink-text-gradient",
        },
        {
          name: "IFTTT",
          color: "blue-text-gradient",
        },
      ],
      image: pro3,
      source_code_link: "https://github.com/",
    },
    {
      name: "Speed Control of PMSM Motor Using Fuzzy and PID Controller",
      description:
        " The analysis of the fuzzy and PID control system applied to PMSM is presented in this paper. In order to manage the speed of a phase-controlled converter dc excited motor-generator system, this study compares the PID and the fuzzy logic controller.",
      tags: [
        {
          name: "Simulink",
          color: "blue-text-gradient",
        },
        {
          name: "MATLAB",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },

    {
      name: "Spacecraft Trajectory Optimization",
      description:
        "The aim of the project was to find an optimum path of trajectory, to minimise fuel usage.The objective of this project is to minimize the propellant required or equivalently to maximize the fraction of the spacecraft that is not devoted to propellant so that we can decrease fuel use thus reducing the flight time using Genetic Algorithm.",
      tags: [
        {
          name: "Genetic Algorithm",
          color: "blue-text-gradient",
        },
        {
          name: "MATLAB",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },

    {
      name: "(SPM)-Smart Parking Meter",
      description:
        "The aim of this project was to find free parking spots using IoT and Arduino. It is a smart parking meter that will help you park your car effortlessly at any place in this world. People suffer various problems while reversing the car. This whole project is IOT based. Ultrasonic sensor is used to solve the problem",
      tags: [
        {
          name: "MIT App Inventor",
          color: "blue-text-gradient",
        },
        {
          name: "Arduino",
          color: "green-text-gradient",
        },
        {
          name: "Ultrasonic Sensors",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },

    {
      name: "Comparing the accuracy of various models in predicting diabetes",
      description:
        "In this project, we compared the various neural networks available and determined the most accurate one. As the title of the project goes. A code is written in Python to compare the accuracy of various models in predicting diabetes and it is found that backpropagation gives the best accuracy.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Jupyter",
          color: "green-text-gradient",
        },
        {
          name: "Kaggle",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },

    {
      name: "Quadcopter for Surveillance",
      description:
        "In this project, we designed and assembled a quadcopter and used it for obstacle tracking. We compared the various neural networks available and determined the most accurate one. As the title of the project goes code is written in Python to compare the accuracy of various models in predicting diabetes and it is found that backpropagation gives the best accuracy.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Jupyter",
          color: "green-text-gradient",
        },
        {
          name: "Kaggle",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };