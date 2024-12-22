import React from 'react'
import Link from './Link'

const Design:React.FC = () => {
  return (
    <section className="design ">
    <div className="container design-section">
      <div className="row " style ={{width:" 100%;"}}>
        <div className="col-12 col-md-6 col-lg-6">
          <div className="design-left  ">
            <span>What we do for you</span>
            <h2>
              Strategy. Design Content. Technology
              Development
            </h2>
            <p>There’s no secret sauce, no wizard behind the curtain. What makes Aerolab tick is an interdisciplinary
              team
              with a framework that fosters candid collaboration.</p>
              <Link linkIcindekiYazi = "More know About us"/>

            
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-6">
          <div className="design-right  ">
            <i>With More than 10 Years of <br/> Knowledge and Expertise we <br/> Design and Code Websites and <br/> Apps,
              We
              Build Brands and Help <br/> Them Succeed</i>

            <div className="ceo">
              <img src="/assets/images/designn/design.svg" alt=""/>
              <div className="ceo-text">
                <h4>Genevieve Rodriquez</h4>
                <span>Founder & CEO, Webov</span>
              </div>
            </div>

          </div>
        </div>



      </div>
    </div>
  </section>
  )
}

export default Design