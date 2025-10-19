// src/Pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import NavyVideo from '../Components/NavyVideo';
import Card from '../Components/Card';
import police from '../assets/4.webp';
import quaid from '../assets/2.webp';
import camando from '../assets/1.webp';
import navy from '../assets/3.webp';
import FaqSection from '../Components/FaqSection';
import Civilians from '../Components/Civilians';
import Marquee from '../Components/Marquee';
import QuoteCard from '../Components/QuoteCard';
import PakistanMap from '../Components/PakistanMap';
import PNRecruitmentSlider from '../Components/PNRecruitmentSlider';


// assests images
import karachi from "../assets/karachi.webp";
import lahore from "../assets/lahore.webp";
import abbotabad from "../assets/abbotabad.webp";
import multan from "../assets/multan.webp";
import dikhan from "../assets/dikhan.webp";
import faisalabad from "../assets/faisalabad.webp";
import gwadar from "../assets/gwadar.webp";
import peshawar from "../assets/peshawar.webp";

// Flip card data
const cardData = [
  { image: karachi, title: "Karachi Center", description: "Naval training and recruitment in Karachi.", to: "/karachi" },
  { image: lahore, title: "Lahore Center", description: "Pak Navy's selection center in Lahore.", to: "/lahore" },
  { image: abbotabad, title: "Abbottabad Center", description: "Recruitment and training at Abbottabad.", to: "/abbottabad" },
  { image: multan, title: "Multan Center", description: "Training center in South Punjab region.", to: "/multan" },
  { image: dikhan, title: "D.I. Khan Center", description: "Navy selection activities in D.I. Khan.", to: "/dikhan" },
  { image: faisalabad, title: "Faisalabad Center", description: "Punjab recruitment and outreach.", to: "/faisalabad" },
  { image: gwadar, title: "Gwadar Center", description: "Coastal training and operations center.", to: "/gwadar" },
  { image: peshawar, title: "Peshawar Center", description: "Navy recruitment in Khyber Pakhtunkhwa.", to: "/peshawar" },
];

const careers = [
  { title: "Announcement of Sailor Batch B-2025.", image: navy },
  { title: "Entrance Test Result of Sailor Batch B-2025 has been uploaded.", image: police },
  { title: "Entrance result of SSC 2025-B has been uploaded online.", image: quaid },
  { title: "Final result of Civilian Batch A-2025 has been uploaded", image: camando },
];

const Home = () => {
  return (
    <>
      <Marquee />
      <NavyVideo />
      <Civilians />

      {/* News Section */}
      <div className="bg-[#2b6594] text-center py-10 px-4">
        <h1 className="text-4xl font-bold text-white mb-3">News & Events</h1>
        <div className="mt-10 overflow-hidden">
          <div
            className="flex gap-6 w-max animate-horizontal-scroll"
            style={{ animation: 'scrollLeft 30s linear infinite' }}
          >
            {careers.map((item, index) => (
              <Card key={index} image={item.image} title={item.title} />
            ))}
            {careers.map((item, index) => (
              <Card key={`clone-${index}`} image={item.image} title={item.title} />
            ))}
          </div>
        </div>
      </div>


      <div className="min-h-screen bg-gray-100">
        <FaqSection />
      </div>

      <QuoteCard />
      <PakistanMap />
      <PNRecruitmentSlider />
    </>
  );
};

export default Home;
