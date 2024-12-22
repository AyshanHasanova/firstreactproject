import React from 'react'
import AccordionCompanent from './AccordionCompanent'

const Fruqently:React.FC = () => {
  return (
    <div>
       
        <div className="container mx-auto">
            <div className="faq ">
            <h6 className="text-uppercase">FAQ</h6>
            <h3>Frequently asked questions</h3>
            </div>
      
            <div className="row">
                <div className="col-12 col-md-6">
                  <AccordionCompanent/>
                </div>
                <div className="col-12 col-md-6">
                    <AccordionCompanent/>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Fruqently