import React from 'react'
import Link from './Link'

const DvD:React.FC = () => {
  return (
    <section className="DvD">
    <div className="col-12 col-md-6 col-lg-6">
      <div className="dvd-left ">
        <img className="dvdimage" src="/assets/images/Dvd/dvdimg.svg" alt=""/>

        <div className="dvd-data" data-aos="zoom-in"  data-aos-duration="3000">
          <div className="dvd-text">
            <p>
              “In my history of working with trade show <br/> vendors, I can honestly say that there is not one <br/>
              company that I've
              ever worked with that has <br/> better service than Exhibit Systems.”
            </p>
          </div>


          <div className="dvd-ceo">
            <img src="https://agency-webovio.vercel.app/assets/img/Angel.png" alt=""/>
            <div className="dvd-ceo-text">
              <h5>Angel Armstrong</h5>
              <span>Founder & CEO, Google</span>
            </div>

          </div>
        </div>

      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-6">
      <div className="dvd-right ">
        <h2>
          The wall new <br/> Balenciaga.com
        </h2>
        <p>This article is floated online with an aim to help you <br/> find the best dvd printing solution.</p>
        <p>Dvd printing is an important feature used by large <br/> and small DVD production houses to print information
          on
          DVDs.</p>
        <Link linkIcindekiYazi = "See Case Study"/>
      </div>
    </div>

  </section>
  )
}

export default DvD