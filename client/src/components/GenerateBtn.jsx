
import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router";

const GenerateBtn = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) navigate("/result");
    else setShowLogin(true);
  };

  return (
    <motion.div 
      className="text-center py-16 bg-linear-to-r from-purple-50 to-purple-100 rounded-xl my-20"
      initial={{ opacity: 0.2, y: 50 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-purple-800">
        Ready to see your imagination come alive?
      </h1>

      <button
        onClick={onClickHandler}
        className="inline-flex items-center gap-3 px-14 py-3 rounded-full bg-purple-700 text-white hover:bg-purple-800 hover:scale-105 transition-all duration-500"
      >
        Generate Your Image
        <img src={assets.star_group} alt="" className="h-6" />
      </button>
    </motion.div>
  );
};

export default GenerateBtn;
