import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    college: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your validation logic here

    // Example: Check if any field is empty
    for (const key in formData) {
      if (formData[key].trim() === "") {
        alert(`Please fill in all fields.`);
        return;
      }
    }
    try {
      const response = await fetch(
        "https://api.vishwapreneur.in/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Registration successful");
        navigate("/RegistrationSuccess");
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error submitting registration:", error);
    }
  };

  return (
    <div className="bg-black">
      <div className="max-w-md mx-auto pt-[6rem] p-6 bg-gray-800 text-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-6">
          Vishwapreneur Registration
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-300 mt-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md bg-gray-700 text-gray-300"
            />

            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-300 mt-2"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md bg-gray-700 text-gray-300"
            />

            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mt-2"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md bg-gray-700 text-gray-300"
            />

            <label
              htmlFor="college"
              className="block text-sm font-medium text-gray-300 mt-2"
            >
              College
            </label>
            <input
              type="text"
              id="college"
              name="college"
              value={formData.college}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md bg-gray-700 text-gray-300"
            />

            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-300 mt-2"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md bg-gray-700 text-gray-300"
            />
          </div>
          <div className="mt-4">
            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
