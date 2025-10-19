import React, { useState } from "react";

const faqData = [
  {
    question: "تشبیہ\" اور \"استعارہ\" میں کیا فرق ہے؟",
    answer: "تشبیہ میں دو چیزوں کا تقابل 'جیسے'، 'کی طرح' کے الفاظ سے کیا جاتا ہے، جبکہ استعارہ میں بغیر تقابلی الفاظ کے ایک چیز کو دوسری سے تشبیہ دی جاتی ہے۔"
  },
  {
    question: "قصیدہ\" کس قسم کی شاعری ہے؟",
    answer: "قصیدہ ایک طویل نظم ہوتی ہے جس میں کسی شخصیت یا واقعے کی تعریف کی جاتی ہے، اکثر بادشاہوں یا امیروں کی مدح میں لکھی جاتی تھی۔"
  },
  {
    question: "رباعی\" کے کتنے مصرعے ہوتے ہیں؟",
    answer: "رباعی چار مصرعوں پر مشتمل ہوتی ہے جس میں پہلے، دوسرے اور چوتھے مصرعے کا قافیہ ملتا ہے۔"
  },
  {
    question: "قطعہ\" کس قسم کی شاعری ہے؟",
    answer: "قطعہ ایک مختصر نظم ہوتی ہے جو کسی موضوع یا خیال پر مشتمل دو یا چار مصرعوں پر مبنی ہوتی ہے۔"
  },
  {
    question: "نعت\" اور \"منقبت\" میں کیا فرق ہے؟",
    answer: "نعت میں حضورﷺ کی مدح کی جاتی ہے، جبکہ منقبت اولیائے کرام یا دیگر بزرگان دین کی تعریف میں کہی جاتی ہے۔"
  },
  {
    question: "مرثیہ\" میں کس قسم کے جذبات کا اظہار ہوتا ہے؟",
    answer: "مرثیہ میں غم، افسوس اور سوگ کے جذبات ہوتے ہیں، خصوصاً کسی کے انتقال پر یا کربلا کے واقعے پر لکھا جاتا ہے۔"
  },
  {
    question: "کہانی\" اور \"افسانہ\" میں کیا فرق ہے؟",
    answer: "کہانی سادہ اور مختصر ہوتی ہے، جبکہ افسانہ فنی اصولوں کے مطابق لکھا جاتا ہے اور اس میں گہرائی اور کردار نگاری ہوتی ہے۔"
  },
  {
    question: "پلاٹ\" کی اہمیت کہانی میں کیا ہے؟",
    answer: "پلاٹ کہانی کی بنیاد ہوتا ہے جو واقعات کو ترتیب دیتا ہے اور قاری کو دلچسپی سے جوڑے رکھتا ہے۔"
  },
  {
    question: "محاورات\" اور \"ضرب الامثال\" کا استعمال کیوں کیا جاتا ہے؟",
    answer: "محاورات اور ضرب الامثال زبان کو مؤثر، جامع اور دلکش بناتے ہیں، اور خیالات کا اظہار مختصر اور پراثر انداز میں کرتے ہیں۔"
  },
  {
    question: "سوانح عمری\" اور \"خودنوشت\" میں کیا فرق ہے؟",
    answer: "سوانح عمری کسی اور کی زندگی کی داستان ہوتی ہے، جبکہ خودنوشت مصنف اپنی زندگی خود بیان کرتا ہے۔"
  },
  {
    question: "تضاد\" اور \"مبالغہ\" میں کیا فرق ہے؟",
    answer: "تضاد دو مخالف چیزوں کا ذکر ہوتا ہے، جیسے 'اندھیرا اور اجالا'، جبکہ مبالغہ کسی بات کو بڑھا چڑھا کر بیان کرنا ہوتا ہے۔"
  },
  {
    question: "ردیف\" اور \"قافیہ\" کی پہچان کیسے کی جاتی ہے؟",
    answer: "قافیہ اشعار کے آخری الفاظ کی آوازوں کی ہم آہنگی ہوتی ہے جبکہ ردیف وہ لفظ یا الفاظ ہوتے ہیں جو ہر شعر کے آخر میں دہرائے جاتے ہیں۔"
  },
  {
    question: "مطلع\" اور \"مقطع\" کس شاعری کی اصطلاحات ہیں؟",
    answer: "مطلع غزل کا پہلا شعر ہوتا ہے جس کے دونوں مصرعوں میں قافیہ اور ردیف ہوتا ہے، مقطع آخری شعر ہوتا ہے جس میں شاعر کا تخلص ہوتا ہے۔"
  },
  {
    question: "اسم نکرہ\" اور \"اسم معرفہ\" میں فرق بیان کریں؟",
    answer: "اسم نکرہ غیر معین چیز یا شخص کے لیے ہوتا ہے (جیسے: کتاب)، جبکہ اسم معرفہ معین اور مخصوص چیز یا شخص کے لیے ہوتا ہے (جیسے: یہ کتاب، علی)۔"
  },
  {
    question: "صفت\" اور \"موصوف\" کی مثالیں دیں؟",
    answer: "صفت وہ لفظ ہے جو موصوف کی خوبی بیان کرے، جیسے 'خوبصورت لڑکی' میں 'خوبصورت' صفت ہے اور 'لڑکی' موصوف۔"
  },
  {
    question: "آزاد نظم\" اور \"پابند نظم\" میں کیا فرق ہے؟",
    answer: "پابند نظم میں ردیف و قافیہ اور بحر کی پابندی ہوتی ہے جبکہ آزاد نظم میں یہ پابندیاں نہیں ہوتیں، صرف خیالات کی روانی ہوتی ہے۔"
  }
];

const Urdu = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto my-8 px-4" dir="rtl">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="inline-block text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] via-[#2b6594] to-[#3f8888] drop-shadow-lg">
          <span className="text-[#1e3a8a] mr-2 not-italic">🎓</span>
          Urdu - FAQs
        </h2>
      </div>

      {/* Disclaimer */}
      <p className="text-sm text-black mb-6 whitespace-nowrap font-bold text-center">
        <strong>Disclaimer!</strong> These questions are uploaded only to give an idea for: how to prepare for an interview. Actual questions may differ.
      </p>

      {/* FAQs */}
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-white">
          <button
            onClick={() => toggleDropdown(index)}
            className="w-full px-4 py-3 bg-[#27489a] text-white text-sm font-medium focus:outline-none flex justify-between items-center"
          >
            <span className="text-right italic text-sm flex-1">
              {item.question}
            </span>
            <span className="text-xs ml-2">
              {openIndex === index ? "▲" : "▼"}
            </span>
          </button>

          {openIndex === index && (
            <div className="bg-white text-black px-4 py-3 text-right text-sm italic">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Urdu;
