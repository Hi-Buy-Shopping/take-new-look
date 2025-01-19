import React, { useEffect } from "react";
import {
  FaGlobe,
  FaServer,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const DomainHosting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section
        className="h-[500px] mt-16 flex items-center justify-center bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('/assets/banner/hosting.jpg')",
        }}
      >
        <div className="text-center bg-black bg-opacity-50 p-8 rounded">
          <h1 className="md:text-4xl text-xl font-bold mb-4">Domain & Hosting Services</h1>
          <p className="md:text-lg text-sm">
            Empower your online presence with our secure and reliable solutions.
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
            <FaGlobe className="text-5xl text-white mb-4 mx-auto" />
            <h3 className="md:text-2xl text-xl font-bold text-center mb-4 text-white">
              Domain Registration
            </h3>
            <p className="text-base mb-4 text-white text-gray-100 text-center">
              Find the perfect domain for your business with hundreds of
              extensions to choose from.
            </p>
            <ul className="list-disc text-white list-inside text-gray-200 mb-4">
              <li>Wide range of extensions</li>
              <li>Competitive pricing</li>
              <li>Easy management</li>
            </ul>
            <button className="block mx-auto px-4 py-2 bg-white text-blue-500 font-semibold rounded-full hover:bg-gray-200">
              Learn More
            </button>
          </div>

          <div className="bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 shadow-lg rounded-xl p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <FaServer className="text-5xl text-white mb-4 mx-auto" />
            <h3 className="md:text-2xl text-xl font-bold text-center mb-4 text-white">
              Web Hosting
            </h3>
            <p className="text-base text-white mb-4 text-gray-100 text-center">
              Reliable, secure, and high-performance hosting for businesses of
              all sizes.
            </p>
            <ul className="list-disc text-white list-inside text-gray-200 mb-4">
              <li>99.9% uptime</li>
              <li>24/7 support</li>
              <li>Fast & secure servers</li>
            </ul>
            <button className="block mx-auto px-4 py-2 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-200">
              Learn More
            </button>
          </div>

          <div className="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 shadow-lg rounded-xl p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <FaServer className="text-5xl text-white mb-4 mx-auto" />
            <h3 className="md:text-2xl text-xl font-bold text-center mb-4 text-white">
              VPS Hosting
            </h3>
            <p className="text-base mb-4 text-white text-center">
              Scalable virtual private servers for high-performance needs.
            </p>
            <ul className="list-disc list-inside text-white mb-4">
              <li>Full root access</li>
              <li>Scalable resources</li>
              <li>High performance</li>
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
            Domain and Hosting
          </h2>
          <p className="text-darkgray text-sm leading-6 my-4">
            Starting a new business begins with registering a domain name that
            aligns with your brand. Next, you'll need a web server to host your
            website, often referred to as web hosting. Web hosting ensures your
            website is accessible to the public. We provide comprehensive
            solutions, offering both domain name registration and dependable web
            hosting services. Our services help you secure a unique online
            identity and the space needed to launch your website. Explore our
            affordable options for domain registration and hosting to get
            started today!
          </p>
        </div>
        <div>
          <h2 className="text-blue text-lg md:text-2xl font-semibold">
            Domain registration and web hosting services in Pakistan
          </h2>
          <p className="text-darkgray text-sm leading-6 my-4">
            The world has become a connected global community, and having a
            website is now essential for any business or organization. Websites
            serve as a reliable source of information and global interaction. To
            establish a website, domain names and hosting are fundamental. We
            provide domain registration and web hosting services that are
            crucial for building your company’s foundation and strengthening
            your brand identity. Creating a website is often one of the first
            steps when starting a new business.
          </p>
          <p className="text-darkgray text-sm leading-6 my-4">
            Thousands of individuals create websites for personal use or to
            start new businesses. However, deciding where to register a domain
            name and find reliable web hosting services can often be a
            challenging task.
          </p>
          <p className="text-darkgray text-sm leading-6 my-4">
            Here’s some valuable information to help with your website.
            Selecting the right domain name is a crucial step that requires
            careful thought, as multiple domain name options may be available.
            Once your domain is registered, the next step is securing web
            hosting. Reliable hosting providers also offer website designs,
            which can be created using platforms like WordPress, HTML, Joomla,
            and more.
          </p>
          <p className="text-darkgray text-sm leading-6 my-4">
            We provide a range of options for managing websites under multiple
            domain names. A company’s logo or brand name plays a vital role in
            establishing its identity and recognition.
          </p>
        </div>
        <div>
          <h2 className="text-blue text-lg md:text-2xl font-semibold">
            A hassle-free process for obtaining online domain services.
          </h2>
          <p className="text-darkgray text-sm leading-6 my-4">
            Choosing the best hosting services for your website is essential, as
            it can significantly impact your performance and ranking. Reliable
            hosting providers must efficiently handle high traffic and large
            download volumes, which consume bandwidth and storage. We provide
            optimal hosting solutions to ensure your website performs
            seamlessly, even under demanding conditions.
          </p>
          <p className="text-darkgray text-sm leading-6 my-4">
            Partner with us to secure a top-level domain for your new business
            or company, giving your website a professional and polished look.
            Trust our web and domain services, managed by skilled IT experts, to
            establish a credible online presence for your business. While many
            providers offer these services, it's crucial to choose one that
            aligns with your needs. The right provider will help you secure a
            unique domain name, ensuring professionalism. Without a proper
            domain, your website might end up with an unprofessional address
            like 123.789.456/mysite, whereas a domain such as mysite.com
            enhances accessibility and credibility.
          </p>
          <p className="text-darkgray text-sm leading-6 my-4">
            Register your domain and web hosting with us to ensure the best
            results. Contact us today to get started!
          </p>
        </div>
      </div>
      <div className="bg-blue-500 text-white py-8">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to get started with our services?
          </h3>
          <Link to={'/contact-us'}>
          <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded hover:bg-gray-100">
            Contact Us Today
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DomainHosting;
