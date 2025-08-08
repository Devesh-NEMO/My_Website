import Card from '../components/Card';

const Project = () => {
  const projectData = [
    {
      title: "Netflix GPT",
      description: "An AI-powered movie recommender using OpenAI and TMDB APIs. --(Work In progress!)--  ",
      tech: ["React", "Tailwind", "OpenAI", "Firebase"],
      link: "https://yourprojectlink.com",
      link1: "https://github.com/Devesh-NEMO/Netflix_GPT",
      image: "/lap_kid_noBG.png",
    },
    {
      title: "Snake Game",
      description: "A smooth and modern Snake game built using React and canvas with Tailwind UI.",
      tech: ["React", "JavaScript", "Canvas", "Tailwind"],
      link: "https://snake-game-2-0-beta.vercel.app/",
      link1: "https://github.com/Devesh-NEMO/Snake_game-2.0",
      image: "/snake_game.png" 
    },
    {
      title: "Task Tracker",
      description: "A task management application to efficiently add, track, and organize daily tasks.",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      link: "https://task-tracker-tv1w.vercel.app",
      link1: "https://github.com/Devesh-NEMO/task_tracker",
      image: "/TaskTrackercopy.png"
    },
    {
      title: "Weather App",
      description: "A weather app using OpenWeather API to show real-time data.",
      tech: ["HTML", "CSS", "JavaScript", "API"],
      link: "https://weather-app-phi-five-66.vercel.app",
      link1: "https://github.com/Devesh-NEMO/WeatherApp_",
      image: "/weather.png",
    },
  ];

  return (
    <div className="min-h-screen w-full overflow-y-auto text-white py-12 px-6 flex flex-col items-center">
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
