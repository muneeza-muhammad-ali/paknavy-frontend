import React, { useState } from "react";
document.body.style.backgroundColor = "#EFF6FF";  // bg-blue-50 color

export default function RegistrationForm() {
  // State to hold all form fields data
  const [form, setForm] = useState({
    advertisement: "",
    branch: "",
    pnrsc: "",
    testDate: "",
    candidateType: "",
    disability: "Not Applicable",
    govtRelation: "Not Applicable",
    name: "",
    cnic: "",
    fatherName: "",
    fatherCnic: "",
    gender: "",
    maritalStatus: "",
    religion: "",
    province: "",
    district: "",
    dob: "",
    email: "",
    postalAddress: "",
    permanentAddress: "",
    candidateMobile: "",
    fatherMobile: "",
    password: "",
    image: null,
  });

  // Function called on form submit
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default page reload on form submit

    // Create FormData object to send form data including file upload
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value); // Append each form key and value to formData
    });

    try {
      // Send POST request to backend API with formData
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      alert(data.message || "User registered successfully"); // Show success message from server
    } catch (err) {
      console.error("Submit Error:", err);
      alert("Something went wrong, please try again."); // Show error message if request fails
    }
  };

  // Function to update form state when inputs change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    // If input is a file, take first file else take value from input
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-blue-100 shadow-xl rounded-xl my-10">
      {/* Form Heading */}
      <h2 className="text-3xl font-bold mb-8 text-center text-gradient bg-gradient-to-r from-[#2851A3] via-[#3E6FCF] to-[#6FA8FF] text-white py-3 rounded-lg shadow-md">
        Registration Form
      </h2>

      {/* Form tag with onSubmit handler */}
      <form onSubmit={handleSubmit} className="space-y-10">

                 {/* Application Section */}
           <section className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 shadow-md">
          <h2 className="relative inline-block text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] via-[#2b6594] to-[#3f8888] drop-shadow-lg">
      <span className="text-[#1e3a8a] mr-2 not-italic"></span>
         Application
           <span className="underline-animate w-full"></span>
                </h2>


          <div className="grid md:grid-cols-3 gap-6 text-black">
            {/* Advertisement select dropdown */}
   <select
  name="advertisement"
  onChange={handleChange}
  required
  value={form.advertisement}
  className="bg-gradient-to-r from-[#2851A3] via-[#3E6FCF] to-[#6FA8FF] text-white font-semibold border border-white rounded-lg px-4 py-2 w-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#6FA8FF] transition duration-300 ease-in-out"
>
  <option value="" disabled style={{ color: "black" }}>
    -- Select Advertisement --
  </option>
  <option value="Ad1" style={{ color: "black" }}>Advertisement 1</option>
  <option value="Ad2" style={{ color: "black" }}>Advertisement 2</option>
</select>


            {/* Branch select dropdown */}
            <select
           name="branch"
          onChange={handleChange}
         required
       value={form.branch}
      className="bg-gradient-to-r from-[#2851A3] via-[#3E6FCF] to-[#6FA8FF] text-white font-semibold border border-white rounded-lg px-4 py-2 w-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#6FA8FF] transition duration-300 ease-in-out"
           >
    <option value="" disabled style={{ color: "black" }}>
        -- Branch / Category / Induction --
        </option>
         <option value="Branch1" style={{ color: "black" }}>
            Branch 1
            </option>
            </select>


            {/* PNR&SC select dropdown */}
           <select
  name="pnrsc"
  onChange={handleChange}
  required
  value={form.pnrsc}
  className="bg-gradient-to-r from-[#2851A3] via-[#3E6FCF] to-[#6FA8FF] text-white font-semibold border border-white rounded-lg px-4 py-2 w-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#6FA8FF] transition duration-300 ease-in-out"
>
  <option value="" disabled style={{ color: "black" }}>
    -- Select PNR&SC --
  </option>
  <option value="Karachi" style={{ color: "black" }}>Karachi</option>
  <option value="Lahore" style={{ color: "black" }}>Lahore</option>
</select>


            {/* Test Date input */}
           <input
  type="date"
  name="testDate"
  onChange={handleChange}
  required
  value={form.testDate}
  className="bg-gradient-to-r from-[#2851A3] via-[#3E6FCF] to-[#6FA8FF] text-white font-semibold border border-white rounded-lg px-4 py-2 w-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#6FA8FF] transition duration-300 ease-in-out"
/>


            {/* Candidate Type select dropdown */}
   <select
  name="candidateType"
  onChange={handleChange}
  required
  value={form.candidateType}
  className="bg-gradient-to-r from-[#2851A3] via-[#3E6FCF] to-[#6FA8FF] text-white font-semibold border border-white rounded-lg px-4 py-2 w-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#6FA8FF] transition duration-300 ease-in-out"
>
  <option value="" disabled className="text-black">
    -- Candidate Type --
  </option>
  <option value="Civilian" className="text-black">Civilian</option>
  <option value="Govt Servant" className="text-black">Govt Servant</option>
  <option value="Ex-Military" className="text-black">Ex-Military</option>
</select>



            {/* Disability select dropdown */}
           <select
  name="disability"
  onChange={handleChange}
  value={form.disability}
  className="bg-gradient-to-r from-[#2851A3] via-[#3E6FCF] to-[#6FA8FF] text-white font-semibold border border-white rounded-lg px-4 py-2 w-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#6FA8FF] transition duration-300 ease-in-out"
