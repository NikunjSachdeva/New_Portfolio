import { motion } from 'framer-motion';

const WorkExperience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Ceeras IT Services",
      duration: "Feb 2025 - June 2025",
      location: "Remote",
      description: [
        "Contributed to the development of a two-sided marketplace application that connects local shopkeepers with consumers in real-time.",
        "Collaborated on building features that allow users to search for products and receive a list of nearby shops stocking them, along with location and directions.",
        "Assisted in implementing the shopkeeper dashboard, where shopkeepers can register, list products, and receive notifications when users search for relevant items."
      ],
      // technologies: ["Tech1", "Tech2", "Tech3"]
    },
    
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white gradient-text"
        >
          Work Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-yellow-500/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">{exp.title}</h3>
                  <p className="text-gray-300 font-semibold">{exp.company}</p>
                  <p className="text-gray-400">{exp.location}</p>
                </div>
                <p className="text-gray-300 font-medium">{exp.duration}</p>
              </div>

              <div className="mt-4">
                <ul className="list-disc list-inside space-y-2">
                  {exp.description.map((item, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="text-gray-300"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* <div className="mt-4 flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="px-3 py-1 bg-gray-700 text-yellow-400 rounded-full text-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience; 