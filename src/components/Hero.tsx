import React from 'react';
import CustomButton from './CustomButton';

const Hero = () => {
  return (
    <div>
      <div className='flex gap-5 padding'>
        {/* heading and text */}
        <div className='flex-1'>
          <h1 className='text-6xl font-bold leading-tight '>Premium Web <br />Hosting for Your <br /> Website</h1>
          <p className='py-5 text-gray-500 '>Blazing fast web hosting for individuals and <br /> businesses of all sizes backed by 24x7x365 Support.</p>
          <CustomButton children="Creat an Account" className="text-sm mt-5"/>
        </div>
        {/* hero image */}
        <div className='flex-1'>
          <img src='/assets/hero-img.png' alt='hero' />
        </div>
      </div>
    </div>
  );
};

export default Hero;