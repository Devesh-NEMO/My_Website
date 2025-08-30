import { useState } from "react";
import { Link } from "react-router-dom";

const navLinkClass = "hover:text-purple-400 hover:underline transition-all duration-300";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-800 via-black to-indigo-900 text-white px-6 py-4 flex justify-between items-center relative">

      <h2>
        <Link className="font-bold italic text-2xl" to="/">Devesh Kumar</Link>
      </h2>

      {/* Desktop links */}
      <div className="hidden md:flex gap-8">
        <Link to="/" className={navLinkClass}>Home</Link>
        <Link to="/about" className={navLinkClass}>About</Link>
        <Link to="/projects" className={navLinkClass}>Projects</Link>
        <Link to="/contact" className={navLinkClass}>Contact</Link>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="absolute top-16 right-6 bg-black/90 backdrop-blur-md rounded-lg flex flex-col gap-4 p-6 md:hidden shadow-lg">
          <Link to="/" className={navLinkClass} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className={navLinkClass} onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/projects" className={navLinkClass} onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/contact" className={navLinkClass} onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
