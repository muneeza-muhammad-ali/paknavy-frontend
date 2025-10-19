import React, { useState } from "react";
import { FaIdCard } from "react-icons/fa";

const RegistrationSlip = () => {
  const [cnic, setCnic] = useState("");

  const handleSubmit = async () => {
    const cnicPattern = /^[0-9]{5}-[0-9]{7}-[0-9]{1}$/;

    if (!cnicPattern.test(cnic)) {
      alert("Please enter a valid CNIC in this format: 12345-1234567-1");
      return;
    }

    try {
      // Backend API call
      const response = await fetch("http://localhost:5000/api/submit-cnic", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cnic }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("CNIC submitted successfully!");
      } else {
        alert("Error submitting CNIC: " + data.message);
      }
    } catch (error) {
      alert("Network error: " + error.message);
    }
  };

  return (
    <div className="py-20 flex items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 mb-0">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-md w-full border border-blue-200">
        <div className="flex items-center justify-center mb-6">
          <FaIdCard className="text-blue-600 text-4xl mr-2" />
          <h1 className="text-2xl font-extrabold text-gray-800">
            Download Registration Slip
          </h1>
        </div>

        <label
          htmlFor="cnic"
          className="block mb-2 font-semibold text-gray-700"
        >
          Enter Your CNIC
        </label>

        <input
          id="cnic"
          type="text"
          placeholder="12345-1234567-1"
          value={cnic}
          onChange={(e) => setCnic(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent mb-4"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300 shadow-md cursor-pointer"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default RegistrationSlip;
