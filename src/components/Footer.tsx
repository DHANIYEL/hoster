import React from "react";

const Footer = () => {
  return (
    <div className="padding !pb-0 bg-[#3457BB] text-[#c5c2c2]">
      <div className="lg:px-8 lg:py-12 flex justify-start  relative">
        <div className="flex w-fit justify-start items-center flex-row gap-28 max-lg:flex-col">
          <div className="w-1/4 max-lg:w-fit">
            <p className="max-lg:w-full ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor p urus non enim praesent elem
            </p>
          </div>
          <div className="w-3/4 grid grid-cols-4 max-md:grid-cols-2 gap-20 max-lg:w-full">
            <div className="flex flex-col w-full justify-around gap-6">
              <h6 className="font-semibold cursor-pointer">Service</h6>
              <p className="cursor-pointer">Domain</p>
              <p className="cursor-pointer">Shared Hosting</p>
              <p className="cursor-pointer">Cloud Hosting</p>
              <p className="cursor-pointer">Private Hosting</p>
            </div>
            <div className="flex flex-col w-full gap-6">
              <h6 className="font-semibold cursor-pointer">Hosting</h6>
              <p className="cursor-pointer">Cheap Hosting</p>
              <p className="cursor-pointer">Hosting Wordpress</p>
              <p className="cursor-pointer">Email Hosting</p>
              <p className="cursor-pointer">Hosting Unlimited</p>
            </div>
            <div className="flex flex-col w-full gap-6">
              <h6 className="font-semibold cursor-pointer">Company</h6>
              <p className="cursor-pointer">About</p>
              <p className="cursor-pointer">Career</p>
              <p className="cursor-pointer">Contact Us</p>
            </div>
            <div className="flex flex-col w-full gap-6">
              <h6 className="font-semibold cursor-pointer">Help</h6>
              <p className="cursor-pointer">FAQ</p>
              <p className="cursor-pointer">Help support</p>
            </div>
          </div>
        </div>
        <p
          className="absolute bottom-10 max-lg:right-0 max-md:bottom-0 cursor-pointer bg-[#ded9d929] px-3 py-2 rounded-lg text-[12px] font-semibold"
          onClick={() => {
            // Your custom click handler logic here
            window.location.href =
              "https://www.linkedin.com/in/dhaniyel-darvesh-256987280/";
          }}
        >
          Copyright by Dhaniiiyll
        </p>
      </div>
    </div>
  );
};

export default Footer;
