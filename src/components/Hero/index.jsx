import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { HeroBtn, HeroContainer, HeroContent, HeroH1, HeroItems, HeroP } from "./Hero";

function Hero() {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!isOpen);

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen}/>
      <HeroContent>
        <HeroItems>
          <HeroH1>GRÖSSTE PIZZA ALLER ZEITEN</HeroH1>
          {/* <HeroP>Ready in 60 seconds</HeroP> */}
          <HeroBtn>Kontaktiere uns</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
