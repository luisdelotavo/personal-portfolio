/* May be added in future versions of portfolio
*/
'use client';
import React, { useEffect } from 'react';

const Experience = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/boxicons@2.1.4/dist/boxicons.js';
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);

return (

    <>
    <div className="experiences-section">
<section id="experiences" className="font-poppins experiences-section"> 
    <div className="profile-text">
    <h1> Experiences </h1>
    <p> To tell you a little bit more about myself, I'm a filipino-born Canadian and my family and I moved to Canada when I was just 6 years old.
    This is one of the most important events in my life and so I put emphasis on it by sharing it with you because I truly would not be where I am today without the hard work of my Mom.</p>
    <p> She sacrificed so much and she is so courageous to be able to leave her friends, family, and everything familiar. Moving to Canada wasn't easy, but she did it with so much grace, 
    making sure my sister and I never saw her struggle. She's my hero, no doubt. She's the reason I believe in working hard and chasing dreams.</p>
    <p>Her sacrifice is something that I will never take for granted and will always cherish. Anyways, thanks for reading all of this and mabuhay! </p>
    </div>

    <div className="experiences-container container"> 
<div className="experiences-content"> 


<div className="experiences-data experience-data-1">
    <div className="experiences-formatting"> 
    <h3 className="experiences-title"> Software Engineering Intern </h3>
    <span> London, Ontario, Canada - J.D. Power </span>
    <div className="experiences-calendar">
    <box-icon name='calendar' animation='tada-hover'></box-icon>
    May 2023 - Current
    </div>
    </div>
    
    <div> 
        <span className="experiences-rounder"> </span>
        <span className="experiences-line"> </span>
    </div>
</div>

<div className="experiences-data">
    <div></div>
    <div> 
        <span className="experiences-rounder"> </span>
        <span className="experiences-line"> </span>
    </div>

    <div className="experiences-formatting"> 
    <h3 className="experiences-title"> Software Development Intern </h3>
    <span> Remote - Glendor Inc. </span>
    <div className="experiences-calendar">
    <box-icon name='calendar' animation='tada-hover'></box-icon>
    May 2022 - August 2022
    </div>
    </div>
</div>

<div className="experiences-data">
    <div className="experiences-formatting"> 
    <h3 className="experiences-title"> Canadian Citizen </h3>
    <span> Windsor, Ontario, Canada - Government of Canada </span>
    <div className="experiences-calendar">
    <box-icon name='calendar' animation='tada-hover'></box-icon>
    June 2013 - Current
    </div>
    </div>
    
    <div> 
        <span className="experiences-rounder"> </span>
        <span className="experiences-line"> </span>
    </div>
</div>

<div className="experiences-data">
    <div></div>
    <div> 
        <span className="experiences-rounder"> </span>
        <span className="experiences-line"> </span>
    </div>

    <div className="experiences-formatting"> 
    <h3 className="experiences-title"> Filipino Citizen/Resident </h3>
    <span> Manila, Philippines -  Government of the Republic of the Philippines </span>
    <div className="experiences-calendar">
    <box-icon name='calendar' animation='tada-hover'></box-icon>
    November 2002 - May 2009
    </div>
    </div>
</div>

</div>
</div>






</section>


</div>
</>

);
};

export default Experience;
