import React, { useState } from 'react';

const English = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // ✅ This is the function you were asking about
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode'); // This adds/removes the class from <body>
  };

  const faqs = [
    { question: "What is noun?", answer: "A noun is a word that names a person, place, thing, or idea." },
    { question: "What are the different types of pronouns?", answer: "Types include personal, reflexive, demonstrative, relative, interrogative, and indefinite pronouns." },
    { question: "What is adjective?", answer: "An adjective describes or modifies a noun." },
    { question: "What is the purpose of an adverb?", answer: "Adverbs modify verbs, adjectives, or other adverbs, indicating manner, place, time, or degree." },
    { question: "What are the different tenses of verbs?", answer: "Present, Past, Future, and their perfect and continuous forms." },
    { question: "How do prepositions show relationships between words?", answer: "Prepositions link nouns or pronouns to other words, indicating direction, place, time, cause, manner, etc." },
    { question: "What is the function of a conjunction?", answer: "Conjunctions connect words, phrases, or clauses (e.g., and, but, or)." },
    { question: "Explain the use of interjections in sentences.", answer: "Interjections express strong emotions and are usually followed by an exclamation mark (e.g., Wow!, Oh!)." },
    { question: "What is the difference between active and passive voice?", answer: "In active voice, the subject performs the action; in passive voice, the subject receives the action." },
    { question: "Explain the use of direct and indirect speech.", answer: "Direct speech quotes exact words; indirect speech paraphrases without quotation marks." },
    { question: "Explain the use of collective nouns.", answer: "Collective nouns refer to a group of people or things as a single entity (e.g., team, family)." },
    { question: "What are compound verbs?", answer: "Compound verbs consist of a main verb plus auxiliary/helping verbs (e.g., will go, has eaten)." },
    { question: "How do you form plural nouns?", answer: "Most plurals are formed by adding -s or -es. Some have irregular forms (e.g., child → children)." },
    { question: "How do you form interrogative sentences?", answer: "Start with a helping verb or question word (e.g., What, Where, Do, Does) followed by the subject." },
    { question: "How do you form possessive nouns?", answer: "Add an apostrophe + s ('s) for singular; add only an apostrophe (') for plural nouns ending in s." },
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
  <span className="text-[#1e3a8a] mr-2 not-italic">🎓</span>
 English - FAQs
  <span className="underline-animate w-full"></span>
</h2>
      <p className="disclaimer">
        Disclaimer! These questions? Answer...   are uploaded only to give an idea for: how to prepare for an interview. Actual questions may differ.
      </p>

      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question " onClick={() => toggle(index)}>
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

export default English;
