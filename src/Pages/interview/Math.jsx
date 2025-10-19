import React, { useState } from "react";

const faqs = [
  { question: "Define a line.", answer: "A line is a straight one-dimensional figure that extends infinitely in both directions." },
  { question: "Define a triangle.", answer: "A triangle is a polygon with three edges and three vertices." },
  { question: "Define a quadrilateral.", answer: "A quadrilateral is a polygon with four sides and four angles." },
  { question: "Define a circle.", answer: "A circle is a shape consisting of all points in a plane that are at a fixed distance from a given point." },
  { question: "Define a radius.", answer: "A radius is a line segment from the center of the circle to any point on its circumference." },
  { question: "Define a diameter.", answer: "A diameter is a line that passes through the center of the circle and connects two points on its boundary. It is twice the radius." },
  { question: "Define a chord.", answer: "A chord is a line segment joining two points on a circle." },
  { question: "Define a tangent.", answer: "A tangent is a straight line that touches a circle at exactly one point." },
  { question: "Define a secant.", answer: "A secant is a line that intersects a circle at two points." },
  { question: "Define a polygon.", answer: "A polygon is a closed figure with three or more straight sides." },
  { question: "Define a vertex.", answer: "A vertex is a point where two or more lines or edges meet." },
  { question: "Define a hypotenuse.", answer: "The hypotenuse is the longest side of a right-angled triangle, opposite the right angle." },
  { question: "Define sine (sin).", answer: "In a right triangle, sine is the ratio of the length of the opposite side to the hypotenuse." },
  { question: "Define cosine (cos).", answer: "In a right triangle, cosine is the ratio of the length of the adjacent side to the hypotenuse." },
  { question: "Define tangent (tan).", answer: "In a right triangle, tangent is the ratio of the opposite side to the adjacent side." },
  { question: "Define cosecant (cosec).", answer: "Cosecant is the reciprocal of sine (1/sin)." },
  { question: "Define secant (sec).", answer: "Secant is the reciprocal of cosine (1/cos)." },
  { question: "Define cotangent (cot).", answer: "Cotangent is the reciprocal of tangent (1/tan)." },
  { question: "Define an acute angle.", answer: "An acute angle is an angle that is less than 90 degrees." },
  { question: "Define an obtuse angle.", answer: "An obtuse angle is an angle that is greater than 90 degrees but less than 180 degrees." },
  { question: "Define a right angle.", answer: "A right angle is an angle of exactly 90 degrees." },
  { question: "What is the formula for the area of a square?", answer: "Area = side × side or s²" },
  { question: "What is the formula for the area of a rectangle?", answer: "Area = length × width" },
  { question: "What is the formula for the area of a triangle?", answer: "Area = (1/2) × base × height" },
  { question: "What is the formula for the area of a circle?", answer: "Area = π × radius²" },
  { question: "What is the formula for the circumference of a circle?", answer: "Circumference = 2 × π × radius" },
  { question: "What is the formula for the volume of a cone?", answer: "Volume = (1/3) × π × radius² × height" },
  { question: "What are the six basic trigonometric ratios?", answer: "They are sine, cosine, tangent, cosecant, secant, and cotangent." },
  { question: "What are the values of sin, cos, and tan for common angles like 0°, 30°, 45°, 60°, and 90°?", answer: "sin: [0, 1/2, √2/2, √3/2, 1], cos: [1, √3/2, √2/2, 1/2, 0], tan: [0, √3/3, 1, √3, undefined]" },
  { question: "Define the Pythagorean theorem.", answer: "In a right triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides (a² + b² = c²)." },
];

const Math = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className="p-6 sm:p-10 max-w-6xl mx-auto font-medium"
      style={{
        fontFamily: `"Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`,
      }}
    >
      <h1 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-[#1e3a8a] via-[#2b6594] to-[#66bfbf] text-white py-5 rounded-xl shadow-lg tracking-wide">
        Mathematics - FAQs
      </h1>

      <p className="text-center text-black mb-10 italic text-base sm:text-lg leading-relaxed">
        Disclaimer! These questions are uploaded only to give an idea for: how to prepare for an interview. Actual questions may differ.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className=" rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border bg-blue-100 border-gray-200"
          >
            <button
              onClick={() => toggleAnswer(index)}
              className="flex justify-between items-center w-full text-left bg-[#217994]"
            >
              <h2 className="font-semibold text-lg text-white leading-snug bg-[#217994]">
                {faq.question}
              </h2>
              <span className="text-white text-2xl ml-2 bg-[#217994]">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            {activeIndex === index && (
              <p className=" bg-blue-100 text-black text-sm sm:text-base mt-2 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Math;
