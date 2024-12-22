import React from 'react'
import Link from './Link'

const Model:React.FC = () => {
  return (
    <section className="model">

    <div className="col-12 col-md-6 col-lg-6">
      <div className="model-left ">

        <h2>Is this the future of <br/>
          3D model?</h2>
        <p>While it was just a TV show, that little speech at the <br/> beginning of the original Star Trek show really
          did
          do <br/> a
          good job of capturing our feelings about space.</p>
        <p>It is those feelings that drive our love of astronomy <br/> and our desire to learn more and more about it.
        </p>
          <Link linkIcindekiYazi='See Case Study'/>
      </div>
    </div>
    <div className="col-12 col-md-6 col-lg-6">
      <div className="model-right ">
        <img className="modelimage" src="./assets/images/Modell/model.svg" alt=""/>

        <div className="model-data" data-aos="zoom-in"  data-aos-duration="3000">
          <div className="model-text">
            <p>“I know they are going to be honest with me. I <br/> am not going to get a subpar product; I know it <br/>
              is going to
              be good. That is the number one <br/> advantage of working with Exhibit Systems.</p>
          </div>
          <div className="model-ceo">
            <img src="https://agency-webovio.vercel.app/assets/img/Lina.png" alt=""/>
            <div className="model-ceo-text">
              <h5>Lina Hart
              </h5>
              <span>Founder & CEO, Jico
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>


  </section>
  )
}

export default Model