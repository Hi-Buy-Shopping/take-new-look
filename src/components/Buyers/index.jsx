
const cardData = [
    {
        imgSrc: '/assets/buyers/ourbuyers.svg',
        percent: '90+',
        heading: "Our buyers",
        subheading: "Our Buyers, Trusted Partners on the Journey to Excellence!",
    },
    {
        imgSrc: '/assets/buyers/projectcompleted.svg',
        percent: '100+',
        heading: "Project completed",
        subheading: "Over 100 Projects Completed with Precision and Excellence!",
    },
    {
        imgSrc: '/assets/buyers/happybuyers.svg',
        percent: '99%',
        heading: "Happy buyers",
        subheading: "99% Happy Buyers, Because Your Satisfaction Drives Us!",
    },
    {
        imgSrc: '/assets/buyers/teammembers.svg',
        percent: '50+',
        heading: "Team members",
        subheading: "50+ Dedicated Team Members, United to Deliver Success!",
    }

]

const Buyers = () => {
    return (
        <div className='mx-auto max-w-7xl py-16 px-6'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5'>
                {cardData.map((items, i) => (
                    <div className='flex flex-col justify-center items-center' key={i}>
                        <div className='flex justify-center border border-border  p-2 w-10 rounded-lg'>
                            <img src={items.imgSrc} alt={items.imgSrc} width={30} height={30} />
                        </div>
                        <h2 className='text-4xl lg:text-6xl text-black font-semibold text-center mt-5'>{items.percent}</h2>
                        <h3 className='text-2xl text-black font-semibold text-center lg:mt-6'>{items.heading}</h3>
                        <p className='text-lg font-normal text-black text-center text-opacity-50 mt-2'>{items.subheading}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Buyers;


// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const cardData = [
//     {
//         imgSrc: "/assets/buyers/ourbuyers.svg",
//         percent: 90,
//         heading: "Our buyers",
//         subheading: "Our Buyers, Trusted Partners on the Journey to Excellence!",
//     },
//     {
//         imgSrc: "/assets/buyers/projectcompleted.svg",
//         percent: 100,
//         heading: "Project completed",
//         subheading: "Over 100 Projects Completed with Precision and Excellence!",
//     },
//     {
//         imgSrc: "/assets/buyers/happybuyers.svg",
//         percent: 99,
//         heading: "Happy buyers",
//         subheading: "99% Happy Buyers, Because Your Satisfaction Drives Us!",
//     },
//     {
//         imgSrc: "/assets/buyers/teammembers.svg",
//         percent: 50,
//         heading: "Team members",
//         subheading: "50+ Dedicated Team Members, United to Deliver Success!",
//     },
// ];

// const Buyers = () => {
//     return (
//         <div className="mx-auto max-w-7xl py-16 px-6">
//             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8">
//                 {cardData.map((item, i) => (
//                     <motion.div 
//                         key={i}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, delay: i * 0.2 }}
//                         className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg border border-border"
//                     >
//                         <div className="flex justify-center p-3 rounded-lg">
//                             <img src={item.imgSrc} alt={item.heading} width={40} height={40} />
//                         </div>
//                         <motion.h2 
//                             className="text-5xl lg:text-6xl text-black font-bold mt-4"
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ delay: 0.5 }}
//                         >
//                             <AnimatedNumber value={item.percent} />+
//                         </motion.h2>
//                         <h3 className="text-xl lg:text-2xl text-black font-semibold text-center mt-2">
//                             {item.heading}
//                         </h3>
//                         <p className="text-lg font-medium text-gray-600 text-center mt-2">
//                             {item.subheading}
//                         </p>
//                     </motion.div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// const AnimatedNumber = ({ value }) => {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         let start = 0;
//         const duration = 1500; // 1.5s animation
//         const interval = 10;
//         const increment = (value / (duration / interval));

//         const timer = setInterval(() => {
//             start += increment;
//             if (start >= value) {
//                 setCount(value);
//                 clearInterval(timer);
//             } else {
//                 setCount(Math.floor(start));
//             }
//         }, interval);

//         return () => clearInterval(timer);
//     }, [value]);

//     return <span>{count}</span>;
// };

// export default Buyers;
