import React, { useState } from 'react'
import navStyle from "../assets/styles/navbar.module.css"
import logo from "../assets/images/mainlogo.png"
import bellIcon from "../assets/images/bellicon.svg"
import messageLogo from "../assets/images/messagelogo.png"
import profileLogo from "../assets/images/profilelogo.png"
import questionMark from "../assets/images/questionmark.png"
const Navbar = () => {

  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2 , setIsClicked2] = useState(false);
  const [isClicked3 , setIsClicked3] = useState(false);

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const handleMouseOver2 = () => {
    setIsHovered2(true);
  };
  const handleMouseOut2 = () => {
    setIsHovered2(false);
  };

  
  const handleClick = () => {
    setIsClicked(!isClicked);
    setIsClicked2(false);
    setIsClicked3(false);
    
  };
  const handleClick2 = ()=>{
    setIsClicked2(!isClicked2);
    setIsClicked3(false);

   
  }
  const handleClick3 = ()=>{
    setIsClicked3(!isClicked3);
   
  }

  return (
    <div className={navStyle.navbarMain}>
      <div className={navStyle.navbox}>
        <div className={navStyle.logo}>
          <img src={logo} alt='logo' />
        </div>

        <div className={navStyle.categoriesDropdown}   >
          <h5 style={{ display:"flex" ,padding:"5px" , marginRight:"20px" , color : isClicked ? '#F04C43' : '#000'}} onClick={handleClick}>categories  &nbsp; &nbsp; &nbsp; <span style={{width:"13px"}}> </span>  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
<path d="M6.69784 7.32011C6.30953 7.69844 5.69048 7.69844 5.30216 7.32011L0.833367 2.96626C0.19074 2.34016 0.634001 1.25 1.5312 1.25L10.4688 1.25C11.366 1.25 11.8093 2.34016 11.1666 2.96626L6.69784 7.32011Z" style={{fill : isClicked ? "#F04C43" : "black" , stroke: isClicked ? "#F04C43" : "black"}} />
</svg></h5>
          
          
          <div>
            <ul className={navStyle.dropdownUl1} style={{ color: isClicked ? '#F04C43' : 'black',  visibility: isClicked ? 'visible' : 'hidden'}}>

              <li  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                   onClick={handleClick2} style={{ color: isHovered || isClicked2 ? '#F04C43' : 'black'}}>Graphics & Designs       
                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="6" viewBox="0 0 14 6" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 -5.46392e-07L7 4.30435L12.5 -6.55671e-08L14 0.521739L7 6L-2.28059e-08 0.521739L1.5 -5.46392e-07Z" fill='black' />
              </svg>
              </li>
              <li>Writing & Translation       </li>
              <li>Programming & Tech       </li>
              <li>Digital Marketing       </li>
              <li>Data       </li>
              <li>Video & Animation       </li>
              <li>Voice & Audio       </li>
              <li>Photography </li>
              <li>Business      </li>
              <li>AI Services       </li>
            </ul>

            <div>
              <ul className={navStyle.dropdownUl2} style={{visibility : isClicked2 ? 'visible' : 'hidden'}}>
                <li onMouseOver={handleMouseOver2}
                  onMouseOut={handleMouseOut2}
                   onClick={handleClick3} style={{ color: isHovered2 || isClicked3 ? '#F04C43' : 'black'}}>Logo & Brand Identity      
                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="6" viewBox="0 0 14 6" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 -5.46392e-07L7 4.30435L12.5 -6.55671e-08L14 0.521739L7 6L-2.28059e-08 0.521739L1.5 -5.46392e-07Z" fill='black' />
              </svg></li>
                <li>Art & Illustration</li>
                <li>Miscellaneous</li>
                <li>Web & App Design</li>
                <li>Product & Gaming</li>
                <li>Print Design</li>
                <li>Visual Design</li>
                <li>Marketing Design</li>
                <li>Packaging & Covers</li>
                <li>3D Design</li>
              </ul>
            </div>


            <div>
              <ul className={navStyle.dropdownUl3} style={{visibility : isClicked3 ? 'visible' : 'hidden'}}>
                <li>Logo & Brand Identity </li>
                <li>Logo Design</li>
                <li>Brand Style Guides</li>
                <li>Business Card</li>
              </ul>
            </div>
          </div>

        </div>
        <div className={navStyle.searchBar}>
          <input type='text' />
          <button>search</button>
        </div>

        <div className={navStyle.navbarRightIcons}>
          <img src={bellIcon} alt='Bell' />
          <img src={messageLogo} alt='Message' />
          <img src={questionMark} alt='Query' />
          <img src={profileLogo} alt='Profile' />
        </div>

      </div>
    </div>
  )
}

export default Navbar