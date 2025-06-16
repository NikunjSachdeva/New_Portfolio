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
              Hi, I'm Nikunj Sachdeva, a 4th year Computer Science Engineering student specializing in Artificial
              Intelligence and Machine Learning at Manipal University Jaipur. I'm passionate about leveraging technology
              to create innovative solutions, particularly in Deep Learning and Natural Language Processing. I thrive on
              the satisfaction of seeing my projects come to life and function effectively, which drives my motivation to
              tackle complex challenges. I am currently working on a solo application based project that uses Python(FastAPI) 
              as backend and Reactjs as frontend, a full stack Social Media Platform for developers with code sharing, explaining 
              videos/snippets and much more. My goal is to contribute to impactful projects that shape the future of technology and positively impact society.
              I am dedicated to continuously expanding my skills
              and knowledge to achieve this.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;