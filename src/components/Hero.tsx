import React from 'react';
import CustomButton from './CustomButton';
import heroImage from "assets/hero-img.png"; // Import as default export

const Hero = () => {
  return (
    <div>
      <div className="flex gap-5 padding max-md:flex-col-reverse items-center">
        {/* heading and text */}
        <div className="flex-1">
          <h1 className="text-6xl font-bold leading-tight">Premium Web <br />Hosting for Your <br /> Website</h1>
          <p className="py-7 text-gray-500">Blazing fast web hosting for individuals and <br /> businesses of all sizes backed by 24x7x365 Support.</p>
          <CustomButton children="Create an Account" className="text-sm mt-8" />
        </div>
        {/* hero image */}
        <div className="flex-1 w-full ">
          <img src={heroImage} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;