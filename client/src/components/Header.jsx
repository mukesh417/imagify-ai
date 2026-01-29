import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router";

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();
  const onClickHandler = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-center text-center my-20 px-4 sm:px-10"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Small Caption */}
      <motion.div
        className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-6 py-1 rounded-full border border-gray-300 text-gray-700 font-medium"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p>Create unique AI visuals in seconds</p>
        <img src={assets.star_icon} alt="" />
      </motion.div>

      {/* Main Heading */}
      <motion.h1 className="text-4xl sm:text-6xl lg:text-7xl max-w-[590px] mx-auto mt-10 font-bold">
        Transform text into{" "}
        <span className="bg-linear-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
          stunning images
        </span>{" "}
        instantly
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-gray-600 mt-5 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Let your imagination run wild! Type a prompt and watch our AI generate
        creative visuals that are unique every time.
      </motion.p>

      {/* Generate Button */}
      <motion.button
        onClick={onClickHandler}
        className="mt-8 px-12 py-3 flex items-center gap-3 rounded-full bg-linear-to-r from-purple-500 to-pink-500 text-white font-medium shadow-lg hover:scale-105 transition-transform duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ default: { duration: 0.5 }, opacity: { delay: 0.8, duration: 1 } }}
      >
        Generate Your Image
        <img src={assets.star_group} alt="" className="h-6" />
      </motion.button>

      {/* Sample Thumbnails */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex flex-wrap justify-center mt-16 gap-3"
      >
        {Array(6)
          .fill("")
          .map((_, index) => (
            <motion.img
              key={index}
              whileHover={{ scale: 1.05, duration: 0.1 }}
              className="rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-12"
              src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
              alt={`sample-${index}`}
              width={70}
            />
          ))}
      </motion.div>

      {/* Footer Caption */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-2 text-gray-500"
      >
        Powered by Imagify AI
      </motion.p>
    </motion.div>
  );
};

export default Header;
