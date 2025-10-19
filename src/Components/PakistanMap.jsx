import React from 'react';
import pakistanMap from '../assets/pakistan-map.jpg';

const PakistanMap = () => {
  return (
    <div className="flex justify-center items-center py-12 bg-white">
      <div className="group rounded-2xl  border bg-white border-white transition-transform duration-300 hover:scale-105 ">
        <img
          src={pakistanMap}
          alt="Map of Pakistan"
          className="w-full  h-auto transition duration-300 group-hover:brightness-110 group-hover:contrast-110"
        />
      </div>
    </div>
  );
};

export default PakistanMap;
