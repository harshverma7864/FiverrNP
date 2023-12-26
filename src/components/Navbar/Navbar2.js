import {React , useState , useEffect} from 'react'
import navStyle from "../../assets/styles/navbar/navbar.module.css"
import logo from "../../assets/images/mainlogo.png"
import { useHistory } from 'react-router-dom'
import profileLogo from "../../assets/images/profilelogo.png"
import useNavbarLogic from './NavbarLogic';

import Login from '../Login/Login'


const Navbar = () => {


  const [loggedin , setLoggedIn] = useState(window.localStorage.getItem("loggedin"));
  const [becomAsellerClicked , setBecomeAsellerClicked] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("loggedin") === true) {
      setLoggedIn(true);
    }
  }, []);


  

  // useEffect(() => {
  //   const handleClick = (event) => {
  //     // Handle the click event here
  //   //   if (!event.target.closest(`#${navStyle.joinBtn}`) ) {
  //   //     setLoginClicked(false)
  //   //   }



      
  //   // };



  //   const isJoinBtn = !!event.target.closest(`#${navStyle.joinBtn}`) ;
  //   const isBecomeAseller = !!event.target.closest(`#${navStyle.becomeAseller}`) ;


  //   if (!isJoinBtn ) {
  //     setLoginClicked(false);       // Close notifications dropdown
  //   }
    
    
  // };
  
  //   // Add the event listener when the component mounts
  //   document.addEventListener('click', handleClick);
  
  //   // Remove the event listener when the component unmounts
  //   return () => {
  //     document.removeEventListener('click', handleClick);
  //   };
  // }, []);

  
  const [loginClicked , setLoginClicked] = useState(false);
  const history = useHistory()

  const handleLoginClick = () =>{
    setBecomeAsellerClicked(false)
    setLoginClicked(!loginClicked);
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


    


  return (
    <div className={navStyle.navbarMain}>
      <div className={navStyle.navbox}>
        <div className={navStyle.logo}>
          <img src={logo} alt='logo' />
        </div>

        <div className={navStyle.navbarRightIcons}>

        <p >Explore</p>
        <p id={navStyle.becomeAseller} onClick={handleBecomeAseller} >Become A Seller</p>
{  loggedin ? (
    <button  onClick={gotoDashboard} id={navStyle.joinBtn}>DashBoard</button>
):(<button  onClick={handleLoginClick} id={navStyle.joinBtn}>Join</button>)
      }         
        </div>

      </div>


          { becomAsellerClicked || loginClicked ? (<Login />) : ('')}
                    

    </div>
  )
}

export default Navbar
