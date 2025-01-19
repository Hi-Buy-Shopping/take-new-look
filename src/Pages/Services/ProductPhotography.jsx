import React, { useEffect } from "react";
import { FaCamera, FaImages, FaPalette } from "react-icons/fa";

const ProductPhotography = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section
        className="h-[500px] mt-16 flex items-center justify-center bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('/assets/banner/product-photography.jpg')",
        }}
      >
        <div className="text-center bg-black bg-opacity-50 p-8 rounded">
          <h1 className="md:text-4xl text-xl font-bold mb-4">
            Professional Product Photography Services
          </h1>
          <p className="md:text-lg text-sm">
            Showcase your products with stunning, high-quality photos that captivate your audience.
          </p>
          <button className="mt-6 px-6 py-3 bg-lightblue hover:bg-blue-700 rounded text-blue font-semibold">
            Book a Session
          </button>
        </div>
      </section>

      {/* What We Offer Section */}
      <div className="container mx-auto p-6">
        <h2 className="md:text-3xl text-xl font-semibold text-center my-5 md:my-10 text-blue">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500 via-sky-500 to-indigo-500 shadow-lg rounded-xl p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <FaCamera className="text-5xl text-white mb-4 mx-auto" />
            <h3 className="md:text-2xl text-xl font-bold text-center mb-4 text-white">
              Studio Photography
            </h3>
            <p className="text-base mb-4 text-white text-center">
              Perfect lighting, professional backdrops, and expert setup for clean and crisp product photos.
            </p>
            <ul className="list-disc text-white list-inside text-gray-200 mb-4">
              <li>White Background Shots</li>
              <li>360-Degree Photography</li>
              <li>Macro Photography</li>
            </ul>
            <button className="block mx-auto px-4 py-2 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-200">
              Learn More
            </button>
          </div>

          <div className="bg-gradient-to-br from-green-500 via-teal-500 to-blue-600 shadow-lg rounded-xl p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <FaImages className="text-5xl text-white mb-4 mx-auto" />
            <h3 className="md:text-2xl text-xl font-bold text-center mb-4 text-white">
              Lifestyle Photography
            </h3>
            <p className="text-base mb-4 text-white text-center">
              Showcase your products in real-world scenarios to connect with your audience.
            </p>
            <ul className="list-disc text-white list-inside text-gray-200 mb-4">
              <li>Model Shoots</li>
              <li>Outdoor Settings</li>
              <li>Creative Styling</li>
            </ul>
            <button className="block mx-auto px-4 py-2 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-200">
              Learn More
            </button>
          </div>

          <div className="bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 shadow-lg rounded-xl p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <FaPalette className="text-5xl text-white mb-4 mx-auto" />
            <h3 className="md:text-2xl text-xl font-bold text-center mb-4 text-white">
              Photo Editing & Retouching
            </h3>
            <p className="text-base mb-4 text-white text-center">
              Enhance your product images with professional editing for a polished look.
            </p>
            <ul className="list-disc text-white list-inside text-gray-200 mb-4">
              <li>Color Correction</li>
              <li>Background Removal</li>
              <li>High-Resolution Outputs</li>
            </ul>
            <button className="block mx-auto px-4 py-2 bg-white text-yellow-600 font-semibold rounded-full hover:bg-gray-200">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto p-6">
        <div>
          <h2 className="text-blue text-lg md:text-2xl font-semibold">
            Why Choose Our Photography Services?
          </h2>
          <p className="text-darkgray text-sm leading-6 my-4">
            High-quality visuals are crucial for e-commerce success. Our team of professional photographers ensures that your products look their best, highlighting every detail and enhancing their appeal.
          </p>
        </div>
        <div>
          <h2 className="text-blue text-lg md:text-2xl font-semibold">
            Customized Photography for Your Brand
          </h2>
          <p className="text-darkgray text-sm leading-6 my-4">
            Every product is unique, and we tailor our photography style to reflect your brand's identity. Whether you need minimalistic shots or dynamic lifestyle imagery, we've got you covered.
          </p>
          <p className="text-darkgray text-sm leading-6 my-4">
            With our state-of-the-art equipment and creative expertise, we deliver images that capture attention and drive conversions.
          </p>
        </div>
        <div>
          <h2 className="text-blue text-lg md:text-2xl font-semibold">
            Book Your Session Today
          </h2>
          <p className="text-darkgray text-sm leading-6 my-4">
            Let’s work together to create stunning visuals that elevate your brand. Contact us to discuss your product photography needs and schedule a session.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPhotography;
