import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start pt-20 md:pt-28 overflow-x-hidden text-white px-4 md:px-12">
      {/* Row: Intro + Image */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-8 mt-4">
        
        {/* LEFT: Intro */}
        <div className="flex flex-col text-center md:text-left md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Hi, my name is <span className="text-indigo-400">Devesh</span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-3xl mb-6">
            and I am a{" "}
            <TypeAnimation
              sequence={[
                "React", 2000,
                "JavaScript", 2000,
                "Gen-Ai", 2000,
                "Python", 2000,
                "Frontend", 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-indigo-400"
            />{" "}
            developer.
          </h2>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-6 mt-4">
            <a
              href="https://github.com/Devesh-NEMO"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl sm:text-3xl hover:text-indigo-400 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/dk2002/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl sm:text-3xl hover:text-indigo-400 transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/lap_kid_noBG.png"
            alt="Developer"
            className="w-48 sm:w-60 md:w-80"
          />
        </div>
      </div>

      {/* Download Button */}
      <div className="mt-8 text-center pb-5">
        <h3 className="text-xl sm:text-2xl font-semibold mb-3">Download</h3>
        <a
          href="/Devesh_Kumar.pdf"
          download
          className="bg-purple-600 text-white font-bold px-5 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg hover:bg-purple-900 transition-all duration-300"
        >
          Resume
        </a>
      </div>
      
    </div>
  );
};

export default Home;
