const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          RESUME
        </h1>

        <div className="max-w-4xl mx-auto">
          {/* Education */}
          <div className="mb-12" data-aos="fade-up">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Education</h3>
            <hr className="border-gray-700 mb-6" />
            <div className="bg-gray-800 rounded-lg p-6 mb-4 shadow-lg">
              <strong className="block text-xl text-white">Bachelor of Technology in Computer Science and Engineering</strong>
              <span className="block text-gray-300 mt-1">Specialization: Artificial Intelligence and Machine Learning</span>
              <span className="block text-gray-300">Manipal University Jaipur</span>
              <span className="block text-gray-300">Graduation: 2026</span>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 mb-4 shadow-lg">
              <strong className="block text-xl text-white">Senior Secondary School</strong>
              <span className="block text-gray-300 mt-1">Sky Hawk International School, New Delhi</span>
              <span className="block text-gray-300">Graduated: March 2022</span>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <strong className="block text-xl text-white">Matric/High School</strong>
              <span className="block text-gray-300 mt-1">Delhi Public School, Bhiwani, Haryana</span>
              <span className="block text-gray-300">Graduated: March 2020</span>
            </div>
          </div>

          {/* Volunteering */}
          <div className="mb-12" data-aos="fade-up">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Volunteering</h3>
            <hr className="border-gray-700 mb-6" />
            <div className="bg-gray-800 rounded-lg p-6 mb-4 shadow-lg">
              <strong className="block text-xl text-white">Treasurer</strong>
              <span className="block text-gray-300 mt-1">INDGenius MUJ | Manipal University Jaipur</span>
              <p className="text-gray-300 mt-2">
                As Treasurer of at INDGenius MUJ Chapter, I efficiently managed financial planning, budgeting,
                and resource allocation to support the organization's initiatives. My role involved ensuring transparency and
                accountability in financial operations while enabling the successful execution of impactful events and
                programs.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <strong className="block text-xl text-white">Deputy Director of Outreach</strong>
              <span className="block text-gray-300 mt-1">INDGenius MUJ | Manipal University Jaipur</span>
              <p className="text-gray-300 mt-2">
                As Deputy Director of Outreach at INDGenius MUJ Chapter, I lead strategic initiatives to expand our
                reach and engage with diverse students. I collaborate with team members to increase and foster community connections.
                Together, we aim to raise awareness and drive impact in our mission-driven initiatives.
              </p>
            </div>
          </div>

          {/* Certifications and Awards */}
          <div data-aos="fade-up">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Certifications and Awards</h3>
            <hr className="border-gray-700 mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
                <strong className="block text-white">Data Structures University Of California San Diego</strong>
                <span className="text-gray-300">Coursera, Nov 2023</span>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
                <strong className="block text-white">DP Database Programming With SQL Learner - English</strong>
                <span className="text-gray-300">Oracle academy, Nov 2023</span>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
                <strong className="block text-white">DFo Database Foundations Learner - English</strong>
                <span className="text-gray-300">Oracle academy, Oct 2023</span>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
                <strong className="block text-white">Introduction to Web Development with HTML, CSS, JavaScript</strong>
                <span className="text-gray-300">Coursera, June 2024</span>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
                <strong className="block text-white">Introduction to Cloud Computing</strong>
                <span className="text-gray-300">Coursera, June 2024</span>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
                <strong className="block text-white">Coding Contest Code-It-On by IEEE</strong>
                <span className="text-gray-300">Manipal University Jaipur, 2023</span>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
                <strong className="block text-white">LNMHacks 6.0 Hackathon</strong>
                <span className="text-gray-300">LNMIIT Jaipur, 2024</span>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
                <strong className="block text-white">Introduction to Computer Vision and Image Processing</strong>
                <span className="text-gray-300">Coursera, 2025</span>
              </div>
            </div>
            <a
              href="/assets/CV.pdf"
              download
              className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white font-bold rounded-lg shadow-lg hover:shadow-yellow-500/50 transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;