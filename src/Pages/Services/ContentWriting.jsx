import React, { useEffect } from "react";
import { FaPenNib, FaFileAlt, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContentWriting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section
        className="h-[500px] mt-16 flex items-center justify-center bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('/assets/banner/content-writing.jpg')",
        }}
      >
        <div className="text-center bg-black bg-opacity-50 p-8 rounded">
          <h1 className="md:text-4xl text-xl font-bold mb-4">
            Content Writing Services
          </h1>
          <p className="md:text-lg text-sm">
            Captivating content that drives engagement and boosts your brand.
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
          <div className="bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 shadow-lg rounded-xl p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <FaPenNib className="text-5xl text-white mb-4 mx-auto" />
            <h3 className="md:text-2xl text-xl font-bold text-center mb-4 text-white">
              Creative Content Writing
            </h3>
            <p className="text-base mb-4 text-white text-center">
              Inspire and engage your audience with unique, compelling content.
            </p>
            <ul className="list-disc text-white list-inside text-gray-200 mb-4">
              <li>Blogs & Articles</li>
              <li>Website Copy</li>
              <li>Storytelling</li>
            </ul>
            <button className="block mx-auto px-4 py-2 bg-white text-yellow-600 font-semibold rounded-full hover:bg-gray-200">
              Learn More
            </button>
          </div>

          <div className="bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 shadow-lg rounded-xl p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <FaFileAlt className="text-5xl text-white mb-4 mx-auto" />
            <h3 className="md:text-2xl text-xl font-bold text-center mb-4 text-white">
              SEO Content Writing
            </h3>
            <p className="text-base text-white mb-4 text-center">
              Optimize your content to rank higher and attract the right audience.
            </p>
            <ul className="list-disc text-white list-inside text-gray-200 mb-4">
              <li>Keyword Research</li>
              <li>SEO-Optimized Blogs</li>
              <li>Meta Descriptions</li>
            </ul>
            <button className="block mx-auto px-4 py-2 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-200">
              Learn More
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-700 shadow-lg rounded-xl p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <FaChartLine className="text-5xl text-white mb-4 mx-auto" />
            <h3 className="md:text-2xl text-xl font-bold text-center mb-4 text-white">
              Marketing Content
            </h3>
            <p className="text-base mb-4 text-white text-center">
              Drive conversions with persuasive, audience-focused content.
            </p>
            <ul className="list-disc text-white list-inside text-gray-200 mb-4">
              <li>Email Campaigns</li>
              <li>Social Media Content</li>
              <li>Product Descriptions</li>
            </ul>
            <button className="block mx-auto px-4 py-2 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-200">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6">
        <div>
          <h2 className="text-blue text-lg md:text-2xl font-semibold">
            Why Choose Us for Content Writing?
          </h2>
          <p className="text-darkgray text-sm leading-6 my-4">
            Words are powerful, and we know how to use them effectively. Our
            content writing services are designed to enhance your brand
            identity, engage your audience, and boost your online presence.
            Whether it's creative storytelling, SEO optimization, or marketing
            content, we deliver quality that resonates.
          </p>
        </div>
        <div>
          <h2 className="text-blue text-lg md:text-2xl font-semibold">
            Content Writing in Pakistan
          </h2>
          <p className="text-darkgray text-sm leading-6 my-4">
            Pakistan is home to talented writers who understand diverse
            industries and audiences. Our team specializes in crafting content
            tailored to your business needs, keeping your target audience in
            mind while maintaining a high standard of quality.
          </p>
          <p className="text-darkgray text-sm leading-6 my-4">
            From startups to established enterprises, our content writing
            services provide a competitive edge by creating content that
            informs, inspires, and converts.
          </p>
        </div>
        <div>
          <h2 className="text-blue text-lg md:text-2xl font-semibold">
            Start Your Content Journey Today
          </h2>
          <p className="text-darkgray text-sm leading-6 my-4">
            Elevate your brand with content that speaks volumes. Partner with us
            to create engaging content that connects with your audience and
            achieves your business goals. Let us help you tell your story
            effectively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentWriting;
