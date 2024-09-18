
const Navbar = () => {
  return (
    <div>
      <div className="flex justify-center padding-x py-7">
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
          <li className="flex items-center justify-end">
            <p>+91 7012882165</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;