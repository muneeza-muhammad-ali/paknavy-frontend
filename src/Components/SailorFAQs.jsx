import React from 'react';

const faqs = [
  {
    question: "نیوی جوائن کرنے کے بعد ٹریننگ کتنا عرصہ ہوگی ؟",
    answer: "بوٹ کیمپ ٹریننگ چھے ماہ اور مکمل ٹریننگ تقریباً دو سال۔"
  },
  {
    question: "شادی کتنا عرصہ بعد کر سکتے ہیں؟",
    answer: "ٹریننگ کے بعد۔"
  },
  {
    question: "ٹریننگ کے دوران این او سی نہیں ملے گی۔",
    answer: "جی ہاں، دوران ٹریننگ NOC جاری نہیں کی جاتی۔"
  },
  {
    question: "اگر میں سیلر بھرتی ہو جاوٗں تو افیسر کے لیے مجھے ٹریننگ کے دوران این او سی مل جائےگی؟",
    answer: "نہیں، سیلرز کو بھی ٹریننگ کے دوران NOC نہیں ملتی۔"
  },
  {
    question: "خطیب کے لیے کیا تعلیم درکار ہے؟",
    answer: "خطیب کے لیے میٹرک اور کسی منظور شدہ مدرسے سے درس نظامی کا کورس لازمی ہے۔"
  },
  {
    question: "میں گوادر سے ہوں اور لاہور میں رہتا ہوں کیا میں لاہور سنٹر میں ٹیسٹ دے سکتا ہوں؟",
    answer: "جی ہاں، آپ کسی بھی نیوی کے بھرتی سنٹر میں ٹیسٹ دے سکتے ہیں، بس اپلائی کرتے وقت لاہور سنٹر سلیکٹ کریں۔"
  },
  {
    question: "کیا میں ڈومیسائل یا کریکٹر سرٹیفکیٹ کے بغیر اپنے آپ کو رجسٹر کر سکتا ہوں؟",
    answer: "جی ہاں، آن لائن رجسٹریشن ہو سکتی ہے، لیکن ابتدائی امتحان کے وقت یہ دستاویزات لازمی ہوں گی۔"
  },
  {
    question: "میرے پاس لرنر ڈرائیونگ لائسنس ہے۔ کیا میں پاکستان نیوی میں بطور ڈرائیور اپلائی کر سکتا ہوں؟",
    answer: "جی ہاں، رجسٹریشن ہو سکتی ہے، مگر ابتدائی امتحان کے وقت درست ڈرائیونگ لائسنس لازمی ہے۔"
  }
];

const SailorFAQs = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-[#1e3a8a] via-[#2b6594] to-[#66bfbf] text-white py-4 rounded-xl shadow-md">
        Sailors FAQs
      </h2>

      <div className="grid gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="font-semibold text-right text-[#1e3a8a] mb-2 leading-relaxed italic">
              {faq.question}
            </h3>
            <p className="text-gray-800 text-right italic leading-relaxed font-bold ">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SailorFAQs;
