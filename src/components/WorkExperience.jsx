import { motion } from 'framer-motion';

const WorkExperience = () => {
  const experiences = [
    {
      title: "Technical Intern",
      company: "Siemens Technology and Services Private Limited (STSPL)",
      duration: "Feb 2026 – Jul 2026",
      location: "Bengaluru, India · On-site",
      description: [
        "Built CodePulse, a Python CLI automation bot integrating with Azure DevOps (TFS) to monitor pull requests and auto-generate structured wiki documentation via an OpenAI-compatible LLM gateway from C++ headers and READMEs.",
        "Implemented SHA-based incremental caching that skips LLM inference for unchanged files, compressing a full 17-page regeneration (4 min 11 sec) down to ~42 sec for a single-driver change and 18 sec for no-change runs.",
        "Engineered an HTML sanitizer pipeline eliminating 100% of XHTML validation failures across 47 Confluence page push operations, ensuring enterprise-grade knowledge base integrity.",
        "Developed a PR analytics pipeline with PostgreSQL and Jinja2 + Chart.js dashboards, delivering engineering quality insights to 100+ engineers.",
        "Integrated Cppcheck static analysis for complexity metrics, duplication detection, and CWE Top 25 SAST scanning; reduced documentation turnaround from 45–90 min/page to ~30 sec."
      ],
      technologies: ["Python", "OpenAI SDK", "SQLite", "Jinja2", "Confluence API", "Cppcheck"]
    },
    {
      title: "Intern",
      company: "Savybotic Technologies",
      duration: "Jun 2025 – Jul 2025",
      location: "Remote",
      description: [
        "Developed a Cloud-Integrated Fake News Detector using Deep Learning, applying Natural Language Processing techniques to classify and flag misinformation at scale.",
        "Built and trained NLP models leveraging deep learning architectures for text classification, integrating cloud infrastructure for scalable inference."
      ],
      technologies: ["Python", "Deep Learning", "NLP", "Cloud"]
    },
    {
      title: "Full Stack Developer",
      company: "Ceeras IT Services",
      duration: "Feb 2025 – Jun 2025",
      location: "Remote",
      description: [
        "Contributed to the development of a two-sided marketplace application that connects local shopkeepers with consumers in real-time.",
        "Collaborated on building features that allow users to search for products and receive a list of nearby shops stocking them, along with location and directions.",
        "Assisted in implementing the shopkeeper dashboard, where shopkeepers can register, list products, and receive notifications when users search for relevant items."
      ],
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

              {exp.technologies && (
                <div className="mt-4 flex flex-wrap gap-2">
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
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience; 