import React, { useState } from 'react';

const GKUrdu = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const gkUrduFaqs = [
    { question: "قرارداد پاکستان کب منظور کی گئی؟", answer: "23 مارچ 1940ء کو لاہور میں منظور کی گئی۔" },
    { question: "پاکستان کے پہلے گورنر جنرل کون تھے؟", answer: "قائداعظم محمد علی جناح۔" },
    { question: "پاکستان کا قومی ترانہ کس نے لکھا؟", answer: "حفیظ جالندھری۔" },
    { question: "پاکستان کے پہلے وزیر اعظم کون تھے؟", answer: "لیاقت علی خان۔" },
    { question: "پاکستان کے آئین میں بنیادی انسانی حقوق کے بارے میں کون سا حصہ ہے؟", answer: "حصہ دوم۔" },
    { question: "پاکستان کا سب سے بڑا صوبہ رقبے کے لحاظ سے کون سا ہے؟", answer: "بلوچستان۔" },
    { question: "پاکستان کا قومی جانور کیا ہے؟", answer: "مارخور۔" },
    { question: "پاکستان کی سب سے اونچی چوٹی کون سی ہے؟", answer: "کے ٹو (K2)۔" },
    { question: "پاکستان کے پہلے صدر کون تھے؟", answer: "میجر جنرل اسکندر مرزا۔" },
    { question: "پاکستان کے پہلے نشانِ حیدر پانے والے کون تھے؟", answer: "کیپٹن محمد سرور شہید۔" },
    { question: "پاکستان کے پہلے آئین کا نفاذ کب عمل میں آیا؟", answer: "23 مارچ 1956ء۔" },
    { question: "پاکستان کی قومی اسمبلی میں کل کتنی نشستیں ہیں؟", answer: "336 نشستیں۔" },
    { question: "پاکستان کے سینٹ میں کل کتنی نشستیں ہیں؟", answer: "100 نشستیں۔" },
    { question: "پاکستان اور بھارت کے درمیان کون سی سرحد واقع ہے؟", answer: "رادھکیا (انٹرنیشنل بارڈر) اور لائن آف کنٹرول (LOC)۔" },
    { question: "پاکستان کا معیاری وقت کس شہر کے مطابق مقرر کیا گیا ہے؟", answer: "کراچی۔" },
    { question: "پاکستان کے شمال میں کون سا ملک واقع ہے؟", answer: "چین۔" },
    { question: "پاکستان کے جنوب میں کون سا سمندر واقع ہے؟", answer: "بحیرہ عرب۔" },
    { question: "پاکستان کی اہم فصل کون سی ہے؟", answer: "گندم۔" },
    { question: "پاکستان کا قومی پھل کیا ہے؟", answer: "آم۔" },
    { question: "پاکستان کا قومی پرندہ کیا ہے؟", answer: "چکور۔" },
    { question: "قرآن مجید کی سب سے لمبی سورت کون سی ہے؟", answer: "سورۃ البقرہ۔" },
    { question: "اسلام میں کتنے بنیادی ارکان ہیں؟", answer: "پانچ۔" },
    { question: "وہ کون سی رات ہے جس کا ذکر قرآن میں 'لیلۃ القدر' کے نام سے آیا ہے؟", answer: "شب قدر۔" },
    { question: "زکوٰۃ کن لوگوں پر فرض ہے؟", answer: "ہر صاحب نصاب مسلمان پر۔" },
    { question: "حج کے دوران میدان عرفات میں وقوف کرنا کس رکن کا حصہ ہے؟", answer: "رکن اعظم حج۔" },
    { question: "حدیث کی مشہور کتابوں میں سے دو کون سی ہیں؟", answer: "صحیح بخاری اور صحیح مسلم۔" },
    { question: "اسلام میں 'تَوحید' سے کیا مراد ہے؟", answer: "اللہ کی وحدانیت پر ایمان۔" },
    { question: "قرآن مجید میں مذکورہ سب سے زیادہ نام آنے والے نبی کون ہیں؟", answer: "حضرت موسیٰ علیہ السلام۔" },
    { question: "غزوہ بدر کس سن ہجری میں پیش آیا؟", answer: "2 ہجری میں۔" },
    { question: "صلح حدیبیہ کس کے درمیان ہوئی؟", answer: "مسلمانوں اور قریش مکہ کے درمیان۔" },
    { question: "'خاتم النبیین' کس نبی کا لقب ہے؟", answer: "حضرت محمد ﷺ۔" },
    { question: "اسلام میں 'جہاد' سے کیا مراد ہے؟", answer: "اللہ کی راہ میں کوشش و قربانی۔" },
    { question: "قرآن مجید میں کتنی منزلیں ہیں؟", answer: "سات منزلیں۔" },
    { question: "کس سورۃ کو قرآن کا دل کہا جاتا ہے؟", answer: "سورۃ یٰسین۔" }
  ];

  return (
    <div className="container"
      style={{
        fontFamily: `"Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`,
        direction: "rtl",
        textAlign: "right"
      }}>
      
      <h2 className="relative inline-block text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] via-[#2b6594] to-[#3f8888] drop-shadow-lg">
        <span className="text-[#1e3a8a] mr-2 not-italic">📚</span>
        جنرل نالج - اردو
        <span className="underline-animate w-full"></span>
      </h2>

      <p className="disclaimer">
        Disclaimer! یہ سوالات صرف انٹرویو کی تیاری کا اندازہ دینے کے لیے اپ لوڈ کیے گئے ہیں۔ اصل سوالات مختلف ہو سکتے ہیں۔
      </p>

      {gkUrduFaqs.map((faq, index) => (
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

export default GKUrdu;
