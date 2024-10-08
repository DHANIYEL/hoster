import CustomButton from "./CustomButton";
// import heroImage from "../assets/hero-img.png";
// import ninja1 from "../assets/ninja1.jpg";
// import ninja2 from "../assets/ninja2.jpg";
// import ninja3 from "../assets/ninja3.jpg";
import ninja7 from "../assets/ninja7.jpg";
// import ninja8 from "../assets/ninja8.jpg";
// import ninja4 from "../assets/ninja4.jpg";

const Hero = () => {
  return (
    <div className=" padding pad-rem" id="home">
      <div className="flex gap-5 max-md:flex-col-reverse items-center justify-center">
        {/* heading and text */}
        <div className="flex-1 justify-center">
          <h1 className="text-6xl font-bold leading-tight max-md:text-center max-lg:text-4xl">
            Elevate Your WordPress with Server Ninja
          </h1>
          <p className="py-7 text-gray-500 max-md:text-center max-lg:text-sm ">
            Unleash the full potential of your WordPress website with Server
            Ninja's premium hosting solutions. Our expertly optimized
            infrastructure ensures lightning-fast load times, unparalleled
            security, and exceptional reliability, empowering you to deliver a
            seamless user experience.
          </p>
          <div className="flex max-md:justify-center">
            <CustomButton
              children="Create an Account"
              className="text-sm mt-8 btn-query"
              href="#pricing"
            />{" "}
          </div>
        </div>
        {/* hero image */}
        <div className="flex-1 w-full flex justify-end max-md:justify-center max-md:my-6 ">
          <img src={ninja7} alt="hero" className="object-contain rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
