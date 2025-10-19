import React, { useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const Result = () => {
  const [rollNumber, setRollNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (rollNumber.trim() === "") {
      alert("Please enter your roll number.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/download-result?rollNumber=${encodeURIComponent(rollNumber)}`
      );

      if (!response.ok) {
        throw new Error("Result file not found");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `${rollNumber}_result.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 py-0 my-0">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-blue-200"
      >
        <div className="flex flex-col items-center mb-6">
          <ArrowDownTrayIcon className="h-12 w-12 text-blue-600 mb-2" />
          <h2 className="text-3xl font-bold text-blue-700 text-center">
            Download Result
          </h2>
        </div>

        <label className="block text-gray-700 font-medium mb-2">
          Enter Your Roll Number
        </label>
        <input
          type="text"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
          placeholder="e.g. 123456"
          className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-5"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2.5 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          Submit & Download
        </button>
      </form>
    </div>
  );
};

export default Result;
