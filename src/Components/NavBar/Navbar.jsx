import React from "react"
import { assets } from "../../assets/assets";
import { Menu } from "../../assets/assets";
import { DropdownLinks } from "../../assets/assets";
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Navbar = () => {
  return (
    <div className="shadow-lg bg-white dark:bg-gray-900 dark:text-white duration-200">
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={assets.logo} alt="" className="w-10"/>
              Books
            </a>
            
          </div>

          <div className="flex items-center justify-betw gap-4">
            <div>
              <DarkMode />
            </div>
            <ul className="items-center gap-4 hidden sm:flex ">
              {
                Menu.map((data) => (
                  <li key={data.id}>
                   <a href={data.link} className="inline-block py-4 px-4 hover:text-primary duration-200 ">
                    {data.name}
                   </a>
                  </li>
                ))
              }
              {/* dropdown sction */}
              <li className="group relative cursor-pointer">
                  <a className="flex h-[72px] items-center gap[2px] hover:text-primary" href="/#">Quick Links
                  <span>
                    <FaCaretDown className="transition duration-300 group-hover:rotate-180"/>
                  </span>
                  </a>
              {/* dropdown link section  */}
              <div className="absolute -left-9 z-[10] hidden group-hover:block text-black bg-white p-2 shadow-md w-[150px] dark:bg-gray-900 dark:text-white">
                <ul>
                {
                  DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <a href={data.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20">
                        {data.name}
                      </a>
                    </li>
                  ))
                }
                </ul>
              </div>
              </li>
            </ul>
            <button className="bg-gradient-to-r from-primary to-secondary  text-white px-4 py-1 rounded-full flex items-center gap-3">
              Order
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
