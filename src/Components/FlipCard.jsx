import { useEffect, useState } from "react";

const FlipCard = ({ image, title, description, autoFlip = false }) => {
  const [flipped, setFlipped] = useState(false);

  // Auto flip every 2 seconds if enabled
  useEffect(() => {
    let interval;

    if (autoFlip) {
      interval = setInterval(() => {
        setFlipped((prev) => !prev);
      }, 2000); // every 2 seconds
    }

    return () => clearInterval(interval); // cleanup on unmount
  }, [autoFlip]);

  return (
    <div
      className="w-[90vw] sm:w-64 md:w-72 h-80 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full duration-700 transform-style preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-md">
          <img
            src={image}
            alt="Card Front"
            className="w-full h-full "
          />
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-xl shadow-md p-4 flex flex-col justify-center items-center text-center">
          <h2 className="text-lg md:text-xl font-bold mb-2">{title}</h2>
          <p className="text-sm md:text-base text-gray-600 whitespace-pre-line">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
