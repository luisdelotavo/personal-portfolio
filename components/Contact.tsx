import React from 'react';

const Contact = () => {
  
return (
  <>
<section id="contact" className="font-poppins"> 
  <div className="contact-text"> 
  <h1>Contact Me</h1>
  <p>
  </p>
  </div>
  </section>

  <div className="contact-container container grid">
    <div className="contact-content">
      <h3 className="contact-title">Talk to me</h3>

      <div className="contact-info">
        <div className="contact-card"> 
        <i className="bx bc contact-card-icon"></i>
        <h3 className="contact-card-title">Email</h3>
        <span className="contact-card-data">luisdelotavo@outlook.com</span>   

        <a href="mailto:luisdelotavo@outlook.com" className="contact-button">
           Write me{" "}
        <i className="bx bx-right-arrow-alt contact-button-icon"> 
        </i>
        </a>
        </div>

        <div className="contact-card"> 
        <i className="bx bc contact-card-icon"></i>
        <h3 className="contact-card-title">Instagram</h3>
        <span className="contact-card-data">luisdelotavo</span>   

        <a href="" className="contact-button">
           Write me{" "}
        <i className="bx bx-right-arrow-alt contact-button-icon"> 
        </i>
        </a>
        </div>

        <div className="contact-card"> 
        <i className="bx bc contact-card-icon"></i>
        <h3 className="contact-card-title">GitHub</h3>
        <span className="contact-card-data">luisdelotavo</span>   

        <a href="" className="contact-button">
           Write me{" "}
        <i className="bx bx-right-arrow-alt contact-button-icon"> 
        </i>
        </a>
        </div>

      </div>
    </div>

    <div className="contact-content">
      <h3 className="contact-title"> Write me your project </h3>

      <form className="contact-form">

      <div className="div-contact-form-div">
          <label className="contact-form-tag">Name</label>
          <input type="text" name="name" className="contact-form-input"
          placeholder="Insert your name"
          /> 
        </div>




        <div className="div-contact-form-div">
          <label className="contact-form-tag">Email</label>
          <input type="email" name="email" className="contact-form-input"
          placeholder="Insert your email"
          /> 
        </div>

        <div className="div-contact-form-div">
          <label className="contact-form-tag">Project</label>


          <textarea name="project" cols={30} rows={10}
          className="contact-form-input" placeholder='Write your project'>
        </textarea>
        </div>

        <button className="button button--flex">
        Send Message 
        <svg>

        </svg>

        </button>







      </form>

    </div>
  </div>
  </>
);
};

export default Contact;
