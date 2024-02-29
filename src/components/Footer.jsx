import React from 'react';
import { down } from '../assets/images';

const Footer = () => {
  return (
    <div className="py-12 text-[#aac4e2]">
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 px-10 md:px-0 max-w-screen-md mx-auto overflow-x-hidden'>
        <div className='flex flex-col gap-3'>
          <div className='text-lg text-[#bed3eb]'>CATEGORIES</div>
          <div className='text-sm'>Web Builder</div>
          <div className='text-sm'>Hosting</div>
          <div className='text-sm'>Data Center</div>
          <div className='text-sm'>Robotic-Automation</div>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='text-lg text-[#bed3eb]'>CONTACT</div>
          <div className='text-sm'>Contact</div>
          <div className='text-sm'>Privacy Policy</div>
          <div className='text-sm'>Terms Of Service</div>
          <div className='text-sm'>Categories</div>
          <div className='text-sm'>About</div>
        </div>
        <div className='flex items-center justify-center md:justify-start'>
          United States
          <img src={down} alt="location" className='w-5 h-5 ml-2' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
