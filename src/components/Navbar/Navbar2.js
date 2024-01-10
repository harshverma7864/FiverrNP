import {React , useState , useEffect} from 'react'
import navStyle from "../../assets/styles/navbar/navbar.module.css"
import logo from "../../assets/images/mainlogo.png"
import { useHistory } from 'react-router-dom'
import profileLogo from "../../assets/images/profilelogo.png"
import useNavbarLogic from './NavbarLogic';

import Login from '../Login/Login'
import OffCanvas from '../offcanvas/Offcanvas'


const Navbar = ({userType}) => {

  const [isOpen , setIsOpen] = useState(false);
  const [loggedin , setLoggedIn] = useState(window.localStorage.getItem("loggedin"));
  const [becomAsellerClicked , setBecomeAsellerClicked] = useState(false);

 

  useEffect(() => {
    if (window.localStorage.getItem("loggedin") === true) {
      setLoggedIn(true);
      
    }
  }, []);

  
  const [loginClicked , setLoginClicked] = useState(false);
  const history = useHistory()

  const handleLoginClick = () =>{
    setBecomeAsellerClicked(false)
    setLoginClicked(!loginClicked);

    setIsOpen(false)
  }

  const handleLogout = () =>{
    window.localStorage.clear();
    history.push("/")
  }

  

  const gotoDashboard = () => {
    history.push('/dashboard')
  }

  const handleBecomeAseller = () =>{
    setLoginClicked(false)
    setBecomeAsellerClicked(!becomAsellerClicked)
  }

  const {
    checkLoginStatus,
  } = useNavbarLogic();


    
  const [pVis , setPVis] = useState(false);

  const profileDropdownVisible = () =>{
    setPVis(!pVis);
  }


  
useEffect(() => {
  const handleClick = (event) => {

    const isProfileIcon = !!event.target.closest(`.${navStyle.navbarRightIcons} img[src="${profileLogo}"]`);


    if ( !isProfileIcon) {
      
      setPVis(false) // Close notifications dropdown
    }
    
  };

  // Add the event listener when the component mounts
  document.addEventListener('click', handleClick);

  // Remove the event listener when the component unmounts
  return () => {
    document.removeEventListener('click', handleClick);
  };
}, []);


    const handleOffcanvas = () =>{
      setIsOpen((prev)=>{
        return prev === true ? false : true;
      })
    }


  return (
    <div className={navStyle.navbarMain}>
      {isOpen ? (<OffCanvas actionClicked={handleLoginClick} />):("")}
       <div className={navStyle.hamburger} onClick={handleOffcanvas}>
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#F04C43" class="bi bi-list" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/> </svg>
      </div>
      <div className={navStyle.navbox}>
        <div className={navStyle.logo}>
          <img src={logo} alt='logo' />
        </div>
{ userType !== 'internal_manager' ? ( 
        <div className={navStyle.navbarRightIcons}>

        <p >Explore</p>
        <p id={navStyle.becomeAseller} onClick={handleBecomeAseller} >Become A Seller</p>
{  loggedin ? (
    <button  onClick={gotoDashboard} id={navStyle.joinBtn}>DashBoard</button>
):(<button  onClick={handleLoginClick} id={navStyle.joinBtn}>Join</button>)
      }         
        </div>):(  <div className={navStyle.navbarRightIcons}><img className={navStyle.profileLogo} onClick={profileDropdownVisible}  src={profileLogo} alt='Profile' /></div>)
}

      </div>
 

      <div  style={{visibility : pVis ? ("visible") : ("hidden")}} className={navStyle.profileDropdown}>
      <button onClick={handleLogout}  className={navStyle.continueButton}>Logout</button>
      <button className={navStyle.continueButton}> Profile</button>
          </div> 
          { becomAsellerClicked || loginClicked ? (<Login />) : ('')}
                    

    </div>
  )
}

export default Navbar
