import React from 'react';

const NavigationBar = () => {
  
return (
<header>
  <nav id="desktop-nav" className="flex items-center font-poppins">
    <div className="display-name text-2xl">Luis Delotavo</div>
    <div>
      <ul className="nav-links flex gap-8">
        <li><a href="#experiences">Experiences</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </div>
  </nav>
</header>
);
};

export default NavigationBar;
