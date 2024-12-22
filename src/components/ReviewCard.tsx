import React from 'react'
interface KartlarnPropsu{
  shekilProps : string;
  captionProps : string;
  linkProps : string;

}

const ReviewCard:React.FC <KartlarnPropsu>= ({shekilProps,captionProps,linkProps}) => {
  return (

       <div className="card" >
              <div className="card-body">
                <h3 className="card-title">{captionProps}</h3>
                <p className="card-text">{shekilProps}</p>
                <a href="#"><i className="fa-solid fa-caret-right"></i>{linkProps}</a>
                
              </div>
            </div>
  
  
  
  )
}

export default ReviewCard