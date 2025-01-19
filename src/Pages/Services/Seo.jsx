import React, { useEffect } from "react";
import { FaSearch, FaChartLine, FaRegClock } from "react-icons/fa";
import { Link } from "react-router-dom";

const SEO = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section
        className="h-[500px] mt-16 flex items-center justify-center bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('/assets/banner/seo.jpg')",
        }}
      >
        <div className="text-center bg-black bg-opacity-50 p-8 rounded">
          <h1 className="md:text-4xl text-xl font-bold mb-4">
            Professional SEO Services
          </h1>
          <p className="md:text-lg text-sm">
            Boost your website’s visibility and rank higher on search engines
            with our expert SEO strategies.
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
          <div className="bg-gradient-to-br from-blue-500 via-sky-500 to-indigo-500 shadow-lg rounded-xl p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <FaSearch className="text-5xl text-white mb-4 mx-auto" />
            <h3 className="md:text-2xl text-xl font-bold text-center mb-4 text-white">
              On-Page SEO
            </h3>
            <p className="text-base mb-4 text-white text-center">
              Optimize your website’s content, structure, and keywords for
              better search engine rankings.
            </p>
            <ul className="list-disc text-white list-inside text-gray-200 mb-4">
              <li>Keyword Research</li>
              <li>Meta Tags Optimization</li>
              <li>Content SEO</li>
            </ul>
            <button className="block mx-auto px-4 py-2 bg-white text-blue-500 font-semibold rounded-full hover:bg-gray-200">
              Learn More
            </button>
          </div>

          <div className="bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 shadow-lg rounded-xl p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <FaChartLine className="text-5xl text-white mb-4 mx-auto" />
            <h3 className="md:text-2xl text-xl font-bold text-center mb-4 text-white">
              Off-Page SEO
            </h3>
            <p className="text-base mb-4 text-white text-center">
              Build your website’s authority and increase traffic with
              link-building strategies.
            </p>
            <ul className="list-disc text-white list-inside text-gray-200 mb-4">
              <li>Backlink Building</li>
              <li>Guest Blogging</li>
              <li>Social Signals</li>
            </ul>
            <button className="block mx-auto px-4 py-2 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-200">
              Learn More
            </button>
          </div>

          <div className="bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 shadow-lg rounded-xl p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <FaRegClock className="text-5xl text-white mb-4 mx-auto" />
            <h3 className="md:text-2xl text-xl font-bold text-center mb-4 text-white">
              Technical SEO
            </h3>
            <p className="text-base mb-4 text-white text-center">
              Improve your site’s performance, speed, and indexability for
              seamless user experience.
            </p>
            <ul className="list-disc text-white list-inside text-gray-200 mb-4">
              <li>Website Speed Optimization</li>
              <li>Mobile-Friendly Design</li>
              <li>Schema Markup</li>
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
            Why Choose Our SEO Services?
          </h2>
          <p className="text-darkgray text-sm leading-6 my-4">
            Search Engine Optimization is essential for growing your online
            presence and driving organic traffic. Our team of SEO experts uses
            proven strategies tailored to your business needs, ensuring you
            stand out from the competition.
          </p>
        </div>
        <div>
          <h2 className="text-blue text-lg md:text-2xl font-semibold">
            Our Expertise in SEO
          </h2>
          <p className="text-darkgray text-sm leading-6 my-4">
            Whether you’re a local business or a global brand, we help you
            achieve higher rankings, more visibility, and better ROI. We
            understand the importance of targeting the right audience and
            delivering measurable results.
          </p>
          <p className="text-darkgray text-sm leading-6 my-4">
            With a deep understanding of Google’s algorithms and the latest SEO
            trends, we create custom strategies to keep your website ahead in
            search engine results.
          </p>
        </div>
        <div>
          <h2 className="text-blue text-lg md:text-2xl font-semibold">
            Start Optimizing Today
          </h2>
          <p className="text-darkgray text-sm leading-6 my-4">
            Ready to drive organic growth and boost your website’s performance?
            Let’s get started with a tailored SEO plan that meets your business
            goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SEO;
