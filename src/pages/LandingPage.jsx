import React from "react";
import "../App.css";
// Import images
import devi from "../images/devi1.png";
import toranLeft from "../images/Toran-left.svg";
import toranRight from "../images/Toran-right.svg";
import diya from "../images/diya.gif";

const LandingPage = () => {
  return (
    <div
      className="h-[100vh] w-[100vw] bg-[#fcf0d8] relative"
      // style={{
      //   backgroundImage: `url(${bgTemple})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      {/* Left Toran */}
      <div
        className="absolute top-[75px] left-0 md:h-[450px] w-[50vw] bg-no-repeat bg-left bg-contain sm:h-[250px] xs:h-[250px] animate-slideInLeft"
        style={{
          backgroundImage: `url(${toranLeft})`,
        }}
      ></div>

      {/* Right Toran */}
      <div
        className="absolute top-[75px] right-0 md:h-[450px] w-[50vw] bg-no-repeat bg-right bg-contain sm:h-[250px] xs:h-[250px] animate-slideInRight"
        style={{
          backgroundImage: `url(${toranRight})`,
        }}
      ></div>

      <div
        className="absolute md:top-[77px] md:left-[25%] h-48 w-full z-30"
        style={{
          backgroundImage: `url(${diya})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",

        }}
      ></div>

      <div className="absolute top-[77px] right-[25%] h-full w-full z-30">
        <div
          className="h-48 w-full"
          style={{
            backgroundImage: `url(${diya})`,
            backgroundRepeat: "no-repeat",
            // backgroundPosition: "center",
            backgroundSize: "contain",
            transform: "rotate(180deg) scaleY(-1)", // Flip vertically for reflection effect
          }}
        ></div>
      </div>

      {/* Chakra */}
      <div
        className="absolute chakra md:top-[40%] md:left-[20%] md:h-28 md:w-28 opacity-30 animate-spin-slow
            xs:left-[10%] xs:h-20 xs:w-20 xs:top-[45%]
        "
        style={{
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className="absolute chakra md:top-[40%] md:right-[20%] md:h-28 md:w-28 opacity-30 animate-spin-slow
            xs:right-[10%] xs:h-20 xs:w-20 xs:top-[30%]
        "
        style={{
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className="absolute chakra top-0 left-[-50px] md:h-40 md:w-40 opacity-40 animate-spin-slow
            xs:h-32 xs:w-32
        "
        style={{
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className="absolute chakra top-0 right-[-50px] md:h-40 md:w-40 opacity-40 animate-spin-slow
            xs:h-32 xs:w-32
        "
        style={{
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Base */}
      <div
        className="absolute base bottom-0 w-full h-24"
        style={{
          backgroundSize: "contain",
        }}
      ></div>

      {/* Aasan */}
      <div
        className="absolute aasan md:left-[53%] bottom-[95px] w-[700px] h-[240px] transform -translate-x-1/2
            xs:h-[200px] xs:w-[400px] xs:bottom-[62px] xs:left-1/2  md:w-[700px] md:h-[240px] md:bottom-[95px]
            
        "
        style={{
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Middle Chakra */}
      <div
        className="absolute chakra animate-spin-slow md:bottom-[250px] md:left-[43%] md:h-48 md:w-48
            xs:h-36 xs:w-36 xs:bottom-[200px] xs:left-[32%]
        "
        style={{
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Devi Pic */}
      <div
        className="absolute md:bottom-5 md:left-[36.5%] md:h-[400px] md:w-[400px] z-10 animate-slideInUp
          xs:h-[250px] xs:w-[250px] xs:bottom-8 xs:left-[19.5%]
        "
        style={{
          backgroundImage: `url(${devi})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default LandingPage;
