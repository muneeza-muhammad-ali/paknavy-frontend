// src/Pages/PNRSCS.jsx

import React from "react";
import FlipCard from "../Components/FlipCard";

import karachi from "../assets/karachi.webp";
import lahore from "../assets/lahore.webp";
import multan from "../assets/multan.webp";
import peshawar from "../assets/peshawar.webp";
import dikhan from "../assets/dikhan.webp";
import faisalabad from "../assets/faisalabad.webp";
import abbotabad from "../assets/abbotabad.webp";
import gwadar from "../assets/gwadar.webp";

const centers = [
  {
    image: karachi,
    title: "Karachi Selection Center",
    description: `📍 Address:
7 Liaquat Barracks,
Rafiqui Shaheed Road,
Near Lucky Star, Saddar, KARACHI

📞 Phone:
021-48506703-4

📧 Email:
nro-karachi@paknavy.gov.pk`,
    note:
      "Welcome to the Karachi Selection & Training Center of the Pakistan Navy. Here, you can initiate your application process or visit for registration.",
  },
  {
    image: lahore,
    title: "Lahore Selection Center",
    description: `📍 Address:
92 Shami Road, Near Fortress Stadium, LAHORE Cantt

📞 Phone:
042-66961409-10

📧 Email:
nro-lahore@paknavy.gov.pk`,
    note:
      "Visit the Lahore center for Navy recruitment and selection. Apply, get test details, and verify documents.",
  },
  {
    image: multan,
    title: "Multan Selection Center",
    description: `📍 Address:
Naval Selection Center, 18-A Sher Shah Road, Multan Cantt

📞 Phone:
061-9330584

📧 Email:
nro-multan@paknavy.gov.pk`,
    note:
      "The Navy center in Multan manages selection for South Punjab region. Apply here for tests and medical procedures.",
  },
  {
    image: peshawar,
    title: "Peshawar Selection Center",
    description: `📍 Address:
Naval Office, Near Saddar Bazar, Peshawar Cantt

📞 Phone:
091-9210567

📧 Email:
nro-peshawar@paknavy.gov.pk`,
    note:
      "This center serves all KPK students wishing to join Pak Navy. Visit or apply online.",
  },
  {
    image: dikhan,
    title: "D.I. Khan Selection Center",
    description: `📍 Address:
Naval Office, Near Commissioner's Office, Dera Ismail Khan

📞 Phone:
0966-9280280

📧 Email:
nro-dikhan@paknavy.gov.pk`,
    note:
      "DI Khan center handles recruitment for southern KPK and tribal areas. Get guidance and register here.",
  },
  {
    image: faisalabad,
    title: "Faisalabad Selection Center",
    description: `📍 Address:
PN Recruitment Office, Susan Road, Faisalabad

📞 Phone:
041-9200363

📧 Email:
nro-faisalabad@paknavy.gov.pk`,
    note:
      "This center supports youth from Central Punjab in Navy recruitment and application process.",
  },
  {
    image: abbotabad,
    title: "Abbotabad Selection Center",
    description: `📍 Address:
Near PMA Kakul Road, Abbottabad Cantt

📞 Phone:
0992-9310164

📧 Email:
nro-abbottabad@paknavy.gov.pk`,
    note:
      "Recruitment and selection center for Northern Pakistan and KPK candidates.",
  },
  {
    image: gwadar,
    title: "Gwadar Selection Center",
    description: `📍 Address:
PN Base PNS AKRAM, Near Marine Drive, Gwadar

📞 Phone:
086-9200630

📧 Email:
nro-gwadar@paknavy.gov.pk`,
    note:
      "Gwadar center focuses on recruitment of Balochistan locals. Visit for full Navy guidance.",
  },
];

function PNRSCS() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-sky-700 to-cyan-700 drop-shadow-lg mb-10">
        Pakistan Navy Selection & Recruitment Centers
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {centers.map((center, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            <FlipCard
              image={center.image}
              title={center.title}
              description={center.description}
              autoFlip={true}
            />
            <p className="text-center max-w-sm text-gray-700 font-medium italic">
              {center.note}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PNRSCS;
