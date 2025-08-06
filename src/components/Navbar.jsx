import { Link } from "react-router-dom";

const navLinkClass = "hover:text-purple-400 hover:underline transition-all duration-300";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-800 via-black to-indigo-900 text-white px-6 py-4 flex justify-between items-center">
      
      <h2 className="font-bold italic text-2xl">Devesh Kumar</h2>

      <div className="flex gap-8">
        <Link to="/" className={navLinkClass}>Home</Link>
        <Link to="/about" className={navLinkClass}>About</Link>
        <Link to="/projects" className={navLinkClass}>Projects</Link>
        <Link to="/contact" className={navLinkClass}>Contact</Link>
      </div>

    </nav>
  );
};

export default Navbar;
