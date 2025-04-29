import React from "react";
import "./Navbar.scss";
import { CiSearch } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
      <div className="w-[1200px] flex m-auto p-[30px] items-center justify-between">
        <span>
          <h1 className="font-bold w-[135px] text-[25px] font-inter">
            BrandLogo
          </h1>
        </span>

        <div>
          <ul className="flex items-center gap-4">
            <li className="hover:underline decoration-blue-600">
              <a href="">Bosh sahifa</a>
            </li>
            <li className="hover:underline decoration-blue-600">
              <a href="">Katalog</a>
            </li>
            <li className="hover:underline decoration-blue-600">
              <a href="">Haqimizda</a>
            </li>
            <li className="hover:underline decoration-blue-600">
              <a href="">Aloqa</a>
            </li>
          </ul>
        </div>

        <span className="flex items-center justify-center bg-gray-100 rounded-xs p-2 pr-4">
          <input
            className="border-none"
            type="search"
            placeholder="Siz nima qidiryapsiz?"
          />
          <CiSearch />
        </span>

        <span className="text-white p-[10px] rounded-xl hover: flex items-center justify-around gap-3.5 bg-[#00A3FF]">
          <FaPhoneAlt color="white" />
          <button>Aloqaga chiqish</button>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
