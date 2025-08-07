const About = () => {
  return (
    <section id="about" className="about px-6 py-12 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">👋 About Me</h1>

      <p className="text-lg leading-relaxed">
        Hey! I’m <span className="font-semibold">Devesh Kumar</span>, also known online as <span className="italic">Nemo</span> — a passionate web developer who loves turning ideas into powerful, interactive digital experiences.<br /><br />
        I’m currently focused on building responsive web apps using modern tools like <span className="font-semibold">React.js</span>, <span className="font-semibold">Node.js</span>, and <span className="font-semibold">Tailwind CSS</span>...<br /><br />
        If you're looking for someone curious, motivated, and always ready to learn — <span className="font-semibold">please give me a chance to prove myself</span>. Let’s build something amazing together. 🚀
      </p>

      {/* Skills Section */}
      <h2 className="text-3xl font-bold mt-12 mb-4">🛠 Skills</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-lg">
        <li>JavaScript (ES6+)</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Tailwind CSS</li>
        <li>HTML5 / CSS3</li>
        <li>MongoDB</li>
        <li>Firebase</li>
        <li>Git & GitHub</li>
        <li>REST APIs</li>
        <li>Socket.IO</li>
        <li>Vite</li>
      </ul>
    </section>
  );
};

export default About;
