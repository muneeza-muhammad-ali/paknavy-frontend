import React, { useState } from "react";

const IPASForm = () => {
  const [formData, setFormData] = useState({
    testCenter: "",
    rollNo: "",
    candidateName: "",
    candidateCNIC: "",
    motherName: "",
    motherCNIC: "",
    fatherName: "",
    fatherCNIC: "",
    dob: "",
    gender: "",
    fatherProfessionCategory: "",
    motherProfessionCategory: "",
    fatherProfession: "",
    motherProfession: "",
    fatherRank: "",
    motherRank: "",
    fatherArmyNo: "",
    motherArmyNo: "",
    fatherIncome: "",
    motherIncome: "",
    familyIncome: "",
    servingStatus: "",
    address: "",
    province: "",
    appearanceStatus: "",
    tehsil: "",
    qualification: {
      qualification: "",
      rollNo: "",
      certificateNo: "",
      board: "",
      passingYear: "",
      resultStatus: "",
      gpa: "",
      regNo: "",
      marksObtained: "",
      totalMarks: "",
      percentage: ""
    },
    agreed: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleQualificationChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      qualification: { ...prev.qualification, [name]: value }
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!formData.agreed) return alert("Please agree to the affirmation certificate.");

  try {
    const res = await fetch("http://localhost:5000/api/ipassubmit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (res.ok) {
      alert("Form submitted successfully!");
      console.log("Saved Data:", data);
    } else {
      alert(data.error || "Failed to submit form");
    }
  } catch (err) {
    console.error("Error submitting form:", err);
    alert("Something went wrong");
  }
};


  const selects = {
    testCenter: ["-- Select Test Center --", "Karachi", "Lahore", "Islamabad"],
    gender: ["-- Select Gender --", "Male", "Female", "Other"],
    province: ["-- Select Province --", "Sindh", "Punjab", "Balochistan", "KPK"],
    appearanceStatus: ["-- Select Appearance Status --", "Appeared", "Not Appeared"],
    resultStatus: ["-- Select Result Status --", "Passed", "Failed", "Awaiting"]
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-6xl mx-auto p-8 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-xl shadow-2xl space-y-10"
    >
      <h1 className="text-4xl font-bold text-center text-white bg-gradient-to-r from-blue-800 to-blue-600 py-4 rounded-lg shadow mb-4">
        Integrated Personality Assessment Form
      </h1>

      {/* Basic Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.keys(selects)
          .filter((k) => k !== "resultStatus")
          .map((key) => (
            <select
              key={key}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-blue-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
              required
            >
              {selects[key].map((opt) => (
                <option
                  key={opt}
                  value={opt === selects[key][0] ? "" : opt}
                >
                  {opt}
                </option>
              ))}
            </select>
          ))}

        {[
          ["rollNo", "Roll Number"],
          ["candidateName", "Candidate Name"],
          ["candidateCNIC", "Candidate's CNIC"],
          ["motherName", "Mother Name"],
          ["motherCNIC", "Mother's CNIC"],
          ["fatherName", "Father Name"],
          ["fatherCNIC", "Father's CNIC"],
          ["dob", "Date of Birth"],
          ["fatherProfessionCategory", "Father's Profession Category"],
          ["motherProfessionCategory", "Mother's Profession Category"],
          ["fatherProfession", "Father's Profession"],
          ["motherProfession", "Mother's Profession"],
          ["fatherRank", "Father's Rank"],
          ["motherRank", "Mother's Rank"],
          ["fatherArmyNo", "Father's Army Number"],
          ["motherArmyNo", "Mother's Army Number"],
          ["fatherIncome", "Father's Income"],
          ["motherIncome", "Mother's Income"],
          ["familyIncome", "Family Income"],
          ["servingStatus", "Serving Status"],
          ["address", "Permanent Address"],
          ["tehsil", "Tehsil"]
        ].map(([name, placeholder]) => (
          <input
            key={name}
            name={name}
            type={name === "dob" ? "date" : "text"}
            placeholder={placeholder}
            value={formData[name]}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-blue-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
            required
          />
        ))}
      </div>

      {/* Single Qualification Section */}
      <h2 className="text-2xl font-semibold text-blue-700 mb-2">Qualification Details</h2>
      <div className="bg-white border border-blue-200 rounded-lg p-6 shadow mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.keys(formData.qualification).map((key) =>
            key === "resultStatus" ? (
              <select
                key={key}
                name={key}
                value={formData.qualification[key]}
                onChange={handleQualificationChange}
                className="w-full px-4 py-2 border border-blue-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
              >
                {selects.resultStatus.map((opt) => (
                  <option
                    key={opt}
                    value={opt === selects.resultStatus[0] ? "" : opt}
                  >
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <input
                key={key}
                name={key}
                type="text"
                placeholder={key.replace(/([A-Z])/g, " $1")}
                value={formData.qualification[key]}
                onChange={handleQualificationChange}
                className="w-full px-4 py-2 border border-blue-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
              />
            )
          )}
        </div>
      </div>

      {/* Affirmation */}
      <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg shadow">
        <p>
          <strong>Affirmation Certificate:</strong> I hereby declare that all
          the information provided is accurate.
        </p>
        <label className="inline-flex items-center mt-4">
          <input
            type="checkbox"
            name="agreed"
            checked={formData.agreed}
            onChange={handleChange}
            className="mr-2 accent-blue-700"
          />
          I Agree
        </label>
      </div>

      {/* Submit */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-900 px-6 py-3 rounded text-white font-semibold shadow-lg"
        >
          Submit Form
        </button>
      </div>
    </form>
  );
};

export default IPASForm;
