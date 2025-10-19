import React, { useState } from "react";
import civilian from "../assets/civilian-staff.jpg";
import marine from "../assets/marine.webp";
import mcat from "../assets/mcat.webp";
import pncadet from "../assets/pncadet.webp";
import sailor from "../assets/sailor.webp";
import ssc from "../assets/ssc.webp";

// Card data
const cardData = [
 {
  image: civilian,
  title: "Civilians",
  links: [
    { label: "View Ad", url: "/ads/AD-Civilian-Batch-A-2026.jpg" },
    { label: "View Criteria", url: "/civilian/criteria.pdf" },
    { label: "Register Now", url: "/civilian/register" },
    { label: "Registration Slip", url: "/civilian/slip" },
    { label: "Results", url: "/civilian/results" },
     { label: "IPAS", url: "/civilian/ipas" },
  ],
},

  {
    image: marine,
    title: "Pak Marines",
    links: [
      { label: "Registration Slip", url: "/marine/slip" },
       { label: "Results", url: "/marine/results" },
    ],
  },
  {
    image: mcat,
    title: "M Cadet",
    links: [
      { label: "Registration Slip", url: "/mcadet/slip" },
      { label: "Results", url: "/mcadet/results" }, 
      { label: "IPAS", url: "/mcadet/ipas" },
    ],
  },
  {
    image: pncadet,
    title: "PN Cadet",
    links: [
      { label: "Registration Slip", url: "/pncadet/slip" },
       { label: "Results", url: "/pncadet/results" },
    ],
  },
  {
    image: sailor,
    title: "Sailors",
    links: [
     { label: "Registration Slip", url: "/sailor/slip" },
     { label: "Results", url: "/sailor/results" },,
    ],
  },
  {
    image: ssc,
    title: "SSC",
    links: [
      { label: "Registration Slip", url: "/ssc/slip" },
     { label: "Results", url: "/ssc/results" },,
    ],
  },
];

// Card component
const Card = ({ image, title, links }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className="relative w-[200px] h-[280px] flex-shrink-0 overflow-hidden cursor-pointer shadow-md group"
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
      onClick={() => setShowMenu(!showMenu)}
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col justify-center items-center transition-opacity duration-300 ${
          showMenu ? "opacity-100" : "opacity-0"
        }`}
      >
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            className={`text-xs mb-1 hover:underline ${
              link.label.includes("Ad") ? "text-yellow-400 font-semibold" :
              link.label.includes("Criteria") ? "text-red-500 font-semibold" :
              ""
            }`}
          
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Title */}
      <p className="absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-white text-black px-2 py-0.5 text-xs font-medium rounded shadow">
        {title}
      </p>
    </div>
  );
};

// Civilians section
const Civilians = () => {
  return (
    <div className="w-full px-4 py-6 text-center bg-blue-50">
      {/* Headings */}
      <h1 className="text-4xl font-bold mb-3 mt-7" style={{ color: "#2b6594" }}>
        Careers in Pakistan Navy
      </h1>
      <h3 className="text-[1.75rem] font-semibold text-gray-700 mb-6">
        Latest Advertisement
        <span style={{ color: "red" }}>&nbsp;Civilian Batch A-2026</span>
      </h3>

      {/* Card row */}
      <div className="flex gap-3 justify-center flex-nowrap overflow-hidden">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            links={card.links}
          />
        ))}
      </div>
    </div>
  );
};

export default Civilians;
