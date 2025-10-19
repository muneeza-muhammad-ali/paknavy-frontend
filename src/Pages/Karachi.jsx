// src/Pages/Karachi.jsx

import FlipCard from "../Components/FlipCard";
import karachi from "../assets/karachi.webp";

function Karachi() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 space-y-8 bg-gray-100">
     <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text  bg-gradient-to-r from-[#1e3a8a] via-[#2b6594]  to-[#3f8888] drop-shadow-lg">
  Karachi Selection & Training Center
</h1>


      <FlipCard
        image={karachi}
        title="Karachi Selection Center"
        description={`📍 Address:
7 Liaquat Barracks,
Rafiqui Shaheed Road,
Near Lucky Star, Saddar, KARACHI

📞 Phone:
021-48506703-4

📧 Email:
nro-karachi@paknavy.gov.pk`}
        autoFlip={true}
      />

    <p className="text-lg text-gray-800 text-center max-w-xl leading-relaxed font-bold italic transition duration-500 ease-in-out hover:text-blue-700">
  Welcome to the Karachi Selection & Training Center of the Pakistan Navy.
  Here, you can initiate your application process, obtain comprehensive training details, or visit the center in person for registration and document verification.
</p>

    </div>
  );
}

export default Karachi;
