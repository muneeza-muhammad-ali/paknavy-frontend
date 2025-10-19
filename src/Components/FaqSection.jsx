// src/components/FaqSection.jsx
import React from 'react';
import CadetImage from '../assets/CadetFAQ1.webp';
import SSCImage from '../assets/SSCFAQs1.webp';
import McadetImage from '../assets/M-cadetFAQ1.webp';
import SailorImage from '../assets/Sailor-FAQ1.webp';
import DSCImage from '../assets/DSC_48591.webp';

const faqs = [
  {
    title: 'PN Cadet',
    image: CadetImage,
    link: '/pn-cadet-faqs',
  },
  {
  title: 'Short Service Commission',
  image: SSCImage,
  link: '/reset-password',
},
  {
    title: 'Pakistan Navy Medical Cadet',
    image: McadetImage,
    link: '/m-cadet',
  },
  {
    title: 'Sailor',
    image: SailorImage,
    link: '/shipping-status',
  },
  {
    title: 'Pakistan Navy Civilian',
    image: DSCImage,
    link: '/contact-support',
  },
];

const FaqSection = () => {
  return (
    <section className="py-7 bg-blue-50">
      <h2 className="text-5xl font-bold text-gradient bg-gradient-to-r from-blue-950 via-blue-800 to-blue-700 text-transparent bg-clip-text text-center mb-12 mt-5  tracking-wide italic">
        Frequently Asked Questions
      </h2>

      <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto">
        {faqs.map((faq, index) => (
          <a
            key={index}
            href={faq.link}
            rel="noopener noreferrer"
            className="w-full sm:w-[40%] lg:w-[30%] text-center shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group rounded-lg bg-white"
          >
            {/* Image at top */}
            <div className="h-[200px] overflow-hidden">
              <img
                src={faq.image}
                alt={faq.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Title below */}
            <div className="bg-[#2851a3] p-4">
              <h3 className="text-xl font-semibold text-white group-hover:text-yellow-300 transition-colors duration-300">
                {faq.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
