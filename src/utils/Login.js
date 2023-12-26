import React, { useState } from 'react';
import bgAi from '../assets/bg-ai.png';
import logo from '../assets/logo-00002.png';
// import popbg from '../assets/bnrbckground.png'
// import showIcon from '../assets/show.png';
// import hideIcon from '../assets/hide.png';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../interceptors/axios';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import '../styles/login.css';

function Login() {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
  });

  //   const [show, setShow] = useState(false);

  //   const handleShow = () => {
  //     setShow(!show); // Toggle the show state
  //   };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform your form submission logic here
    // Redirect to the "/" route
    // navigate("/app");
    console.log('User Details:', userDetails);
  };

  const forgotClick = () => {
    // navigate("/ForgotPassword");
  };

  const signupClick = () => {
    navigate("/Signup");
  };

  const handleLogin = () => {
    axiosInstance
      .post('api/token/', userDetails)
      .then(async (res) => {
        localStorage.setItem('access', res.data.access);
        localStorage.setItem('refresh', res.data.refresh);
        console.log(res);

        // Make a third API call to check if email is confirmed
        axiosInstance
          .get('accounts/current_user/')
          .then((emailConfirmationResponse) => {
            const isEmailConfirmed = emailConfirmationResponse.data.is_email_confirmed;
            console.log(isEmailConfirmed);
            if (isEmailConfirmed) {
              // Email is confirmed, redirect to one page
              navigate('/Simulation');
            } else {
              // Email is not confirmed, make the second API call
              axiosInstance
                .post('accounts/api/send-confirmation-email/', userDetails)
                .then((response) => {
                  console.log('Confirmation email sent:', response);

                  // Redirect to another page after sending confirmation email
                  navigate('/mailsend');
                })
                .catch((error) => {
                  console.error('Failed to send confirmation email:', error);
                });
            }
          })
          .catch((error) => {
            console.error('Failed to check email confirmation:', error);
          });
      })
      .catch((error) => {
        // Handle any errors that occur during the first API request
        console.error('Login failed:', error);
      });
  };


  return (
    <div>
      {/* Background Image */}
      <div className="background-l">
  <img src={bgAi} alt="background" className="background-image" />
</div>
      <div className="content">
        <img className="logo" src={logo} alt="logo" />

        <div className="login-box">
        {/* <img src={popbg} alt="login" /> */}

          <div className="login-header">
            <h2 className="header-text">SIGN IN</h2>
          </div>
          <form onSubmit={handleSubmit} className="form">
            <div className={`form-row input-container ${userDetails.email && 'input-filled'}`}>
              <p className={`form--label input-label`}>
                <FaEnvelope className="input-icon" /> Email address
              </p>
              <input
                className="input"
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className={`form-row input-container ${userDetails.password && 'input-filled'}`}>
              <p className={`form--label input-label`}>
                <FaLock className="input-icon" /> Password
              </p>
              <input
                className="input"
                type="password"
                name="password"
                value={userDetails.password}
                onChange={handleInputChange}
                required
              />
            </div>


            {/* <img
  src={show ? hideIcon : showIcon} // Show the "hide" icon when show is true, and the "show" icon when show is false
  alt={show ? 'Hide' : 'Show'}
  onClick={handleShow}
  className="password-toggle"
/> */}

            <div className="forgot-password">
              <span className="forgot-text" onClick={forgotClick}>
                Forgot Password?
              </span>
              <span className="reset-text"> </span>
              <span className="reset-link" onClick={forgotClick}>
                Reset here
              </span>
            </div>

            <div className="login-button" onClick={handleLogin}>
              <span className="button-text">Login</span>
            </div>
          </form>

          <div className="signup-link">
            <span className="signup-text">Don’t have an account? </span>
            <span className="signup-link-text" onClick={signupClick}>
              Please Signup here
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
