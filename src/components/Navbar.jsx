import { useState } from "react";
import logo from "../assets/logo.webp";
import { RiCloseLine, RiMenu3Fill } from "@remixicon/react";
import { LINKS } from "../constants/index";
const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggleMenu = () => {
    setisOpen(!isOpen);
  };
  return (
    <nav className=" border-b-2 border-neutral-200 bg-neutral-50 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-8 px-4">
        {/* this is logo div */}
        <div className="pl-2">
          <a href="#">
            <img src={logo} width={150} height={15} alt="vastuSpaze" />
          </a>
        </div>
        {/* this div phone toggleMenu create */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl pr-2  focus:outline-none cursor-pointer"
            aria-label={isOpen ? "close menu" : "open menu"}
          >
            {isOpen ? <RiCloseLine /> : <RiMenu3Fill />}
          </button>
        </div>
        <div className="hidden md:flex space-x-8 md:space-x-4 pr-1 ">
          {LINKS.map((link, index) => (
            <a
              href={link.link}
              key={index}
              className="uppercase text-sm font-medium hover:text-neutral-600 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden absolute top-16 left-0 w-full p-5 bg-neutral-50 shadow-lg border border-neutral-200 rounded-2xl`}
        >
          {LINKS.map((link, index) => (
            <a
              href={link.link}
              key={index}
              className="block uppercase text-sm font-medium mb-2 hover:text-neutral-600 transition-colors duration-300 "
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
