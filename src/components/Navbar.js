import React from 'react'
import navStyle from "../assets/styles/navbar.module.css"
import logo from "../assets/images/mainlogo.png"
import bellIcon from "../assets/images/bellicon.svg"
import messageLogo from "../assets/images/messagelogo.png"
import profileLogo from "../assets/images/profilelogo.png"
import questionMark from "../assets/images/questionmark.png"
const Navbar = () => {

  return (
   <div className={navStyle.navbarMain}>
    <div className={navStyle.navbox}>
      <div className={navStyle.logo}>
        <img src={logo} alt='logo' />
      </div>

      <div className={navStyle.categoriesDropdown}>
      <h4>Categories</h4>
      <select id="categories" name="Categories">

        <option value="categories"></option>
        <option value="categories">Volvo</option>
        <option value="volvo">Volvo</option>
       
      </select>
      </div>
      <div className={navStyle.searchBar}>
        <input type='text' />
        <button>search</button>
      </div>

      <div className={navStyle.navbarRightIcons}>
        <img src={bellIcon} alt='Bell'/>
        <img src={messageLogo} alt='Message'/>
        <img src={questionMark} alt='Query'/>
        <img src={profileLogo} alt='Profile'/>
      </div>

    </div>
   </div>
  )
}

export default Navbar