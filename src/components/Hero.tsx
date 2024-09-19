import CustomButton from './CustomButton';
import heroImage from "../assets/hero-img.png"; // Import as default export

const Hero = () => {
  return (
    <div className=" padding ">
      <div className="flex gap-5 max-md:flex-col-reverse items-center justify-center">
        {/* heading and text */}
        <div className="flex-1 justify-center">
          <h1 className="text-6xl font-bold leading-tight max-md:text-center max-lg:text-4xl">Premium Web Hosting for Your  Website</h1>
          <p className="py-7 text-gray-500 max-md:text-center max-lg:text-sm ">Blazing fast web hosting for individuals and  businesses of all sizes backed by 24x7x365 Support.</p>
          <div className='flex max-md:justify-center'>
            <CustomButton children="Create an Account" className="text-sm mt-8 btn-query" />
          </div>
        </div>
        {/* hero image */}
        <div className="flex-1 w-full flex justify-end max-md:justify-center max-md:my-6">
          <img src={heroImage} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;