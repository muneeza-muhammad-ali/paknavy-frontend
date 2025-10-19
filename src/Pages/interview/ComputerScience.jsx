import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { question: "What is a computer?", answer: "A computer is an electronic device that processes data based on a set of instructions." },
  { question: "What are the main components of a computer?", answer: "CPU, memory (RAM), storage devices, input/output devices, and motherboard." },
  { question: "What is the CPU?", answer: "CPU (Central Processing Unit) is the brain of the computer responsible for processing instructions." },
  { question: "What is RAM?", answer: "RAM (Random Access Memory) is temporary memory used to store data for currently running programs." },
  { question: "What is storage?", answer: "Storage refers to hardware like HDDs or SSDs used to store data permanently." },
  { question: "What is a file?", answer: "A file is a digital document or collection of data stored in a computer system." },
  { question: "What is a file extension?", answer: "A file extension is the suffix at the end of a filename that shows its format, like .docx or .png." },
  { question: "What is a relational database?", answer: "A relational database organizes data into related tables with rows and columns." },
  { question: "What is a network?", answer: "A network is a group of connected computers that share data and resources." },
  { question: "What is a LAN?", answer: "LAN (Local Area Network) connects computers within a limited area like a home or office." },
  { question: "What is a WAN?", answer: "WAN (Wide Area Network) spans a large area and connects multiple LANs, like the internet." },
  { question: "What is the internet?", answer: "The internet is a global network connecting millions of computers for communication and data sharing." },
  { question: "What is an IP address?", answer: "An IP address is a unique identifier for a device on a network." },
  { question: "What is a web browser?", answer: "A web browser is software used to access and display web pages." },
  { question: "What is a website?", answer: "A website is a collection of related web pages accessible via a domain name." },
  { question: "What is HTML?", answer: "HTML (HyperText Markup Language) is the standard language for creating web pages." },
  { question: "What is CSS?", answer: "CSS (Cascading Style Sheets) styles the layout and appearance of HTML elements on web pages." },
  { question: "What is an operating system?", answer: "An operating system manages computer hardware and provides services for applications." },
  { question: "What is a graphical user interface (GUI)?", answer: "GUI allows users to interact with devices using graphical elements like windows and icons." },
  { question: "What is command line interface (CLI)?", answer: "CLI is a text-based interface where users enter commands to perform tasks." },
];

const ComputerScience = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 font-[sans-serif]">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-8 border-b pb-4">
        Computer Science - FAQs
      </h2>
      <p className="text-sm text-gray-500 text-center mb-6">
        Disclaimer: These questions are uploaded only to give an idea for how to prepare for an interview. Actual questions may differ.
      </p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl shadow-md overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-4 text-blue-800 hover:bg-blue-50 transition duration-200 text-left"
            >
              <span className="font-semibold italic">{faq.question}</span>
              <ChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`px-4 text-gray-700 transition-all duration-300 font-bold italic ease-in-out ${
                openIndex === index
                  ? "max-h-96 opacity-100 py-3"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
              style={{ transitionProperty: "all" }}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComputerScience;
