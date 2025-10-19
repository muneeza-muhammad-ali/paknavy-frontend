import React from 'react';

const NavyVideo = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden pt-0 mt-0">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://joinpaknavy.gov.pk/front/images/video1.mp4"
        autoPlay
        muted
        loop
      >
        Your browser does not support the video tag.
      </video>

      {/* Text Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4 bg-black/50">
        <p className="text-xl md:text-5xl font-bold mb-4">
 <span className="italic">اللہ کا کرم</span>  <span className="not-italic">،</span>{' '}
  <span className="italic">ہمت کا علم</span>
  <span className="not-italic">،</span>{' '}
  <span className="italic">موجوں پہ قدم</span>
</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 italic">
          Welcome to Pakistan Navy
        </h1>
    <p className="text-xl md:text-2xl font-semibold mb-6 flex items-center italic">
  Join as&nbsp;
  <span className="marquee-container bg-transparent">
    <span className="marquee-text text-yellow-300 font-bold">
      PN-Cadet • Sailor • M-Cadet • PN-Cadet • Sailor • M-Cadet
    </span>
  </span>
</p>

      
      </div>
    </div>
  );
};

export default NavyVideo;
