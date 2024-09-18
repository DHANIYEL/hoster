import phoneImage from "../assets/phone-img.png"

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-center py-7 px-40 items-center">
        <ul className="flex justify-between w-full font-medium">
          <li className="flex items-center">
            <a href="/">Home</a>
          </li>
          <div className="flex gap-9">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Blog</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </div>
          <li className="flex items-center justify-end gap-1">
            <p className="mr-4 text-gray-300">|</p>
            <img src={phoneImage} alt="logo"  className="w-4 h-4"/>
            <p>+91 7012882165</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;