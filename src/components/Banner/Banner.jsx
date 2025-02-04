// import React from "react";
// import { Link } from "react-router-dom";

// const Banner = () => {
//   return (
//     <main>
//       <div className="px-6 lg:px-8 mt-32">
//         <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image">
//           <div className="text-center">
//             <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl  lg:text-7xl md:4px lh-96">
//               Solve problem with an <br /> integrated agency.
//             </h1>
//             <p className="mt-6 text-lg leading-8 text-bluegray">
//               Solve problems with TakeNewLook, an integrated agency that
//               combines creativity, strategy, <br /> and innovation to deliver seamless
//               solutions.
//             </p>
//           </div>

//           <div className="text-center mt-5">
//             <Link to="/contact-us">
//             <button
//               type="button"
//               className="text-15px text-white font-medium bg-blue py-5 px-9 mt-2 leafbutton"
//             >
//               See our portfolio
//             </button>
//             </Link>
//             <Link to="/about-us">
//               <button
//                 type="button"
//                 className="text-15px ml-4 mt-2 text-blue transition duration-150 ease-in-out hover:text-white hover:bg-blue font-medium py-5 px-16 border border-lightgrey leafbutton"
//               >
//                 More info
//               </button>
//             </Link>
//           </div>

//           <img
//             src={"/assets/banner/dashboard.svg"}
//             alt="banner-image"
//             width={1200}
//             height={598}
//           />
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Banner;
import React from 'react';


const Banner = () => {
  return (
    // <section
    //   id='home'
    //   className='lg:h-full lg:max-h-800 bg-gradient-to-t from-[#f8f3ec] to-[#e0c8ac]'
    // >
    //   {/* <Header /> */}
    //   <div className='container mx-auto h-full lg:flex pt-32'>
    //     <div className='text-center mx-auto h-full lg:text-left px-8 md:p-0'>
    //       <h1 className='font-primary font-black text-6xl lg:text-7xl text-primary mb-4 lg:mt-[70px] leading-tight lg:leading-[90px]'>
    //         Your Problem <br /> <span className='text-accent'>Our Goal.</span>
    //       </h1>
    //       <p className='max-w-sm mx-auto mb-[50px] lg:mx-0 lg:max-w-[540px]'>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
    //         architecto corrupti! Dolores rem dicta officia nam unde modi ad
    //         omnis.
    //       </p>
    //       <div className='lg:absolute mx-auto max-w-[445px] lg:mx-0'>
    //         <Appointment />
    //       </div>
    //     </div>
    //     <div className='hidden flex-1 lg:flex lg:flex-col items-end'>
    //       <img src={Image} alt='' />
    //     </div>
    //   </div>
    // </section>
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-20 mt-20">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to Takenewlook
          </h1>
          <p className="text-xl mb-8">
            We are a creative agency dedicated to building stunning digital experiences that captivate and inspire.
          </p>
          <button className="bg-white text-blue-500 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-50 transition duration-300">
            Get Started
          </button>
        </div>

        <div className="lg:w-1/2 bg-white rounded-lg shadow-2xl p-8 animate-fade-in-up delay-100">
          <h2 className="text-2xl font-bold text-darkgray mb-6">Book an Appointment</h2>
          <form>
            <div className="mb-4">
              <label className="block text-darkgray text-sm font-bold mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-darkgray text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="johndoe@example.com"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-darkgray text-sm font-bold mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="+1 234 567 890"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-darkgray text-sm font-bold mb-2" htmlFor="date">
                Appointment Date
              </label>
              <input
                type="date"
                id="date"
                className="w-full px-4 py-2 border border-border text-darkgray rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
