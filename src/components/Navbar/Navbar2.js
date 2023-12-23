import {React , useState} from 'react'
import navStyle from "../../assets/styles/navbar/navbar.module.css"
import logo from "../../assets/images/mainlogo.png"
import { useHistory } from 'react-router-dom'
import profileLogo from "../../assets/images/profilelogo.png"
import useNavbarLogic from './NavbarLogic';

import Login from '../Login/Login'


const Navbar = () => {

  const [loginClicked , setLoginClicked] = useState(false);
  const history = useHistory()
;
  const handleLoginClick = () =>{
    setLoginClicked(!loginClicked);
    console.log("Hello")
  }

  const gotoDashboard = () => {
    history.push('/dashboard')
  }

  const {
    
    checkLoginStatus,
 

  } = useNavbarLogic();


    


  return (
    <div className={navStyle.navbarMain}>
      <div className={navStyle.navbox}>
        <div className={navStyle.logo}>
          <img src={logo} alt='logo' />
        </div>

        <div className={navStyle.navbarRightIcons}>

        <p >Explore</p>
        <p >Become A Seller</p>
{ loginClicked ? (
        <button  onClick={handleLoginClick} id={navStyle.joinBtn}>Join</button>
):(        <button  onClick={gotoDashboard} id={navStyle.joinBtn}>DashBoard</button>
)
      }         
          <img  onClick={checkLoginStatus} src={profileLogo} alt='Profile' />
        </div>

      </div>


          { loginClicked ? (<Login />) : ('')}
                    

    </div>
  )
}

export default Navbar
