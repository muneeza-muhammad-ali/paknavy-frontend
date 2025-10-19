import React from 'react';
import jinnahImg from '../assets/quaid.jpg';

const QuoteCard = () => {
  return (
<div className="flex justify-center items-center bg-gradient-to-br from-blue-50 to-white px-4 py-6 my-0">
      <div className="bg-[#2851a3] text-white rounded-xl flex flex-col md:flex-row items-center px-8 py-10 max-w-4xl w-full shadow-2xl">
        
        {/* Image - original shape, controlled size */}
        <div className="mb-6 md:mb-0 md:mr-6 flex-shrink-0">
          <img
            src={jinnahImg}
            alt="Quaid-e-Azam"
            className="w-[130px] h-auto object-contain"
          />
        </div>

        {/* Quote Text */}
        <div className="flex-1">
          <span className="text-yellow-300 text-3xl leading-none">“</span>
          <p className="text-xl font-light leading-relaxed italic inline">
            With faith, discipline and selfless devotion to duty, there is nothing worthwhile that you cannot achieve.
          </p>
          <span className="text-yellow-300 text-3xl leading-none">”</span>

          <p className="mt-4 text-right font-semibold text-sm text-gray-200">— Quaid-e-Azam Muhammad Ali Jinnah</p>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
