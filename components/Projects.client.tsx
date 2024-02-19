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
  const containerRef = React.useRef<HTMLDivElement>(null);
  const handleMouseDown = React.useCallback((e: React.MouseEvent) => {
      e.preventDefault();
      const ele = containerRef.current;
      if (!ele) {
          return;
      }
      const startPos = {
          left: ele.scrollLeft,
          top: ele.scrollTop,
          x: e.clientX,
          y: e.clientY,
      };

      const handleMouseMove = (e: MouseEvent) => {
          const dx = e.clientX - startPos.x;
          ele.scrollLeft = startPos.left - dx;
          updateCursor(ele);
      };

      const handleMouseUp = () => {
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
          resetCursor(ele);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
  }, []);

  const handleTouchStart = React.useCallback((e: React.TouchEvent) => {
      e.preventDefault();
      const ele = containerRef.current as HTMLDivElement;
      if (!ele) {
          return;
      }
      const touch = e.touches[0];
      const startPos = {
          left: ele.scrollLeft,
          top: ele.scrollTop,
          x: touch.clientX,
          y: touch.clientY,
      };

      const handleTouchMove = (e: TouchEvent) => {
          const touch = e.touches[0];
          const dx = touch.clientX - startPos.x;
          const dy = touch.clientY - startPos.y;
          ele.scrollLeft = startPos.left - dx;
          updateCursor(ele);
      };

      const handleTouchEnd = () => {
          document.removeEventListener('touchmove', handleTouchMove);
          document.removeEventListener('touchend', handleTouchEnd);
          resetCursor(ele);
      };

      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
  }, []);

  const updateCursor = (ele: HTMLDivElement) => {
      ele.style.cursor = 'grabbing';
      ele.style.userSelect = 'none';
  };

  const resetCursor = (ele: HTMLDivElement) => {
      ele.style.cursor = 'grab';
      ele.style.removeProperty('user-select');
  };

  return (

<>
  <section id="projects" className="font-poppins"> 
  <div className="projects-text">
  <h1>Selected Work</h1>
  </div>
  </section>
    <div className="project-container" ref={containerRef} onMouseDown={handleMouseDown} onTouchStart={handleTouchStart}>
    <div className="project-card shrink-0" onClick={handleProjectExpand} >
      <img className="h-full w-full image-container" src="/portfoliopicture.jpg" alt="project-image"/>
    </div>

    <div className="project-card shrink-0" onClick={handleProjectExpand}>
      <img className="h-full w-full image-container" src="/portfoliopicture.jpg" alt="project-image"/>
    </div>

    <div className="project-card shrink-0" onClick={handleProjectExpand}>
      <img className="h-full w-full image-container" src="/portfoliopicture.jpg" alt="project-image"/>
    </div>

    <div className="project-card shrink-0" onClick={handleProjectExpand}>
      <img className="h-full w-ful image-container" src="/portfoliopicture.jpg" alt="project-image"/>
    </div>

    <div className="project-card shrink-0" onClick={handleProjectExpand}>
      <img className="h-full w-full image-container" src="/portfoliopicture.jpg" alt="project-image"/>
    </div>

    <div className="project-card shrink-0" onClick={handleProjectExpand}>
      <img className="h-full w-full image-container" src="/portfoliopicture.jpg" alt="project-image"/>
    </div>
    </div> 
</>
  );
};

export default Projects;