import React, { useState } from 'react';

const GKEnglish = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  const gkFaqs = [
    { 
      question: "Abbreviations of UN, UNGA, UNSC, UNDP, UNHCR, UNICEF, UNESCO, UNFPA, WHO and FAO.", 
      answer: "UN: United Nations; UNGA: United Nations General Assembly; UNSC: United Nations Security Council; UNDP: United Nations Development Programme; UNHCR: United Nations High Commissioner for Refugees; UNICEF: United Nations International Children's Emergency Fund; UNESCO: United Nations Educational, Scientific and Cultural Organization; UNFPA: United Nations Population Fund; WHO: World Health Organization; FAO: Food and Agriculture Organization."
    },
    { 
      question: "Abbreviations of GOP, FBR, PBS, NEPRA, NADRA, NHA, PIA, OGRA, CPEC and NDMA.", 
      answer: "GOP: Government of Pakistan; FBR: Federal Board of Revenue; PBS: Pakistan Bureau of Statistics; NEPRA: National Electric Power Regulatory Authority; NADRA: National Database and Registration Authority; NHA: National Highway Authority; PIA: Pakistan International Airlines; OGRA: Oil and Gas Regulatory Authority; CPEC: China-Pakistan Economic Corridor; NDMA: National Disaster Management Authority."
    },
    { question: "Who is the current President of Pakistan?", answer: "As of August 2025: Asif Ali Zardari." },
    { question: "Who is the current Prime Minister of Pakistan?", answer: "As of August 2025: Shehbaz Sharif." },
    { question: "Who is the Chief Minister of Balochistan?", answer: "As of August 2025: Sarfaraz Bugti." },
    { question: "Who is the Chief Minister of Khyber Pakhtunkhwa?", answer: "As of August 2025: Ali Amin Gandapur." },
    { question: "Who is the Chief Minister of Punjab?", answer: "As of August 2025: Maryam Nawaz." },
    { question: "Who is the Chief Minister of Sindh?", answer: "As of August 2025: Murad Ali Shah." },
    { question: "Who is the Chief Minister of Gilgit-Baltistan?", answer: "As of August 2025: Gulbar Khan." },
    { question: "Who is the Prime Minister of Azad Jammu and Kashmir?", answer: "As of August 2025: Chaudhry Anwar-ul-Haq." },
    { question: "Name and Ministries of the Federal Ministers of Pakistan?", answer: "As of August 2025, the cabinet includes various ministers such as Ishaq Dar (Foreign Affairs), Khawaja Asif (Defence), Rana Sanaullah (Interior), Ahsan Iqbal (Planning & Development), among others. The list may change frequently." },
    { question: "What countries are the neighbours of Pakistan? And where are these located?", answer: "Pakistan shares borders with India (east), Afghanistan (northwest), Iran (west), and China (northeast). It also has a coastline along the Arabian Sea (south)." }
  ];

  return (
    <div className="container"
      style={{
        fontFamily: `"Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`,
      }}>
      
      <button className="toggle-btn" onClick={toggleDarkMode}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>

      <h2 className="relative inline-block text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] via-[#2b6594] to-[#3f8888] drop-shadow-lg">
        <span className="text-[#1e3a8a] mr-2 not-italic">📚</span>
        GK in English - FAQs
        <span className="underline-animate w-full"></span>
      </h2>

      <p className="disclaimer">
        Disclaimer! These questions are uploaded only to give an idea for: how to prepare for an interview. Actual questions may differ.
      </p>

      {gkFaqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggle(index)}>
            {faq.question}
          </div>
          <div className={`faq-answer ${openIndex === index ? 'show' : ''}`}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GKEnglish;
