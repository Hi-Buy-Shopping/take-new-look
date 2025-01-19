import React, { useEffect } from "react";
import {
  FaShoppingCart,
  FaMobileAlt,
  FaCogs,
  FaChartLine,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const EcommerceSolutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section
        className="h-[500px] mt-16 flex items-center justify-center bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('/assets/banner/ecommerce-solutions.jpg')",
        }}
      >
        <div className="text-center bg-black bg-opacity-50 p-8 rounded">
          <h1 className="md:text-4xl text-xl font-bold mb-4">
            Transform Your Business with E-commerce Solutions
          </h1>
          <p className="md:text-lg text-sm">
            Build, grow, and optimize your online store with our custom
            solutions tailored to your business needs.
          </p>
          <Link to="/contact-us">
            <button className="mt-6 px-6 py-3 bg-lightblue hover:bg-blue-700 rounded text-blue font-semibold">
              Get Started Today
            </button>
          </Link>
        </div>
      </section>

      <div className="container mx-auto p-6">
        <h2 className="md:text-3xl text-xl font-semibold text-center my-5 md:my-10 text-blue">
          Our E-commerce Solutions
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-center gap-6 p-6 border rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <FaShoppingCart className="text-5xl text-blue" />
            <div>
              <h3 className="md:text-2xl text-xl font-bold mb-2">
                Custom Store Development
              </h3>
              <p className="text-sm text-gray-600">
                Build a powerful, scalable, and responsive e-commerce store that
                aligns with your brand and business goals.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 p-6 border rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <FaMobileAlt className="text-5xl text-blue" />
            <div>
              <h3 className="md:text-2xl text-xl font-bold mb-2">
                Mobile-Optimized Solutions
              </h3>
              <p className="text-sm text-gray-600">
                Ensure a seamless shopping experience for your customers on any
                device with our mobile-first approach.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 p-6 border rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <FaCogs className="text-5xl text-blue" />
            <div>
              <h3 className="md:text-2xl text-xl font-bold mb-2">
                Third-Party Integration
              </h3>
              <p className="text-sm text-gray-600">
                Integrate payment gateways, shipping services, CRM tools, and
                more to simplify your operations.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 p-6 border rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <FaChartLine className="text-5xl text-blue" />
            <div>
              <h3 className="md:text-2xl text-xl font-bold mb-2">
                Analytics and Growth Strategies
              </h3>
              <p className="text-sm text-gray-600">
                Get actionable insights and strategies to increase sales, reduce
                cart abandonment, and scale your business.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <h2 className="text-blue text-lg md:text-2xl font-semibold text-center mb-6">
            Why Choose Our E-commerce Solutions?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 text-center bg-white border rounded-lg shadow hover:shadow-xl">
              <h3 className="font-bold text-xl text-blue mb-4">
                Custom Tailored
              </h3>
              <p className="text-gray-600 text-sm">
                Every solution we provide is tailored to fit your business needs
                and target audience.
              </p>
            </div>
            <div className="p-6 text-center bg-white border rounded-lg shadow hover:shadow-xl">
              <h3 className="font-bold text-xl text-blue mb-4">
                Seamless Scalability
              </h3>
              <p className="text-gray-600 text-sm">
                From small businesses to enterprises, we design solutions that
                grow with your business.
              </p>
            </div>
            <div className="p-6 text-center bg-white border rounded-lg shadow hover:shadow-xl">
              <h3 className="font-bold text-xl text-blue mb-4">
                Expert Support
              </h3>
              <p className="text-gray-600 text-sm">
                Our team of e-commerce experts is here to support you every step
                of the way.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-500 text-white py-10 text-center">
        <h2 className="md:text-2xl text-xl font-bold mb-4">
          Ready to Take Your Business Online?
        </h2>
        <p className="md:text-lg text-sm mb-6">
          Let us help you create an e-commerce store that drives sales and
          engages your customers.
        </p>
        <Link to="/contact-us">
          <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded hover:bg-gray-200">
            Request a Free Consultation
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EcommerceSolutions;
