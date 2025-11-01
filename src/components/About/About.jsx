import React from "react";
import { stackList, toolist } from "../../data/ProjectData";
import {
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";

function About() {
  return (
    <React.Fragment>
      <svg
        height="20%"
        width="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#151418ff"
          className="transition-all duration-300 ease-in-out delay-150"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
      <ContactWrapper id="about">
        <div className="Container" data-aos="fade-up">
          <div className="SectionTitle">About Me</div>
          <div className="AboutBio">
            I'm a <strong>Software Developer</strong> passionate about building{" "}
            scalable and intelligent systems With a strong focus on system
            design, CI/CD, Software Architecture development life cycle and Prompt Engineering. I'm currently
            developing <strong>Reliable Solar installation Services provider application</strong> with a proper{" "}
            <strong>software project management structure</strong>
            {/* <strong>India's first GenAI-powered voicebot at scale</strong>. */}
            <br />
            {/* <br />I was also among the <strong>44 students</strong> selected for
            the <strong>Summer of Bitcoin 2023</strong> from over{" "}
            <strong>10,000 applicants</strong>. */}
            <br />
            In my problem-solving journey, I earned a{" "}
            <strong>5⭐ rating on CodeChef</strong>,{" "}
            Specialist rating on Codeforces, and{" "}
            Leetcode, having solved over{" "}
            <strong>700 problems</strong> on various coding platforms.
            <br />
            <br />Currently I am pursuing{" "}<strong> MS CS at Boston University</strong>
            <br />and I hold a{" "}
            <strong>
              B.Tech in CSE from IIIT Jabalpur
            </strong>{" "}
            and have a deep interest in problem-solving.
            {/* <br />
            As a well-rounded individual, I also served as the Coordinator of
            the Counseling Committee at IIIT Jabalpur.
            <br /> */}
            Currently, I'm expanding into exploring{" "}
            <strong>Software development, Applications on Generative AI in DevOps, Prompt Engineering , Context Engineering, and System landscaping</strong>,
            while also having an opportunity for <strong>attending social, technical, networking and personality development</strong> events at <strong>Boston University</strong>.<br />
            Let's discuss, connect and help each other grow together! 🚀
          </div>
          <br />
          <br />
          <div className="AboutBio tagline2">My Technical Skills</div>
          <br />
          <Technologies data-aos="fade-up">
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
          <br />

          <div className="AboutBio tagline2">Tools That I Use</div>
          <br />
          <Technologies data-aos="fade-up">
            {toolist.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </ContactWrapper>
    </React.Fragment>
  );
}

export default About;
