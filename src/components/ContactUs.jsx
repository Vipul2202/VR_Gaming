import React, { useState } from "react";
import bg2 from "../assets/bg2.png";
import metag from "../assets/metag.jpg";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const ContactUs = () => {
  const nav = useNavigate();
  const [result, setResult] = React.useState("");
  const [formData, setFormData] = useState({
    
    name: "",
    company: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
    option: "",
  });

  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (value.trim() === "") {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "This field is required",
      }));
    } else {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };


  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
  
    formData.append("access_key", "09e9cd3b-4492-4725-b618-3f10f747df22");
  
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
  
    const data = await response.json();
  
    if (data.success) {
      setResult("Your form has been successfully submitted. The admin will respond to your query shortly. ");
      event.target.reset(); // Reset the form
      setFormData({  // Clear the form data state
        name: "",
        company: "",
        email: "",
        phone: "",
        topic: "",
        message: "",
        option: "",
      });
      setValidationErrors({}); // Clear validation errors
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  

  return (
    <>
      <div className="bg-black">
        <Navbar id="harry" className="bg-purple-600 z-20" navigate={nav} />

        <div className="flex flex-col md:flex-row justify-center items-center bg-[#100025] mt-4">
          <div className="w-full md:w-1/2 flex justify-start items-center ">
            <img
              src={bg2}
              alt="Background"
              className="max-w-[100%] h-screen relative hidden md:block"
            />

            <img
              src={metag}
              alt="roboat"
              className="h-72 w-72 absolute lg:md:ml-36 rounded-full hidden md:block"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="font-bold text-white text-3xl flex justify-center items-center ">
              Contact Us
            </p>
            <form
              onSubmit={onSubmit}
              className="w-full max-w-xl shadow-md rounded-lg mx-auto p-2"
            >
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-medium text-md text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  />
                  {validationErrors.name && (
                    <p className="text-red-500 text-xs">
                      {validationErrors.name}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="topic"
                  className="block text-md font-medium text-white "
                >
                  Email
                </label>
                <input
                  type="text"
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                />
                {validationErrors.name && (
                  <p className="text-red-500 text-xs">
                    {validationErrors.name}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-md font-medium text-white "
                  >
                    Subject
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full  border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  />
                  {validationErrors.email_address && (
                    <p className="text-red-500 text-xs">
                      {validationErrors.email_address}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-md font-medium text-white "
                  >
                    Mobile.No
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full  border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  />
                  {validationErrors.name && (
                    <p className="text-red-500 text-xs">
                      {validationErrors.name}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="block text-md font-medium text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                ></textarea>
              </div>
              <div className="mt-4">
                {/* <input
                  type="checkbox"
                  id="acceptConditions"
                  name="acceptConditions"
                  onChange={handleChange}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                /> */}
                {/* <label
                  htmlFor="acceptConditions"
                  className="ml-2 text-md text-white"
                >
                  I accept all conditions
                </label> */}
              </div>
              <div className="flex justify-center mt-8">
              <button type="submit" className="text-white py-2 px-10 text-xl rounded-lg transition duration-300 bg-gradient-to-r from-purple-700 to-teal-400 font-bold">
                  Submit Form
                </button>
              </div>
            </form>
            <span className="text-green-400 text-2xl justify-center items-center text-bold py-2 mb-2">{result}</span>

          </div>
        </div>
        <Footer className="mt-2" navigate={nav} />
      </div>
    </>
  );
};

export default ContactUs;
