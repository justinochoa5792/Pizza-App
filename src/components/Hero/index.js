import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar/index";
import {
  HeroContainer,
  HeroContent,
  HeroBtn,
  HeroItems,
  HeroH1,
  HeroP,
} from "./HeroElements";

const Hero = () => {
  return (
    <HeroContainer>
      <Navbar />
      <Sidebar />
      <HeroContent>
        <HeroItems>
          <HeroH1>Greates Pizza Ever</HeroH1>
          <HeroP>Ready in 60 Seconds</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
