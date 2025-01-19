
import React from "react";
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const BookMeeting = () => {
  return (
    <div className="min-h-screen">
      <section className="-z-10 relative">
        <div
          className="h-[400px] bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/banner/page-banner-1.jpg')",
          }}
        >
            <div className="absolute inset-0 bg-blue-500/70 opacity-40"></div></div>
      </section>

      <div className="flex flex-col md:flex-row bg-white shadow-lg mx-6 sm:mx-10 -mt-10 rounded-[50px]">
        <div className="bg-grey500 md:w-2/5 w-full p-8 flex flex-col items-start justify-center">
          <div className="mb-8 flex items-center space-x-4">
            <div className="flex items-center justify-center bg-[#41af1e] rounded-full w-10 h-10">
              <FaPhoneAlt className="inline-block text-white " />
            </div>
            <span>+92 3144363910</span>
          </div>
          <div className="mb-8 flex items-center space-x-4">
            <div className="flex items-center justify-center bg-[#993022] rounded-full w-10 h-10">
              <MdEmail className="inline-block text-white text-[20px]" />
            </div>
            <span>takenewlooks@gmail.com</span>
          </div>
          <div className="mb-8 flex items-center space-x-4">
            <div className="flex items-center justify-center bg-[#fbab18] rounded-full w-10 h-10">
              <FaMapMarkerAlt className="inline-block text-white text-[20px]" />
            </div>
            <span>242 D2 JOHER TOWN LAHORE</span>
          </div>
          <div className="flex space-x-4">
            <div className="flex items-center justify-center bg-[#4d68a1] rounded-full w-10 h-10">
            <a href="#" className="text-white hover:text-blue-800">
              <FaFacebookF size={24} />
            </a>
            </div>
            <div className="flex items-center justify-center bg-[#962fbf] rounded-full w-10 h-10">
            <a href="#" className="text-white hover:text-blue-800">
              <CiInstagram size={24} />
            </a>
            </div>
            <div className="flex items-center justify-center bg-[#0077b5] rounded-full w-10 h-10">
            <a href="#" className="text-white hover:text-blue-800">
              <CiLinkedin size={24} />
            </a>
            </div>
          </div>
        </div>

        <div className="bg-white md:w-3/5 w-full p-8">
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow border-border appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow border-border appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="date"
              >
                Date
              </label>
              <input
                className="shadow border-border appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="date"
                type="date"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="time"
              >
                Time
              </label>
              <input
                className="shadow border-border appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="time"
                type="time"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookMeeting;
