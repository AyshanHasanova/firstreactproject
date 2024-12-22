import React, {useRef} from 'react'




const Header:React.FC = () => {

    const MobileMenyuDivi = useRef<HTMLDivElement>(null)
    const navbariAc = ()=> {
       if(MobileMenyuDivi.current){
        MobileMenyuDivi.current.classList.add("mobile-menyu-acan")
       }

    }

    const navbarBagla = ()=> {
      if(MobileMenyuDivi.current){
       MobileMenyuDivi.current.classList.remove("mobile-menyu-acan")
      }

   }


  return (


    <>
            {/* Mobile menyu start */}

<div className="mobile-menyu" ref={MobileMenyuDivi}>

<div className="icons">
  <img src="/assets/images/favicon.svg " className="web" alt=""/>
  <i onClick={navbarBagla} className="fa-regular fa-circle-xmark "></i>
 

    
 

</div>

<div className="mobile-nav-links">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Projcts</a>
  <a href="#">Contact</a>
  <a href="#">FAQ</a>
  <div className="search">
    <input type="checkbox " placeholder="Search" id=""/>
    <button>Search</button>
  </div>


</div>




</div>
{/* Mobile menyu end */}
       <header>
    <div className="container webovio  ">
      <img className="logo" src="/assets/images/header/logo.svg" alt=""/>

      <img className="bars" onClick={navbariAc} src="/assets/images/header/bars.svg" alt=""/>






    </div>
  </header>
    </>
 
  )
}

export default Header