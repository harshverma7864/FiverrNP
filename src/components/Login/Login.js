import React, { useState } from 'react'
import loginStyle from '../../assets/styles/login/loginPopup.module.css'
import loginImage from '../../assets/images/pngwing.png'
import loginLogic from './LoginLogic';
const Login = () => {
    const [signUpClicked , setSignUpClicked] = useState(false);

    const handleSignUpClicked = () =>{
        setSignUpClicked(!signUpClicked);
    }

    const {
        loginMethod ,
        setLoginMethodType
    } = loginLogic();
    console.log(loginMethod);


    return (
        <div className={loginStyle.main}>
            <div id={loginStyle.left}>
                <img src={loginImage} alt="img" />
            </div>
            <div id={loginStyle.right}>
                <h2>{signUpClicked ? ("Create New Account") : ("Sign In To Your Account")}</h2>
                <p id={loginStyle.signUpText} onClick={handleSignUpClicked}>
                    {signUpClicked ? ("Already have an account? Sign in"):("Don’t have an account? Join here")}
                    
                    </p>

           { 
           (loginMethod === null) ? (
           
                <>
                <div id={loginStyle.gLogin} className={loginStyle.loginOptions}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107" />
                        <path d="M3.15308 7.3455L6.43858 9.755C7.32758 7.554 9.48058 6 12.0001 6C13.5296 6 14.9211 6.577 15.9806 7.5195L18.8091 4.691C17.0231 3.0265 14.6341 2 12.0001 2C8.15908 2 4.82808 4.1685 3.15308 7.3455Z" fill="#FF3D00" />
                        <path d="M11.9999 22C14.5829 22 16.9299 21.0115 18.7044 19.404L15.6094 16.785C14.5717 17.5742 13.3036 18.001 11.9999 18C9.39891 18 7.19041 16.3415 6.35841 14.027L3.09741 16.5395C4.75241 19.778 8.11341 22 11.9999 22Z" fill="#4CAF50" />
                        <path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#1976D2" />
                    </svg>
                    Continue With Google
                </div>
                <div onClick={()=>setLoginMethodType("email")} id={loginStyle.eLogin} className={loginStyle.loginOptions}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                        <path d="M2 2L8.108 6.612L8.11 6.614C8.788 7.111 9.127 7.36 9.499 7.456C9.82759 7.54102 10.1724 7.54102 10.501 7.456C10.873 7.36 11.213 7.111 11.893 6.612C11.893 6.612 15.81 3.606 18 2M1 11.8V4.2C1 3.08 1 2.52 1.218 2.092C1.41 1.715 1.715 1.41 2.092 1.218C2.52 1 3.08 1 4.2 1H15.8C16.92 1 17.48 1 17.907 1.218C18.284 1.41 18.59 1.715 18.782 2.092C19 2.519 19 3.079 19 4.197V11.804C19 12.922 19 13.48 18.782 13.908C18.5899 14.2844 18.2836 14.5903 17.907 14.782C17.48 15 16.921 15 15.803 15H4.197C3.079 15 2.519 15 2.092 14.782C1.71569 14.5903 1.40974 14.2843 1.218 13.908C1 13.48 1 12.92 1 11.8Z" stroke="#746767" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Continue With Email
                </div>
                <div onClick={()=>setLoginMethodType("phone")} id={loginStyle.pLogin} className={loginStyle.loginOptions}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3.54 2C3.6 2.89 3.75 3.76 3.99 4.59L2.79 5.79C2.38 4.59 2.12 3.32 2.03 2H3.54ZM13.4 14.02C14.25 14.26 15.12 14.41 16 14.47V15.96C14.68 15.87 13.41 15.61 12.2 15.21L13.4 14.02ZM4.5 0H1C0.45 0 0 0.45 0 1C0 10.39 7.61 18 17 18C17.55 18 18 17.55 18 17V13.51C18 12.96 17.55 12.51 17 12.51C15.76 12.51 14.55 12.31 13.43 11.94C13.3307 11.904 13.2256 11.887 13.12 11.89C12.86 11.89 12.61 11.99 12.41 12.18L10.21 14.38C7.37543 12.9304 5.06961 10.6246 3.62 7.79L5.82 5.59C6.1 5.31 6.18 4.92 6.07 4.57C5.69065 3.41806 5.49821 2.2128 5.5 1C5.5 0.45 5.05 0 4.5 0Z" fill="#746767"/>
                </svg>
                    Continue With Phone
                </div>
                <div className={loginStyle.or}>OR</div>
                <div style={{ display: 'flex', width: '319px' }}>
                    <div className={loginStyle.mloginOptions}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                            <path d="M12.6371 17.28C11.6571 18.23 10.5871 18.08 9.55708 17.63C8.46708 17.17 7.46708 17.15 6.31708 17.63C4.87708 18.25 4.11708 18.07 3.25708 17.28C-1.62292 12.25 -0.902922 4.59 4.63708 4.31C5.98708 4.38 6.92708 5.05 7.71708 5.11C8.89708 4.87 10.0271 4.18 11.2871 4.27C12.7971 4.39 13.9371 4.99 14.6871 6.07C11.5671 7.94 12.3071 12.05 15.1671 13.2C14.5971 14.7 13.8571 16.19 12.6271 17.29L12.6371 17.28ZM7.61708 4.25C7.46708 2.02 9.27708 0.18 11.3571 0C11.6471 2.58 9.01708 4.5 7.61708 4.25Z" fill="black" />
                        </svg>
                        Apple
                    </div>
                    <div className={loginStyle.mloginOptions}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18" fill="none">
                            <path d="M11 0.505913C11 0.373305 10.9473 0.246128 10.8536 0.15236C10.7598 0.0585913 10.6326 0.00591282 10.5 0.00591282H8C6.74112 -0.0567963 5.5086 0.381304 4.57172 1.22449C3.63485 2.06768 3.06978 3.24741 3 4.50591V7.20591H0.5C0.367392 7.20591 0.240215 7.25859 0.146447 7.35236C0.0526785 7.44613 0 7.5733 0 7.70591V10.3059C0 10.4385 0.0526785 10.5657 0.146447 10.6595C0.240215 10.7532 0.367392 10.8059 0.5 10.8059H3V17.5059C3 17.6385 3.05268 17.7657 3.14645 17.8595C3.24021 17.9532 3.36739 18.0059 3.5 18.0059H6.5C6.63261 18.0059 6.75979 17.9532 6.85355 17.8595C6.94732 17.7657 7 17.6385 7 17.5059V10.8059H9.62C9.73119 10.8075 9.83974 10.772 9.92848 10.705C10.0172 10.638 10.0811 10.5433 10.11 10.4359L10.83 7.83591C10.8499 7.76203 10.8526 7.68458 10.8378 7.6095C10.8231 7.53443 10.7913 7.46374 10.7449 7.40288C10.6985 7.34203 10.6388 7.29262 10.5704 7.25847C10.5019 7.22432 10.4265 7.20634 10.35 7.20591H7V4.50591C7.02487 4.25839 7.14111 4.02902 7.32602 3.86261C7.51093 3.69619 7.75123 3.60467 8 3.60591H10.5C10.6326 3.60591 10.7598 3.55323 10.8536 3.45947C10.9473 3.3657 11 3.23852 11 3.10591V0.505913Z" fill="#1877F2" />
                        </svg>
                        Facebook
                    </div>
                </div>


                </>
            ):('')
            }
          


            {
                (loginMethod === 'email') ? (
                    <div className={loginStyle.fields}>
            <div className={loginStyle.inputField}>
                <h5>Email</h5>
                <input type='email' placeholder='' />
            </div>
            <div className={loginStyle.inputField}>
                <h5>Password</h5>
                <input type='password' placeholder=''/>
            </div>

            <button id={loginStyle.loginBtn}>Login</button>

            </div>



                ) : ('')
            }


            


<p id={loginStyle.lastP}>By joining, you agree to the netpuppys Terms Of Service and to occasionally receive emails from us. Please read our Privacy Policy to learn how we use your personal data.</p>
            </div>

        </div>
    )
}

export default Login