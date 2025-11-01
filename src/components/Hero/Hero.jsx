import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";

import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  ProfileImage,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Hi, I'm Kushal Gaddamwar</h1>
            {/* <h5>Frontend Developer</h5> */}
            <p className="description">
            I'm a software developer specializing in Full‑Stack Development, Software Architecture, and Prompt Engineering. I enjoy discussing scalable systems, planning software, and solving complex problems to craft efficient solutions. Currently, I'm pursuing an<strong> MS in Computer Science at Boston University </strong>and developing <strong>analytical, critical, and reasoning skills for getting work done by AI </strong><strong>via Prompt Engineering</strong> to enhance system productivity through system landscaping.
            </p>
          </HeroLeft>
          <HeroRight>
            <ProfileImage src={process.env.PUBLIC_URL + "/assets/profile.png"} alt="Kushal Gaddamwar" />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Scroll down
            <img src="./scroll-down.svg" alt="scroll-down" />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
