
import React from 'react';
import { assets } from '../assets/assets';
import { motion } from "motion/react";

const Description = () => {
  return (
    <motion.div 
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='flex flex-col items-center justify-center my-24 p-6 md:px-28'
    >
      <h1 className='text-3xl sm:text-4xl font-bold mb-3 text-center'>Bring Ideas to Life</h1>
      <p className='text-gray-500 mb-10 text-center'>Transform words into stunning visuals instantly</p>

      <div className='flex flex-col md:flex-row items-center gap-8 md:gap-14'>
        <img src={assets.sample_img_1} alt="Sample AI" className='w-80 xl:w-96 rounded-xl shadow-lg'/>
        
        <div>
          <h2 className='text-2xl sm:text-3xl font-semibold mb-4'>AI-Powered Image Generation</h2>
          <p className='text-gray-600 mb-4'>
            Just type a prompt describing your idea, and our AI engine will create a unique, high-quality image in seconds. No design skills needed!
          </p>
          <p className='text-gray-600'>
            Perfect for social media, product designs, characters, or creative concepts that don’t exist yet. Your imagination is the only limit.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Description;
