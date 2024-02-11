/* To turn server-side component to client-side component, add client.tsx and 'use client';
*/
'use client';
import React, { useRef } from 'react';

const Projects = () => {
  const handleProjectExpand = () => {
    console.log('Project expanded');
  };

  /* Function to handle horizontal drag-scroll wheel
  */
  const containerRef = useRef<HTMLDivElement>(null);
  const handleMouseDown = (e: { clientX: any; }) => {
    if (containerRef.current) {
      const start = { x: e.clientX, scrollLeft: containerRef.current.scrollLeft };
      
      const handleMouseMove = (e: { clientX: number; }) => {
        if (containerRef.current) {
          const dx = e.clientX - start.x;
          containerRef.current.scrollLeft = start.scrollLeft - dx;
        }
      };
  
      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
  
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
  };
    
  return (


<>
  <section id="projects" className="font-poppins"> 
  <div className="projects-text">
  <h1>Selected Work</h1>
  </div>
</section>
    <div className="project-container" ref={containerRef} onMouseDown={handleMouseDown}>
    <div className="project-card shrink-0" onClick={handleProjectExpand}>
      <img className="h-full w-full" src="/portfoliopicture.jpg" alt="project-image"/>
    </div>

    <div className="project-card shrink-0" onClick={handleProjectExpand}>
      <img className="h-full w-full" src="/portfoliopicture.jpg" alt="project-image"/>
    </div>

    <div className="project-card shrink-0" onClick={handleProjectExpand}>
      <img className="h-full w-full" src="/portfoliopicture.jpg" alt="project-image"/>
    </div>

    <div className="project-card shrink-0" onClick={handleProjectExpand}>
      <img className="h-full w-full" src="/portfoliopicture.jpg" alt="project-image"/>
    </div>

    <div className="project-card shrink-0" onClick={handleProjectExpand}>
      <img className="h-full w-full" src="/portfoliopicture.jpg" alt="project-image"/>
    </div>

    <div className="project-card shrink-0" onClick={handleProjectExpand}>
      <img className="h-full w-full" src="/portfoliopicture.jpg" alt="project-image"/>
    </div>
    </div> 
    </>
  );
};

export default Projects;