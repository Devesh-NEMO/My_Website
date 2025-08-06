import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r justify-between from-purple-800 via-black to-indigo-900 text-center text-white px-6 py-4 flex gap-8  ">

      <h2 className="font-bold italic text-left text-2xl justify-baseline ">Devesh Kumar</h2>
      <div className="justify-end flex gap-8">
      <div><Link to="/">Home</Link></div>
      <div><Link to="/about">About</Link></div>
      <div><Link to="/projects">Projects</Link></div>
      <div><Link to="/contact">Contact</Link></div>
      </div>
    </nav>
  );
};

export default Navbar;
