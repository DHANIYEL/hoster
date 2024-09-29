import React from "react";

const Footer = () => {
  const handleContact = () => {
    window.location.href = "#nav";
  };
  const handleAbout = () => {
    window.location.href = "#about";
  };
  const handlePrice = () => {
    window.location.href = "#pricing";
  };
  return (
    <div className="padding !pb-0 bg-[#3457BB] text-[#c5c2c2]">
      <div className="lg:px-8 lg:py-12 flex justify-start  relative">
        <div className="flex w-fit justify-start items-start flex-row gap-28 max-lg:flex-col">
          <div className="w-1/4 max-lg:w-fit">
            <p className="max-lg:w-full ">
              <strong>Server Ninja </strong> Your trusted partner for
              exceptional WordPress hosting. Experience the power of our
              optimized infrastructure, designed to deliver lightning-fast
              performance, unparalleled security, and exceptional reliability.
            </p>
            <br />
            <p className="font-semibold">
              Server Ninja <br /> Kerala Startup Mission <br /> Govt Cyber Park,
              Calicut 673016
              <br />
              <br />
            </p>
          </div>
          <div className="w-3/4 grid grid-cols-3 max-md:grid-cols-2 gap-16  max-lg:w-full">
            <div className="flex flex-col justify-start gap-6 ">
              <h6 className="font-semibold cursor-pointe w-fit">Service</h6>
              <p className="cursor-pointer w-fit" onClick={handlePrice}>
                Cheap Hosting
              </p>
              <p className="cursor-pointer w-fit" onClick={handlePrice}>
                Hosting Wordpress
              </p>
              <p className="cursor-pointer w-fit" onClick={handlePrice}>
                Hosting Unlimited
              </p>
            </div>
            <div className="flex flex-col w-fit gap-6">
              <h6 className="font-semibold cursor-pointer w-fit">Hosting</h6>
              <p className="cursor-pointer w-fit" onClick={handlePrice}>
                Shared Server
              </p>
              <p className="cursor-pointer w-fit" onClick={handlePrice}>
                Cloud Server
              </p>
              <p className="cursor-pointer w-fit" onClick={handlePrice}>
                WordPress Dedicated
              </p>
            </div>
            <div className="flex flex-col  gap-6 w-fit">
              <h6 className="font-semibold cursor-pointer">Company</h6>
              <p className="cursor-pointer" onClick={handleAbout}>
                About
              </p>
              <p className="cursor-pointer" onClick={handleContact}>
                Contact Us
              </p>
            </div>
          </div>
        </div>
        <p className="absolute bottom-6 max-lg:right-0 max-lg:bottom-0  text-[12px] max-sm:text-[10px] font-semibold">
          © 2024 Server Ninja. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
