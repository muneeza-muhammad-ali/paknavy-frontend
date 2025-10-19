import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "کیا سویلین میں ریپیٹر کے طور پر اپلائ کیاجاسکتا ہے؟",
    answer: "جی نہیں۔",
  },
  {
    question:
      "کیا نیوی جوائن کرنے کے بعد صوبائی یا کسی اور وفاقی ادارے میں بھرتی ہونے کیلئے این او سی مل سکتی ہے؟",
    answer: "جی ہاں۔",
  },
  {
    question: "کیا تجربہ سرٹیفیکیٹ ٹیسٹ والے دن لازمی جمع کرانا ہوگا؟",
    answer: "جی ہاں",
  },
  {
    question:
      "کیا میں سویلین میں بھرتی ہونے کے بعد یونیفارم کے لیے اپلائی کر سکتا ہوں؟",
    answer:
      "جی ہاں- بطور سویلین دو سال سروس کرنے کے بعد آپ پالیسی کے مطابق اپلائی کر سکتے ہیں۔",
  },
  {
    question: "کیا میں سروس کے دوران پارٹ ٹائم پرائیویٹ جاب حاصل کر سکتا ہوں؟",
    answer:
      "جی ہاں- ڈی سی اے سے این او سی لینے کے بعد پارٹ ٹائم پرائیویٹ جاب کر سکتے ہیں-",
  },
  {
    question:
      "پاکستان نیوی میں سویلین کے لیے سال میں کتنی مرتبہ بھرتی کی جاتی ہے، اور کب کی جاتی ہے؟",
    answer:
      "پاکستان نیوی میں سویلین کے لیے سال میں دو مرتبہ فروری/ مارچ اور جولائی/ اگست کے مہینوں میں بھرتی کا اشتہار اخبارات میں شائع کیا جاتاہے۔",
  },
  {
    question: "کیا پاکستان نیوی کا اشتہار ویب سائیٹ پر دستیاب ہوتا ہے؟",
    answer:
      "جی ہاں، پاکستان نیوی کا اشتہار ویب سائیٹ پر دستیاب ہوتا ہے۔ www.joinpaknavy.gov.pk",
  },
  {
    question:
      "رجسٹریشن کرتے وقت نیول وارڈ، گورنمنٹ سرونٹ اور ایکس سروس مین کے آپشن سے کیا مراد ہے؟",
    answer:
      "جن امیدواران کے والدین نیوی کے حاضر یا ریٹائرڈ ملازم ہوں وہ نیول وارڈ کہلاتے ہیں، اور جو امیدواران کسی گورنمنٹ ادارے میں ملازمت کر رہے ہوتے ہیں وہ گورنمنٹ سرونٹ کہلاتے ہیں۔ اسی طرح جو امیدواران کسی آرمڈ فورس سے ریٹائرڈ ہوتے ہیں وہ ایکس سروس مین کہلاتے ہیں۔",
  },
  {
    question: "کیا سویلین کے لیے میڈیکل ٹیسٹ ضروری ہے؟",
    answer: "جی ہاں۔",
  },
  {
    question: "سویلین ریکروٹمنٹ میں میڈیکل فٹنس کتنے عرصے کے لیے کارآمد ہوتی ہے؟",
    answer: "سویلین ریکروٹمنٹ میں میڈیکل فٹنس چھ ماہ کے لیے کارآمد ہوتی ہے۔",
  },
  {
    question:
      "کیا پاکستان نیوی سویلین کو دوران ملازمت ڈیپوٹیشن کے مواقع ملتے ہیں؟",
    answer:
      "جی ہاں، پاکستان نیوی سویلین کی کچھ کیڈرز کے لیے انکی اہلیت کی بنیاد پر ڈیپوٹیشن کے مواقع ملتے ہیں۔",
  },
];

const CiviliansFAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div dir="rtl" className="max-w-4xl mx-auto px-4 py-10 font-[sans-serif]">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-8 border-b pb-4">
        سویلین امیدواران کے عمومی سوالات
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl shadow-md overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-right flex items-center justify-between p-4 text-blue-800 hover:bg-blue-50 transition duration-200"
            >
              <span className="font-semibold italic">{faq.question}</span>
              <ChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`px-4 text-gray-700 text-right transition-all duration-300 font-bold italic ease-in-out ${
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

export default CiviliansFAQs;
