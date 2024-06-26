import React, { useRef, useState } from 'react'
import "./Header.css"
import Logo from "./images/mainlogo.jpg"
import Profile from './Profile.js'
function Header() {
    const [hamburgun,setHamburgun] = useState(false)
    const section1 =useRef();
    const section2 =useRef();
    const section3 =useRef();
    const section4 =useRef();
    const scrollhandler =(secRef)=>{
        window.scrollTo({top:secRef.current.offsetTop,behavior:"smooth"})
    }
  return (
    <>
    <nav>
    <div className='mainheadercontainer'>
     <div className="image_container">
        <img src={Logo} alt="Logo" className='logo_section' /> 
     </div>
     <div className={hamburgun?"naving_container naving ":"naving_container"}>
        <ul className='naving_list naving_list2 '>
          <li onClick={()=>scrollhandler(section1)}>Home</li>
          <li onClick={()=>scrollhandler(section2)}>Home</li>
          <li onClick={()=>scrollhandler(section3)}>Home</li>
          <li onClick={()=>scrollhandler(section4)}>Home</li>
          <li>Home</li>  
        </ul>
     </div>
     <div className="naving_bar" onClick={()=>setHamburgun(!hamburgun)}>
        <i class="fa-solid fa-bars"></i>
        </div>
    </div>
    </nav>
    <div className='lowersection'>
        {/* <div ref={section1} className="section section1">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Logo} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Logo} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Logo} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div> */}
        <div ref={section2} className="section">section2</div>
        <div ref={section3} className="section"> <Profile/> </div>
        <div ref={section4} className="section">section4</div>
        <div className="section">section5</div>
    </div>
    
    </>
  )
}

export default Header
