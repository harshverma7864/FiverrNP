
import React, { useState  ,useEffect} from 'react'
import {useHistory, useLocation } from 'react-router-dom';
import style from '../assets/styles/gigpage.module.css'
import sellerStyle from '../assets/styles/sellerpage.module.css'
import homeStyle from '../assets/styles/homepage.module.css'
import gigCardStyle from '../assets/styles/card/gigCardStyle.module.css'
import carouselImage1 from '../assets/images/bannerImage1.png'
import ldkiImage from '../assets/images/image 49.png'
import bookImage from '../assets/images/learning (1) 1.png'
import { Navbar, Navbar2 } from '../components';
import profileImage from '../assets/images/profile (1) 1.png'
import computerImage from '../assets/images/publishing 1.png'
import Cookies from 'js-cookie';

const Seller2 = () => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('code');
    const [isContactClicked, setIsContactClicked] = useState(false);
    

    const [loggedin , setLoggedIn] = useState(false);
    const history = useHistory(); 
    
    const [first_login , setFirstLogin] = useState(false);



   useEffect(()=>{
    if(window.localStorage.getItem("loggedin") === true){
        setLoggedIn(true);
    }

    const userDetail = JSON.parse(Cookies.get("user"));

    if(userDetail.first_login === true){
        setFirstLogin(true);
    }
   })


   const becomeAseller3 = ()=>{
    
   }

   const fillSellerInformation = () =>{
    history.push("/profileInfo")
   }

    return (

        <>
              {
            loggedin ? (<Navbar/>):(<Navbar2/>)
        }
                <section className={sellerStyle.seller2Main}>
            <section className={sellerStyle.buyerStoryParent}>
                <div className={sellerStyle.aboutMain}>
                    <h3 id={sellerStyle.seller2Heading} className={style.heading}>Ready to start selling on netpuppys?</h3>
                    <p id={sellerStyle.seller2Para}>Here’s the breakdown:</p>
                    <div id={sellerStyle.seller2Divs} className={sellerStyle.container}>
                        <div id={sellerStyle.seller2Img}>
                            <img src={bookImage} />
                        </div>
                        <div>
                            <p id={sellerStyle.seller2DivContentName}>Learn what makes a successful profile</p>
                            <p id={sellerStyle.seller2DivContentPara}>Discover the do’s and don’ts to ensure you’re always on the right track.</p>
                        </div>
                    </div>

                    {
                        first_login ? ( <div onClick={fillSellerInformation} id={sellerStyle.seller2Divs} className={sellerStyle.container}>
                            <div id={sellerStyle.seller2Img}>
                                <img src={profileImage} />
                            </div>
                            <div>
                                <p id={sellerStyle.seller2DivContentName}>Create your seller profile</p>
                                <p id={sellerStyle.seller2DivContentPara}>Add your profile picture, description, and professional information.</p>
                            </div>
                        </div>):('')
                    }

                   


                    <div id={sellerStyle.seller2Divs} className={sellerStyle.container}>
                        <div id={sellerStyle.seller2Img}>
                            <img src={computerImage} />
                        </div>
                        <div>
                            <p id={sellerStyle.seller2DivContentName}>Publish your Gig</p>
                            <p id={sellerStyle.seller2DivContentPara}>Create a Gig of the service you’re offering and start selling instantly.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <button id={sellerStyle.continueButton} onClick={becomeAseller3}><span>Continue</span></button>
            </section>
        </section>
        </>
    )
}

export default Seller2