>
  <option value="Not Applicable" className="text-black">Not Applicable</option>
  <option value="Yes" className="text-black">Yes</option>
</select>

            {/* Govt Relation select dropdown */}
            <select
            name="govtRelation"
  onChange={handleChange}
  value={form.govtRelation}
  className="bg-gradient-to-r from-[#2851A3] via-[#3E6FCF] to-[#6FA8FF] text-white font-semibold border border-white rounded-lg px-4 py-2 w-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#6FA8FF] transition duration-300 ease-in-out"
>
  <option value="Not Applicable" style={{ color: "black" }}>Not Applicable</option>
  <option value="Govt Servant" style={{ color: "black" }}>Govt Servant</option>
  <option value="During Service Death" style={{ color: "black" }}>During Service Death</option>
            </select>
          </div>
        </section>

        {/* Personal Information Section */}
        <section className="bg-white rounded-xl p-6 shadow-md">
           <h2 className="relative inline-block text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] via-[#2b6594] to-[#3f8888] drop-shadow-lg">
  <span className="text-[#1e3a8a] mr-2 not-italic"></span>
Personal Information
  <span className="underline-animate w-full"></span>
</h2>
          <div className="grid md:grid-cols-2 gap-6 text-black">
            {/* Candidate Name */}
            <input
              type="text"
              name="name"
              placeholder="Candidate Name"
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black"
              required
              value={form.name}
            />

            {/* Candidate CNIC */}
            <input
              type="text"
              name="cnic"
              placeholder="Candidate CNIC"
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black"
              required
              value={form.cnic}
            />

            {/* Father/Guardian Name */}
            <input
              type="text"
              name="fatherName"
              placeholder="Father/Guardian Name"
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black"
              required
              value={form.fatherName}
            />

            {/* Father/Guardian CNIC */}
            <input
              type="text"
              name="fatherCnic"
              placeholder="Father/Guardian CNIC"
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black"
              required
              value={form.fatherCnic}
            />

            {/* Gender select */}
            <select
              name="gender"
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
              required
              value={form.gender}
            >
              <option value="" disabled>
                -- Gender --
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            {/* Marital Status select */}
            <select
              name="maritalStatus"
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={form.maritalStatus}
            >
              <option value="" disabled>
                -- Marital Status --
              </option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Widowed">Widowed</option>
            </select>

            {/* Religion select */}
            <select
              name="religion"
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.religion}
            >
              <option value="" disabled>
                -- Religion --
              </option>
              <option value="Islam">Islam</option>
              <option value="Christianity">Christianity</option>
              <option value="Hinduism">Hinduism</option>
              <option value="Other">Other</option>
            </select>

            {/* Province select */}
            <select
              name="province"
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.province}
            >
              <option value="" disabled>
                -- Select Province --
              </option>
              <option value="Sindh">Sindh</option>
              <option value="Punjab">Punjab</option>
              <option value="KPK">Khyber Pakhtunkhwa</option>
              <option value="Balochistan">Balochistan</option>
            </select>

            {/* District of Domicile */}
            <input
              type="text"
              name="district"
              placeholder="District of Domicile"
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black"
              value={form.district}
            />

            {/* Date of Birth */}
            <input
              type="date"
              name="dob"
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={form.dob}
            />
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="bg-white rounded-xl p-6 shadow-md">
             <h2 className="relative inline-block text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] via-[#2b6594] to-[#3f8888] drop-shadow-lg">
  <span className="text-[#1e3a8a] mr-2 not-italic"></span>
Contact Information
  <span className="underline-animate w-full"></span>
</h2>
          <div className="grid md:grid-cols-2 gap-6 text-black">
            {/* Email input */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black"
              required
              value={form.email}
            />

            {/* Password input */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black"
              required
              value={form.password}
            />

            {/* Postal Address */}
            <input
              type="text"
              name="postalAddress"
              placeholder="Postal Address"
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black"
              value={form.postalAddress}
            />

            {/* Permanent Address */}
            <input
              type="text"
              name="permanentAddress"
              placeholder="Permanent Address"
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black"
              value={form.permanentAddress}
            />

            {/* Candidate Mobile Number */}
            <input
              type="text"
              name="candidateMobile"
              placeholder="Candidate's Mobile Number"
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black"
              value={form.candidateMobile}
            />

            {/* Father's Mobile Number */}
            <input
              type="text"
              name="fatherMobile"
              placeholder="Father's Mobile Number"
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black"
              value={form.fatherMobile}
            />
          </div>
        </section>

        {/* Upload Picture Section */}
        <section className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="text-[#1e3a8a] text-4xl font-bold mb-4 border-b border-blue-300 pb-2">
            Upload Picture
          </h3>
          {/* File input for image upload */}
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-sm text-black mt-2 font-sans">
            To reduce your picture size to 20 kb you may use this link:{" "}
            <a
              href="https://www.reduceimages.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Resize Picture
            </a>
          </p>
        </section>

        {/* Submit button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#2851A3] hover:bg-blue-800 text-white font-semibold px-10 py-3 rounded-lg shadow-lg transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
