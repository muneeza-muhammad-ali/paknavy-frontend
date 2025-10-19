import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Arrow icons

// FAQs ka data yahan likha gaya hai
const faqs = [
  {
    question: "What is the age limit for applying in Pakistan Navy Cadet Term?",
    answer:
      "The age limit is between 16 1/2 years to 21 years for civilian and 17 years to 23 years for Service Candidates, which is subject to change.",
  },
  {
    question: "Can I apply on Hope Certificate before the result of 2nd year?",
    answer:
      "Yes, you can apply on Hope Certificate before the announcement of your 2nd year result with at least 65% marks in PART-I..",
  },
  {
    question: "Can girls apply for PN Cadet?",
    answer:
      "No, currently only male candidates can apply for PN Cadet program.",
  },
  {
    question: "What is duration of training for selected candidates?",
    answer:
      "The duration of training for selected candidate is two years.",
  },
  {
    question: "How often advertisement of PNCT comes in a year?",
    answer:
      "Twice a year.",
  },
   {
    question: "I am recommended candidate of Pak Army/PAF. Can I apply in PNCT?",
    answer:
      "Yes, you can forward your case to PN to be considered in Final Merit List subject to meeting eligibility criteria.",
  },
   {
    question: "I am married. Am I eligible for PNCT?",
    answer:
      "Only unmarried Civilian candidates are eligible however, married/ unmarried Service candidates are eligible to apply for PNCT.",
  },
  {
    question: "What is the selection process for the Pakistan Navy Cadet Term?",
    answer:
      "The selection process includes Entrance Test (computer based), Physical test, physical examination, medical examination, interview, and ISSB.",
  },
  {
    question: "Is there any financial assistance provided during the training period?",
    answer:
      "Yes. A substantial amount is paid to the Officers Cadets during training period.",
  },
    {
    question: "Is there any waiver granted for ISSB validity?",
    answer:
      "Yes, GHQ may grant waiver for validity of ISSB for 45 days.",
  },
  
];

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null); // Kaunsa question open hai

  // Jab user kisi question par click kare
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
   <h2 className="relative inline-block text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] via-[#2b6594] to-[#3f8888] drop-shadow-lg">
  <span className="text-[#1e3a8a] mr-2 not-italic">🎓</span>
  PN Cadet Term FAQs
  <span className="underline-animate w-full"></span>
</h2>



      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 shadow-sm rounded-md overflow-hidden"
          >
            {/* Question Button */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4  text-white bg-[#2851A3] hover:bg-[#3f8888]  transition-all duration-300 cursor-pointer font-bold italic"
            >
              <span>{faq.question}</span>
              <span>
                {/* Icon change hoga based on open/close */}
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </span>
            </button>

            {/* Answer area - sirf tab dikhega jab question open ho */}
            {openIndex === index && (
              <div className="bg-white px-6 py-4 text-gray-800 text-sm font-bold italic">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;
