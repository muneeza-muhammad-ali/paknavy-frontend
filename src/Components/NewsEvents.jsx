import React, { useRef } from 'react';
import Card from './Card';
import { careers } from '../data';
import './scroll.css'; // contains keyframes

const NewsEvents = () => {
  const scrollRef = useRef(null); // reference to the scrolling div

  const handleMouseEnter = () => {
    if (scrollRef.current) {
      scrollRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    if (scrollRef.current) {
      scrollRef.current.style.animationPlayState = 'running';
    }
  };

  return (
    <div className="bg-[#2851a3] text-center py-10 px-4">
      <h1 className="text-4xl font-bold text-white mb-3">News & Events</h1>

      <div className="mt-10 overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-6 w-max"
          style={{
            animation: 'scrollLeft 30s linear infinite',
            animationPlayState: 'running',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {careers.map((item, index) => (
            <Card key={index} image={item.image} title={item.title} />
          ))}
          {/* duplicate cards for smooth loop */}
          {careers.map((item, index) => (
            <Card key={`clone-${index}`} image={item.image} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsEvents;
