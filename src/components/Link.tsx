import React from 'react'
interface LinkProps{
    linkIcindekiYazi:string
}
const Link:React.FC<LinkProps> = (props) => {
  
  return (
    <a href="#" className='case'><i className="fa-solid fa-caret-right"></i>{props.linkIcindekiYazi}</a>
  )
}

export default Link