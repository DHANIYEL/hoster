import React, { useState } from "react";
import phoneImage from "../assets/phone-img.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const NavLinks = ({ handleToggle }: { handleToggle: () => void }) => {
    return (
      <>
        <li className="flex items-center max-md:justify-center ">
          <a href="/">Home</a>
        </li>
        <div className="flex gap-7  max-md:flex-col max-md:py-7 items-center">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </div>
        <li className="flex items-center justify-end gap-1 max-md:justify-center">
          <p className="mr-4 text-gray-300 max-md:hidden">|</p>
          <img src={phoneImage} alt="logo" className="w-4 h-4" />
          <a href="tel:+919895987044">+91 9656210077</a>
        </li>
      </>
    );
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className="flex justify-center py-7 !pb-0 flex-wrap max-lg:px-16 lg:px-20 items-center max-md:justify-end ">
        <ul className="flex justify-around w-full  font-medium flex-wrap text-centers max-md:hidden mx-auto">
          <NavLinks handleToggle={handleToggle} />
        </ul>
        <div className="md:hidden">
          <button onClick={handleToggle}>{toggle ? <X /> : <Menu />}</button>
        </div>
      </div>
      {toggle && (
        <div className="md:hidden list-none flex items-center basis-full justify-center flex-col ">
          <NavLinks handleToggle={handleToggle} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
