import React from 'react';
import Image from 'next/image';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

const About = () => {

const colors = { blue: '#9cc0ff', pink: '#fccaf7', yellow: '#fff894', red: '#fa1622' };
return (
<section id="profile" className="font-poppins"> 
  <div className="profile-text">

<RoughNotationGroup show={true}>
      <h1>Hello! I'm Luis, a <RoughNotation type="highlight" color={colors.blue}>software engineer</RoughNotation> based in Canada.</h1>
      <p>I am passionate about <RoughNotation type="highlight" color={colors.pink}>developing new technologies</RoughNotation> and am 
      eager to <RoughNotation type="highlight" color={colors.pink}>learn new skills.</RoughNotation></p>
      <p> I'm currently a student at Western University based in London, Ontario finishing my bachelor's degree in Software Engineering where I spent 5 years learning
      the fundementals of <RoughNotation type="highlight" color={colors.yellow}>engineering, design,</RoughNotation> and various<RoughNotation type="highlight" color={colors.yellow}>
      frameworks.</RoughNotation> Over the course of my studies, I've had the opportunity to work with both small and large, specialized and cross-functional teams and have developed
      the ability to lead, collaborate, and create. </p>
      <p> 
      My specific interests lies within <RoughNotation type="highlight" color={colors.blue}>artificial intelligence/machine learning, blockchain, </RoughNotation>
      and <RoughNotation type="highlight" color={colors.blue}>data cloud</RoughNotation><RoughNotation type="highlight" color={colors.blue}>management. </RoughNotation>
      If you're here recruiting,<RoughNotation type="circle" color={colors.red}> hire me..?</RoughNotation></p>
</RoughNotationGroup>

      <a href="https://www.linkedin.com/in/luisdelotavo/" target="_blank" rel="noopener noreferrer" className="btn">View LinkedIn</a>
      <a href="https://github.com/luisdelotavo" target="_blank" rel="noopener noreferrer" className="btn">View GitHub</a>
  </div>

  <div className="profile-picture relative"> 
      <Image src="/portfoliopicture.jpg" className="rounded-xl"
      alt="Luis Delotavo profile picture"
      width={378}
      height={504}
      quality={100}/>
  </div>
</section>
);
};

export default About;
