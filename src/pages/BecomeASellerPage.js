import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import style from '../assets/styles/gigpage.module.css'
import sellerStyle from '../assets/styles/sellerpage.module.css'
import homeStyle from '../assets/styles/homepage.module.css'
import gigCardStyle from '../assets/styles/card/gigCardStyle.module.css'
import carouselImage1 from '../assets/images/bannerImage1.png'
import gigEco from '../assets/images/gig-economy 1.png'
import arrow from '../assets/images/arrows 1.png'
import image34 from '../assets/images/image 34.png'
import ldkiImage from '../assets/images/image 49.png'
import sellerImg from '../assets/images/handsome-man-with-laptop_thumbnail 1.png'
import { Navbar, Navbar2 } from '../components';
const BecomeASellerpage = () => {

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

    return (
        <>
        <Navbar/>
        
                <section className={sellerStyle.main}>
            <section id={sellerStyle.sellerDivBanner} className={style.aboutParent}>
                <div className={style.aboutMain}>
                    <div>
                        <div className={sellerStyle.container}>
                            <div id={sellerStyle.sellerDiv1} className={sellerStyle.box}>
                                <p id={sellerStyle.para1} className={style.innerHeading}>Work your way...</p>
                                <p id={sellerStyle.para2} className={style.innerHeading}>where skill meets simplicity for effortless earning</p>
                            </div>
                            <div id={sellerStyle.container} className={sellerStyle.box}>
                                <img id={sellerStyle.sellerImg} src={sellerImg} />
                                <div id={sellerStyle.overlayDiv} className={sellerStyle.container}>
                                    <div className={sellerStyle.overlayBox}>
                                        <h2 id={sellerStyle.overlayDivH2}>A Gig is Bought Every</h2>
                                        <p id={sellerStyle.overlayDivPara}>4 SEC</p>
                                    </div>
                                    <div className={sellerStyle.overlayBox}>
                                        <h2 id={sellerStyle.overlayDivH2}>Transactions</h2>
                                        <p id={sellerStyle.overlayDivPara}>50M+</p>
                                    </div>
                                    <div className={sellerStyle.overlayBox}>
                                        <h2 id={sellerStyle.overlayDivH2}>Price Range</h2>
                                        <p id={sellerStyle.overlayDivPara}>$5 - $10,000</p>
                                    </div>
                                </div>
                            </div>
                            <div className={sellerStyle.box}>
                                <p className={style.innerHeading}><button onClick={()=>becomeAseller2()} id={sellerStyle.sellerButton}>Become Seller</button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={sellerStyle.aboutParent}>
                <div className={sellerStyle.aboutMain}>
                    <h3 className={style.heading}>Join our growing freelance community</h3>
                    <div className={sellerStyle.container}>
                        <div className={sellerStyle.box}>
                            <div className={style.recommendation}>
                                <img id={sellerStyle.communityImg} src={carouselImage1} />
                                <div className={sellerStyle.innerHeading}>I am a Designer</div>
                            </div>
                        </div>
                        <div className={sellerStyle.box}>
                            <div className={style.recommendation}>
                                <img id={sellerStyle.communityImg} src={carouselImage1} />
                                <div className={sellerStyle.innerHeading}>I am a Designer</div>
                            </div>
                        </div>
                        <div className={sellerStyle.box}>
                            <div className={style.recommendation}>
                                <img id={sellerStyle.communityImg} src={carouselImage1} />
                                <div className={sellerStyle.innerHeading}>I am a Designer</div>
                            </div>
                        </div>
                    </div>
                    <div className={sellerStyle.container}>
                        <div className={sellerStyle.box}>
                            <div className={style.recommendation}>
                                <img id={sellerStyle.communityImg} src={carouselImage1} />
                                <div className={sellerStyle.innerHeading}>I am a Designer</div>
                            </div>
                        </div>
                        <div className={sellerStyle.box}>
                            <div className={style.recommendation}>
                                <img id={sellerStyle.communityImg} src={carouselImage1} />
                                <div className={sellerStyle.innerHeading}>I am a Designer</div>
                            </div>
                        </div>
                        <div className={sellerStyle.box}>
                            <div className={style.recommendation}>
                                <img id={sellerStyle.communityImg} src={carouselImage1} />
                                <div className={sellerStyle.innerHeading}>I am a Designer</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id={sellerStyle.howItWorksBanner} className={style.aboutParent}>
                <div className={style.aboutMain}>
                    <div>
                        <h3 className={sellerStyle.mainText}>How it Works</h3>
                        <div className={sellerStyle.container}>
                            <div className={sellerStyle.box}>
                                <img src={gigEco} />
                                <p className={style.innerHeading}>1 I am a Designer</p>
                                <p>I am a Designer</p>
                            </div>
                            <div id={sellerStyle.arrow} className={sellerStyle.box}>
                                <img src={arrow} />
                            </div>
                            <div className={sellerStyle.box}>
                                <img src={gigEco} />
                                <p className={style.innerHeading}>2 I am a Designer</p>
                                <p>I am a Designer</p>
                            </div>
                            <div id={sellerStyle.arrow} className={sellerStyle.box}>
                                <img src={arrow} />
                            </div>
                            <div className={sellerStyle.box}>
                                <img src={gigEco} />
                                <p className={style.innerHeading}>3 I am a Designer</p>
                                <p>I am a Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id={sellerStyle.howItWorksBanner} className={sellerStyle.onDemandParent}>
                <div className={style.aboutMain}>
                    <div>
                        <div className={sellerStyle.container}>
                            <div className={sellerStyle.box}>
                                <div className={sellerStyle.onDemandImg}>
                                    <img src={image34}></img>
                                </div>
                            </div>
                            <div className={sellerStyle.box}>
                                <div id={sellerStyle.onDemandContent}>
                                    <h3 id={sellerStyle.onDemandpara1} className={sellerStyle.mainText}>On-demand professional courses,
                                        led by the world’s leading experts.</h3>
                                    <p id={sellerStyle.onDemandpara2} >Discover what it takes to be a top-notch seller on Fiverr with this complimentary
                                        Learn from Fiverr course</p>
                                    <h3><button id={sellerStyle.learnButton}>Learn More</button></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={sellerStyle.buyerStoryParent}>
                <div className={sellerStyle.aboutMain}>
                    <h3 className={style.heading}>Buyer Stories</h3>
                    <div id={sellerStyle.buyerStory} className={sellerStyle.container}>
                        <div id={sellerStyle.buyerStoryContentImgLeft}>
                            <img src={ldkiImage} />
                        </div>
                        <div>
                            <p id={sellerStyle.buyerStoryContentPara}>"People love our logo, and we love netpuppys."</p>
                            <p id={sellerStyle.buyerStoryContentName}>Jennifer Gore, CEO of Weleet</p>
                        </div>
                    </div>
                    <div id={sellerStyle.buyerStory} className={sellerStyle.container}>
                        <div>
                            <p id={sellerStyle.buyerStoryContentPara}>"People love our logo, and we love netpuppys."</p>
                            <p id={sellerStyle.buyerStoryContentName}>Jennifer Gore, CEO of Weleet</p>
                        </div>
                        <div id={sellerStyle.buyerStoryContentImgRight}>
                            <img src={ldkiImage} />
                        </div>
                    </div>
                    <div id={sellerStyle.buyerStory} className={sellerStyle.container}>
                        <div id={sellerStyle.buyerStoryContentImg}>
                            <img src={ldkiImage} />
                        </div>
                        <div>
                            <p id={sellerStyle.buyerStoryContentPara}>"People love our logo, and we love netpuppys."</p>
                            <p id={sellerStyle.buyerStoryContentName}>Jennifer Gore, CEO of Weleet</p>
                        </div>
                    </div>
                    <div id={sellerStyle.buyerStory} className={sellerStyle.container}>
                        <div>
                            <p id={sellerStyle.buyerStoryContentPara}>"People love our logo, and we love netpuppys."</p>
                            <p id={sellerStyle.buyerStoryContentName}>Jennifer Gore, CEO of Weleet</p>
                        </div>
                        <div id={sellerStyle.buyerStoryContentImgRight}>
                            <img src={ldkiImage} />
                        </div>
                    </div>
                </div>
            </section>
            <section className={sellerStyle.qnaParent}>
                <div className={sellerStyle.qnaMain}>
                    <div>
                        <h2 className={style.heading}>Q&A</h2>
                        <div className={style.recommendation}>
                            <div id={sellerStyle.qna}>
                                <span>What can I sell?</span>
                                <svg id={sellerStyle.qnaArrow} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                    <path d="M8.68027 13.9594L14.6592 8.00105C14.7681 7.88771 14.8534 7.75407 14.9103 7.60779C15.0299 7.31766 15.0299 6.99224 14.9103 6.70212C14.8534 6.55583 14.7681 6.42219 14.6592 6.30886L8.68027 0.350463C8.56878 0.239352 8.43642 0.151215 8.29074 0.0910824C8.14507 0.0309499 7.98894 -3.0579e-07 7.83126 -3.12667e-07C7.51282 -3.26556e-07 7.20743 0.126065 6.98226 0.350463C6.75709 0.57486 6.63059 0.879209 6.63059 1.19656C6.63059 1.5139 6.75709 1.81825 6.98226 2.04265L10.9283 5.96327L1.85235 5.96327C1.53521 5.96327 1.23105 6.08883 1.0068 6.31231C0.782549 6.53579 0.656565 6.8389 0.656565 7.15495C0.656565 7.47101 0.782549 7.77411 1.0068 7.9976C1.23105 8.22108 1.53521 8.34663 1.85235 8.34663L10.9283 8.34663L6.98226 12.2673C6.87018 12.378 6.78122 12.5098 6.72051 12.6551C6.6598 12.8003 6.62855 12.956 6.62855 13.1134C6.62855 13.2707 6.6598 13.4264 6.72051 13.5716C6.78122 13.7169 6.87018 13.8487 6.98226 13.9594C7.09342 14.0711 7.22568 14.1598 7.37139 14.2203C7.51711 14.2808 7.67341 14.3119 7.83126 14.3119C7.98912 14.3119 8.14542 14.2808 8.29113 14.2203C8.43685 14.1598 8.56911 14.0711 8.68027 13.9594Z" fill="#F04C43" />
                                </svg>
                            </div>
                            <div id={sellerStyle.qna}>
                                <span>What can I sell?</span>
                                <svg id={sellerStyle.qnaArrow} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                    <path d="M8.68027 13.9594L14.6592 8.00105C14.7681 7.88771 14.8534 7.75407 14.9103 7.60779C15.0299 7.31766 15.0299 6.99224 14.9103 6.70212C14.8534 6.55583 14.7681 6.42219 14.6592 6.30886L8.68027 0.350463C8.56878 0.239352 8.43642 0.151215 8.29074 0.0910824C8.14507 0.0309499 7.98894 -3.0579e-07 7.83126 -3.12667e-07C7.51282 -3.26556e-07 7.20743 0.126065 6.98226 0.350463C6.75709 0.57486 6.63059 0.879209 6.63059 1.19656C6.63059 1.5139 6.75709 1.81825 6.98226 2.04265L10.9283 5.96327L1.85235 5.96327C1.53521 5.96327 1.23105 6.08883 1.0068 6.31231C0.782549 6.53579 0.656565 6.8389 0.656565 7.15495C0.656565 7.47101 0.782549 7.77411 1.0068 7.9976C1.23105 8.22108 1.53521 8.34663 1.85235 8.34663L10.9283 8.34663L6.98226 12.2673C6.87018 12.378 6.78122 12.5098 6.72051 12.6551C6.6598 12.8003 6.62855 12.956 6.62855 13.1134C6.62855 13.2707 6.6598 13.4264 6.72051 13.5716C6.78122 13.7169 6.87018 13.8487 6.98226 13.9594C7.09342 14.0711 7.22568 14.1598 7.37139 14.2203C7.51711 14.2808 7.67341 14.3119 7.83126 14.3119C7.98912 14.3119 8.14542 14.2808 8.29113 14.2203C8.43685 14.1598 8.56911 14.0711 8.68027 13.9594Z" fill="#F04C43" />
                                </svg>
                            </div>
                            <div id={sellerStyle.qna}>
                                <span>What can I sell?</span>
                                <svg id={sellerStyle.qnaArrow} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                    <path d="M8.68027 13.9594L14.6592 8.00105C14.7681 7.88771 14.8534 7.75407 14.9103 7.60779C15.0299 7.31766 15.0299 6.99224 14.9103 6.70212C14.8534 6.55583 14.7681 6.42219 14.6592 6.30886L8.68027 0.350463C8.56878 0.239352 8.43642 0.151215 8.29074 0.0910824C8.14507 0.0309499 7.98894 -3.0579e-07 7.83126 -3.12667e-07C7.51282 -3.26556e-07 7.20743 0.126065 6.98226 0.350463C6.75709 0.57486 6.63059 0.879209 6.63059 1.19656C6.63059 1.5139 6.75709 1.81825 6.98226 2.04265L10.9283 5.96327L1.85235 5.96327C1.53521 5.96327 1.23105 6.08883 1.0068 6.31231C0.782549 6.53579 0.656565 6.8389 0.656565 7.15495C0.656565 7.47101 0.782549 7.77411 1.0068 7.9976C1.23105 8.22108 1.53521 8.34663 1.85235 8.34663L10.9283 8.34663L6.98226 12.2673C6.87018 12.378 6.78122 12.5098 6.72051 12.6551C6.6598 12.8003 6.62855 12.956 6.62855 13.1134C6.62855 13.2707 6.6598 13.4264 6.72051 13.5716C6.78122 13.7169 6.87018 13.8487 6.98226 13.9594C7.09342 14.0711 7.22568 14.1598 7.37139 14.2203C7.51711 14.2808 7.67341 14.3119 7.83126 14.3119C7.98912 14.3119 8.14542 14.2808 8.29113 14.2203C8.43685 14.1598 8.56911 14.0711 8.68027 13.9594Z" fill="#F04C43" />
                                </svg>
                            </div>
                            <div id={sellerStyle.qna}>
                                <span>What can I sell?</span>
                                <svg id={sellerStyle.qnaArrow} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                    <path d="M8.68027 13.9594L14.6592 8.00105C14.7681 7.88771 14.8534 7.75407 14.9103 7.60779C15.0299 7.31766 15.0299 6.99224 14.9103 6.70212C14.8534 6.55583 14.7681 6.42219 14.6592 6.30886L8.68027 0.350463C8.56878 0.239352 8.43642 0.151215 8.29074 0.0910824C8.14507 0.0309499 7.98894 -3.0579e-07 7.83126 -3.12667e-07C7.51282 -3.26556e-07 7.20743 0.126065 6.98226 0.350463C6.75709 0.57486 6.63059 0.879209 6.63059 1.19656C6.63059 1.5139 6.75709 1.81825 6.98226 2.04265L10.9283 5.96327L1.85235 5.96327C1.53521 5.96327 1.23105 6.08883 1.0068 6.31231C0.782549 6.53579 0.656565 6.8389 0.656565 7.15495C0.656565 7.47101 0.782549 7.77411 1.0068 7.9976C1.23105 8.22108 1.53521 8.34663 1.85235 8.34663L10.9283 8.34663L6.98226 12.2673C6.87018 12.378 6.78122 12.5098 6.72051 12.6551C6.6598 12.8003 6.62855 12.956 6.62855 13.1134C6.62855 13.2707 6.6598 13.4264 6.72051 13.5716C6.78122 13.7169 6.87018 13.8487 6.98226 13.9594C7.09342 14.0711 7.22568 14.1598 7.37139 14.2203C7.51711 14.2808 7.67341 14.3119 7.83126 14.3119C7.98912 14.3119 8.14542 14.2808 8.29113 14.2203C8.43685 14.1598 8.56911 14.0711 8.68027 13.9594Z" fill="#F04C43" />
                                </svg>
                            </div>
                            <div id={sellerStyle.qna}>
                                <span>What can I sell?</span>
                                <svg id={sellerStyle.qnaArrow} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                    <path d="M8.68027 13.9594L14.6592 8.00105C14.7681 7.88771 14.8534 7.75407 14.9103 7.60779C15.0299 7.31766 15.0299 6.99224 14.9103 6.70212C14.8534 6.55583 14.7681 6.42219 14.6592 6.30886L8.68027 0.350463C8.56878 0.239352 8.43642 0.151215 8.29074 0.0910824C8.14507 0.0309499 7.98894 -3.0579e-07 7.83126 -3.12667e-07C7.51282 -3.26556e-07 7.20743 0.126065 6.98226 0.350463C6.75709 0.57486 6.63059 0.879209 6.63059 1.19656C6.63059 1.5139 6.75709 1.81825 6.98226 2.04265L10.9283 5.96327L1.85235 5.96327C1.53521 5.96327 1.23105 6.08883 1.0068 6.31231C0.782549 6.53579 0.656565 6.8389 0.656565 7.15495C0.656565 7.47101 0.782549 7.77411 1.0068 7.9976C1.23105 8.22108 1.53521 8.34663 1.85235 8.34663L10.9283 8.34663L6.98226 12.2673C6.87018 12.378 6.78122 12.5098 6.72051 12.6551C6.6598 12.8003 6.62855 12.956 6.62855 13.1134C6.62855 13.2707 6.6598 13.4264 6.72051 13.5716C6.78122 13.7169 6.87018 13.8487 6.98226 13.9594C7.09342 14.0711 7.22568 14.1598 7.37139 14.2203C7.51711 14.2808 7.67341 14.3119 7.83126 14.3119C7.98912 14.3119 8.14542 14.2808 8.29113 14.2203C8.43685 14.1598 8.56911 14.0711 8.68027 13.9594Z" fill="#F04C43" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={sellerStyle.endParent}>
                <div className={sellerStyle.endMain}>
                    <h2 className={style.heading}>Sign up and create your first Gig today</h2>
                    <div><button id={sellerStyle.endButton}>Get Started</button></div>
                </div>
            </section>
        </section>
        </>

    )
}

export default BecomeASellerpage
