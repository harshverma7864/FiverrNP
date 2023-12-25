
import React, { useState , useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import style from '../assets/styles/gigpage.module.css'
import sellerStyle from '../assets/styles/sellerpage.module.css'
import homeStyle from '../assets/styles/homepage.module.css'
import gigCardStyle from '../assets/styles/card/gigCardStyle.module.css'
import carouselImage1 from '../assets/images/bannerImage1.png'
import ldkiImage from '../assets/images/image 49.png'
import bookImage from '../assets/images/learning (1) 1.png'
import { Navbar, Navbar2 } from '../components';
import card1Image from '../assets/images/add-user 1.png'
import card2Image from '../assets/images/link 1.png'
import card3Image from '../assets/images/integrity 1.png'
import card4Image from '../assets/images/user 1.png'
import card5Image from '../assets/images/verify 1.png'

const Seller3 = () => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('code');
    const [isContactClicked, setIsContactClicked] = useState(false);
    const handleContactClick = () => {
        setIsContactClicked(!isContactClicked);
    }
    const [loggedin , setLoggedIn] = useState(false);
    const history = useHistory(); 
    



   useEffect(()=>{
    if(window.localStorage.getItem("loggedin") === true){
        setLoggedIn(true);
    }
   })


   const becomeAseller2 = () =>{
    history.push("/becomeAseller2")
   }


   const fillSellerInformation = () =>{
    history.push("/profileInfo")
   }

    return (
        <>
           <Navbar/>
          
        <section className={sellerStyle.seller2Main}>
            <section className={sellerStyle.buyerStoryParent}>
                <div className={sellerStyle.aboutMain}>
                    <h3 id={sellerStyle.seller2Heading} className={style.heading}>What makes a successful netpuppys profile?</h3>
                    <p id={sellerStyle.seller2Para}>Your first impression matters! Create a profile that will stand out from the crowd on netpuppys.</p>
                    <div id={sellerStyle.seller3Container}>
                        <div id={sellerStyle.seller3Divs} className={sellerStyle.seller3Box}>
                            <div>
                                <div id={sellerStyle.seller3Img}>
                                    <img src={card1Image} />
                                </div>
                                <p id={sellerStyle.seller3DivContentPara}>Take your time in creating your profile so it’s exactly as you want it to be.</p>
                            </div>
                        </div>
                        <div id={sellerStyle.seller3Divs} className={sellerStyle.seller3Box}>
                            <div>
                                <div id={sellerStyle.seller3Img}>
                                    <img src={card2Image} />
                                </div>
                                <p id={sellerStyle.seller3DivContentPara}>Add credibility by linking out to your relevant professional networks.</p>
                            </div>
                        </div>
                        <div id={sellerStyle.seller3Divs} className={sellerStyle.seller3Box}>
                            <div>
                                <div id={sellerStyle.seller3Img}>
                                    <img src={card3Image} />
                                </div>
                                <p id={sellerStyle.seller3DivContentPara}>Accurately describe your professional skills to help you get more work.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={sellerStyle.buyerStoryParent}>
                <div className={sellerStyle.aboutMain}>
                    <div id={sellerStyle.seller3Container}>
                        <div id={sellerStyle.seller3Divs} className={sellerStyle.seller3Box}>
                            <div>
                                <div id={sellerStyle.seller3Img}>
                                    <img src={card4Image} />
                                </div>
                                <p id={sellerStyle.seller3DivContentPara}>Put a face to your name! Upload a profile picture that shows your face.</p>
                            </div>
                        </div>
                        <div id={sellerStyle.seller3Divs} className={sellerStyle.seller3Box}>
                            <div>
                                <div id={sellerStyle.seller3Img}>
                                    <img src={card5Image} />
                                </div>
                                <p id={sellerStyle.seller3DivContentPara}>To keep our community secure for everyone, ask you to verify your ID.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={sellerStyle.buttonContainer}>
                <div className={sellerStyle.buttonBox}>
                    <button id={sellerStyle.continueButton} onClick={fillSellerInformation}><span>Continue</span></button>
                </div>
                <div className={sellerStyle.buttonBox}>
                    <button id={sellerStyle.backButton} onClick={becomeAseller2}><span>Back</span></button>
                </div>
            </section>
        </section>
        </>
    )
}

export default Seller3