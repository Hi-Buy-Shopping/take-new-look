import React, { useEffect } from "react";
import { FaCode, FaMobileAlt, FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";

const WebDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section
        className="h-[500px] mt-16 flex items-center justify-center bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('/assets/banner/webdev.jpg')",
        }}
      >
        <div className="text-center bg-black bg-opacity-50 p-8 rounded">
          <h1 className="md:text-4xl text-xl font-bold mb-4">
            Web Development Services
          </h1>
          <p className="md:text-lg text-sm">
            Crafting modern, responsive, and innovative websites for your business.
          </p>
          <Link to="/contact-us">
            <button className="mt-6 px-6 py-3 bg-lightblue hover:bg-blue-700 rounded text-blue font-semibold">
              Get Started
            </button>
          </Link>
        </div>
      </section>
      <div className="container mx-auto p-6">
        <h2 className="md:text-3xl text-xl font-semibold text-center my-5 md:my-10 text-blue">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 shadow-lg rounded-xl p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <FaCode className="text-5xl text-white mb-4 mx-auto" />
            <h3 className="md:text-2xl text-xl font-bold text-center mb-4 text-white">
              Custom Web Development
            </h3>
            <p className="text-base mb-4 text-white text-center">
              Tailor-made solutions to fit your unique business needs.
            </p>
            <ul className="list-disc text-white list-inside mb-4">
              <li>Dynamic and scalable websites</li>
              <li>Custom functionalities</li>
              <li>Optimized for performance</li>
            </ul>
            <button className="block mx-auto px-4 py-2 bg-white text-blue-500 font-semibold rounded-full hover:bg-gray-200">
              Learn More
            </button>
          </div>

          <div className="bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 shadow-lg rounded-xl p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <FaMobileAlt className="text-5xl text-white mb-4 mx-auto" />
            <h3 className="md:text-2xl text-xl font-bold text-center mb-4 text-white">
              Responsive Design
            </h3>
            <p className="text-base text-white mb-4 text-center">
              Websites that look great on any device.
            </p>
            <ul className="list-disc text-white list-inside mb-4">
              <li>Mobile-friendly interfaces</li>
              <li>Cross-platform compatibility</li>
              <li>Seamless user experience</li>
            </ul>
            <button className="block mx-auto px-4 py-2 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-200">
              Learn More
            </button>
          </div>

          <div className="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 shadow-lg rounded-xl p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <FaRocket className="text-5xl text-white mb-4 mx-auto" />
            <h3 className="md:text-2xl text-xl font-bold text-center mb-4 text-white">
              SEO Optimization
            </h3>
            <p className="text-base mb-4 text-white text-center">
              Enhance your online visibility and rankings.
            </p>
            <ul className="list-disc text-white list-inside mb-4">
              <li>Search engine-friendly designs</li>
              <li>Fast-loading websites</li>
              <li>On-page and off-page optimization</li>
            </ul>
            <button className="block mx-auto px-4 py-2 bg-white text-pink-600 font-semibold rounded-full hover:bg-gray-200">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6">
        <div>
          <h2 className="text-blue text-lg md:text-2xl font-semibold">
            Why Choose Us?
          </h2>
          <p className="text-darkgray text-sm leading-6 my-4">
            In today’s digital age, having a professional website is essential
            for businesses to thrive. Our team specializes in creating
            user-friendly, responsive, and aesthetically appealing websites that
            captivate your audience and drive engagement.
          </p>
          <p className="text-darkgray text-sm leading-6 my-4">
            We focus on delivering solutions that align with your business
            objectives, ensuring that every aspect of your website is tailored
            to your needs. Whether you need an e-commerce platform, a corporate
            website, or a portfolio, we’ve got you covered.
          </p>
        </div>
        <div>
          <h2 className="text-blue text-lg md:text-2xl font-semibold">
            Web Development in Pakistan
          </h2>
          <p className="text-darkgray text-sm leading-6 my-4">
            Our web development services are trusted by businesses across
            Pakistan and beyond. We combine creativity with cutting-edge
            technology to deliver websites that not only look great but also
            perform seamlessly. From domain registration to hosting and custom
            designs, we offer a complete package to get your business online.
          </p>
        </div>
        <div>
          <h2 className="text-blue text-lg md:text-2xl font-semibold">
            Start Your Digital Journey Today!
          </h2>
          <p className="text-darkgray text-sm leading-6 my-4">
            Partner with us to bring your vision to life. Whether you're a small
            startup or an established business, we are here to help you create a
            strong online presence. Let's build something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
