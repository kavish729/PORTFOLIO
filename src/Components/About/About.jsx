import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import {
  AboutDiv,
  Column,
  Img,
  AboutInfo,
  AboutInfoP,
  HeaderUl,
  HeaderLi,
  JelloHori,
} from "./Styles";

import { Container, H1 } from "../../SharedStyles/SharedStyles";
const socialMediaLinks = [
  {
    id: 0,
    link: "https://www.linkedin.com/in/kavish-chittora/",
    icon: <FaLinkedin />,
  },
  {
    id: 1,
    link: "https://github.com/kavish729",
    icon: <FaGithub />,
  },
  {
    id: 2,
    link: "#",
    icon: <FaTwitter />,
  },
  /* {
        id: 3,
        link: 'https://leetcode.com/aadityaneve',
        icon: <SiLeetcode />,
    }, */
];
const About = () => {
  return (
    <Container className="about">
      <AboutDiv>
        <Column>
          <Img
            src="https://github.com/kavish729/PORTFOLIO/blob/main/public/images/profile-1.jpg?raw=true"
            alt="my image"
          />
        </Column>
        <Column>
          <H1>About Me</H1>
          <AboutInfo>
            <AboutInfoP>
              Hello Everyone, I am kavish Chittora from Bijoliya Dist-Bhilwara
              state-Rajasthan. I graduated in B.Tech in Electrical and
              Electronics branch in 2020 from Techno India njr Institute of
              {/* technology college, Udaipur. During my engineering, I did my
              internship in programming g in C language and data structure and
  algorithm from cranes varsity.*/}{" "}
              Currently, I have frontend skills like HTML, CSS, Javascript,
              React, and also in-depth DSA problem-solving ability. My hobbies
              include cooking and traveling. Interested in Listening to songs
              and business.
              {/* A dedicated Full Stack Web developer with a specialized skill set
              that enables me to build robust web applications. I am adept in
              both front-end and back-end and have an eye for performance and
              accuracy. */}
            </AboutInfoP>
            <AboutInfoP>
              I am adaptable, proficient in remote collaboration, and committed
              to achieving organizational goals. With a knack for
              problem-solving and analytics, I am passionate about solving
              Algorithmic problems with a good hold on Data Structures.
            </AboutInfoP>
          </AboutInfo>
          <HeaderUl>
            {socialMediaLinks.map((item) => (
              <JelloHori key={item.id}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <HeaderLi>{item.icon}</HeaderLi>
                </a>
              </JelloHori>
            ))}
          </HeaderUl>
        </Column>
      </AboutDiv>
    </Container>
  );
};

export default About;
