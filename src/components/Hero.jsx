const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white animate-bounceIn"
          data-aos="fade-up"
        >
          Hi, I'm Nikunj
        </h1>
        <p 
          className="text-xl md:text-2xl mb-8 text-gray-300 animate-fadeIn"
          data-aos="fade-up"
        >
          A Passionate Technologist
        </p>
        <a
          href="#about"
          className="inline-block px-12 py-4 bg-gradient-to-r from-red-700 to-yellow-800 text-black font-bold rounded-full text-lg animate-pulse hover:scale-110 hover:shadow-lg hover:shadow-red-500/50 transition-all duration-400"
          data-aos="zoom-in"
        >
          Discover More
        </a>
      </div>
    </section>
  );
};

export default Hero;
