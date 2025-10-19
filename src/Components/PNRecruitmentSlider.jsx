import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import karachi from "../assets/karachi.webp";
import lahore from "../assets/lahore.webp";
import abbotabad from "../assets/abbotabad.webp";
import multan from "../assets/multan.webp";
import dikhan from "../assets/dikhan.webp";
import faisalabad from "../assets/faisalabad.webp";
import gwadar from "../assets/gwadar.webp";
import peshawar from "../assets/peshawar.webp";

const centers = [
  { name: "Karachi", img: karachi, link: "/karachi" },
  { name: "Lahore", img: lahore, link: "/lahore" },
  { name: "Abbottabad", img: abbotabad, link: "/Abbottabad" },
  { name: "Multan", img: multan, link: "/multan" },
  { name: "D.I. Khan", img: dikhan, link: "/dikhan" },
  { name: "Faisalabad", img: faisalabad, link: "/faisalabad" },
  { name: "Gwadar", img: gwadar, link: "/gwadar" },
  { name: "Peshawar", img: peshawar, link: "/peshawar" },
];

export default function PNRecruitmentCards() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 4,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          perView: 1,
          spacing: 10,
        },
      },
      "(min-width: 769px) and (max-width: 1024px)": {
        slides: {
          perView: 2,
          spacing: 10,
        },
      },
    },
    created(slider) {
      setInterval(() => {
        slider.next();
      }, 2000); // Scroll every 2 seconds
    },
  });

  return (
    <section className="bg-gradient-to-r from-[#1e3a8a] to-[#2b6594]  py-12 px-4">
      <h2 className="text-white text-center text-4xl font-bold mb-10">
        PN Recruitment & Selection Centers
      </h2>

      <div ref={sliderRef} className="keen-slider">
        {centers.map((center, index) => (
          <a
            key={index}
            href={center.link}
            target="_blank"
            rel="noopener noreferrer"
            className="keen-slider__slide rounded-lg overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative w-full h-56">
              <img
                src={center.img}
                alt={center.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 w-full bg-black/60 text-white text-center py-2">
                <h3 className="text-xl font-semibold">{center.name}</h3>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
