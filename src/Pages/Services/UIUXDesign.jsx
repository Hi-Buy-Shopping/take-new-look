import React, { useEffect } from "react";
import { FaLightbulb, FaSketch, FaMobileAlt, FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";

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
            Enhance User Experiences with World-Class UI/UX Design
          </h1>
          <p className="md:text-lg text-sm">
            We craft visually stunning, intuitive, and user-friendly interfaces that captivate and engage users.
          </p>
        </div>
      </section>
      <div className="container mx-auto py-10 px-4">
        <h2 className="text-center text-blue md:text-3xl text-2xl font-bold mb-6">
          What is UI/UX Design?
        </h2>
        <p className="text-gray-600 md:text-lg text-sm leading-relaxed text-center">
          UI (User Interface) design focuses on the aesthetics and interactivity of your application or website. UX (User Experience) design emphasizes the overall experience and satisfaction of users when interacting with your product. Together, they ensure your platform is both visually appealing and user-friendly.
        </p>
      </div>
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <h2 className="text-center text-blue md:text-3xl text-2xl font-bold mb-6">
            Our UI/UX Design Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 border rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <FaLightbulb className="text-blue text-5xl mx-auto mb-4" />
              <h3 className="text-lg font-bold text-blue mb-2">User Research</h3>
              <p className="text-gray-600 text-sm">
                Gain a deep understanding of your audience's needs and preferences to create user-centered designs.
              </p>
            </div>

            <div className="text-center p-6 border rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <FaSketch className="text-blue text-5xl mx-auto mb-4" />
              <h3 className="text-lg font-bold text-blue mb-2">Wireframes & Prototypes</h3>
              <p className="text-gray-600 text-sm">
                Visualize your ideas with detailed wireframes and interactive prototypes before development.
              </p>
            </div>

            <div className="text-center p-6 border rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <FaMobileAlt className="text-blue text-5xl mx-auto mb-4" />
              <h3 className="text-lg font-bold text-blue mb-2">Responsive Design</h3>
              <p className="text-gray-600 text-sm">
                Ensure flawless design performance across all devices, from mobile to desktop.
              </p>
            </div>

            <div className="text-center p-6 border rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <FaLaptopCode className="text-blue text-5xl mx-auto mb-4" />
              <h3 className="text-lg font-bold text-blue mb-2">UI Development</h3>
              <p className="text-gray-600 text-sm">
                Bring designs to life with pixel-perfect and interactive user interface implementation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-10 px-4">
        <h2 className="text-center text-blue md:text-3xl text-2xl font-bold mb-6">
          Why Choose Us for UI/UX Design?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center p-6 border rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-lg font-bold text-blue mb-4">User-Centered Approach</h3>
            <p className="text-gray-600 text-sm">
              We design experiences that put your users first, ensuring maximum engagement and satisfaction.
            </p>
          </div>

          <div className="text-center p-6 border rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-lg font-bold text-blue mb-4">Innovative Designs</h3>
            <p className="text-gray-600 text-sm">
              Our creative team crafts unique, forward-thinking designs to set your brand apart.
            </p>
          </div>

          <div className="text-center p-6 border rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-lg font-bold text-blue mb-4">Attention to Detail</h3>
            <p className="text-gray-600 text-sm">
              We focus on every detail, from typography to micro-interactions, to deliver perfection.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-500 text-white py-10 text-center">
        <h2 className="md:text-3xl text-xl font-bold mb-4">
          Ready to Transform Your Vision into Reality?
        </h2>
        <p className="md:text-lg text-sm mb-6">
          Let’s collaborate to design stunning and user-friendly experiences.
        </p>
        <Link to={"/contact-us"}>
        <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded hover:bg-gray-200">
          Get a Free Consultation
        </button>
        </Link>
      </div>
    </div>
  );
};

export default UIUXDesign;
