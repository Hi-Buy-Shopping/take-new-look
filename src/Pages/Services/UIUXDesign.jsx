import React, { useEffect } from "react";
import { FaLaptopCode, FaMobileAlt, FaLightbulb, FaSketch } from "react-icons/fa";

const UIUXDesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section
        className="h-[500px] mt-16 flex items-center justify-center bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('/assets/banner/ui-ux-design.jpg')",
        }}
      >
        <div className="text-center bg-black bg-opacity-50 p-8 rounded">
          <h1 className="md:text-4xl text-xl font-bold mb-4">
            Elevate Experiences with Outstanding UI/UX Design
          </h1>
          <p className="md:text-lg text-sm">
            Craft intuitive and visually stunning designs that captivate users and drive engagement.
          </p>
          <button className="mt-6 px-6 py-3 bg-lightblue hover:bg-blue-700 rounded text-blue font-semibold">
            Let’s Start Designing
          </button>
        </div>
      </section>

      {/* Services Section */}
      <div className="container mx-auto p-6">
        <h2 className="md:text-3xl text-xl font-semibold text-center my-5 md:my-10 text-blue">
          Our UI/UX Design Services
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-center gap-6 p-6 border rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <FaLightbulb className="text-5xl text-blue" />
            <div>
              <h3 className="md:text-2xl text-xl font-bold mb-2">User Research</h3>
              <p className="text-sm text-gray-600">
                Understand your audience with in-depth research to design experiences that truly resonate with users.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 p-6 border rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <FaSketch className="text-5xl text-blue" />
            <div>
              <h3 className="md:text-2xl text-xl font-bold mb-2">Wireframes & Prototypes</h3>
              <p className="text-sm text-gray-600">
                Visualize your ideas through detailed wireframes and interactive prototypes to ensure a seamless workflow.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 p-6 border rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <FaMobileAlt className="text-5xl text-blue" />
            <div>
              <h3 className="md:text-2xl text-xl font-bold mb-2">Responsive Design</h3>
              <p className="text-sm text-gray-600">
                Create designs that adapt perfectly to every screen size, ensuring a consistent experience across all devices.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 p-6 border rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <FaLaptopCode className="text-5xl text-blue" />
            <div>
              <h3 className="md:text-2xl text-xl font-bold mb-2">UI Development</h3>
              <p className="text-sm text-gray-600">
                Transform designs into functional user interfaces with pixel-perfect implementation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <h2 className="text-blue text-lg md:text-2xl font-semibold text-center mb-6">
            Why Choose Us for UI/UX Design?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 text-center bg-white border rounded-lg shadow hover:shadow-xl">
              <h3 className="font-bold text-xl text-blue mb-4">User-Centered Design</h3>
              <p className="text-gray-600 text-sm">
                We prioritize user needs to create designs that are intuitive, engaging, and easy to use.
              </p>
            </div>
            <div className="p-6 text-center bg-white border rounded-lg shadow hover:shadow-xl">
              <h3 className="font-bold text-xl text-blue mb-4">Attention to Detail</h3>
              <p className="text-gray-600 text-sm">
                From typography to micro-interactions, every detail is designed to perfection.
              </p>
            </div>
            <div className="p-6 text-center bg-white border rounded-lg shadow hover:shadow-xl">
              <h3 className="font-bold text-xl text-blue mb-4">Innovation & Creativity</h3>
              <p className="text-gray-600 text-sm">
                Our team pushes boundaries to deliver unique and innovative designs that stand out.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-blue-600 text-white py-10 text-center">
        <h2 className="md:text-2xl text-xl font-bold mb-4">
          Ready to Design Exceptional Experiences?
        </h2>
        <p className="md:text-lg text-sm mb-6">
          Let’s create user-friendly and visually stunning designs together.
        </p>
        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-gray-200">
          Schedule a Free Consultation
        </button>
      </div>
    </div>
  );
};

export default UIUXDesign;
