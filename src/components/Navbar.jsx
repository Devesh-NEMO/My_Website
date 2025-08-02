import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-b w-screen from-purple-950 text-white px-6 py-4 flex gap-8 text-lg ">
      <div><Link to="/">Home</Link></div>

      <div><Link to="/about">About</Link></div>

      <div><Link to="/projects">Projects</Link></div>
      
      <div><Link to="/contact">Contact</Link></div>
    </nav>
  );
};

export default Navbar;
