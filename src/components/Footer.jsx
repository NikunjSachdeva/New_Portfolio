const Footer = () => {
  return (
    <footer className="py-6 bg-gradient-to-br from-black to-gray-900 text-center">
      <div className="container mx-auto px-4">
        <p className="text-gray-400 mb-2">
          &copy; {new Date().getFullYear()} Nikunj's Portfolio
        </p>
        <a
          href="#"
          className="text-red-400 hover:text-red-300 transition-colors duration-300"
        >
          Back to Top
        </a>
      </div>
    </footer>
  );
};

export default Footer;