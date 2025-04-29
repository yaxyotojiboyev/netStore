import React from "react";
import "./Start.scss";
import { CiLocationOn } from "react-icons/ci";

const Start = () => {
  return (
    <div className="bg-black text-white">
      <div className="w-[1200px] m-auto p-[20px] flex items-center justify-between">
        <div>
          <span className="flex items-center justify-center gap-1.5">
            <CiLocationOn size={"25px"} fontWeight={"1000"} className=""/>
            <span>Shahar:Toshkent</span>
          </span>
        </div>

        <span>
          <p>Buyurtmalaringizni bepul yetkazib beramiz - atiga 1 kun ichida</p>
        </span>

        <select name="" id="" className="bg-black border-2 rounded-md">
          <option value="uzb">UZB</option>
          <option value="eng">ENG</option>
          <option value="rus">RUS</option>
        </select>
      </div>
    </div>
  );
};

export default Start;
