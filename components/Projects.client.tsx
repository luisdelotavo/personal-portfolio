/* To turn server-side component to client-side component, add client.tsx and 'use client';
*/
'use client';
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react';
import { motion, useDragControls } from "framer-motion"

const Projects = () => {

  const constraintsRef = useRef(null);
  return (
  <>
  <section id="projects" className="font-poppins"> 
  <div className="projects-text">
  <h1>Selected Work</h1>
  </div>
  </section>

<div ref={constraintsRef} className="referenceContainer">

  <motion.div className="container" drag='x' dragConstraints={constraintsRef}>

  <div className="project-card"> 
    <img className="h-full w-full image-container" src="/portfoliopicture.jpg" alt="project-image"/> 
  </div>

  <div className="project-card"> 
    <img className="h-full w-full image-container" src="/portfoliopicture.jpg" alt="project-image"/> 
  </div>

  <div className="project-card"> 
    <img className="h-full w-full image-container" src="/portfoliopicture.jpg" alt="project-image"/> 
  </div>

  <div className="project-card"> 
    <img className="h-full w-full image-container" src="/portfoliopicture.jpg" alt="project-image"/> 
  </div>

  <div className="project-card"> 
    <img className="h-full w-full image-container" src="/portfoliopicture.jpg" alt="project-image"/> 
  </div>

  <div className="project-card"> 
    <img className="h-full w-full image-container" src="/portfoliopicture.jpg" alt="project-image"/> 
  </div>

  <div className="project-card"> 
    <img className="h-full w-full image-container" src="/portfoliopicture.jpg" alt="project-image"/> 
  </div>
  </motion.div>

</div>



  </>
  );
};

export default Projects;