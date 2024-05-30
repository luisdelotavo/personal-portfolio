import React from 'react';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
import Image from 'next/image';

const About = () => {
  const colors = { blue: '#9cc0ff', pink: '#fccaf7', yellow: '#fff894', red: '#fa1622' };
  
  return (
    <section id="profile" className="font-poppins section-container"> 
      <div className="profile-text">
        <RoughNotationGroup show={true}>
          <h1>Hello! I&apos;m Luis, a <RoughNotation type="highlight" color={colors.blue}>software</RoughNotation> <RoughNotation type="highlight" color={colors.blue}>engineer</RoughNotation> from Canada.</h1>
          <p>I am passionate about <RoughNotation type="highlight" color={colors.pink}>developing new technologies</RoughNotation> and am eager to <RoughNotation type="highlight" color={colors.pink}>learn new skills.</RoughNotation></p>
          <p>I&apos;m currently a student at Western University based in London, Ontario finishing my bachelor&apos;s degree in Software Engineering where I spent 5 years learning the fundamentals of <RoughNotation type="highlight" color={colors.yellow}>engineering,</RoughNotation><RoughNotation type="highlight" color={colors.yellow}> design,</RoughNotation> and <RoughNotation type="highlight" color={colors.yellow}>programming.</RoughNotation> Over the course of my studies, I&apos;ve had the opportunity to work with both small and large, specialized and cross-functional teams and have developed the ability to lead, collaborate, and create.</p>
          <p>My interests include <RoughNotation type="highlight" color={colors.blue}>artificial intelligence/machine learning</RoughNotation>, <RoughNotation type="highlight" color={colors.blue}>blockchain,</RoughNotation> and <RoughNotation type="highlight" color={colors.blue}>data cloud management.</RoughNotation> If you&apos;re here recruiting, you should<RoughNotation type="circle" color={colors.red}> hire me..?</RoughNotation></p>
        </RoughNotationGroup>

        <a href="https://www.linkedin.com/in/luisdelotavo/" target="_blank" rel="noopener noreferrer" className="btn">View LinkedIn</a>
        <a href="/Delotavo_Luis.pdf" download="LuisDelotavo_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn">Download Resume</a>
      </div>

      <div className="profile-picture"> 
        <Image className="image-container rounded-xl" src="/portfoliopicture.jpg" alt="project-image" width={500} height={500}/>
      </div>
    </section>
  );
};

export default About;
