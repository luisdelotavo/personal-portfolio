import React from 'react';
import Image from 'next/image';


const About = () => {
  
return (
<section id="profile" className="font-poppins"> 
  <div className="profile-text">
      <h1>Hello! I'm Luis, a software engineer based in Canada.</h1>
      <p>I am passionate about developing new technologies and am eager to learn new skills.</p>
      <p>I'm currently a student at Western University based in London, Ontario finishing my bachelor's degree in Software Engineering where I spent 5 years learning
          the fundementals of engineering, design, and various frameworks. My specific interests lies within 
          artificial intelligence/machine learning, blockchain, and data cloud management.
      </p>
      <a href="#" className="btn">View LinkedIn</a>
      <a href="#" className="btn">View GitHub</a>
  </div>

  <div className="profile-picture relative"> 
      <Image src="/portfoliopicture.jpg" className="rounded-xl"
      alt="Luis Delotavo profile picture"
      layout="responsive"
      width={378}
      height={504}
      quality={100}
      objectFit="cover"/>
  </div>
</section>
);
};

export default About;
