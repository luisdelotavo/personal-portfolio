import React from 'react';

const NavigationBar = () => {
  
return (
<header>
  <nav id="desktop-nav" className="flex items-center font-poppins">
    <div className="logo text-2xl">Luis Delotavo</div>
    <div>
      <ul className="nav-links flex gap-8">
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contacts">Contact</a></li>
        <li><a href="#experiences">Experiences</a></li>

      </ul>
    </div>
  </nav>
</header>
);
};

export default NavigationBar;
