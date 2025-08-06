
import { TypeAnimation } from "react-type-animation";
import About from "./About";

const Home = () => {
  return (
    <>
    <div className="flex flex-col justify-center h-screen text-white text-left px-4 pl-20 pb-50 ">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Hi, my name is <span className="text-indigo-400">Devesh</span>
      </h1>
      <h2 className="text-xl md:text-3xl">
        and I am a{" "}
        <TypeAnimation
          sequence={[
            "Frontend", 2000,
            "React", 2000,
            "JavaScript", 2000,
            "Python", 2000,
            "Full Stack", 2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-indigo-400"
        />{" "}
        developer.
      </h2>
    </div>
    
    
    </>
  );
};

export default Home;

