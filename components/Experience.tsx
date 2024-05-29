import React from 'react';

const Experience = () => {
    return (
        <section id="experiences" className="experiences font-poppins section-container relative flex flex-col items-end"> 
            <div className="absolute inset-0 flex justify-center z-0">
                <div className="bg-shape1 bg-teal opacity-50 bg-blur"> </div>
                <div className="bg-shape1 bg-purple opacity-50 bg-blur"> </div>
                <div className="bg-shape1 bg-primary opacity-50 bg-blur"> </div>
            </div>
            <div className="profile-text mb-2 relative z-10">
                <h1>Experiences</h1>
                <p>I've gained valuable work experience from the following companies: </p>
            </div>

            <div className="experience-card relative z-10">
                <div className="job-title"> Software Engineering Intern </div>
                <div className="company-name"> J.D. Power </div>
                <div className="dates"> May 2023 - August 2024 </div>
            </div>

            <div className="experience-card relative z-10">
                <div className="job-title"> Software Developer Intern </div>
                <div className="company-name"> Glendor, Inc. </div>
                <div className="dates"> May 2022 - August 2022 </div>
            </div>

            <div className="experience-card relative z-10">
                <div className="job-title"> Computer Resource Training Assistant </div>
                <div className="company-name"> ATN Access Inc. </div>
                <div className="dates"> May 2021 - Sep 2021 </div>
            </div>
        </section>
    );
};

export default Experience;
