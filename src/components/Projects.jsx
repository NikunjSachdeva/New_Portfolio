import { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 9,
      title: 'DevTok (Social Media Platform for Developers)',
      image: '/assets/DevTok.png',
      description: ['Developing a full-stack application where users can upload code snippets with videos; backend built using FastAPI, Cloudinary database(for videos) and Firebase Firestore(for metadata) are used, frontend in React. ',
'Handled video uploads using Cloudinary and implemented REST APIs to manage user snippets, code, and metadata securely',
'Designed a clean interface in React to display uploaded snippets, embed video previews, show comments, and leveraged LLMs API to generate theory/codebased quizzes and video explanations in simplest terms. ',
],
      note: '',
      // githubLink: 'https://github.com/StyleSens-AI',
      // liveLink: 'https://stylesens-ai-demo.com'
    },
    {
      id: 8,
      title: 'StyleSens AI(Smart Fashion Recommendation System)',
      image: '/assets/Style Sensei.png',
      description: ['Built a Machine-Learning-powered fashion recommendation system that detects facial features and suggests color-coordinated outfits using skin tone analysis with over 90% face detection accuracy using InsightFace. ',
'Integrated color harmony rules (complementary, analogous, neutral) to generate over 500+ logical outfit combinations, improving visual style coherence and user satisfaction.',
'Engineered backend in Python using OpenCV, NumPy, and Matplotlib, and optimized it to generate 5 best-matched outfits from 30+ filtered clothing items based on users gender, usage, and skin tone. ',
'Leveraged version control (Git) and unit testing, reducing errors by 30%, enhancing scalability.'],
      note: '',
      githubLink: 'https://github.com/NikunjSachdeva/Fashion1',
      // liveLink: 'https://stylesens-ai-demo.com'
    },
    {
      id: 7,
      title: 'Landslide Fatality Prediction',
      image: '/assets/Disaster.png',
      description: ['This system predicts Fatalities if a landslide would occur in the region. ',
'It takes in account of various parameters like :',
'1.Real time Elevation 2.Real time rainfall data 3.Historical landslide records 4.Previous fatality records ',
'These all parameters are then combined to predict fatalities.'],
      note: '',
      githubLink: 'https://github.com/NikunjSachdeva/landslide_final',
      // liveLink: 'https://landslide-prediction-demo.com'
    },
    {
      id: 6,
      title: 'Advanced Rainfall Prediction Pipeline',
      image: '/assets/Disaster.png',
      description: ['Processed and analyzed 33 years of high-resolution IMD gridded rainfall data (1992–2024), covering 12054 days and a spatial grid of 129×135 points (over 1.7 million data points per year).',
'Developed and automated a robust data pipeline to convert raw binary rainfall files into xarray DataArrays, handling missing values and enabling efficient multi-year analysis and visualization.',
'Engineered and trained a high-performance deep learning model (over 200 epochs) for daily rainfall prediction, achieving a mean absolute error (MAE) below 0.005 (normalized scale) and supporting predictions up to 77.1 mm/day.',
'Implemented a forecasting tool capable of generating spatial rainfall predictions for any date and location in India with visual outputs and post-processing for practical climate analysis.'],
      note: '',
      githubLink: 'https://github.com/NikunjSachdeva/rainfall_prediction',
      // liveLink: 'https://rainfall-prediction-demo.com'
    },
    {
      id: 1,
      title: 'Disaster Guard(Crowd-Sourced Disaster Reporting tool)',
      image: '/assets/Disaster.png',
      description: 'This project is a web-based application designed to streamline real-time disaster reporting, allowing users to submit incident reports and view live updates on an interactive map. It features dynamic heatmaps, real-time location tracking, and user-generated disaster data to assist responders and authorities in identifying high-risk areas quickly. Additionally, the platform incorporates an AI-powered assistant to provide disaster preparedness guidance, safety tips, and response strategies during emergencies. This solution enhances situational awareness and ensures a more coordinated disaster management approach.',
      note: '',
      githubLink: 'https://github.com/NikunjSachdeva/Disaster_Reporting',
      liveLink: 'https://crowd-sourced-disaster-reporting.onrender.com/'
    },
    {
      id: 2,
      title: 'DeFiSensei (@DeFiMasterSenseiBot on Telegram)',
      image: '/assets/DeFiSensei.png',
      description: 'Created DeFiSensei, a versatile Telegram bot that offers users a wealth of financial information and updates. By connecting with multiple news APIs, the bot provides personalized market insights and news tailored to user preferences. It also incorporates LLaMA models to deliver AI-driven responses to a wide range of finance-related inquiries.',
      note: 'However, the bot is currently running on a local server, which limits its ability to operate 24/7.',
      githubLink: 'https://github.com/NikunjSachdeva/DefiSensei_Bot',
      liveLink: 'https://t.me/DeFiMasterSenseiBot'
    },
    {
      id: 3,
      title: 'AUTHME (CERTIFICATE GENERATION & VALIDATION)',
      image: '/assets/AUTHME.png',
      description: 'This project is a web application designed to automate the generation and distribution of bonafide certificates for students. It uses Flask as the backend framework, SQLite for the database, and HTML/CSS with Jinja2 for the frontend. Security features include Werkzeug for password hashing and PyOTP for two-factor authentication. The application generates PDF certificates using ReportLab and embeds QR codes generated with the qrcode library. It utilizes smtplib and MIME for email services to send certificates to students.',
      note: '',
      githubLink: 'https://github.com/NikunjSachdeva/AUTHME-Project-QR-Code',
      // liveLink: 'https://authme-demo.com'
    },
    {
      id: 4,
      title: 'DECENTRALIZED VOTING SYSTEM (DVS)',
      image: '/assets/DVS.png',
      description: 'The Decentralised Voting System was developed on the Ethereum blockchain and was based on Flask and Web3.py for integration with Ethereum smart contracts. SQLite3 database and Solidity language were used for user management and smart contract development. Create a ballot, add a political party, and vote features were also added.',
      note: 'Despite guidance from mentors, we encountered significant challenges with gas limits, which provided valuable insights into the complexities of decentralized systems.',
      githubLink: 'https://github.com/NikunjSachdeva/Decentralized-Voting-System',
      // liveLink: 'https://dvs-demo.com'
    },
    {
      id: 5,
      title: 'Gas Cylinder Management System (GCMS)',
      image: '/assets/GCMS.png',
      description: 'The elements (GCMS) it incorporated were intended to improve order processing and return scheduling so that the efficiency of the operation could be maximized. Python with SQLite was utilized for database management, and Tkinter was used for user interface design.',
      note: '',
      githubLink: 'https://github.com/NikunjSachdeva/Gas-Cylinder-Management-System',
      // liveLink: 'https://gcms-demo.com'
    }
  ];

  const toggleProject = (id) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white gradient-text"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              className="group bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-all duration-500 hover:shadow-yellow-500/50 hover:transform hover:scale-105 flex flex-col"
            >
              {/* Image Container with Hover Effect */}
              <div className="relative overflow-hidden flex-grow-0 w-full flex items-center justify-center bg-gray-800 p-4">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="max-w-full max-h-64 object-scale-down transition-transform duration-500 group-hover:scale-110"
                  style={{ width: 'auto', height: 'auto' }}
                  whileHover={{ scale: 1.1 }}
                />
              </div>
              
              <div className="p-6 flex-grow">
                <motion.h5 
                  className="text-xl font-bold mb-4 text-yellow-400 gradient-text"
                  whileHover={{ scale: 1.05 }}
                >
                  {project.title}
                </motion.h5>
                <motion.p 
                  className={`text-gray-400 mb-4 ${activeProject === project.id ? 'block' : 'line-clamp-3'}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {Array.isArray(project.description) 
                    ? project.description.map((desc, index) => (
                        <span key={index} className="block mb-2">{desc}</span>
                      ))
                    : project.description}
                </motion.p>
                {project.note && (
                  <motion.p 
                    className="italic text-yellow-400 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.note}
                  </motion.p>
                )}
                <div className="flex gap-4">
                  <motion.a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-hover px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition-colors duration-300 flex-1 text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                  </motion.a>
                  {project.liveLink && (
                    <motion.a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-hover px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition-colors duration-300 flex-1 text-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;