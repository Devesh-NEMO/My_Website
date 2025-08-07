const Footer = () => {
  return (
    <footer className="bg-white/5 backdrop-blur-md border-t border-white/10 text-center text-gray-300 py-4 mt-auto text-sm flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
      <p>
        © {new Date().getFullYear()} Devesh Kumar. All rights reserved.
      </p>
      <div className="flex gap-4">
        <a
          href="https://github.com/Devesh-NEMO"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/dk2002/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          LinkedIn
        </a>
        
      </div>
    </footer>
  );
};

export default Footer;
