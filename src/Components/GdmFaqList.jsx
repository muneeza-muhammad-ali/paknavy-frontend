import React, { useState } from "react";

const GdmFaqList = () => {
  const gdmFaqs = [
    {
      question: "Is ISSB mandatory for GDMOs?",
      answer: "No.",
    },
    {
      question: "Is house job necessary for GDMOs before applying in Pak Navy?",
      answer: "Yes.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-2xl max-w-3xl mx-auto mt-10 border border-blue-100">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-blue-900">
        M-CADET FAQs
      </h2>
      <ul className="space-y-4">
        {gdmFaqs.map((faq, index) => (
          <li
            key={index}
            className="bg-[#2851A3] rounded-xl border border-blue-200 shadow-sm transition-all duration-300"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full text-left p-4 flex justify-between items-center hover:bg-blue-500  rounded-t-xl"
            >
              <span className="text-lg font-medium text-white">
                Q{index + 1}: {faq.question}
              </span>
              <span className="text-xl text-blue-600">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-4 pb-4 text-white text-base transition-all duration-300  hover:bg-blue-500 ">
                Ans: {faq.answer}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GdmFaqList;
