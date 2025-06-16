import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    'CLOUD(GCP, AWS etc)',
    'PYTHON(FastAPI)',
    'MACHINE/DEEP LEARNING',
    'REACTJS',
    'COMPUTER VISION',
    'NATURAL LANGUAGE PROCESSING'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white gradient-text"
        >
          Skills
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(234, 179, 8, 0.3)"
              }}
              className="card-hover bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-yellow-500/30 transition-all duration-300"
            >
              <motion.p 
                className="text-xl font-medium text-center text-yellow-400 gradient-text"
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;