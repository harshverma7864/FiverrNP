import Cookies from "js-cookie";
import { LOGIN_URL, SEND_OTP, SIGNUP_URL } from "../environment";

const AuthService = { 
    async emailLogin (email , password) {
    const requestBody = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch(LOGIN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers if needed
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const result = await response.json();

      window.localStorage.setItem("refreshToken" , result.refresh)
      
      Cookies.set("accessToken" , result.refresh , { expires: 7, path: '/' })
      Cookies.set("user" , JSON.stringify(result.user) , { expires: 7, path: '/' })
      return result.user;
      }
      else{
        alert("Invalid Credentials");
      }
      
     
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },

  async sendOtp(phoneNumber) {
    const formData = new FormData();
    formData.append("phone_number" , phoneNumber);
    console.log(phoneNumber);
    try {
      const response = await fetch(SEND_OTP, {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },

  async phoneLogin (phoneNumber , otp){
    const requestBody = {
        phone_number: phoneNumber,
        otp: otp,
      };
  
      try {
        const response = await fetch(LOGIN_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Add any additional headers if needed
          },
          body: JSON.stringify(requestBody),
        });

        
        if (response.ok) {
          const result = await response.json();
       
       
       
          window.localStorage.setItem("refreshToken" , result.refresh)
        
          Cookies.set("accessToken" , result.refresh , { expires: 7, path: '/' })
          Cookies.set("user" , JSON.stringify(result.user)  , { expires: 7, path: '/' })
          
        return result;
        }else{
          alert("Invalid Credentials")
        }

      
      } catch (error) {
        console.error('Error fetching data:', error);
      }
  },




  async registerNewUser (userData){
    const formData = new FormData();
     formData.append("username" , userData.Username)
     formData.append("first_name" , userData.firstName)
     formData.append("last_name" , userData.lastName)
     formData.append("password" , userData.Password)
     formData.append("email" , userData.Email)
     formData.append("phone_number" , userData.CntryCode + userData.Phone)
     formData.append("user_type" , userData.UserType)
     
      
    console.log(formData);
      try {
        const response = await fetch(SIGNUP_URL, {
          method: 'POST',
          body: formData,
        });
        const result = await response.json();

        return result;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
  }
}


export default AuthService;
