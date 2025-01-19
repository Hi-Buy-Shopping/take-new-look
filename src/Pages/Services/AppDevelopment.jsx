import React, { useEffect } from "react";
import {
  FaMobileAlt,
  FaLaptopCode,
  FaCloud,
} from "react-icons/fa";

const ApplicationDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section
        className="h-[500px] mt-16 flex items-center justify-center bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('/assets/banner/app-development.jpg')",
        }}
      >
        <div className="text-center bg-black bg-opacity-50 p-8 rounded">
          <h1 className="md:text-4xl text-xl font-bold mb-4">
            Application Development Services
          </h1>
          <p className="md:text-lg text-sm">
            Transform your ideas into powerful, scalable applications.
          </p>
          <button className="mt-6 px-6 py-3 bg-lightblue hover:bg-blue-700 rounded text-blue font-semibold">
            Get Started
          </button>
        </div>
      </section>

      <div className="container mx-auto p-6">
        <h2 className="md:text-3xl text-xl font-semibold text-center my-5 md:my-10 text-blue">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 shadow-lg rounded-xl p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <FaMobileAlt className="text-5xl text-white mb-4 mx-auto" />
            <h3 className="md:text-2xl text-xl font-bold text-center mb-4 text-white">
              Mobile App Development
            </h3>
            <p className="text-base mb-4 text-white text-center">
              Build user-friendly mobile apps for iOS and Android platforms.
            </p>
            <ul className="list-disc text-white list-inside text-gray-200 mb-4">
              <li>Custom native apps</li>
              <li>Cross-platform solutions</li>
              <li>Seamless user experience</li>
            </ul>
            <button className="block mx-auto px-4 py-2 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-200">
              Learn More
            </button>
          </div>

          <div className="bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 shadow-lg rounded-xl p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <FaLaptopCode className="text-5xl text-white mb-4 mx-auto" />
            <h3 className="md:text-2xl text-xl font-bold text-center mb-4 text-white">
              Web Application Development
            </h3>
            <p className="text-base text-white mb-4 text-center">
              Create robust, scalable web applications tailored to your needs.
            </p>
            <ul className="list-disc text-white list-inside text-gray-200 mb-4">
              <li>Custom-built solutions</li>
              <li>Modern frameworks</li>
              <li>Responsive design</li>
            </ul>
            <button className="block mx-auto px-4 py-2 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-200">
              Learn More
            </button>
          </div>

          <div className="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 shadow-lg rounded-xl p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <FaCloud className="text-5xl text-white mb-4 mx-auto" />
            <h3 className="md:text-2xl text-xl font-bold text-center mb-4 text-white">
              Cloud-based Applications
            </h3>
            <p className="text-base mb-4 text-white text-center">
              Build scalable cloud applications for global reach and efficiency.
            </p>
            <ul className="list-disc list-inside text-white mb-4">
              <li>Serverless solutions</li>
              <li>Data security</li>
              <li>Scalability</li>
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
            Why Choose Us for Application Development?
          </h2>
          <p className="text-darkgray text-sm leading-6 my-4">
            We specialize in creating custom applications that cater to your
            business needs. Whether you're looking to develop a mobile app,
            a web application, or a cloud-based solution, our team is here to
            bring your vision to life. Our expertise in modern frameworks and
            scalable architecture ensures high performance and long-term
            reliability.
          </p>
        </div>
        <div>
          <h2 className="text-blue text-lg md:text-2xl font-semibold">
            Application Development in Pakistan
          </h2>
          <p className="text-darkgray text-sm leading-6 my-4">
            Pakistan has a rapidly growing IT industry, making it an ideal
            location to develop cost-effective and high-quality applications.
            Our team of developers is skilled in the latest technologies to
            deliver solutions that stand out in the competitive market.
          </p>
          <p className="text-darkgray text-sm leading-6 my-4">
            From startups to enterprises, we provide end-to-end services for
            application development. We help you transform your ideas into
            scalable applications while ensuring seamless user experiences and
            optimal performance.
          </p>
        </div>
        <div>
          <h2 className="text-blue text-lg md:text-2xl font-semibold">
            Start Your Application Development Journey Today
          </h2>
          <p className="text-darkgray text-sm leading-6 my-4">
            Let us help you turn your ideas into reality. Partner with us to
            build applications that drive business growth and deliver exceptional
            user experiences. Our team ensures a hassle-free process from
            ideation to deployment, helping you achieve your goals faster.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDevelopment;
