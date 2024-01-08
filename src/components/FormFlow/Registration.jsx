import React, { useState, useEffect } from "react";
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
  const [errors, setErrors] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    college: "",
    city: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const validateAll = ({ name, value }) => {
    console.log("reached at ", name, value)
    let error = "";
    if (name === "fullName" && value.trim() === "") {
      error = " is required";
    } else if (name === "phoneNumber") {
      if (!/^\d*$/.test(value)) {
        error = " must contain only digits";
      } else if (value.length > 10) {
        error = " cannot be more than 10 digits";
      }else if(value.trim() === "")error = " is required";
    } else if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
      error = " Invalid email address";
    } else if (name === "city" && value.trim() === "") {
      error = " is required";
    } else if (name === "college" && value.trim() === "") {
      error = " is required";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
    if (error == "") return 0;
    else return 1;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validation logic
    let error = "";
    if (name === "fullName" && value.trim() === "") {
      error = "Full Name is required";
    } else if (name === "phoneNumber") {
      if (!/^\d*$/.test(value)) {
        error = "Phone Number must contain only digits";
      } else if (value.length > 10) {
        error = "Phone Number cannot be more than 10 digits";
      }
    } else if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
      error = "Invalid email address";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your validation logic here

    let errors = 0;
    for (const key in formData) {
      // console.log(key);
      errors += validateAll({name:key, value:formData[key]});
    }
    if (errors != 0) return;
    try {
      const response = await fetch("https://api.vishwapreneur.in/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

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
              className="inline text-sm font-medium text-gray-300 mt-7"
            >
              Full Name
            </label>{" "}
            <span className="text-xs" style={{ color: "red" }}>
              {errors.fullName}
            </span>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 mb-4 p-2 w-full border rounded-md bg-gray-700 text-gray-300"
            />
            <label
              htmlFor="phoneNumber"
              className="inline text-sm font-medium text-gray-300 mt-7"
            >
              Phone Number
            </label>{" "}
            <span className="text-xs" style={{ color: "red" }}>
              {errors.phoneNumber}
            </span>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-1 mb-4 p-2 w-full border rounded-md bg-gray-700 text-gray-300"
            />
            <label
              htmlFor="email"
              className="inline text-sm font-medium text-gray-300 mt-7"
            >
              Email
            </label>
            <span className="text-xs" style={{ color: "red" }}>
              {errors.email}
            </span>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 mb-4 p-2 w-full border rounded-md bg-gray-700 text-gray-300"
            />
            <label
              htmlFor="college"
              className="inline text-sm font-medium text-gray-300 mt-7"
            >
              College
            </label>{" "}
            <span className="text-xs" style={{ color: "red" }}>
              {errors.college}
            </span>
            <input
              type="text"
              id="college"
              name="college"
              value={formData.college}
              onChange={handleChange}
              className="mt-1 mb-4 p-2 w-full border rounded-md bg-gray-700 text-gray-300"
            />
            <label
              htmlFor="city"
              className="inline text-sm font-medium text-gray-300 mt-7"
            >
              City
            </label>{" "}
            <span className="text-xs" style={{ color: "red" }}>
              {errors.city}
            </span>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 mb-4 p-2 w-full border rounded-md bg-gray-700 text-gray-300"
            />
          </div>
          <div className="mt-7">
            <button
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
