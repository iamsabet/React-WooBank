import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import NavLinks from "./NavbarComponents/NavLinks";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className="w-full flex py-6 
      justify-between items-center navbar"
    >
      <img src={logo} alt="woobank" className="w-[124px] h-[32px]" />
      <NavLinks mobile={true} navLinks={navLinks} />

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          onClick={() => {
            setToggle((prev) => !prev);
          }}
          className="w-[28px] h-[28px] object-contain cursor-pointer"
        />
        <div
          className={`${toggle ? "flex" : "hidden"} 
            p-6 bg-black-gradient absolute top-16 right-0 
            mx-4 my-2 min-w-[150px] rounded-xl dashba sidebar`}
        >
          <NavLinks mobile={false} navLinks={navLinks} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
