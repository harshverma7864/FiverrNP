import { useState } from 'react'
import AuthService from '../../services/AuthService';
import useNavbarLogic from '../Navbar/NavbarLogic';
import { useHistory } from 'react-router-dom';
const LoginLogic = () => {

  const history = useHistory();


    const [loginMethod , setLoginMethod] = useState(null);
    const [otpRequested , setOtpRequested] = useState(false);
    const [email ,setEmail] = useState(null)
    const [password ,setPassword] = useState(null)
    const [phone ,setPhone] = useState(null)
    const [otp ,setOtp] = useState(null)
    const [nextClicked , setNextClicked] = useState(null)
    const [cntry ,setCntry] = useState("+91")
    const [userDetail , setUserDetail] = useState(null)
      const { setIsLoggedIn} = useNavbarLogic();
      const formData = new FormData();
    const [signupData , setSignupData] = useState({
                                                   firstName: '' , 
                                                   lastName : '' , 
                                                   Email : '', 
                                                   Username : '' , 
                                                   Password : '', 
                                                   UserType : '' , 
                                                   Phone :'',
                                                   CntryCode:'+91'
                                                  })
    const setLoginMethodType = (type)=>{
        setLoginMethod(type);
        setNextClicked(false)
    }
    const requestOtp = (type)=>{
      
      console.log(cntry+phone);
        const result = AuthService.sendOtp(cntry+phone)
        
        if (result) {
          setOtpRequested(type);
        }
    }

    const verifyOtp=()=>{
      const result = AuthService.phoneLogin(cntry+phone , otp)
      if(result){
        window.localStorage.setItem("loggedin"  , "true");
        setIsLoggedIn(true);
        history.push('/dashboard')
      }
      console.log(result);
    }

    const loginClicked =  () =>{
      setNextClicked(null)
      const result = AuthService.emailLogin(email , password)
      setUserDetail(result);
      if (result) {
        window.localStorage.setItem("loggedin"  , "true");
        setIsLoggedIn(true);
        history.push('/dashboard')
      }else{
        console.log("error ")
      }
    }

    const handleBackButton = (screenType)=>{
      console.log(screenType);
     if (screenType === 'otpScreen') {
      setOtpRequested(false)
     }else if(screenType === 'phone'){
      setLoginMethod(null)
     }
    }

    const handleSignUp = (e)=>{
      const {name , value} = e.target;
      setSignupData((prevFormData)=>({
        ...prevFormData, 
        [name]:value,
      }))
      console.log(signupData);
    }

    const registerNewUser = () => {
       
        const result = AuthService.registerNewUser(signupData);
        console.log(result);
    }


  return {
    loginMethod,
    otpRequested,
    nextClicked,
    signupData,
    registerNewUser,
    handleSignUp, 
    setNextClicked,
    setEmail,
    setCntry,
    setPhone,
    setPassword,
    verifyOtp,
    requestOtp,
    setOtp,
    handleBackButton,
    loginClicked,
    setLoginMethodType
  }
}

export default LoginLogic