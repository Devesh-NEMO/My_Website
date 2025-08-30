const About = () => {
  return (
    <section
      id="about"
      className="px-6 py-16 max-w-6xl mx-auto text-white"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
          👋 About Me
        </h1>
        <p className="mt-3 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
          Get to know who I am, what I do, and the tools I love building with.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* LEFT: Intro */}
        <div>
          <p className="text-base sm:text-lg leading-relaxed text-gray-200">
            Hey! I’m{" "}
            <span className="font-semibold text-indigo-400">Devesh Kumar</span>, 
            also known online as{" "}
            <span className="italic text-purple-400">Nemo</span> — a passionate
            web developer who loves turning ideas into powerful, interactive
            digital experiences. 🚀
          </p>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-gray-300">
            I specialize in building **modern, responsive web apps** with{" "}
            <span className="font-semibold text-indigo-400">React.js</span>,{" "}
            <span className="font-semibold text-indigo-400">Node.js</span>, and{" "}
            <span className="font-semibold text-indigo-400">Tailwind CSS</span>.
            Over time, I’ve worked on projects ranging from small interactive
            apps to larger full-stack solutions — always with a focus on clean
            design, performance, and smooth user experience.
          </p>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-gray-300">
            Beyond coding, I’m someone who thrives on **continuous learning** —
            whether it’s exploring new frameworks, diving into Gen-AI
            integrations, or sharpening my problem-solving skills through real-world challenges.  
            My goal is simple: to grow into a developer who can **blend creativity and logic**
            to craft digital products that actually make an impact.
          </p>
        </div>

        {/* RIGHT: Skills */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-indigo-400">
            🛠 Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "JavaScript (ES6+)",
              "React.js",
              "Node.js",
              "Express.js",
              "Tailwind CSS",
              "HTML5 / CSS3",
              "MongoDB",
              "Firebase",
              "Git & GitHub",
              "REST APIs",
              "Socket.IO",
              "Vite",
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800 hover:bg-indigo-600 rounded-lg text-sm sm:text-base font-medium shadow-md transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
