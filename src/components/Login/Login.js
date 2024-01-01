import React, { useState } from 'react'
import loginStyle from '../../assets/styles/login/loginPopup.module.css'
import loginImage from '../../assets/images/pngwing.png'
import loginLogic from './LoginLogic';
const Login = () => {
    const [signUpClicked, setSignUpClicked] = useState(false);

    const handleSignUpClicked = () => {
        setSignUpClicked(!signUpClicked);
    }


    const handleCrossClicked = () =>{
        window.location.reload();
    }

    const {
        loginMethod,
        otpRequested,
        nextClicked,
        signupData,
        error,
        formErrors,
        handleSignUp,
        setNextClicked,
        setEmail,
        setPassword,
        requestOtp,
        setCntry,
        setPhone,
        verifyOtp,
        registerNewUser,
        setOtp,
        setLoginMethodType,
        loginClicked,
    } = loginLogic();


    return (

        <div className={loginStyle.main}>
            <div id={loginStyle.left}>
                <img src={loginImage} alt="img" />
            </div>
            <div id={loginStyle.right}>
                  <p className={loginStyle.crossButton} onClick={handleCrossClicked}>X</p>          
                <h2 >{signUpClicked ? ("Create New Account") : ("Sign In To Your Account")}</h2>
                <p id={loginStyle.signUpText} onClick={() => handleSignUpClicked()}>
                    {signUpClicked ? ("Already have an account? Sign in") : ("Don’t have an account? Join here")}

                </p>

                {
                    (loginMethod === null && !signUpClicked) ? (

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
                            <div onClick={() => setLoginMethodType("email")} id={loginStyle.eLogin} className={loginStyle.loginOptions}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                    <path d="M2 2L8.108 6.612L8.11 6.614C8.788 7.111 9.127 7.36 9.499 7.456C9.82759 7.54102 10.1724 7.54102 10.501 7.456C10.873 7.36 11.213 7.111 11.893 6.612C11.893 6.612 15.81 3.606 18 2M1 11.8V4.2C1 3.08 1 2.52 1.218 2.092C1.41 1.715 1.715 1.41 2.092 1.218C2.52 1 3.08 1 4.2 1H15.8C16.92 1 17.48 1 17.907 1.218C18.284 1.41 18.59 1.715 18.782 2.092C19 2.519 19 3.079 19 4.197V11.804C19 12.922 19 13.48 18.782 13.908C18.5899 14.2844 18.2836 14.5903 17.907 14.782C17.48 15 16.921 15 15.803 15H4.197C3.079 15 2.519 15 2.092 14.782C1.71569 14.5903 1.40974 14.2843 1.218 13.908C1 13.48 1 12.92 1 11.8Z" stroke="#746767" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Continue With Email
                            </div>
                            <div onClick={() => setLoginMethodType("phone")} id={loginStyle.pLogin} className={loginStyle.loginOptions}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M3.54 2C3.6 2.89 3.75 3.76 3.99 4.59L2.79 5.79C2.38 4.59 2.12 3.32 2.03 2H3.54ZM13.4 14.02C14.25 14.26 15.12 14.41 16 14.47V15.96C14.68 15.87 13.41 15.61 12.2 15.21L13.4 14.02ZM4.5 0H1C0.45 0 0 0.45 0 1C0 10.39 7.61 18 17 18C17.55 18 18 17.55 18 17V13.51C18 12.96 17.55 12.51 17 12.51C15.76 12.51 14.55 12.31 13.43 11.94C13.3307 11.904 13.2256 11.887 13.12 11.89C12.86 11.89 12.61 11.99 12.41 12.18L10.21 14.38C7.37543 12.9304 5.06961 10.6246 3.62 7.79L5.82 5.59C6.1 5.31 6.18 4.92 6.07 4.57C5.69065 3.41806 5.49821 2.2128 5.5 1C5.5 0.45 5.05 0 4.5 0Z" fill="#746767" />
                                </svg>
                                Continue With Phone
                            </div>
                           

                        </>
                    ) : (<div className={loginStyle.fields}>
                        { signUpClicked && !nextClicked ? (
                            <div className={loginStyle.inputField}>

                                <h5>Username</h5>
                                {/* {formErrors && formErrors.Username !== '' ? (<p className={loginStyle.error} style={{color : "#F04C43"}}>{formErrors.Username}</p>):('')} */}
                                <input type='text' name='Username' value={signupData.Username} onChange={handleSignUp} required />

                            </div>) : (
                            (loginMethod === null )? (
                            <div className={loginStyle.inputField}>

                                <h5>Password</h5>
                                {/* {formErrors && formErrors.Password !== '' ? (<p className={loginStyle.error} style={{color : "#F04C43"}}>{formErrors.Password}</p>):('')} */}
                                <input type='password' name='Password' value={signupData.Password} onChange={handleSignUp} required />

                            </div>):(''))
                        }
                        { signUpClicked && !nextClicked  ? (
                            <div className={loginStyle.inputField}>

                                <h5>First Name</h5>
                                {/* {formErrors && formErrors.firstName !== '' ? (<p className={loginStyle.error} style={{color : "#F04C43"}}>{formErrors.firstName}</p>):('')} */}
                                <input type='text' name='firstName' value={signupData.firstName} onChange={handleSignUp} required />

                            </div>) : (
                            
                            (loginMethod === null )? (
                            <div className={loginStyle.inputField}>

                                <h5>Confirm Password</h5>
                                <input type='text' name='ConfirmPassword' value={signupData.ConfirmPassword} onChange={handleSignUp} required />

                            </div>):(''))
                        }
                        { signUpClicked && !nextClicked  ? (
                            <div className={loginStyle.inputField}>
                                <h5>Last Name</h5>
                                {/* {formErrors && formErrors.lastName !== '' ? (<p className={loginStyle.error} style={{color : "#F04C43"}}>{formErrors.lastName}</p>):('')} */}
                                <input type='text' name='lastName' value={signupData.lastName} onChange={handleSignUp} placeholder='' required />

                            </div>) : (
                            (loginMethod === null )? (
                            <>
                                <h5 style={{marginTop:"10px"}}>Phone</h5>
                                <div id={loginStyle.contactInput} className={loginStyle.phoneField}>

                                    <select name='CntryCode' onChange={handleSignUp} value={signupData.CntryCode} id={loginStyle.contryCode} >
                                        <option value=""></option>
                                        <option value="+91">+91</option>
                                        <option value="+1">+1</option>
                                    </select>
                                    <input type='text' onChange={handleSignUp} name='Phone' value={signupData.Phone} required />
                                </div> </>) : (''))
                        }


                        {signUpClicked && !nextClicked  ? (
                            <div className={loginStyle.inputField}>
                                <h5>Email</h5>
                                {/* {formErrors && formErrors.Email !== '' ? (<p className={loginStyle.error} style={{color : "#F04C43"}}>{formErrors.Email}</p>):('')} */}
                                <input type='email' name='Email' value={signupData.Email} onChange={handleSignUp} placeholder='' required />

                            </div>) : (
                                 (loginMethod === null )? (
                            <div className={loginStyle.inputField}>
                                <h5>User Type</h5>
                                <select name='UserType' onChange={handleSignUp} value={signupData.UserType} id={loginStyle.userTypeDropdown} required>
                                    <option value="">Select User Type</option>
                                    <option value="end_consumer">End Consumer</option>
                                    <option value="freelancer">Freelancer</option>
                                </select> </div>)  : ('')
                                )
                        }

                        { signUpClicked && !nextClicked ? (
                            < button onClick={() => setNextClicked(true)} className={loginStyle.loginBtn}>Next</button>
                        ) : (
                        
                            (loginMethod === null )? (
                        <button onClick={registerNewUser} className={loginStyle.loginBtn}>Sign Up</button>):('')
                        )
                        }
                    </div>


                    )

                }



                {
                    (loginMethod === 'email' && signUpClicked === false) ? (
                        <div className={loginStyle.fields}>
                            <div className={loginStyle.inputField}>
                                <h5>Email</h5>
                                <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder='' required />
                            </div>
                            <div className={loginStyle.inputField}>
                                <h5>Password</h5>
                                <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='' required />
                            </div>
                            {error ? (<p style={{color : "#F04C43"}}><br/>{error}</p>):('')}

                            <button onClick={loginClicked} className={loginStyle.loginBtn}>Login</button>
                            <button className={loginStyle.backBtn} onClick={() => setLoginMethodType(null)}>    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                <path d="M6.31973 1.16171L0.340815 7.12011C0.23195 7.23344 0.146613 7.36708 0.0897002 7.51336C-0.0298996 7.80349 -0.0298997 8.12891 0.0897002 8.41904C0.146613 8.56532 0.23195 8.69896 0.340815 8.81229L6.31973 14.7707C6.43122 14.8818 6.56358 14.9699 6.70926 15.0301C6.85493 15.0902 7.01106 15.1212 7.16874 15.1212C7.48718 15.1212 7.79257 14.9951 8.01774 14.7707C8.24291 14.5463 8.36941 14.2419 8.36941 13.9246C8.36941 13.6073 8.24291 13.3029 8.01774 13.0785L4.07166 9.15788L13.1477 9.15788C13.4648 9.15788 13.7689 9.03233 13.9932 8.80885C14.2175 8.58536 14.3434 8.28225 14.3434 7.9662C14.3434 7.65015 14.2175 7.34704 13.9932 7.12356C13.7689 6.90007 13.4648 6.77452 13.1477 6.77452L4.07166 6.77452L8.01774 2.8539C8.12982 2.74311 8.21878 2.61131 8.27949 2.4661C8.3402 2.32088 8.37145 2.16512 8.37145 2.0078C8.37145 1.85049 8.3402 1.69473 8.27949 1.54951C8.21878 1.40429 8.12982 1.27249 8.01774 1.16171C7.90658 1.05002 7.77432 0.961362 7.62861 0.900862C7.48289 0.840362 7.32659 0.809215 7.16874 0.809215C7.01088 0.809215 6.85458 0.840362 6.70887 0.900862C6.56315 0.961362 6.43089 1.05002 6.31973 1.16171Z" fill="#F04C43" />
                            </svg></button>

                        </div>
                    ) : ('')
                }


                {
                    (loginMethod === 'phone') ? (
                        <div className={loginStyle.fields}>
                            <div className={loginStyle.inputField}>
                                {otpRequested ? (<><form>



                                    <div className={loginStyle.contactField}>
                                        Otp
                                        <input type='text' onChange={(e) => setOtp(e.target.value)} maxLength={10} placeholder='' required />
                                    </div> </form>
                                    <button className={loginStyle.loginBtn} onClick={() => requestOtp(true)}>
                                        Resend
                                    </button>


                                    <button onClick={() => { verifyOtp(true) }} className={loginStyle.loginBtn}>Verify</button>


                                </>) : (<>  <form><h5>Phone</h5>  <div id={loginStyle.contactInput} className={loginStyle.contactField}>

                                    <select onChange={(e) => setCntry(e.target.value)} id={loginStyle.contryCode} required>
                                        <option value="+91" selected>+91</option>
                                        <option value="+1">+1</option>
                                    </select>
                                    <input type='text' onChange={(e) => setPhone(e.target.value)} maxLength={10} placeholder='' required />

                                </div>
                                {error ? (<p style={{color : "#F04C43"}}><br/>{error}</p>):('')}

                                </form>

                                    <button onClick={() => { requestOtp(true) }} className={loginStyle.loginBtn}>Request Otp</button>
                                    <button className={loginStyle.backBtn} onClick={() => setLoginMethodType(null)}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                        <path d="M6.31973 1.16171L0.340815 7.12011C0.23195 7.23344 0.146613 7.36708 0.0897002 7.51336C-0.0298996 7.80349 -0.0298997 8.12891 0.0897002 8.41904C0.146613 8.56532 0.23195 8.69896 0.340815 8.81229L6.31973 14.7707C6.43122 14.8818 6.56358 14.9699 6.70926 15.0301C6.85493 15.0902 7.01106 15.1212 7.16874 15.1212C7.48718 15.1212 7.79257 14.9951 8.01774 14.7707C8.24291 14.5463 8.36941 14.2419 8.36941 13.9246C8.36941 13.6073 8.24291 13.3029 8.01774 13.0785L4.07166 9.15788L13.1477 9.15788C13.4648 9.15788 13.7689 9.03233 13.9932 8.80885C14.2175 8.58536 14.3434 8.28225 14.3434 7.9662C14.3434 7.65015 14.2175 7.34704 13.9932 7.12356C13.7689 6.90007 13.4648 6.77452 13.1477 6.77452L4.07166 6.77452L8.01774 2.8539C8.12982 2.74311 8.21878 2.61131 8.27949 2.4661C8.3402 2.32088 8.37145 2.16512 8.37145 2.0078C8.37145 1.85049 8.3402 1.69473 8.27949 1.54951C8.21878 1.40429 8.12982 1.27249 8.01774 1.16171C7.90658 1.05002 7.77432 0.961362 7.62861 0.900862C7.48289 0.840362 7.32659 0.809215 7.16874 0.809215C7.01088 0.809215 6.85458 0.840362 6.70887 0.900862C6.56315 0.961362 6.43089 1.05002 6.31973 1.16171Z" fill="#F04C43" />
                                    </svg>
                                    </button>
                                </>

                                )
                                }




                            </div>




                        </div>
                    ) : ('')
                }





                <p id={loginStyle.lastP}>By joining, you agree to the netpuppys Terms Of Service and to occasionally receive emails from us. Please read our Privacy Policy to learn how we use your personal data.</p>
            </div>

        </div>
    )
}

export default Login