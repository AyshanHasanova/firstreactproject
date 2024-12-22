import React from 'react'
import { FaCaretRight } from "react-icons/fa";
const Hero : React.FC= () => {
  return (
    <section className="hero">
    <div className="container hero-section">
      <div className="row">
        <div className="hero-left " data-aos="fade-up" data-aos-duration="3000" >
          <p>A place where</p>
          <h2>A creative agency for redemptive brands</h2>
          <p>Anteelo is a leading strategic design firm that builds powerful digital solutions for startups and
            enterprises.</p>

          <a href="#" id="contact"><FaCaretRight />
          Get in touch</a>
        </div>


      </div>





    </div>
    <div className="companies">

      <img src="/assets/images/companies/company-1.svg" alt=""/>



      <img src="/assets/images/companies/company-2.svg" alt=""/>


      <img src="/assets/images/companies/company-3.svg" alt=""/>


      <img src="/assets/images/companies/company-4.svg" alt=""/>

      <img src="/assets/images/companies/company-5.svg" alt=""/>



    </div>



  </section>
  )
}

export default Hero