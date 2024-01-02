import { useState } from 'react'
import AuthService from '../../services/AuthService';
import useNavbarLogic from '../Navbar/NavbarLogic';
import { useHistory } from 'react-router-dom';
const LoginLogic = () => {

  const history = useHistory();


  const [loginMethod, setLoginMethod] = useState(null);
  const [otpRequested, setOtpRequested] = useState(false);
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [phone, setPhone] = useState(null)
  const [otp, setOtp] = useState(null)
  const [nextClicked, setNextClicked] = useState(null)
  const [cntry, setCntry] = useState("+91")
  const [userDetail, setUserDetail] = useState(null)
  const { setIsLoggedIn } = useNavbarLogic();
  const [userType, setUserType] = useState();
  const [error, setError] = useState(null);

  const formData = new FormData();
  const [formErrors , setFormErrors] = useState(null)
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    Email: '',
    Username: '',
    Password: '',
    UserType: '',
    Phone: '',
    ConfirmPassword:'',
    CntryCode: '+91'
  })
  const setLoginMethodType = (type) => {
    setLoginMethod(type);
    setNextClicked(false)
  }
  const requestOtp = async (type) => {

    const result = await AuthService.sendOtp(cntry + phone)
   try{
    if (result.status === 200) {
      
      setOtpRequested(type);
    }else{
      if (phone === null) {
        setError("Phone Number Must not be Empty")
      }else{
        setError("Not Registered")
      }
    }
  }catch(error){

  }
  }

  const verifyOtp = async() => {
    const result = await AuthService.phoneLogin(cntry + phone, otp)
    try{
    if (result.status===200) {
      window.localStorage.setItem("loggedin", "true");
      setIsLoggedIn(true);
      if (result.result.user.user_type === "internal_manager") {
        history.push("/requests")
      }else{
        history.push("/dashboard")
      }
    }else{
      alert("Otp is Incorrect")
    }
  }catch(error){
    console.log(error);
  }
    console.log(result);
  }

  const loginClicked = async () => {
    setNextClicked(null)
    setError(null)
    const result = await AuthService.emailLogin(email, password)
    setUserDetail(result);
    try {
      if (!result.error) {
        window.localStorage.setItem("loggedin", "true");
        setIsLoggedIn(true);
        if(result.user.user_type === "internal_manager"){

          history.push('/requests')
        }else{
          history.push('/dashboard')
        }
      } else {
        setError(result.error);
      }
    } catch (error) {
    }
  }

  const handleBackButton = (screenType) => {
    console.log(screenType);
    if (screenType === 'otpScreen') {
      setOtpRequested(false)
    } else if (screenType === 'phone') {
      setLoginMethod(null)
    }
  }

  const handleSignUp = (e) => {
    const { name, value } = e.target;
    setSignupData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      
    }))
  }

  const registerNewUser = async () => {
    const result = await AuthService.registerNewUser(signupData);
    setFormErrors(null)
    try{
    if (result.status === 201) {
      window.location.reload();
      history.push("/dashboard")
      alert("Account created successfully !! Login Now")
    }
    else{
       setFormErrors({
        firstName: result.result.first_name,
        lastName: result.result.last_name,
        Email: result.result.email,
        Username: result.result.username,
        Password: result.result.password,
        UserType: result.result.user_type,
        PhoneError:result.result.phone_number,
       })
       setNextClicked(false)
       alert("Invalid Signup Data")
    }
  }catch(error){
      console.log("Error Registering User")
    }
  }


  return {
    loginMethod,
    otpRequested,
    nextClicked,
    signupData,
    error,
    formErrors,
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