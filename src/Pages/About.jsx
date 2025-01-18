import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      <section className="relative">
        <div
          className="h-[400px] bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/banner/page-banner.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/50 to-blue-900/70 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white">About Us</h1>
        </div>
      </section>

      <main className="flex w-full flex-col lg:flex-row items-start justify-between py-16 px-6">
        <div className="w-full lg:w-3/4 mx-auto space-y-8">
          <CardSection title="About Our Work">
            <p>
              At <span className="font-semibold">TakeNewLook</span>, we believe
              in turning ideas into impactful realities that drive growth and
              innovation. Our mission is to empower businesses to excel in the
              digital age through innovative strategies, cutting-edge
              technology, and a deep commitment to client success. Whether it's
              building a robust online presence, crafting engaging content, or
              delivering seamless e-commerce solutions, we strive to exceed
              expectations at every step. Led by our visionary CEO,{" "}
              <span className="font-semibold">Muhammad Raheeq Gill</span>, we
              combine expertise, creativity, and a client-centric approach to
              deliver exceptional results. Together, we aim to create solutions
              that not only meet the demands of today but also anticipate the
              opportunities of tomorrow.
            </p>
          </CardSection>
          <CardSection title="Web Developers in Pakistan">
            <p>
              Pakistan is home to some of the most talented web developers in
              the world. At{" "}
              <span className="text-blue-600 font-semibold">TakeNewLook</span>,
              we’re proud to contribute to this growing community. Our
              developers are skilled in creating intuitive, responsive, and
              visually captivating websites that cater to both local and global
              clients. With a focus on quality and innovation, we ensure your
              online presence sets you apart.
            </p>
          </CardSection>

          <CardSection title="Why Professional Web Development Company?">
            <p>
              Choosing a professional web development company like{" "}
              <span className="text-blue-600 font-semibold">TakeNewLook</span>{" "}
              is the first step towards achieving your digital goals. We provide
              more than just technical solutions—we offer strategic insights,
              creative designs, and seamless user experiences. Our expertise
              ensures your website not only looks stunning but also performs
              exceptionally, helping you connect with your audience effectively.
            </p>
          </CardSection>
        </div>
        <div className="w-full lg:w-1/4 bg-white shadow-lg rounded-lg p-5 flex items-start flex-col max-w-xl">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">
            Request a Call Back
          </h2>
          <form className="space-y-4 w-full">
            <div className="flex p-2 w-full flex-col">
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="border border-border outline-none placeholder-gray-400 p-2 rounded-md w-full"
              />
            </div>
            <div className="flex p-2 w-full flex-col">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="border border-border outline-none placeholder-gray-400 p-2 rounded-md w-full"
              />
            </div>
            <div className="flex p-2 w-full flex-col">
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                className="border border-border outline-none placeholder-gray-400 p-2 rounded-md w-full"
              />
            </div>
            <div className="flex p-2 w-full flex-col">
              <select
                id="requirement"
                className="border border-border p-2 rounded-md w-full"
              >
                <option value="" disabled selected>
                  Select your requirement
                </option>
                <option value="seo">SEO</option>
                <option value="web-development">Web Development</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md font-medium hover:bg-blue-700 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

const CardSection = ({ title, children }) => (
  <section className="bg-white rounded-lg p-2">
    <h2 className="text-xl font-semibold text-blue mb-4">{title}</h2>
    <div className="text-[16px] leading-relaxed text-gray-700">{children}</div>
  </section>
);

export default AboutUs;
