import Card from '../components/Card';

const Project = () => {
  const projectData = [
    {
      title: "Netflix GPT",
      description: "An AI-powered movie recommender using OpenAI and TMDB APIs.",
      tech: ["React", "Tailwind", "OpenAI", "Firebase"],
      link: "https://yourprojectlink.com",
      image: "/lap_kid_noBG.png",
    },
    {
      title: "Snake Game",
      description: "A smooth and modern Snake game built using React and canvas with Tailwind UI.",
      tech: ["React", "JavaScript", "Canvas", "Tailwind"],
      link: "https://snakegame.example.com",
      image: "/snake_game_thumbnail.png" 
    },

    {
      title: "Weather App",
      description: "A weather app using OpenWeather API to show real-time data.",
      tech: ["HTML", "CSS", "JavaScript", "API"],
      link: "https://weatherproject.com",
      image: "/weather_icon.png",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-12 px-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-indigo-400 mb-10">💻 My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectData.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
