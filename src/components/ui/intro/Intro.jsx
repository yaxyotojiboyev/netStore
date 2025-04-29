import React from "react";
import "./Intro.scss";
import Marquee from "react-fast-marquee";
import IntroBg from "../../img/intro-bg.png";
import introCompBg from "../../img/intro-bg-computer.png";
import compImg from "../../img/intro-computer.png"
const Intro = () => {
  return (
    <div
      id="intro"
      style={{
        backgroundImage: `url(${IntroBg}) , url(${introCompBg})`,
        backgroundPosition: "center , right center",
        backgroundRepeat: "no-repeat,no-repeat",
        backgroundSize: "cover,auto",
      }}
      className="bg-cover bg-center bg-no-repeat m-auto mt-2 w-[90%] h-[415px] rounded-xl "
    >
      <Marquee>
        <div>
          <div className="intro-left">
            <h1>New Laptop</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <button>Shop now</button>
          </div>
          <div className="intro-right">
            <img src={compImg} alt="" />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Intro;
