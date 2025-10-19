import React from 'react';
import navyImage from '../assets/About-us-min.png';
import thumb1 from '../assets/thumb1.jpg';
import thumb2 from '../assets/thumb2.jpg';
import thumb3 from '../assets/thumb3.jpg';
import thumb4 from '../assets/thumb4.jpg';
import thumb5 from '../assets/thumb5.jpg';
import thumb6 from '../assets/thumb6.jpg';
import thumb7 from '../assets/thumb7.jpg';
import thumb8 from '../assets/thumb8.jpg';




const About = () => {
 const videos = [
  {
    id: 1,
    title: 'Our presence on the internet',
    imageUrl: thumb1,
    link: 'https://www.facebook.com/100094860495293/videos/436695052751179/?rdid=FC4xoExKUUyzsxQC#',
  },
  {
    id: 2,
    title: 'Recruitment Centers in Pakistan',
    imageUrl: thumb2,
    link: 'https://www.facebook.com/100094860495293/videos/1054718066373425/?rdid=Yn8vPooCKq0FHmE3#',
  },
  {
    id: 3,
    title: 'Join Pakistan Navy – Official Message',
    imageUrl: thumb3,
    link: 'https://www.facebook.com/100094860495293/videos/1066877281474174/?rdid=U4Ugq6F5Bz0p4Jjm#',
  },
  {
    id: 4,
    title: 'Test Preparation Guidelines',
    imageUrl: thumb4,
    link: 'https://www.facebook.com/100094860495293/videos/1060975582255307/?rdid=dRUwpUDAXnP9OexT#',
  },
  {
    id: 5,
    title: 'How to Apply Online for Pak Navy',
    imageUrl: thumb5,
    link: 'https://www.facebook.com/100094860495293/videos/3530577593754252/?rdid=WpOP9GC2qRvtZcEC#',
  },
  {
    id: 6,
    title: 'Behind the Scenes of Navy Training',
    imageUrl: thumb6,
    link: 'https://www.facebook.com/100094860495293/videos/384750964672894/?rdid=4iZ38G8Zye7uRbHq#',
  },
  {
    id: 7,
    title: 'Women in the Pakistan Navy',
    imageUrl: thumb7,
    link: 'https://www.facebook.com/100094860495293/videos/8390360127688617/?rdid=YnJ7dXJOhN3NkBIR#',
  },
  {
    id: 8,
    title: 'Life at Pakistan Naval Academy',
    imageUrl: thumb8,
    link: 'https://www.facebook.com/100094860495293/videos/1055065285550211/?rdid=toN3t609MbjFBn73#',
  },
];


  return (
    <div className="bg-white">

      {/* Top Section - About Us */}
      <div className="flex flex-col md:flex-row items-center justify-between px-0 py-12">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={navyImage}
            alt="Pak Navy"
            className="rounded-2xl shadow-2xl border border-gray-300 w-[90%] max-w-[360px] h-auto"
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 px-2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-cyan-500 mb-6 tracking-wide">
            About Us
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed sm:leading-loose font-bold">
            The <span className="font-semibold text-blue-900">Recruitment Directorate</span> was established in 1980. We deal with the sacred task of inducting talented, energetic, and morally upright human resources for the service while ensuring <span className="italic text-blue-700">transparency</span> and <span className="italic text-blue-700">merit</span> in the selection/recruitment of Officers, Sailors, and Civilians.
            <br /><br />
            Our mission is to induct the best available human resource for the <span className="text-blue-900 font-bold">Pakistan Navy</span>, remaining cognizant of the underrepresented and underprivileged sections of society. We proudly operate over twenty <span className="text-blue-800 font-bold italic">Pakistan Navy Recruitment and Selection Centres</span> nationwide.
          </p>
        </div>
      </div>

      {/* New Section - Video Thumbnails */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">
          Interview of Director Recruitment - Recruitment & Selection in Pak Navy – Videos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform duration-300 hover:scale-105 shadow-md rounded overflow-hidden"
            >
              <img
                src={video.imageUrl}
                alt={video.title}
                className="w-full h-auto object-cover"
              />
            </a>
          ))}
        </div>
      </div>

    </div>
  );
};

export default About;
