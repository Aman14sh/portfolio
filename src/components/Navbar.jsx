import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
export const Navbar = (props) => {
  const [Ham,setHam]=useState(false);
  console.log(Ham);
  console.log(props.s);

  return (
    <nav className={props.s ?"flex w-[100%] h-[40px] justify-between  mx-2 z-999 absolute" :"nav flex w-[100%] h-[40px] justify-between  mx-2 z-999"}>
        <div className="logo">
        <div className="logo-text text-teal-50">Aman Sharma</div>
        </div>
        <ul className={Ham ? "mobile-menu-link  text-teal-50 ":"Nav-items text-teal-50"}>  
        <li>Project</li>
        <li>Skills</li>
        <li>Contact</li>
        </ul>
          <a href="#" onClick={() => setHam(!Ham)} className='hamburger-menu'>
            <GiHamburgerMenu className='bg-white w-[25px] mx-[25px]'/>
          </a>
    </nav>
    )
}
