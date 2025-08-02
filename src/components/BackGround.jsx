import { useEffect, useState } from "react";

const StarBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const totalStars = Math.floor(window.innerWidth * 0.25);
      const newStars = [];

      for (let i = 0; i < totalStars; i++) {
        newStars.push({
          id: i,
          top: Math.random() * 100,
          left: Math.random() * 100,
          size: Math.random() * 1 + 1,
          duration: Math.random() * 4 + 4,
          delay: Math.random() * -5,
        });
      }

      setStars(newStars);
    };

    generateStars();
    window.addEventListener("resize", generateStars);

    return () => window.removeEventListener("resize", generateStars);
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white opacity-70 animate-ping "
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
