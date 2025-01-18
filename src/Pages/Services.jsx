import React from "react";

const services = [
  {
    image: "/assets/services/domain.jpg",
    title: "Domain & Hosting",
    description:
      "Just merely setting up a business is not the need of the hour. The first step is...",
    link: "#",
  },
  {
    image: "/assets/services/development.jpg",
    title: "Web Development",
    description:
      "A forward-looking company manned by professionals in their respective fields.",
    link: "#",
  },
  {
    image: "/assets/services/writting.jpg",
    title: "Content Writing",
    description:
      "It’s necessary that the content written in your website is catchy and helps you to get high...",
    link: "#",
  },
  {
    image: "/assets/services/social.jpg",
    title: "Social Media Mkt.",
    description:
      "Social media marketing is a new buzzword in the field of marketing where traffic...",
    link: "#",
  },
  {
    image: "/assets/services/seo.jpg",
    title: "Seo Optimization",
    description:
      "Seo optimization is a technique that is used to increase the visibility of a website...",
    link: "#",
  },
  {
    image: "/assets/services/product.jpg",
    title: "Product Photography",
    description:
      "Product photography is a branch of commercial photography which is about accurately...",
    link: "#",
  },
  {
    image: "/assets/services/ecommerce.jpg",
    title: "Ecommerce Solutions",
    description:
      "Ecommerce solutions are the products and services that help a company conduct...",
    link: "#",
  },
  {
    image: "/assets/services/uiux.jpg",
    title: "UI/UX Design",
    description:
      "UI/UX design is the process of designing interfaces in software or computerized devices...",
    link: "#",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-[#fcfcfc] py-12">
      <section className="relative">
        <div
          className="h-[400px] bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/banner/page-banner-1.jpg')",
          }}
        >
            <div className="absolute inset-0 bg-blue-500/70 opacity-40"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/50 to-blue-900/70 flex items-center justify-center">
          <h1 className="text-4xl font-semibold text-white">Our Services</h1>
        </div>
      </section>
      <div className="container mx-auto px-6 my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-2  border border-[#e9e9e9]"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-bold text-blue mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a
                href={service.link}
                className="text-[#1a2362] font-semibold hover:text-indigo-800 flex items-center"
              >
                Read More <span className="ml-2">&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
