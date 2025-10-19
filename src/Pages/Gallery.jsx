import React from "react";
import { Link } from "react-router-dom";

import marine from "../assets/gallery-marine.jpg";
import cadet from "../assets/gallery-cadet.jpg";
import navy from "../assets/gallery-navy.jpeg";
import navy1 from "../assets/gallery-navy1.jpeg";
import navy2 from "../assets/gallery-navy2.jpeg";
import navy3 from "../assets/gallery-navy3.jpeg";
import officer from "../assets/gallery-officer.jpeg";
import officer2 from "../assets/gallery-officer2.jpeg";
import sailor from "../assets/gallery-sailor.jpg";
import navy4 from "../assets/gallery-navy4.webp";
import officer3 from "../assets/gallery-officer3.jpeg";
import airplane from "../assets/airplane.webp";



const images = [
  { src: marine, alt: "Marine Training" },
  { src: cadet, alt: "Cadet Parade" },
  { src: navy, alt: "Navy Personnel" },
  { src: navy1, alt: "Fleet at Sea" },
  { src: navy2, alt: "Navy Formation" },
  { src: navy3, alt: "Naval Base" },
  { src: officer, alt: "Navy Officer" },
  { src: officer2, alt: "Officer Training" },
  { src: sailor, alt: "Sailor Duty" },
  { src: navy4, alt: "Naval Ceremony" },
  { src: officer3, alt: "Senior Navy Officer" },   
  { src: airplane, alt: "Navy Airplane in Flight" } 
];

const Gallery = () => {
  return (
    <section className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-20">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 underline decoration-blue-500">
        Pakistan Navy Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden  "
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-[250px] h-[350px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center w-[250px] h-[350px] justify-center">
  <p className="text-white text-lg font-semibold px-4 text-center">{image.alt}</p>
</div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
