import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

const About = () => {

const colors = { orange: '#FF3333', blue: '#33FF33' };
/*
const [showAnnotation, setShowAnnotation] = useState(false);

useEffect(() => {
  setShowAnnotation(true);
}, []);
*/

return (
<section id="profile" className="font-poppins"> 
  <div className="profile-text">
  <RoughNotationGroup>
      <h1>Hello! I'm Luis, a <RoughNotation type="highlight" color={colors.orange} show={true} order="1">software engineer</RoughNotation> based in Canada.</h1>
      <p>I am passionate about <RoughNotation type="highlight" color={colors.orange} show={true} order="2">developing new technologies</RoughNotation> and am 
      eager to <RoughNotation type="highlight" color={colors.orange} show={true} order="3">learn new skills.</RoughNotation></p>
      <p>I'm currently a student at Western University based in London, Ontario finishing my bachelor's degree in Software Engineering where I spent 5 years learning
          the fundementals of engineering, design, and various frameworks. My specific interests lies within 
          artificial intelligence/machine learning, blockchain, and data cloud management.
      </p>
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
