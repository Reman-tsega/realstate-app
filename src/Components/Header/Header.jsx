import React, { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler';

function Header() {
  const [opend, setOpend] = useState(false);
  const getMenueStyle =(menuOpened)=>{
    if(document.documentElement.clientWidth<=800){
      return{ right: !menuOpened && "-100%"}
    }
  }
 ``
  return (
   <section className="h-wrapper">
    <div className="flexCen`ter paddings innerWidth h-container">
        <img src = "./logo.png" alt="logo img" width ={100}/>
    <OutsideClickHandler onOutsideClick={()=>setOpend(false)}>

        <div className = "flexCenter h-menu "
        style={getMenueStyle(opend)}>
            <a href = "#residenceies">Residenceies </a>
            <a href = "">Our story </a>
            <a href = "">Contact Us </a>`
            <a href = "">Get Started </a>`
            <button className="button">
                <a href="" >Contact</a>
            </button>
        </div>
    </OutsideClickHandler>

    <div className="menu-icon" onClick={()=>setOpend((prev)=>!prev)}>
      <BiMenuAltRight size={30}/>
    </div>
    </div>
    </section>
  );    
}

export default Header