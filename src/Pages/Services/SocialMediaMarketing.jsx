import React, { useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const SocialMediaMarketing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section
        className="h-[500px] mt-16 flex items-center justify-center bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('/assets/banner/social-media-marketing.jpg')",
        }}
      >
        <div className="text-center bg-black bg-opacity-50 p-8 rounded">
          <h1 className="md:text-4xl text-xl font-bold mb-4">
            Social Media Marketing Services
          </h1>
          <p className="md:text-lg text-sm">
            Amplify your brand's reach and engagement through expert strategies.
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
          <div className="bg-gradient-to-br from-blue-500 via-sky-500 to-indigo-500 shadow-lg rounded-xl p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <FaFacebook className="text-5xl text-white mb-4 mx-auto" />
            <h3 className="md:text-2xl text-xl font-bold text-center mb-4 text-white">
              Facebook Marketing
            </h3>
            <p className="text-base mb-4 text-white text-center">
              Boost engagement and grow your audience with strategic Facebook campaigns.
            </p>
            <ul className="list-disc text-white list-inside text-gray-200 mb-4">
              <li>Facebook Ads</li>
              <li>Page Management</li>
              <li>Content Strategy</li>
            </ul>
            <button className="block mx-auto px-4 py-2 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-200">
              Learn More
            </button>
          </div>

          <div className="bg-gradient-to-br from-pink-500 via-red-500 to-orange-500 shadow-lg rounded-xl p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <FaInstagram className="text-5xl text-white mb-4 mx-auto" />
            <h3 className="md:text-2xl text-xl font-bold text-center mb-4 text-white">
              Instagram Marketing
            </h3>
            <p className="text-base text-white mb-4 text-center">
              Create visually captivating campaigns to drive growth and engagement.
            </p>
            <ul className="list-disc text-white list-inside text-gray-200 mb-4">
              <li>Instagram Ads</li>
              <li>Reels & Stories</li>
              <li>Influencer Collaborations</li>
            </ul>
            <button className="block mx-auto px-4 py-2 bg-white text-pink-600 font-semibold rounded-full hover:bg-gray-200">
              Learn More
            </button>
          </div>

          <div className="bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 shadow-lg rounded-xl p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <FaTwitter className="text-5xl text-white mb-4 mx-auto" />
            <h3 className="md:text-2xl text-xl font-bold text-center mb-4 text-white">
              Twitter Marketing
            </h3>
            <p className="text-base mb-4 text-white text-center">
              Stay on top of trends and connect with your audience in real-time.
            </p>
            <ul className="list-disc text-white list-inside text-gray-200 mb-4">
              <li>Hashtag Campaigns</li>
              <li>Twitter Ads</li>
              <li>Real-Time Engagement</li>
            </ul>
            <button className="block mx-auto px-4 py-2 bg-white text-cyan-500 font-semibold rounded-full hover:bg-gray-200">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6">
        <div>
          <h2 className="text-blue text-lg md:text-2xl font-semibold">
            Why Choose Us for Social Media Marketing?
          </h2>
          <p className="text-darkgray text-sm leading-6 my-4">
            Social media is more than just posts and likes; it's about building
            relationships, driving engagement, and creating loyal customers. Our
            experts develop tailored strategies to help your business thrive on
            every platform.
          </p>
        </div>
        <div>
          <h2 className="text-blue text-lg md:text-2xl font-semibold">
            Social Media Marketing in Pakistan
          </h2>
          <p className="text-darkgray text-sm leading-6 my-4">
            With millions of active users on social media in Pakistan, there’s
            no better time to establish your presence. Our team understands the
            local market and helps you connect with the right audience to
            achieve your goals.
          </p>
          <p className="text-darkgray text-sm leading-6 my-4">
            Whether you're a startup or an established business, our data-driven
            approach ensures measurable results and meaningful engagement.
          </p>
        </div>
        <div>
          <h2 className="text-blue text-lg md:text-2xl font-semibold">
            Start Your Social Media Campaign Today
          </h2>
          <p className="text-darkgray text-sm leading-6 my-4">
            Unlock your business’s potential with expert social media marketing
            services. From strategy to execution, we’ll help you reach new
            heights on every platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaMarketing;
