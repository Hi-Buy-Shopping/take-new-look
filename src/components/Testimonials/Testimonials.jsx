// import React from 'react';

// // import components
// import TestimonialSlider from './TestimonialSlider';

// const Testimonials = () => {
//   return (
//     <section className='h-[346px] lg:mb-[120px]'>
//       <div className='container mx-auto h-full flex items-center justify-end'>
//         <div className='w-full mx-auto lg:mx-0 lg:max-w-[570px]'>
//           <TestimonialSlider />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Raheeq Gill',
    designation: 'CEO, Hibuyshopping',
    feedback: 'TakeNewLook transformed our online presence with top-notch SEO and web development services. Highly recommended!',
    image: '/assets/clientsay/user.png',
  },
  {
    name: 'Sarah Smith',
    designation: 'Founder, DigitalWave',
    feedback: 'Exceptional digital marketing strategies! Our traffic and engagement have skyrocketed.',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Michael Johnson',
    designation: 'Owner, ShopEase',
    feedback: 'E-commerce solutions that really work! Our sales have increased significantly.',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    name: 'Sarah Smith',
    designation: 'Founder, DigitalWave',
    feedback: 'Exceptional digital marketing strategies! Our traffic and engagement have skyrocketed.',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Michael Johnson',
    designation: 'Owner, ShopEase',
    feedback: 'E-commerce solutions that really work! Our sales have increased significantly.',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 mb-16 bg-gray-100 text-gray-900">
      <div className="container mx-auto text-center py-10 px-6">
        <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="py-10"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-2xl shadow-lg flex mb-10 mx-4 h-[300px] flex-col items-center text-center">
                <FaQuoteLeft className="text-3xl text-blue-500 mb-4" />
                <p className="text-lg italic">"{testimonial.feedback}"</p>
                <div className="mt-6 flex gap-4 items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-blue-500"
                  />
                 <div className='flex flex-col items-center'>
                 <h3 className="mt-3 text-xl font-semibold">{testimonial.name}</h3>
                 <p className="text-sm text-gray-600">{testimonial.designation}</p>
                 </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
