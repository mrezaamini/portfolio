import React from "react";
import {
  HeroBackdrop,
  HeroContainer,
  HeroBar,
  HeroImage,
  HeroP,
  HeroH,
  HeroAbout,
} from "./HeroElements";
import {Cursor, useTypewriter} from "react-simple-typewriter";

import myImage from "../../images/full-BACKUP.png";

const Hero = () => {
  const {text} = useTypewriter({
    words:['Computer Engineering Student','Photographer', 'Student At Shahid Beheshti University', 'Swimmer'],
    loop:0,
    typeSpeed:70,
    deleteSpeed:40,
    delaySpeed:1000

  })
  return (
    <div>
    <HeroContainer>
      <HeroBackdrop>
        <HeroAbout>
          <HeroP>Hello there, I am</HeroP>
          <HeroH>Mohammadreza</HeroH>
          <HeroH>Amini,</HeroH>
          <HeroP>I am a&nbsp;
            <span>
             {text}
            </span>
            <Cursor cursorStyle="_" />
          </HeroP>
        </HeroAbout>
        <HeroBar>
          <HeroImage src={myImage} />
        </HeroBar>
      </HeroBackdrop>
    </HeroContainer>
    </div>
  );
};

export default Hero;
