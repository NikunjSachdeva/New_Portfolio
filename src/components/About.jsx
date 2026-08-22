const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
          data-aos="fade-right"
        >
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="w-full lg:w-1/3 flex justify-center" data-aos="fade-right">
            <img
              src="/assets/PP.png"
              alt="About Me"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-xl shadow-red-500/50 hover:rotate-6 hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="w-full lg:w-2/3" data-aos="fade-left">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Hi, I'm Nikunj Sachdeva, a Computer Science Engineering graduate (AI/ML) from Manipal University Jaipur
              (Class of 2026). I recently completed a Technical Internship at Siemens STSPL in Bengaluru, where I built
              CodePulse — an LLM-powered CLI tool that auto-generates XHTML-compliant Confluence documentation from C++
              source code, cutting documentation turnaround by 98%. I'm passionate about Generative AI, Large Language
              Models, and building full-stack applications that solve real engineering problems. My work spans RAG
              pipelines, deep learning systems, and developer-focused platforms, always driven by a focus on performance
              and practical impact. I'm dedicated to continuously pushing the boundaries of what AI can do in
              production environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;