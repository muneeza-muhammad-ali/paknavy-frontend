import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// Aapke custom FAQs
const faqs = [
  {
    question: "How can I register for commission in Pakistan Navy?",
    answer:
      "You can register through our official website www.joinpaknavy.gov.pk, for the advertised posts.",
  },
  {
    question: "Is photograph mandatory for online registration?",
    answer: "Yes.",
  },
  {
    question: "I am qualified from Kanzul Madaras. Am I eligible to apply for SSC?",
    answer: "Yes. You are eligible to apply for SSC.",
  },
  {
    question:
      "What is the minimum height requirement for male and female candidates applying for SSC in the Pakistan Navy?",
    answer:
      "The minimum height requirement for male candidates is 5 feet 4 inches and for female is 5 feet.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#2851A3]">
        Short Service Commission FAQs
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 shadow-sm rounded-md overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 font-medium text-white bg-[#2851A3] hover:bg-blue-500 transition-all duration-300 cursor-pointer"
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>

            {openIndex === index && (
              <div className="bg-white px-6 py-4 text-gray-800 text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
