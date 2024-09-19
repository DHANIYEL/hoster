import phoneImage from "../assets/phone-img.png";

const Navbar = () => {
  // const nav = () => {
  //   const [toggle, setToggle] = useState(false);
  //   const handleToggle = () => {
  //     setToggle(!toggle);
  //   };
  // };

  return (
    <div>
      <div className="flex justify-center py-7 px-40 max-lg:px-20 items-center 2xl:mx-96">
        <ul className="flex justify-around w-full font-medium max-md:hidden mx-auto">
          <li className="flex items-center">
            <a href="/">Home</a>
          </li>
          <div className="flex gap-7"> 
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </div>
          <li className="flex items-center justify-end gap-1">
            <p className="mr-4 text-gray-300">|</p>
            <img src={phoneImage} alt="logo" className="w-4 h-4" />
            <p>+91 7012882165</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;