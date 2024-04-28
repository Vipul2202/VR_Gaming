import React, { useState } from "react";
import bg2 from "../assets/bg2.png";
import metag from "../assets/metag.jpg";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const ContactUs = () => {
  const nav=useNavigate()
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const hasErrors = Object.values(validationErrors).some(
      (error) => error !== ""
    );
    if (hasErrors) {
      return;
    }

    const isFormFilled = Object.values(formData).every(
      (value) => value.trim() !== ""
    );
    if (isFormFilled) {
      console.log(formData);

      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        topic: "",
        message: "",
        option: "",
      });
    } else {
      console.error("Form submission prevented because of validation errors.");
    }
  };

  return (
    <>
    <div className="bg-black">
    <Navbar id="harry" className="bg-purple-600"  navigate={nav} />
   

      <div className="flex flex-col md:flex-row justify-center items-center bg-[#100025] mt-4">
        <div className="w-full md:w-1/2 flex justify-start items-center ">
          <img src={bg2} alt="Background" className="max-w-[100%] h-screen relative " />

          <img  src={metag} alt="roboat"  className="h-72 w-72 absolute lg:md:ml-36 rounded-full " />
        </div>
        <div className="w-full md:w-1/2">
        <p className="font-bold text-white text-3xl flex justify-center items-center ">
        Contact Us
      </p>
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl  shadow-md rounded-lg mx-auto p-2"
          >
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              <div>
                <label htmlFor="name" className="block font-medium text-md text-white">
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
                {validationErrors.name && <p className="text-red-500 text-xs">{validationErrors.name}</p>}
              </div>

             
                
                
            </div>
            <div className="mt-4">
              <label htmlFor="topic" className="block text-md font-medium text-white ">
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
              {validationErrors.name && <p className="text-red-500 text-xs">{validationErrors.name}</p>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="email" className="block text-md font-medium text-white ">
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
                {validationErrors.email_address && <p className="text-red-500 text-xs">{validationErrors.email_address}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-md font-medium text-white ">
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
                {validationErrors.name && <p className="text-red-500 text-xs">{validationErrors.name}</p>}
              </div>
            </div>
          
            {/* <div className="mt-4">
              <label className="block text-md font-medium text-white">Which Best describes You ?</label>
              <div className="mt-2 flex flex-col md:flex-row">
                <div className="mr-8">
                  <input
                    type="radio"
                    id="option1"
                    name="option"
                    value="option1"
                    onChange={handleChange}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label htmlFor="option1" className="ml-2 text-sm text-white">Option 1</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="option2"
                    name="option"
                    value="option2"
                    onChange={handleChange}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label htmlFor="option2" className="ml-2 text-sm text-white">Option 2</label>
                </div>
              </div>
              <div className="mt-2 flex flex-col md:flex-row">
                <div className="mr-8">
                  <input
                    type="radio"
                    id="option3"
                    name="option"
                    value="option3"
                    onChange={handleChange}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label htmlFor="option3" className="ml-2 text-sm text-white">Option 3</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="option4"
                    name="option"
                    value="option4"
                    onChange={handleChange}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label htmlFor="option4" className="ml-2 text-sm text-white">Option 4</label>
                </div>
              </div>


            </div> */}
            <div className="mt-4">
              <label htmlFor="message" className="block text-md font-medium text-white">Message</label>
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
              <input
                type="checkbox"
                id="acceptConditions"
                name="acceptConditions"
                onChange={handleChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label htmlFor="acceptConditions" className="ml-2 text-md text-white">I accept all conditions</label>
            </div>
            <div className="flex justify-center mt-8">
              <button className="text-white py-2 px-10 text-xl rounded-lg transition duration-300 bg-gradient-to-r from-purple-700 to-teal-400 font-bold">
                Submit
              </button>
            </div>

          </form>
        </div>

      </div>
      <Footer navigate={nav}  />
      </div>
    </>
    
  );
};

export default ContactUs;
