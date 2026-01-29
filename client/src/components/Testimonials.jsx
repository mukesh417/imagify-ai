// import React from "react";
// import { assets, testimonialsData } from "../assets/assets";
// import { motion } from "motion/react";
// const Testimonials = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0.2, y: 100 }}
//       transition={{ duration: 1 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       className="flex flex-col items-center justify-center my-20 py-12"
//     >
//       <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
//         Customer Testimonials
//       </h1>
//       <p className="text-gray-500 mb-12">What Our User are Saying</p>
//       <div className="flex flex-wrap gap-6">
//         {testimonialsData.map((testimonial, index) => (
//           <div
//             key={index}
//             className="bg-white/20 p-12 rounded-lg shadow-md border w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all"
//           >
//             <div className="flex flex-col items-center">
//               <img
//                 src={testimonial.image}
//                 alt=""
//                 className="rounded-full w-14"
//               />
//               <h2 className="text-xl font-semibold mt-3">{testimonial.name}</h2>
//               <p className="text-gray-400 mb-4">{testimonial.role}</p>
//               <div className="flex mb-4">
//                 {Array(testimonial.stars)
//                   .fill()
//                   .map((item, index) => (
//                     <img key={index} src={assets.rating_star} alt="" />
//                   ))}
//               </div>
//               <p className="text-center text-sm text-gray-600">
//                 {testimonial.text}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default Testimonials;
// ============================================================================================================
import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "motion/react";

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-20 py-12"
    >
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-center">What Our Users Say</h1>
      <p className="text-gray-500 mb-12 text-center">Real feedback from our creative community</p>

      <div className="flex flex-wrap justify-center gap-6">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white/30 p-10 rounded-2xl shadow-xl w-80 cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <div className="flex flex-col items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-full w-16 mb-3"
              />
              <h2 className="text-lg font-semibold text-purple-600">{testimonial.name}</h2>
              <p className="text-gray-400 mb-3 text-sm">{testimonial.role}</p>
              <div className="flex mb-4">
                {Array(testimonial.stars).fill().map((_, i) => (
                  <img key={i} src={assets.rating_star} alt="star" className="w-5 h-5"/>
                ))}
              </div>
              <p className="text-center text-gray-600 text-sm">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
