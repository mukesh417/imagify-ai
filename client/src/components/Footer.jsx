import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-between gap-4 py-6 mt-20 bg-white/50 shadow-inner rounded-t-2xl px-4 sm:px-10'>
      <img src={assets.logo} alt="Logo" width={150} />
      
      <p className='flex-1 border-l border-gray-300 pl-4 text-sm text-gray-500 max-sm:hidden'>
        © 2025 Imagify | All rights reserved.
      </p>

      <div className='flex gap-3'>
        <img src={assets.facebook_icon} alt="Facebook" className='w-8 h-8 hover:scale-110 transition-transform duration-300' />
        <img src={assets.twitter_icon} alt="Twitter" className='w-8 h-8 hover:scale-110 transition-transform duration-300' />
        <img src={assets.instagram_icon} alt="Instagram" className='w-8 h-8 hover:scale-110 transition-transform duration-300' />
      </div>
    </div>
  )
}

export default Footer;
