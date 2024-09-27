import React, { useState } from "react";
import phoneImage from "../assets/phone-img.png";
import { Menu, X } from "lucide-react";
import SeverNinjaImg from "../assets/server.png";

const Navbar = () => {
  const NavLinks = ({ handleToggle }: { handleToggle: () => void }) => {
    return (
      <>
        <li className="flex items-center max-md:justify-center ">
          <a href="#home">
            <img
              src={SeverNinjaImg}
              alt="logo img"
              className="object-contain w-40 "
            />
          </a>
        </li>
        <div className="flex gap-7  max-md:flex-col max-md:py-7 items-center">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#clients">Clients</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </div>
        <li className="flex items-center justify-end gap-1 max-md:justify-center">
          <p className="mr-4 text-gray-300 max-md:hidden">|</p>
          <img src={phoneImage} alt="logo" className="w-4 h-4" />
          <a href="tel:+919656210077">+91 9656210077</a>
        </li>
      </>
    );
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const [toggle, setToggle] = useState(false);

  return (
    <div id="nav">
      <div className="flex justify-center py-7 !pb-0 !pt-5 flex-wrap padding lg:px-20 items-center max-md:justify-end ">
        <ul className="flex justify-around w-full fixed py-6 top-0 left-0 right-0 bg-white z-50 font-medium flex-wrap text-centers max-md:hidden mx-auto">
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
