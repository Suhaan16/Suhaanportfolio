import web1 from "../assets/web1.png";

import gm1 from "../assets/gm1.png";
import gm2 from "../assets/gm2.png";

export const projects = [
  {
    key: 0,
    title: "Dwelio",
    description:
      "A web application that allows users to search for apartments in the Tampa area. Users can filter by price, number of bedrooms, and number of bathrooms. Users can also save apartments to their favorites list and view them later.",
    minidesc:
      "User-friendly web platform that simplifies the house rental process.",
    //pictures: [dw1, dw2, dw3],
    tech: ["ReactJS", "HTML", "CSS", "NodeJS", "PostgreSQL", "Express"],
    // links: ["link1", "link2"],
  },
  {
    key: 1,
    title: "Web Analytics Dashboard and Collector Script",
    description:
      "An analytics dashboard designed to visualize aggregate page load time waterfall data in real-time. Built with a modular backend using Node.js and Express, it includes a RESTful API and a MongoDB database. The dashboard provides granular insights into web performance metrics for administrators and standard users. A web application that allows users to search for apartments in the Tampa area. Users can filter by price, number of bedrooms, and number of bathrooms. Users can also save apartments to their favorites list and view them later.",
    minidesc:
      "Users can track individual request timings (DNS, TLS, TTFB, etc.) and compare load performance across sessions or users. An authentication system using Passport.js enforces admin privileges for managing users or viewing enhanced metrics.",
    pictures: [web1],
    tech: ["ReactJS", "HTML", "CSS", "NodeJS", "MongoDB", "Express"],
    //links: ["link1", "link2"],
  },
  {
    key: 2,
    title: "Artificial Intelligence to play Gomoku ",
    description:
      "An intelligent agent designed to play the board game Gomoku using advanced decision-making algorithms. The AI was implemented in Python and utilizes Monte Carlo Tree Search (MCTS) with a computational budget to simulate and evaluate game plays. To enhance performance, the search strategy was augmented with Temporal Difference (TD) Learning, allowing the model to predict and refine state values over time, leading to more strategic and human-like gameplay..",
    minidesc:
      "AI-powered Gomoku player combining Monte Carlo Tree Search and TD Learning.",
    pictures: [gm1, gm2],
    tech: ["Python", "Monte Carlo Tree Search", "TD Learning", "NumPy", "pandas", "Matplotlib"],
    //links: ["link1", "link2"],
  },
  {
    key: 3,
    title: "Placement Portal",
    description:
      "A web applicaton designed to help scores of students to get hired by tech companies. The portal is a one stop solution, allowing students to register and apply for jobs, and departments to keep track of validated and up to date applications.",
    minidesc:
      "Web application for on-campus recruitment, eliminating redundant groups and forms. Get hired with Placement Portal!",
    //pictures: ["link1", "link2"],
    tech: ["ReactJS", "Flask", "HTML", "Python", "CSS", "PostgreSQL"],
    //links: ["link1", "link2"],
  },
];

// {
//   key: 3,
//   title: "Project Title 3",
//   description: "desc",
//   minidesc: "dsfdsfsdg erer ert",
//   pictures: ["link1", "link2"],
//   tech: ["react", "python", "css"],
//   links: ["link1", "link2"],
// },
// {
//   key: 4,
//   title: "Secure Parkk",
//   description: "A full stack application that tracks user parkng using RF technology. The application allows users to register their vehicles and park in a designated parking spot. The application also allows users to pay for parking and track their parking history.",
//   minidesc: "Secure Parkk is a full stack application that tracks user parking using RF technology.",
//   pictures: ["link1", "link2"],
//   tech: ["react", "python", "html"],
//   links: ["link1", "link2"],
// },
// {
//   key: 5,
//   title: "Project Title 5",
//   description: "desc",
//   minidesc: "dsfdsfsdg erefr erwer ",
//   pictures: ["link1", "link2"],
//   tech: ["react", "python", "html"],
//   links: ["link1", "link2"],
// },