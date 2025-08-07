const ProjectCard = ({ title, description, tech = [], link, image }) => {
  return (
    <div className="bg-[#1f1f1f] border border-purple-700 rounded-2xl shadow-lg p-6 max-w-md transition-transform duration-300 hover:scale-105 hover:shadow-purple-500/40">
      
      {/* Optional: Project image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-contain rounded-xl mb-4 bg-black"
        />
      )}

      <h2 className="text-2xl font-semibold text-indigo-400 mb-2">{title}</h2>
      <p className="text-gray-300 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span
            key={index}
            className="bg-purple-800 text-white px-3 py-1 rounded-full text-sm"
          >
            {item}
          </span>
        ))}
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
