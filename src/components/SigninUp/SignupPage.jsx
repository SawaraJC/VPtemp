// SignupPage.js

import React, { useState } from "react";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [yearOfStudy, setYearOfStudy] = useState("");
  const [branchOfStudy, setBranchOfStudy] = useState("");
  const [showEmailSection, setShowEmailSection] = useState(true);
  const [showOtpSection, setShowOtpSection] = useState(false);
  const [showDetailsSection, setShowDetailsSection] = useState(false);

  const handleSendOtp = () => {
    // Implement logic to send OTP to the provided email
    // For simplicity, this example sets the visibility of sections based on the user flow
    setShowEmailSection(false);
    setShowOtpSection(true);
  };

  const handleVerifyOtp = () => {
    // Implement logic to verify the OTP
    // For simplicity, this example sets the visibility of sections based on the user flow
    setShowOtpSection(false);
    setShowDetailsSection(true);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Implement logic to submit user details
    console.log("Signup submitted");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-gray-900 p-8 rounded-md text-white w-96">
        {showEmailSection && (
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              className="bg-blue-500 w-full px-4 py-2 rounded-md"
              onClick={handleSendOtp}
            >
              Send OTP
            </button>
          </div>
        )}

        {showOtpSection && (
          <div className="mt-4">
            <label
              htmlFor="otp"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              OTP
            </label>
            <input
              type="text"
              id="otp"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white mb-4"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button
              className="bg-blue-500 w-full px-4 py-2 rounded-md"
              onClick={handleVerifyOtp}
            >
              Verify OTP
            </button>
          </div>
        )}

        {showDetailsSection && (
          <form onSubmit={handleSignupSubmit} className="mt-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white mb-4"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label
              htmlFor="college"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              College
            </label>
            <input
              type="text"
              id="college"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white mb-4"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              required
            />

            <label
              htmlFor="yearOfStudy"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Year of Study
            </label>
            <input
              type="text"
              id="yearOfStudy"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white mb-4"
              value={yearOfStudy}
              onChange={(e) => setYearOfStudy(e.target.value)}
              required
            />

            <label
              htmlFor="branchOfStudy"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Branch of Study
            </label>
            <input
              type="text"
              id="branchOfStudy"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white mb-4"
              value={branchOfStudy}
              onChange={(e) => setBranchOfStudy(e.target.value)}
              required
            />

            <button
              type="submit"
              className="bg-blue-500 w-full px-4 py-2 rounded-md"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignupPage;
