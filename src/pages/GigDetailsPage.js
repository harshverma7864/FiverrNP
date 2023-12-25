import React, { useState , useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import style from '../assets/styles/gigpage.module.css'
import gigCardStyle from '../assets/styles/card/gigCardStyle.module.css'
import carouselImage1 from '../assets/images/bannerImage1.png'
import { Navbar } from '../components';
import GigService from '../services/GigService';
import { GIG_URI  } from '../environment';
import Cookies from 'js-cookie';
import SellerService from '../services/SellerService';

const GigDetailsPage = () => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('code');
    const [isContactClicked, setIsContactClicked] = useState(false);
    const handleContactClick = () => {
        setIsContactClicked(!isContactClicked);
    }



   const userDetail = JSON.parse(Cookies.get("user"))



    const [gigData , setGigData] = useState(null);
    const [seller , setSellerData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            // Check if query is null or empty before making the API call
            if (query) {
              const result = await GigService.getGigById(`${GIG_URI}/${query}`);
              setGigData(result);
            }
            
          } catch (error) {
            console.error('Error in component:', error);
          }
        };
    
        fetchData();
      }, [query]);

      useEffect(() => {
        const fetchData = async () => {
          try {
            // Check if query is null or empty before making the API call
            if (gigData) {
              const result = await SellerService.retriveSellerProfile(gigData.seller);
              console.log(gigData.seller)
              setSellerData(result);
              
              console.log(result)
            }
          } catch (error) {
            console.error('Error in component:', error);
          }
        };
    
        fetchData();
      }, []);



    return (
        <>       
        <Navbar/> 

 
        <section  className={style.main}>

            <h2 className={style.heading}>{gigData && gigData.title}</h2>


            <div className={style.profile}>
                <div className={style.profileImage}>

                </div>
                <div id={style.profiledetails}>
                    <div style={{ display: 'flex' }}><p className={style.name}>{userDetail.first_name} {userDetail.last_name} &nbsp; </p> <span id={style.username}>@{userDetail.username}</span></div>
                    <div className={gigCardStyle.rating}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                            <path d="M8.02051 7.26458L7.74266 7.29755L0.941657 8.10455L0.94137 8.10458C0.846497 8.11578 0.756817 8.15393 0.682945 8.21451C0.609074 8.27509 0.554104 8.35556 0.524542 8.44641C0.494979 8.53725 0.492061 8.63466 0.516133 8.72712C0.540204 8.81957 0.590258 8.90319 0.660371 8.96808L5.69015 13.6179L5.8957 13.8079L5.84116 14.0825L4.50622 20.8021C4.50621 20.8022 4.5062 20.8023 4.50618 20.8023C4.4877 20.8959 4.49638 20.9929 4.5312 21.0817C4.56604 21.1706 4.62561 21.2476 4.70287 21.3038C4.78012 21.3599 4.87182 21.3927 4.96714 21.3983C5.06236 21.404 5.15722 21.3823 5.2405 21.3357L8.02051 7.26458ZM8.02051 7.26458L8.13774 7.01051L11.0077 0.790516C11.0478 0.703783 11.1118 0.630329 11.1922 0.578845C11.2727 0.527361 11.3662 0.5 11.4617 0.5C11.5573 0.5 11.6508 0.527361 11.7312 0.578845C11.8117 0.630322 11.8757 0.703763 11.9157 0.79048C11.9157 0.790492 11.9157 0.790504 11.9157 0.790516L14.7847 7.00948L14.9019 7.26354L15.1798 7.29654L21.9818 8.10454L21.9821 8.10458C22.077 8.11578 22.1667 8.15393 22.2405 8.21451C22.3144 8.27509 22.3694 8.35556 22.3989 8.44641C22.4285 8.53725 22.4314 8.63467 22.4073 8.72712C22.3833 8.81951 22.3333 8.90308 22.2633 8.96795C22.2632 8.96799 22.2632 8.96804 22.2631 8.96808L17.2343 13.6189L17.0288 13.809L17.0833 14.0835L18.4183 20.8015L18.4184 20.802C18.4372 20.8958 18.4286 20.9929 18.3938 21.082C18.359 21.1711 18.2994 21.2483 18.222 21.3045C18.1447 21.3607 18.0528 21.3935 17.9573 21.3991C17.8619 21.4047 17.7668 21.3828 17.6834 21.336L17.683 21.3357L11.706 17.9897L11.4617 17.853L11.2175 17.9897L5.24072 21.3356L8.02051 7.26458Z" fill="#F04C43" stroke="white" />
                        </svg>
                        &nbsp; <span className={gigCardStyle.ratingNumber}>{seller &&seller.rating_details.overall_rating}</span> &nbsp; (1k+)
                        &nbsp;&nbsp;&nbsp;&nbsp; <span id={style.queueOrders}>4 Orders in a Queue</span>
                    </div>
                </div>
            </div>
            <section id={style.section1}>
                <div id={style.carouselParent}>
                    <div id={style.carouselMain}>
                        <img src={carouselImage1} alt='Default Image' />
                    </div>
                    <div id={style.carouselButtons}>
                        <div id={style.leftarrow}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                <path d="M6.31973 1.16171L0.340815 7.12011C0.23195 7.23344 0.146613 7.36708 0.0897002 7.51336C-0.0298996 7.80349 -0.0298997 8.12891 0.0897002 8.41904C0.146613 8.56532 0.23195 8.69896 0.340815 8.81229L6.31973 14.7707C6.43122 14.8818 6.56358 14.9699 6.70926 15.0301C6.85493 15.0902 7.01106 15.1212 7.16874 15.1212C7.48718 15.1212 7.79257 14.9951 8.01774 14.7707C8.24291 14.5463 8.36941 14.2419 8.36941 13.9246C8.36941 13.6073 8.24291 13.3029 8.01774 13.0785L4.07166 9.15788L13.1477 9.15788C13.4648 9.15788 13.7689 9.03233 13.9932 8.80885C14.2175 8.58536 14.3434 8.28225 14.3434 7.9662C14.3434 7.65015 14.2175 7.34704 13.9932 7.12356C13.7689 6.90007 13.4648 6.77452 13.1477 6.77452L4.07166 6.77452L8.01774 2.8539C8.12982 2.74311 8.21878 2.61131 8.27949 2.4661C8.3402 2.32088 8.37145 2.16512 8.37145 2.0078C8.37145 1.85049 8.3402 1.69473 8.27949 1.54951C8.21878 1.40429 8.12982 1.27249 8.01774 1.16171C7.90658 1.05002 7.77432 0.961362 7.62861 0.900862C7.48289 0.840362 7.32659 0.809215 7.16874 0.809215C7.01088 0.809215 6.85458 0.840362 6.70887 0.900862C6.56315 0.961362 6.43089 1.05002 6.31973 1.16171Z" fill="#F04C43" />
                            </svg>
                        </div>
                        <div className={style.carouselImg}>
                            <img src={carouselImage1} />
                            <img src={carouselImage1} />
                            <img src={carouselImage1} />
                            <img src={carouselImage1} />
                            <img src={carouselImage1} />
                        </div>
                        <div id={style.rightarrow}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <path d="M8.68027 13.9594L14.6592 8.00105C14.7681 7.88771 14.8534 7.75407 14.9103 7.60779C15.0299 7.31766 15.0299 6.99224 14.9103 6.70212C14.8534 6.55583 14.7681 6.42219 14.6592 6.30886L8.68027 0.350463C8.56878 0.239352 8.43642 0.151215 8.29074 0.0910824C8.14507 0.0309499 7.98894 -3.0579e-07 7.83126 -3.12667e-07C7.51282 -3.26556e-07 7.20743 0.126065 6.98226 0.350463C6.75709 0.57486 6.63059 0.879209 6.63059 1.19656C6.63059 1.5139 6.75709 1.81825 6.98226 2.04265L10.9283 5.96327L1.85235 5.96327C1.53521 5.96327 1.23105 6.08883 1.0068 6.31231C0.782549 6.53579 0.656565 6.8389 0.656565 7.15495C0.656565 7.47101 0.782549 7.77411 1.0068 7.9976C1.23105 8.22108 1.53521 8.34663 1.85235 8.34663L10.9283 8.34663L6.98226 12.2673C6.87018 12.378 6.78122 12.5098 6.72051 12.6551C6.6598 12.8003 6.62855 12.956 6.62855 13.1134C6.62855 13.2707 6.6598 13.4264 6.72051 13.5716C6.78122 13.7169 6.87018 13.8487 6.98226 13.9594C7.09342 14.0711 7.22568 14.1598 7.37139 14.2203C7.51711 14.2808 7.67341 14.3119 7.83126 14.3119C7.98912 14.3119 8.14542 14.2808 8.29113 14.2203C8.43685 14.1598 8.56911 14.0711 8.68027 13.9594Z" fill="#F04C43" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={style.right}>
                    <div className={style.package}>
                        <div id={style.packageType}>
                            <div style={{ backgroundColor: '#F04C43', color: '#fff' }}>Basic</div>
                            <div>Standard</div>
                            <div>Premium</div>
                        </div>

                        <div id={style.packageInner}>
                            <div id={style.projectDetails}>
                                <h3>One Page Website</h3>
                                <div>
                                    <h3>₹23,238</h3>
                                    <del>₹23,238</del>
                                </div>
                            </div>
                            <p id={style.desc}>Contact Me First - ONE Page Responsive (5 Sections) + Admin Panel + Video Tutorials</p>
                            <div id={style.element}>
                                <div className={style.element}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="30" viewBox="0 0 22 30" fill="none">
                                        <path d="M17.5036 6.36562L16.6456 1.76116C16.5538 1.26717 16.2868 0.82025 15.8913 0.498383C15.4958 0.176515 14.9968 0.000129458 14.4814 0H7.5186C7.0032 0.000129458 6.50421 0.176515 6.10869 0.498383C5.71316 0.82025 5.44621 1.26717 5.35441 1.76116L4.49643 6.36562C3.10296 7.3593 1.96963 8.65896 1.18838 10.1592C0.407141 11.6594 0 13.3178 0 15C0 16.6822 0.407141 18.3406 1.18838 19.8408C1.96963 21.341 3.10296 22.6407 4.49643 23.6344L5.35441 28.2388C5.44621 28.7328 5.71316 29.1797 6.10869 29.5016C6.50421 29.8235 7.0032 29.9999 7.5186 30H14.4814C14.9968 29.9999 15.4958 29.8235 15.8913 29.5016C16.2868 29.1797 16.5538 28.7328 16.6456 28.2388L17.5036 23.6344C18.897 22.6407 20.0304 21.341 20.8116 19.8408C21.5929 18.3406 22 16.6822 22 15C22 13.3178 21.5929 11.6594 20.8116 10.1592C20.0304 8.65896 18.897 7.3593 17.5036 6.36562ZM7.5186 2.14286H14.4814L15.019 5.02902C12.4363 4.03798 9.56374 4.03798 6.98099 5.02902L7.5186 2.14286ZM14.4814 27.8571H7.5186L6.98099 24.971C9.56374 25.962 12.4363 25.962 15.019 24.971L14.4814 27.8571ZM16.4998 16.0714H11C10.7083 16.0714 10.4285 15.9585 10.2222 15.7576C10.0159 15.5567 9.90003 15.2842 9.90003 15V9.64286C9.90003 9.3587 10.0159 9.08617 10.2222 8.88524C10.4285 8.68431 10.7083 8.57143 11 8.57143C11.2917 8.57143 11.5715 8.68431 11.7778 8.88524C11.9841 9.08617 12.1 9.3587 12.1 9.64286V13.9286H16.4998C16.7916 13.9286 17.0714 14.0415 17.2776 14.2424C17.4839 14.4433 17.5998 14.7158 17.5998 15C17.5998 15.2842 17.4839 15.5567 17.2776 15.7576C17.0714 15.9585 16.7916 16.0714 16.4998 16.0714Z" fill="#F04C43" />
                                    </svg>
                                    &nbsp;&nbsp;
                                    3 Days Delivery
                                </div>
                                <div className={style.element}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                        <path d="M19.701 14.861H14.718C14.4263 14.861 14.1465 14.9769 13.9402 15.1832C13.7339 15.3895 13.618 15.6693 13.618 15.961C13.618 16.2527 13.7339 16.5325 13.9402 16.7388C14.1465 16.9451 14.4263 17.061 14.718 17.061H17.358C16.1446 18.329 14.5798 19.2052 12.8647 19.5771C11.1495 19.949 9.36233 19.7996 7.73275 19.148C6.10318 18.4964 4.70566 17.3724 3.71975 15.9205C2.73384 14.4686 2.20459 12.755 2.2 11C2.2 10.7083 2.08411 10.4285 1.87782 10.2222C1.67153 10.0159 1.39174 9.9 1.1 9.9C0.808262 9.9 0.528472 10.0159 0.322183 10.2222C0.115892 10.4285 0 10.7083 0 11C0.00581533 13.1481 0.640443 15.2474 1.82556 17.039C3.01068 18.8306 4.69443 20.236 6.66902 21.0817C8.6436 21.9275 10.8226 22.1766 12.9371 21.7983C15.0516 21.42 17.0091 20.4309 18.568 18.953V20.9C18.568 21.1917 18.6839 21.4715 18.8902 21.6778C19.0965 21.8841 19.3763 22 19.668 22C19.9597 22 20.2395 21.8841 20.4458 21.6778C20.6521 21.4715 20.768 21.1917 20.768 20.9V15.95C20.7653 15.6658 20.6527 15.3937 20.4538 15.1907C20.2549 14.9877 19.9851 14.8695 19.701 14.861ZM14.3 11C14.3 10.3473 14.1065 9.7093 13.7438 9.16662C13.3812 8.62394 12.8659 8.20097 12.2629 7.9512C11.6599 7.70143 10.9963 7.63608 10.3562 7.76341C9.71606 7.89074 9.12806 8.20503 8.66655 8.66655C8.20503 9.12806 7.89074 9.71606 7.76341 10.3562C7.63608 10.9963 7.70143 11.6599 7.9512 12.2629C8.20097 12.8659 8.62394 13.3812 9.16662 13.7438C9.7093 14.1065 10.3473 14.3 11 14.3C11.8752 14.3 12.7146 13.9523 13.3335 13.3335C13.9523 12.7146 14.3 11.8752 14.3 11ZM9.9 11C9.9 10.7824 9.96451 10.5698 10.0854 10.3889C10.2063 10.208 10.378 10.067 10.579 9.98373C10.78 9.90048 11.0012 9.87869 11.2146 9.92114C11.428 9.96358 11.624 10.0683 11.7778 10.2222C11.9317 10.376 12.0364 10.572 12.0789 10.7854C12.1213 10.9988 12.0995 11.22 12.0163 11.421C11.933 11.622 11.792 11.7937 11.6111 11.9146C11.4302 12.0355 11.2176 12.1 11 12.1C10.7083 12.1 10.4285 11.9841 10.2222 11.7778C10.0159 11.5715 9.9 11.2917 9.9 11ZM11 0C8.18002 0.00804341 5.47084 1.09881 3.432 3.047V1.1C3.432 0.808262 3.31611 0.528472 3.10982 0.322183C2.90353 0.115892 2.62374 0 2.332 0C2.04026 0 1.76047 0.115892 1.55418 0.322183C1.34789 0.528472 1.232 0.808262 1.232 1.1V6.05C1.232 6.34174 1.34789 6.62153 1.55418 6.82782C1.76047 7.03411 2.04026 7.15 2.332 7.15H7.282C7.57374 7.15 7.85353 7.03411 8.05982 6.82782C8.26611 6.62153 8.382 6.34174 8.382 6.05C8.382 5.75826 8.26611 5.47847 8.05982 5.27218C7.85353 5.06589 7.57374 4.95 7.282 4.95H4.642C5.85471 3.68266 7.4185 2.80665 9.13264 2.43442C10.8468 2.06219 12.633 2.21072 14.2622 2.86095C15.8913 3.51118 17.2889 4.63343 18.2757 6.08366C19.2624 7.5339 19.7932 9.24592 19.8 11C19.8 11.2917 19.9159 11.5715 20.1222 11.7778C20.3285 11.9841 20.6083 12.1 20.9 12.1C21.1917 12.1 21.4715 11.9841 21.6778 11.7778C21.8841 11.5715 22 11.2917 22 11C22 9.55546 21.7155 8.12506 21.1627 6.79048C20.6099 5.4559 19.7996 4.24327 18.7782 3.22183C17.7567 2.20038 16.5441 1.39013 15.2095 0.837325C13.8749 0.284523 12.4445 0 11 0Z" fill="#F04C43" />
                                    </svg>
                                    &nbsp;&nbsp;
                                    2 Revisions
                                </div>
                                <div id={style.services}>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                                            <path d="M1 5L4.5 8.5L11.5 1" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        &nbsp; &nbsp;
                                        1 Page / Screen
                                    </p>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                                            <path d="M1 5L4.5 8.5L11.5 1" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        &nbsp; &nbsp;
                                        Responsive Design
                                    </p>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                                            <path d="M1 5L4.5 8.5L11.5 1" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        &nbsp; &nbsp;
                                        Source File
                                    </p>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                                            <path d="M1 5L4.5 8.5L11.5 1" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        &nbsp; &nbsp;
                                        Prototype
                                    </p>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                                            <path d="M1 5L4.5 8.5L11.5 1" stroke="#878787" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        &nbsp; &nbsp;
                                        Content Upload
                                    </p>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                                            <path d="M1 5L4.5 8.5L11.5 1" stroke="#878787" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        &nbsp; &nbsp;
                                        Convert to HTML/CSS
                                    </p>
                                </div>

                                <div id={style.buttons}>
                                    <button className={style.continueButton}>Continue <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none">
                                        <path d="M7.793 0.292786C7.98053 0.105315 8.23484 0 8.5 0C8.76516 0 9.01947 0.105315 9.207 0.292786L13.707 4.79279C13.8945 4.98031 13.9998 5.23462 13.9998 5.49979C13.9998 5.76495 13.8945 6.01926 13.707 6.20679L9.207 10.7068C9.0184 10.8889 8.7658 10.9897 8.5036 10.9875C8.2414 10.9852 7.99059 10.88 7.80518 10.6946C7.61977 10.5092 7.5146 10.2584 7.51233 9.99619C7.51005 9.73399 7.61084 9.48139 7.793 9.29279L10.5 6.49979H1C0.734784 6.49979 0.48043 6.39443 0.292893 6.20689C0.105357 6.01936 0 5.765 0 5.49979C0 5.23457 0.105357 4.98022 0.292893 4.79268C0.48043 4.60514 0.734784 4.49979 1 4.49979H10.5L7.793 1.70679C7.60553 1.51926 7.50021 1.26495 7.50021 0.999786C7.50021 0.734622 7.60553 0.480314 7.793 0.292786Z" fill="white" />
                                    </svg>
                                    </button>
                                    <button className={style.compareButton}>Compare Packages</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={style.contactCard}>
                        <div className={style.contact} onClick={handleContactClick} >Contact Me <svg xmlns="http://www.w3.org/2000/svg" width="22" height="13" viewBox="0 0 22 13" fill="none">
                            <path d="M11.7068 11.2937C11.3164 11.6839 10.6836 11.6839 10.2932 11.2937L1.4503 2.45737C0.819978 1.82751 1.26606 0.75 2.15715 0.75L19.8429 0.749998C20.7339 0.749998 21.18 1.82751 20.5497 2.45737L11.7068 11.2937Z" fill="white" stroke="black" />
                        </svg>
                        </div>
                    </div>
                    <div id={style.expandContactMe} style={{ visibility: isContactClicked ? 'visible' : 'hidden' }}>
                        <h2>How Can I Help ?</h2>
                        <div>Get a Quote <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none">
                            <path d="M7.793 0.292786C7.98053 0.105315 8.23484 0 8.5 0C8.76516 0 9.01947 0.105315 9.207 0.292786L13.707 4.79279C13.8945 4.98031 13.9998 5.23462 13.9998 5.49979C13.9998 5.76495 13.8945 6.01926 13.707 6.20679L9.207 10.7068C9.0184 10.8889 8.7658 10.9897 8.5036 10.9875C8.2414 10.9852 7.99059 10.88 7.80518 10.6946C7.61977 10.5092 7.5146 10.2584 7.51233 9.99619C7.51005 9.73399 7.61084 9.48139 7.793 9.29279L10.5 6.49979H1C0.734784 6.49979 0.48043 6.39443 0.292893 6.20689C0.105357 6.01936 0 5.765 0 5.49979C0 5.23457 0.105357 4.98022 0.292893 4.79268C0.48043 4.60514 0.734784 4.49979 1 4.49979H10.5L7.793 1.70679C7.60553 1.51926 7.50021 1.26495 7.50021 0.999786C7.50021 0.734622 7.60553 0.480314 7.793 0.292786Z" fill="black" />
                        </svg></div>
                        <div>Ask A Question <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none">
                            <path d="M7.793 0.292786C7.98053 0.105315 8.23484 0 8.5 0C8.76516 0 9.01947 0.105315 9.207 0.292786L13.707 4.79279C13.8945 4.98031 13.9998 5.23462 13.9998 5.49979C13.9998 5.76495 13.8945 6.01926 13.707 6.20679L9.207 10.7068C9.0184 10.8889 8.7658 10.9897 8.5036 10.9875C8.2414 10.9852 7.99059 10.88 7.80518 10.6946C7.61977 10.5092 7.5146 10.2584 7.51233 9.99619C7.51005 9.73399 7.61084 9.48139 7.793 9.29279L10.5 6.49979H1C0.734784 6.49979 0.48043 6.39443 0.292893 6.20689C0.105357 6.01936 0 5.765 0 5.49979C0 5.23457 0.105357 4.98022 0.292893 4.79268C0.48043 4.60514 0.734784 4.49979 1 4.49979H10.5L7.793 1.70679C7.60553 1.51926 7.50021 1.26495 7.50021 0.999786C7.50021 0.734622 7.60553 0.480314 7.793 0.292786Z" fill="black" />
                        </svg></div>
                    </div>
                </div>
            </section>
            <section className={style.aboutParent}>
                <div className={style.aboutMain}>
                    <div className={style.aboutMainFirstPart}>
                        <h2 className={style.heading}>About this service</h2>
                        <p>4x Award-Winning Designer with 15+ years of experience in working with various reputable brands including: Subway, Genghis Grill, Schlotzskys, CiCi's Pizza.</p>
                        <p>**CLIENTS***MUST REACH OUT TO ME BEFORE ORDERING, so I can check your files and approve them***I look forward to working with you.</p>
                        <h3 className={style.innerHeading}>What Will I Deliver?</h3>
                        <ul>
                            <li><p>100% Custom Website Designed to Fit Your Needs</p></li>
                            <li><p>90+ Google Page Speed</p></li>
                            <li><p>Mobile / Tablet Responsive Design</p></li>
                            <li><p>Premium Plugins</p></li>
                            <li><p>Yoast SEO Plugins</p></li>
                            <li><p>Wood Fence Security plugins</p></li>
                            <li><p>Content Management System (Custom built to suit! Add / Update your website anytime including verbiage, photos, team members, add videos, add blogs, articles, FAQ's, Reviews, add Services, etc. Tailored Pricing, Please inquire).</p></li>
                            <li><p>Add / Update your website anytime including verbiage, photos, team members, add videos, add blogs, articles, FAQ's, Reviews, add Services, etc.</p></li>
                        </ul>
                        <h3 className={style.innerHeading}>What Things Will I Need to Design Your Website ??</h3>
                        <ul>
                            <li><p>Business Logo (if you do not have one, I can design one)</p></li>
                            <li><p>Introduction, About Business.</p></li>
                            <li><p>Colors scheme</p></li>
                            <li><p>Pages Names and Content. and any sample website you really like</p></li>
                        </ul>
                    </div>
                    <div className={style.line}></div>
                    <div>
                        <div className={style.floatDiv}>
                            <div className={style.sideBySide}>
                                <h3 className={style.innerHeading}>Website Type</h3>
                                <ul>
                                    <li><p>E-Commerce,</p></li>
                                    <li><p>Business Promotion,</p></li>
                                    <li><p>Product & Service,</p></li>
                                    <li><p>Marketing</p></li>
                                </ul>
                            </div>
                            <div className={style.sideBySide}>
                                <h3 className={style.innerHeading}>Platform & tool</h3>
                                <ul>
                                    <li><p>Wordpress</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={style.line}></div>
                </div>
            </section>
            <section className={style.aboutParent}>
                <div className={style.aboutMain}>
                    <div className={style.aboutMainSecondPart}>
                        <h2 className={style.heading}>About Me</h2>
                        <div>
                            {/* Profile Details Section  */}
                            <div className={style.profile}>
                                <div className={style.profileImage}>

                                </div>
                                <div id={style.profiledetails}>
                                    <div style={{ display: 'flex' }}><p className={style.name}>{userDetail.first_name} {userDetail.last_name}&nbsp; </p> <span id={style.username}>@{userDetail.username}</span>
                                        <span><button className={style.contactMeButton}>Contact Me</button></span>
                                    </div>
                                    <div className={gigCardStyle.rating}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                                            <path d="M8.02051 7.26458L7.74266 7.29755L0.941657 8.10455L0.94137 8.10458C0.846497 8.11578 0.756817 8.15393 0.682945 8.21451C0.609074 8.27509 0.554104 8.35556 0.524542 8.44641C0.494979 8.53725 0.492061 8.63466 0.516133 8.72712C0.540204 8.81957 0.590258 8.90319 0.660371 8.96808L5.69015 13.6179L5.8957 13.8079L5.84116 14.0825L4.50622 20.8021C4.50621 20.8022 4.5062 20.8023 4.50618 20.8023C4.4877 20.8959 4.49638 20.9929 4.5312 21.0817C4.56604 21.1706 4.62561 21.2476 4.70287 21.3038C4.78012 21.3599 4.87182 21.3927 4.96714 21.3983C5.06236 21.404 5.15722 21.3823 5.2405 21.3357L8.02051 7.26458ZM8.02051 7.26458L8.13774 7.01051L11.0077 0.790516C11.0478 0.703783 11.1118 0.630329 11.1922 0.578845C11.2727 0.527361 11.3662 0.5 11.4617 0.5C11.5573 0.5 11.6508 0.527361 11.7312 0.578845C11.8117 0.630322 11.8757 0.703763 11.9157 0.79048C11.9157 0.790492 11.9157 0.790504 11.9157 0.790516L14.7847 7.00948L14.9019 7.26354L15.1798 7.29654L21.9818 8.10454L21.9821 8.10458C22.077 8.11578 22.1667 8.15393 22.2405 8.21451C22.3144 8.27509 22.3694 8.35556 22.3989 8.44641C22.4285 8.53725 22.4314 8.63467 22.4073 8.72712C22.3833 8.81951 22.3333 8.90308 22.2633 8.96795C22.2632 8.96799 22.2632 8.96804 22.2631 8.96808L17.2343 13.6189L17.0288 13.809L17.0833 14.0835L18.4183 20.8015L18.4184 20.802C18.4372 20.8958 18.4286 20.9929 18.3938 21.082C18.359 21.1711 18.2994 21.2483 18.222 21.3045C18.1447 21.3607 18.0528 21.3935 17.9573 21.3991C17.8619 21.4047 17.7668 21.3828 17.6834 21.336L17.683 21.3357L11.706 17.9897L11.4617 17.853L11.2175 17.9897L5.24072 21.3356L8.02051 7.26458Z" fill="#F04C43" stroke="white" />
                                        </svg>
                                        &nbsp; <span className={gigCardStyle.ratingNumber}>{seller && seller.rating_details.overall_rating}</span> &nbsp; (1k+)
                                        &nbsp;&nbsp;&nbsp;&nbsp; <span id={style.queueOrders}>4 Orders in a Queue</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={style.aboutParent}>
                <div className={style.aboutMain}>
                    <div className={style.aboutMeBoxOne}>
                        <div className={style.floatDiv}>
                            <div className={style.sideBySide}>
                                <h3 className={style.innerHeading}>From</h3>
                                <ul>
                                    <li>{seller && seller.country}</li>
                                </ul>
                            </div>
                            <div className={style.sideBySide}>
                                <h3 className={style.innerHeading}>Member since</h3>
                                <ul>
                                    <li>fds</li>
                                </ul>
                            </div>

                        </div>
                        <div className={style.floatDiv}>
                            <div className={style.sideBySide}>
                                <h3 className={style.innerHeading}>Avg. response time</h3>
                                <ul>
                                    <li>fds</li>
                                </ul>
                            </div>
                            <div className={style.sideBySide}>
                                <h3 className={style.innerHeading}>Last delivery</h3>
                                <ul>
                                    <li>fds</li>
                                </ul>
                            </div>
                        </div>
                        <div className={style.sideBySide}>
                            <h3 className={style.innerHeading}>Languages</h3>
                            <ul>
                                {seller && seller.language_proficiency.map((item , index)=>(<li key={index}>{item.language}</li>))}
                            </ul>
                        </div>
                        <div className={style.aboutMeBoxTwo}>
                            <p>As recent graduate from Colorado Technical University in Software Development - Web Fundamentals, MERN, Projects and Algorithms and as a 4x Award-Winning Designer with 15+ years of experience in Web Development and Graphic Design for various reputable brands including: Subway, Genghis Grill, Schlotzsky’s, CiCi's Pizza; I appreciate you for taking the time to review my credentials for this opportunity</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={style.portfolioParent}>
                <div className={style.portfolioMain}>
                    <div className={style.myPortfolio}>
                        <h2 className={style.heading}>My Portfolio</h2>
                        <div id={style.seeAll}><button id={style.seeAllButton}><h4 className={style.heading}>see all</h4></button></div>
                        <div className={style.portfolioImg}>
                            <img src={carouselImage1} />
                            <img src={carouselImage1} />
                            <img src={carouselImage1} />
                            <img src={carouselImage1} />
                        </div>
                    </div>
                </div>
            </section>
            <section className={style.portfolioParent}>
                <div className={style.portfolioMain}>
                    <div className={style.myPortfolio}>
                        <h2 className={style.heading}>Recommended For you</h2>
                        <div id={style.seeAll}><button id={style.seeAllButton}><h4 className={style.heading}>see all</h4></button></div>
                        <div className={style.floatDiv}>
                            <div className={style.sideBySide}>
                                <div className={style.recommendation}>
                                    <img src={carouselImage1} />
                                    <span className={style.innerHeading}>Languages</span>
                                    <span id={style.level}>level 1</span>
                                    <p className={style.aboutRecommendation}>I will do cute illustration or cartoon</p>
                                    <div className={gigCardStyle.rating}>
                                        <svg className={style.starRating} xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 22" fill="none">
                                            <path d="M8.02051 7.26458L7.74266 7.29755L0.941657 8.10455L0.94137 8.10458C0.846497 8.11578 0.756817 8.15393 0.682945 8.21451C0.609074 8.27509 0.554104 8.35556 0.524542 8.44641C0.494979 8.53725 0.492061 8.63466 0.516133 8.72712C0.540204 8.81957 0.590258 8.90319 0.660371 8.96808L5.69015 13.6179L5.8957 13.8079L5.84116 14.0825L4.50622 20.8021C4.50621 20.8022 4.5062 20.8023 4.50618 20.8023C4.4877 20.8959 4.49638 20.9929 4.5312 21.0817C4.56604 21.1706 4.62561 21.2476 4.70287 21.3038C4.78012 21.3599 4.87182 21.3927 4.96714 21.3983C5.06236 21.404 5.15722 21.3823 5.2405 21.3357L8.02051 7.26458ZM8.02051 7.26458L8.13774 7.01051L11.0077 0.790516C11.0478 0.703783 11.1118 0.630329 11.1922 0.578845C11.2727 0.527361 11.3662 0.5 11.4617 0.5C11.5573 0.5 11.6508 0.527361 11.7312 0.578845C11.8117 0.630322 11.8757 0.703763 11.9157 0.79048C11.9157 0.790492 11.9157 0.790504 11.9157 0.790516L14.7847 7.00948L14.9019 7.26354L15.1798 7.29654L21.9818 8.10454L21.9821 8.10458C22.077 8.11578 22.1667 8.15393 22.2405 8.21451C22.3144 8.27509 22.3694 8.35556 22.3989 8.44641C22.4285 8.53725 22.4314 8.63467 22.4073 8.72712C22.3833 8.81951 22.3333 8.90308 22.2633 8.96795C22.2632 8.96799 22.2632 8.96804 22.2631 8.96808L17.2343 13.6189L17.0288 13.809L17.0833 14.0835L18.4183 20.8015L18.4184 20.802C18.4372 20.8958 18.4286 20.9929 18.3938 21.082C18.359 21.1711 18.2994 21.2483 18.222 21.3045C18.1447 21.3607 18.0528 21.3935 17.9573 21.3991C17.8619 21.4047 17.7668 21.3828 17.6834 21.336L17.683 21.3357L11.706 17.9897L11.4617 17.853L11.2175 17.9897L5.24072 21.3356L8.02051 7.26458Z" fill="#F04C43" stroke="white" />
                                        </svg>
                                        &nbsp; <span className={gigCardStyle.ratingNumber}>4</span> &nbsp; <span className={style.starRating}>(1k+)</span>
                                        &nbsp;&nbsp;&nbsp;&nbsp; <span id={style.money}>from $100</span>
                                    </div>
                                </div>
                            </div>
                            <div className={style.sideBySide}>
                                <div className={style.recommendation}>
                                    <img src={carouselImage1} />
                                    <span className={style.innerHeading}>Languages</span>
                                    <span id={style.level}>level 1</span>
                                    <p className={style.aboutRecommendation}>I will do cute illustration or cartoon</p>
                                    <div className={gigCardStyle.rating}>
                                        <svg className={style.starRating} xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 22" fill="none">
                                            <path d="M8.02051 7.26458L7.74266 7.29755L0.941657 8.10455L0.94137 8.10458C0.846497 8.11578 0.756817 8.15393 0.682945 8.21451C0.609074 8.27509 0.554104 8.35556 0.524542 8.44641C0.494979 8.53725 0.492061 8.63466 0.516133 8.72712C0.540204 8.81957 0.590258 8.90319 0.660371 8.96808L5.69015 13.6179L5.8957 13.8079L5.84116 14.0825L4.50622 20.8021C4.50621 20.8022 4.5062 20.8023 4.50618 20.8023C4.4877 20.8959 4.49638 20.9929 4.5312 21.0817C4.56604 21.1706 4.62561 21.2476 4.70287 21.3038C4.78012 21.3599 4.87182 21.3927 4.96714 21.3983C5.06236 21.404 5.15722 21.3823 5.2405 21.3357L8.02051 7.26458ZM8.02051 7.26458L8.13774 7.01051L11.0077 0.790516C11.0478 0.703783 11.1118 0.630329 11.1922 0.578845C11.2727 0.527361 11.3662 0.5 11.4617 0.5C11.5573 0.5 11.6508 0.527361 11.7312 0.578845C11.8117 0.630322 11.8757 0.703763 11.9157 0.79048C11.9157 0.790492 11.9157 0.790504 11.9157 0.790516L14.7847 7.00948L14.9019 7.26354L15.1798 7.29654L21.9818 8.10454L21.9821 8.10458C22.077 8.11578 22.1667 8.15393 22.2405 8.21451C22.3144 8.27509 22.3694 8.35556 22.3989 8.44641C22.4285 8.53725 22.4314 8.63467 22.4073 8.72712C22.3833 8.81951 22.3333 8.90308 22.2633 8.96795C22.2632 8.96799 22.2632 8.96804 22.2631 8.96808L17.2343 13.6189L17.0288 13.809L17.0833 14.0835L18.4183 20.8015L18.4184 20.802C18.4372 20.8958 18.4286 20.9929 18.3938 21.082C18.359 21.1711 18.2994 21.2483 18.222 21.3045C18.1447 21.3607 18.0528 21.3935 17.9573 21.3991C17.8619 21.4047 17.7668 21.3828 17.6834 21.336L17.683 21.3357L11.706 17.9897L11.4617 17.853L11.2175 17.9897L5.24072 21.3356L8.02051 7.26458Z" fill="#F04C43" stroke="white" />
                                        </svg>
                                        &nbsp; <span className={gigCardStyle.ratingNumber}>4.3</span> &nbsp; <span className={style.starRating}>(1k+)</span>
                                        &nbsp;&nbsp;&nbsp;&nbsp; <span id={style.money}>from $100</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={style.faqParent}>
                <div className={style.faqMain}>
                    <div>
                        <h2 className={style.heading}>FAQ</h2>
                        <div className={style.recommendation}>
                            <div id={style.faq}>
                                <span>What is Graphic Design</span>
                                <svg id={style.arrow} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                    <path d="M8.68027 13.9594L14.6592 8.00105C14.7681 7.88771 14.8534 7.75407 14.9103 7.60779C15.0299 7.31766 15.0299 6.99224 14.9103 6.70212C14.8534 6.55583 14.7681 6.42219 14.6592 6.30886L8.68027 0.350463C8.56878 0.239352 8.43642 0.151215 8.29074 0.0910824C8.14507 0.0309499 7.98894 -3.0579e-07 7.83126 -3.12667e-07C7.51282 -3.26556e-07 7.20743 0.126065 6.98226 0.350463C6.75709 0.57486 6.63059 0.879209 6.63059 1.19656C6.63059 1.5139 6.75709 1.81825 6.98226 2.04265L10.9283 5.96327L1.85235 5.96327C1.53521 5.96327 1.23105 6.08883 1.0068 6.31231C0.782549 6.53579 0.656565 6.8389 0.656565 7.15495C0.656565 7.47101 0.782549 7.77411 1.0068 7.9976C1.23105 8.22108 1.53521 8.34663 1.85235 8.34663L10.9283 8.34663L6.98226 12.2673C6.87018 12.378 6.78122 12.5098 6.72051 12.6551C6.6598 12.8003 6.62855 12.956 6.62855 13.1134C6.62855 13.2707 6.6598 13.4264 6.72051 13.5716C6.78122 13.7169 6.87018 13.8487 6.98226 13.9594C7.09342 14.0711 7.22568 14.1598 7.37139 14.2203C7.51711 14.2808 7.67341 14.3119 7.83126 14.3119C7.98912 14.3119 8.14542 14.2808 8.29113 14.2203C8.43685 14.1598 8.56911 14.0711 8.68027 13.9594Z" fill="#F04C43" />
                                </svg>
                            </div>
                            <div id={style.faq}>
                                <span>What is Graphic Design</span>
                                <svg id={style.arrow} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                    <path d="M8.68027 13.9594L14.6592 8.00105C14.7681 7.88771 14.8534 7.75407 14.9103 7.60779C15.0299 7.31766 15.0299 6.99224 14.9103 6.70212C14.8534 6.55583 14.7681 6.42219 14.6592 6.30886L8.68027 0.350463C8.56878 0.239352 8.43642 0.151215 8.29074 0.0910824C8.14507 0.0309499 7.98894 -3.0579e-07 7.83126 -3.12667e-07C7.51282 -3.26556e-07 7.20743 0.126065 6.98226 0.350463C6.75709 0.57486 6.63059 0.879209 6.63059 1.19656C6.63059 1.5139 6.75709 1.81825 6.98226 2.04265L10.9283 5.96327L1.85235 5.96327C1.53521 5.96327 1.23105 6.08883 1.0068 6.31231C0.782549 6.53579 0.656565 6.8389 0.656565 7.15495C0.656565 7.47101 0.782549 7.77411 1.0068 7.9976C1.23105 8.22108 1.53521 8.34663 1.85235 8.34663L10.9283 8.34663L6.98226 12.2673C6.87018 12.378 6.78122 12.5098 6.72051 12.6551C6.6598 12.8003 6.62855 12.956 6.62855 13.1134C6.62855 13.2707 6.6598 13.4264 6.72051 13.5716C6.78122 13.7169 6.87018 13.8487 6.98226 13.9594C7.09342 14.0711 7.22568 14.1598 7.37139 14.2203C7.51711 14.2808 7.67341 14.3119 7.83126 14.3119C7.98912 14.3119 8.14542 14.2808 8.29113 14.2203C8.43685 14.1598 8.56911 14.0711 8.68027 13.9594Z" fill="#F04C43" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={style.ratingParent}>
                <div className={style.ratingMain}>
                    <h2 className={style.heading}>Reviews</h2>
                    <h3 className={style.innerHeading}>{seller && seller.rating_details.reviews.length} reviews for this gig</h3>
                    <h3 className={style.innerHeading} style={{ display: 'inline-block' }}>5<svg xmlns="http://www.w3.org/2000/svg" width="23" height="15" viewBox="0 0 23 22" fill="none">
                        <path d="M8.02051 7.26458L7.74266 7.29755L0.941657 8.10455L0.94137 8.10458C0.846497 8.11578 0.756817 8.15393 0.682945 8.21451C0.609074 8.27509 0.554104 8.35556 0.524542 8.44641C0.494979 8.53725 0.492061 8.63466 0.516133 8.72712C0.540204 8.81957 0.590258 8.90319 0.660371 8.96808L5.69015 13.6179L5.8957 13.8079L5.84116 14.0825L4.50622 20.8021C4.50621 20.8022 4.5062 20.8023 4.50618 20.8023C4.4877 20.8959 4.49638 20.9929 4.5312 21.0817C4.56604 21.1706 4.62561 21.2476 4.70287 21.3038C4.78012 21.3599 4.87182 21.3927 4.96714 21.3983C5.06236 21.404 5.15722 21.3823 5.2405 21.3357L8.02051 7.26458ZM8.02051 7.26458L8.13774 7.01051L11.0077 0.790516C11.0478 0.703783 11.1118 0.630329 11.1922 0.578845C11.2727 0.527361 11.3662 0.5 11.4617 0.5C11.5573 0.5 11.6508 0.527361 11.7312 0.578845C11.8117 0.630322 11.8757 0.703763 11.9157 0.79048C11.9157 0.790492 11.9157 0.790504 11.9157 0.790516L14.7847 7.00948L14.9019 7.26354L15.1798 7.29654L21.9818 8.10454L21.9821 8.10458C22.077 8.11578 22.1667 8.15393 22.2405 8.21451C22.3144 8.27509 22.3694 8.35556 22.3989 8.44641C22.4285 8.53725 22.4314 8.63467 22.4073 8.72712C22.3833 8.81951 22.3333 8.90308 22.2633 8.96795C22.2632 8.96799 22.2632 8.96804 22.2631 8.96808L17.2343 13.6189L17.0288 13.809L17.0833 14.0835L18.4183 20.8015L18.4184 20.802C18.4372 20.8958 18.4286 20.9929 18.3938 21.082C18.359 21.1711 18.2994 21.2483 18.222 21.3045C18.1447 21.3607 18.0528 21.3935 17.9573 21.3991C17.8619 21.4047 17.7668 21.3828 17.6834 21.336L17.683 21.3357L11.706 17.9897L11.4617 17.853L11.2175 17.9897L5.24072 21.3356L8.02051 7.26458Z" fill="#F04C43" stroke="white" />
                    </svg>
                        <div id={style.ratingDiv} style={{ display: 'inline-block' }}><div id={style.ratingBar}></div></div>
                        <span>(04)</span>
                    </h3>
                    <h3 className={style.innerHeading}>4<svg xmlns="http://www.w3.org/2000/svg" width="23" height="15" viewBox="0 0 23 22" fill="none">
                        <path d="M8.02051 7.26458L7.74266 7.29755L0.941657 8.10455L0.94137 8.10458C0.846497 8.11578 0.756817 8.15393 0.682945 8.21451C0.609074 8.27509 0.554104 8.35556 0.524542 8.44641C0.494979 8.53725 0.492061 8.63466 0.516133 8.72712C0.540204 8.81957 0.590258 8.90319 0.660371 8.96808L5.69015 13.6179L5.8957 13.8079L5.84116 14.0825L4.50622 20.8021C4.50621 20.8022 4.5062 20.8023 4.50618 20.8023C4.4877 20.8959 4.49638 20.9929 4.5312 21.0817C4.56604 21.1706 4.62561 21.2476 4.70287 21.3038C4.78012 21.3599 4.87182 21.3927 4.96714 21.3983C5.06236 21.404 5.15722 21.3823 5.2405 21.3357L8.02051 7.26458ZM8.02051 7.26458L8.13774 7.01051L11.0077 0.790516C11.0478 0.703783 11.1118 0.630329 11.1922 0.578845C11.2727 0.527361 11.3662 0.5 11.4617 0.5C11.5573 0.5 11.6508 0.527361 11.7312 0.578845C11.8117 0.630322 11.8757 0.703763 11.9157 0.79048C11.9157 0.790492 11.9157 0.790504 11.9157 0.790516L14.7847 7.00948L14.9019 7.26354L15.1798 7.29654L21.9818 8.10454L21.9821 8.10458C22.077 8.11578 22.1667 8.15393 22.2405 8.21451C22.3144 8.27509 22.3694 8.35556 22.3989 8.44641C22.4285 8.53725 22.4314 8.63467 22.4073 8.72712C22.3833 8.81951 22.3333 8.90308 22.2633 8.96795C22.2632 8.96799 22.2632 8.96804 22.2631 8.96808L17.2343 13.6189L17.0288 13.809L17.0833 14.0835L18.4183 20.8015L18.4184 20.802C18.4372 20.8958 18.4286 20.9929 18.3938 21.082C18.359 21.1711 18.2994 21.2483 18.222 21.3045C18.1447 21.3607 18.0528 21.3935 17.9573 21.3991C17.8619 21.4047 17.7668 21.3828 17.6834 21.336L17.683 21.3357L11.706 17.9897L11.4617 17.853L11.2175 17.9897L5.24072 21.3356L8.02051 7.26458Z" fill="#F04C43" stroke="white" />
                    </svg>
                        <div id={style.ratingDiv} style={{ display: 'inline-block' }}><div id={style.ratingBar}></div></div>
                        <span>(04)</span>
                    </h3>
                    <h3 className={style.innerHeading}>3<svg xmlns="http://www.w3.org/2000/svg" width="23" height="15" viewBox="0 0 23 22" fill="none">
                        <path d="M8.02051 7.26458L7.74266 7.29755L0.941657 8.10455L0.94137 8.10458C0.846497 8.11578 0.756817 8.15393 0.682945 8.21451C0.609074 8.27509 0.554104 8.35556 0.524542 8.44641C0.494979 8.53725 0.492061 8.63466 0.516133 8.72712C0.540204 8.81957 0.590258 8.90319 0.660371 8.96808L5.69015 13.6179L5.8957 13.8079L5.84116 14.0825L4.50622 20.8021C4.50621 20.8022 4.5062 20.8023 4.50618 20.8023C4.4877 20.8959 4.49638 20.9929 4.5312 21.0817C4.56604 21.1706 4.62561 21.2476 4.70287 21.3038C4.78012 21.3599 4.87182 21.3927 4.96714 21.3983C5.06236 21.404 5.15722 21.3823 5.2405 21.3357L8.02051 7.26458ZM8.02051 7.26458L8.13774 7.01051L11.0077 0.790516C11.0478 0.703783 11.1118 0.630329 11.1922 0.578845C11.2727 0.527361 11.3662 0.5 11.4617 0.5C11.5573 0.5 11.6508 0.527361 11.7312 0.578845C11.8117 0.630322 11.8757 0.703763 11.9157 0.79048C11.9157 0.790492 11.9157 0.790504 11.9157 0.790516L14.7847 7.00948L14.9019 7.26354L15.1798 7.29654L21.9818 8.10454L21.9821 8.10458C22.077 8.11578 22.1667 8.15393 22.2405 8.21451C22.3144 8.27509 22.3694 8.35556 22.3989 8.44641C22.4285 8.53725 22.4314 8.63467 22.4073 8.72712C22.3833 8.81951 22.3333 8.90308 22.2633 8.96795C22.2632 8.96799 22.2632 8.96804 22.2631 8.96808L17.2343 13.6189L17.0288 13.809L17.0833 14.0835L18.4183 20.8015L18.4184 20.802C18.4372 20.8958 18.4286 20.9929 18.3938 21.082C18.359 21.1711 18.2994 21.2483 18.222 21.3045C18.1447 21.3607 18.0528 21.3935 17.9573 21.3991C17.8619 21.4047 17.7668 21.3828 17.6834 21.336L17.683 21.3357L11.706 17.9897L11.4617 17.853L11.2175 17.9897L5.24072 21.3356L8.02051 7.26458Z" fill="#F04C43" stroke="white" />
                    </svg>
                        <div id={style.ratingDiv} style={{ display: 'inline-block' }}><div id={style.ratingBar}></div></div>
                        <span>(04)</span>
                    </h3>
                    <h3 className={style.innerHeading}>2<svg xmlns="http://www.w3.org/2000/svg" width="23" height="15" viewBox="0 0 23 22" fill="none">
                        <path d="M8.02051 7.26458L7.74266 7.29755L0.941657 8.10455L0.94137 8.10458C0.846497 8.11578 0.756817 8.15393 0.682945 8.21451C0.609074 8.27509 0.554104 8.35556 0.524542 8.44641C0.494979 8.53725 0.492061 8.63466 0.516133 8.72712C0.540204 8.81957 0.590258 8.90319 0.660371 8.96808L5.69015 13.6179L5.8957 13.8079L5.84116 14.0825L4.50622 20.8021C4.50621 20.8022 4.5062 20.8023 4.50618 20.8023C4.4877 20.8959 4.49638 20.9929 4.5312 21.0817C4.56604 21.1706 4.62561 21.2476 4.70287 21.3038C4.78012 21.3599 4.87182 21.3927 4.96714 21.3983C5.06236 21.404 5.15722 21.3823 5.2405 21.3357L8.02051 7.26458ZM8.02051 7.26458L8.13774 7.01051L11.0077 0.790516C11.0478 0.703783 11.1118 0.630329 11.1922 0.578845C11.2727 0.527361 11.3662 0.5 11.4617 0.5C11.5573 0.5 11.6508 0.527361 11.7312 0.578845C11.8117 0.630322 11.8757 0.703763 11.9157 0.79048C11.9157 0.790492 11.9157 0.790504 11.9157 0.790516L14.7847 7.00948L14.9019 7.26354L15.1798 7.29654L21.9818 8.10454L21.9821 8.10458C22.077 8.11578 22.1667 8.15393 22.2405 8.21451C22.3144 8.27509 22.3694 8.35556 22.3989 8.44641C22.4285 8.53725 22.4314 8.63467 22.4073 8.72712C22.3833 8.81951 22.3333 8.90308 22.2633 8.96795C22.2632 8.96799 22.2632 8.96804 22.2631 8.96808L17.2343 13.6189L17.0288 13.809L17.0833 14.0835L18.4183 20.8015L18.4184 20.802C18.4372 20.8958 18.4286 20.9929 18.3938 21.082C18.359 21.1711 18.2994 21.2483 18.222 21.3045C18.1447 21.3607 18.0528 21.3935 17.9573 21.3991C17.8619 21.4047 17.7668 21.3828 17.6834 21.336L17.683 21.3357L11.706 17.9897L11.4617 17.853L11.2175 17.9897L5.24072 21.3356L8.02051 7.26458Z" fill="#F04C43" stroke="white" />
                    </svg>
                        <div id={style.ratingDiv} style={{ display: 'inline-block' }}><div id={style.ratingBar}></div></div>
                        <span>(04)</span>
                    </h3>
                    <h3 className={style.innerHeading}>1<svg xmlns="http://www.w3.org/2000/svg" width="23" height="15" viewBox="0 0 23 22" fill="none">
                        <path d="M8.02051 7.26458L7.74266 7.29755L0.941657 8.10455L0.94137 8.10458C0.846497 8.11578 0.756817 8.15393 0.682945 8.21451C0.609074 8.27509 0.554104 8.35556 0.524542 8.44641C0.494979 8.53725 0.492061 8.63466 0.516133 8.72712C0.540204 8.81957 0.590258 8.90319 0.660371 8.96808L5.69015 13.6179L5.8957 13.8079L5.84116 14.0825L4.50622 20.8021C4.50621 20.8022 4.5062 20.8023 4.50618 20.8023C4.4877 20.8959 4.49638 20.9929 4.5312 21.0817C4.56604 21.1706 4.62561 21.2476 4.70287 21.3038C4.78012 21.3599 4.87182 21.3927 4.96714 21.3983C5.06236 21.404 5.15722 21.3823 5.2405 21.3357L8.02051 7.26458ZM8.02051 7.26458L8.13774 7.01051L11.0077 0.790516C11.0478 0.703783 11.1118 0.630329 11.1922 0.578845C11.2727 0.527361 11.3662 0.5 11.4617 0.5C11.5573 0.5 11.6508 0.527361 11.7312 0.578845C11.8117 0.630322 11.8757 0.703763 11.9157 0.79048C11.9157 0.790492 11.9157 0.790504 11.9157 0.790516L14.7847 7.00948L14.9019 7.26354L15.1798 7.29654L21.9818 8.10454L21.9821 8.10458C22.077 8.11578 22.1667 8.15393 22.2405 8.21451C22.3144 8.27509 22.3694 8.35556 22.3989 8.44641C22.4285 8.53725 22.4314 8.63467 22.4073 8.72712C22.3833 8.81951 22.3333 8.90308 22.2633 8.96795C22.2632 8.96799 22.2632 8.96804 22.2631 8.96808L17.2343 13.6189L17.0288 13.809L17.0833 14.0835L18.4183 20.8015L18.4184 20.802C18.4372 20.8958 18.4286 20.9929 18.3938 21.082C18.359 21.1711 18.2994 21.2483 18.222 21.3045C18.1447 21.3607 18.0528 21.3935 17.9573 21.3991C17.8619 21.4047 17.7668 21.3828 17.6834 21.336L17.683 21.3357L11.706 17.9897L11.4617 17.853L11.2175 17.9897L5.24072 21.3356L8.02051 7.26458Z" fill="#F04C43" stroke="white" />
                    </svg>
                        <div id={style.ratingDiv} style={{ display: 'inline-block' }}><div id={style.ratingBar}></div></div>
                        <span>(04)</span>
                    </h3>
                </div>
                <br></br>
                <div className={style.line}></div>
            </section>
            <section className={style.reviewParent}>
                <div className={style.reviewMain}>
                    <div className={style.profile}>
                        <div className={style.profileImage}></div>
                        <div id={style.profiledetails}>
                            <div style={{ display: 'flex' }}><p className={style.name}>section230 &nbsp; </p></div>
                            <p>Indonesia</p>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="15" viewBox="0 0 23 22" fill="none">
                        <path d="M8.02051 7.26458L7.74266 7.29755L0.941657 8.10455L0.94137 8.10458C0.846497 8.11578 0.756817 8.15393 0.682945 8.21451C0.609074 8.27509 0.554104 8.35556 0.524542 8.44641C0.494979 8.53725 0.492061 8.63466 0.516133 8.72712C0.540204 8.81957 0.590258 8.90319 0.660371 8.96808L5.69015 13.6179L5.8957 13.8079L5.84116 14.0825L4.50622 20.8021C4.50621 20.8022 4.5062 20.8023 4.50618 20.8023C4.4877 20.8959 4.49638 20.9929 4.5312 21.0817C4.56604 21.1706 4.62561 21.2476 4.70287 21.3038C4.78012 21.3599 4.87182 21.3927 4.96714 21.3983C5.06236 21.404 5.15722 21.3823 5.2405 21.3357L8.02051 7.26458ZM8.02051 7.26458L8.13774 7.01051L11.0077 0.790516C11.0478 0.703783 11.1118 0.630329 11.1922 0.578845C11.2727 0.527361 11.3662 0.5 11.4617 0.5C11.5573 0.5 11.6508 0.527361 11.7312 0.578845C11.8117 0.630322 11.8757 0.703763 11.9157 0.79048C11.9157 0.790492 11.9157 0.790504 11.9157 0.790516L14.7847 7.00948L14.9019 7.26354L15.1798 7.29654L21.9818 8.10454L21.9821 8.10458C22.077 8.11578 22.1667 8.15393 22.2405 8.21451C22.3144 8.27509 22.3694 8.35556 22.3989 8.44641C22.4285 8.53725 22.4314 8.63467 22.4073 8.72712C22.3833 8.81951 22.3333 8.90308 22.2633 8.96795C22.2632 8.96799 22.2632 8.96804 22.2631 8.96808L17.2343 13.6189L17.0288 13.809L17.0833 14.0835L18.4183 20.8015L18.4184 20.802C18.4372 20.8958 18.4286 20.9929 18.3938 21.082C18.359 21.1711 18.2994 21.2483 18.222 21.3045C18.1447 21.3607 18.0528 21.3935 17.9573 21.3991C17.8619 21.4047 17.7668 21.3828 17.6834 21.336L17.683 21.3357L11.706 17.9897L11.4617 17.853L11.2175 17.9897L5.24072 21.3356L8.02051 7.26458Z" fill="#F04C43" stroke="white" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="15" viewBox="0 0 23 22" fill="none">
                        <path d="M8.02051 7.26458L7.74266 7.29755L0.941657 8.10455L0.94137 8.10458C0.846497 8.11578 0.756817 8.15393 0.682945 8.21451C0.609074 8.27509 0.554104 8.35556 0.524542 8.44641C0.494979 8.53725 0.492061 8.63466 0.516133 8.72712C0.540204 8.81957 0.590258 8.90319 0.660371 8.96808L5.69015 13.6179L5.8957 13.8079L5.84116 14.0825L4.50622 20.8021C4.50621 20.8022 4.5062 20.8023 4.50618 20.8023C4.4877 20.8959 4.49638 20.9929 4.5312 21.0817C4.56604 21.1706 4.62561 21.2476 4.70287 21.3038C4.78012 21.3599 4.87182 21.3927 4.96714 21.3983C5.06236 21.404 5.15722 21.3823 5.2405 21.3357L8.02051 7.26458ZM8.02051 7.26458L8.13774 7.01051L11.0077 0.790516C11.0478 0.703783 11.1118 0.630329 11.1922 0.578845C11.2727 0.527361 11.3662 0.5 11.4617 0.5C11.5573 0.5 11.6508 0.527361 11.7312 0.578845C11.8117 0.630322 11.8757 0.703763 11.9157 0.79048C11.9157 0.790492 11.9157 0.790504 11.9157 0.790516L14.7847 7.00948L14.9019 7.26354L15.1798 7.29654L21.9818 8.10454L21.9821 8.10458C22.077 8.11578 22.1667 8.15393 22.2405 8.21451C22.3144 8.27509 22.3694 8.35556 22.3989 8.44641C22.4285 8.53725 22.4314 8.63467 22.4073 8.72712C22.3833 8.81951 22.3333 8.90308 22.2633 8.96795C22.2632 8.96799 22.2632 8.96804 22.2631 8.96808L17.2343 13.6189L17.0288 13.809L17.0833 14.0835L18.4183 20.8015L18.4184 20.802C18.4372 20.8958 18.4286 20.9929 18.3938 21.082C18.359 21.1711 18.2994 21.2483 18.222 21.3045C18.1447 21.3607 18.0528 21.3935 17.9573 21.3991C17.8619 21.4047 17.7668 21.3828 17.6834 21.336L17.683 21.3357L11.706 17.9897L11.4617 17.853L11.2175 17.9897L5.24072 21.3356L8.02051 7.26458Z" fill="#F04C43" stroke="white" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="15" viewBox="0 0 23 22" fill="none">
                        <path d="M8.02051 7.26458L7.74266 7.29755L0.941657 8.10455L0.94137 8.10458C0.846497 8.11578 0.756817 8.15393 0.682945 8.21451C0.609074 8.27509 0.554104 8.35556 0.524542 8.44641C0.494979 8.53725 0.492061 8.63466 0.516133 8.72712C0.540204 8.81957 0.590258 8.90319 0.660371 8.96808L5.69015 13.6179L5.8957 13.8079L5.84116 14.0825L4.50622 20.8021C4.50621 20.8022 4.5062 20.8023 4.50618 20.8023C4.4877 20.8959 4.49638 20.9929 4.5312 21.0817C4.56604 21.1706 4.62561 21.2476 4.70287 21.3038C4.78012 21.3599 4.87182 21.3927 4.96714 21.3983C5.06236 21.404 5.15722 21.3823 5.2405 21.3357L8.02051 7.26458ZM8.02051 7.26458L8.13774 7.01051L11.0077 0.790516C11.0478 0.703783 11.1118 0.630329 11.1922 0.578845C11.2727 0.527361 11.3662 0.5 11.4617 0.5C11.5573 0.5 11.6508 0.527361 11.7312 0.578845C11.8117 0.630322 11.8757 0.703763 11.9157 0.79048C11.9157 0.790492 11.9157 0.790504 11.9157 0.790516L14.7847 7.00948L14.9019 7.26354L15.1798 7.29654L21.9818 8.10454L21.9821 8.10458C22.077 8.11578 22.1667 8.15393 22.2405 8.21451C22.3144 8.27509 22.3694 8.35556 22.3989 8.44641C22.4285 8.53725 22.4314 8.63467 22.4073 8.72712C22.3833 8.81951 22.3333 8.90308 22.2633 8.96795C22.2632 8.96799 22.2632 8.96804 22.2631 8.96808L17.2343 13.6189L17.0288 13.809L17.0833 14.0835L18.4183 20.8015L18.4184 20.802C18.4372 20.8958 18.4286 20.9929 18.3938 21.082C18.359 21.1711 18.2994 21.2483 18.222 21.3045C18.1447 21.3607 18.0528 21.3935 17.9573 21.3991C17.8619 21.4047 17.7668 21.3828 17.6834 21.336L17.683 21.3357L11.706 17.9897L11.4617 17.853L11.2175 17.9897L5.24072 21.3356L8.02051 7.26458Z" fill="#F04C43" stroke="white" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="15" viewBox="0 0 23 22" fill="none">
                        <path d="M8.02051 7.26458L7.74266 7.29755L0.941657 8.10455L0.94137 8.10458C0.846497 8.11578 0.756817 8.15393 0.682945 8.21451C0.609074 8.27509 0.554104 8.35556 0.524542 8.44641C0.494979 8.53725 0.492061 8.63466 0.516133 8.72712C0.540204 8.81957 0.590258 8.90319 0.660371 8.96808L5.69015 13.6179L5.8957 13.8079L5.84116 14.0825L4.50622 20.8021C4.50621 20.8022 4.5062 20.8023 4.50618 20.8023C4.4877 20.8959 4.49638 20.9929 4.5312 21.0817C4.56604 21.1706 4.62561 21.2476 4.70287 21.3038C4.78012 21.3599 4.87182 21.3927 4.96714 21.3983C5.06236 21.404 5.15722 21.3823 5.2405 21.3357L8.02051 7.26458ZM8.02051 7.26458L8.13774 7.01051L11.0077 0.790516C11.0478 0.703783 11.1118 0.630329 11.1922 0.578845C11.2727 0.527361 11.3662 0.5 11.4617 0.5C11.5573 0.5 11.6508 0.527361 11.7312 0.578845C11.8117 0.630322 11.8757 0.703763 11.9157 0.79048C11.9157 0.790492 11.9157 0.790504 11.9157 0.790516L14.7847 7.00948L14.9019 7.26354L15.1798 7.29654L21.9818 8.10454L21.9821 8.10458C22.077 8.11578 22.1667 8.15393 22.2405 8.21451C22.3144 8.27509 22.3694 8.35556 22.3989 8.44641C22.4285 8.53725 22.4314 8.63467 22.4073 8.72712C22.3833 8.81951 22.3333 8.90308 22.2633 8.96795C22.2632 8.96799 22.2632 8.96804 22.2631 8.96808L17.2343 13.6189L17.0288 13.809L17.0833 14.0835L18.4183 20.8015L18.4184 20.802C18.4372 20.8958 18.4286 20.9929 18.3938 21.082C18.359 21.1711 18.2994 21.2483 18.222 21.3045C18.1447 21.3607 18.0528 21.3935 17.9573 21.3991C17.8619 21.4047 17.7668 21.3828 17.6834 21.336L17.683 21.3357L11.706 17.9897L11.4617 17.853L11.2175 17.9897L5.24072 21.3356L8.02051 7.26458Z" fill="#F04C43" stroke="white" />
                    </svg>
                    <span>1 Month Ago</span>
                    <p>In addition to his remarkable web design skills, Rasheda De'Loach is a cherished citizen of Baton Rouge. His love for his hometown and his unwavering commitment to giving back to the community are evident in his involvement in various initiatives. However, it is his passion for jigging, a traditional Louisiana dance style, that truly sets him apart</p>
                    <br></br>
                    <h4 style={{ color: '#F04C43' }}>See More</h4>
                    <br></br>
                    <span style={{ color: '#F04C43' }}>Helpful?</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span style={{ color: '#F04C43' }}>Yes</span>&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path d="M8.31659 4.92206L7.4795 4.78221C7.45918 4.90381 7.4656 5.02837 7.49831 5.14723C7.53103 5.2661 7.58924 5.37641 7.66891 5.47049C7.74859 5.56457 7.8478 5.64016 7.95965 5.69201C8.0715 5.74385 8.19331 5.7707 8.31659 5.7707V4.92206ZM0.848632 4.92206V4.07343C0.380187 4.07343 0 4.45362 0 4.92206H0.848632ZM2.20644 12.5597H9.91881V10.8625H2.20644V12.5597ZM10.7335 4.07343H8.31659V5.7707H10.7335V4.07343ZM9.15368 5.06192L9.70088 1.77873L8.0267 1.4997L7.4795 4.78289L9.15368 5.06192ZM8.19439 6.00274e-08H8.0491V1.69726H8.19439V6.00274e-08ZM5.64849 1.28517L3.94037 3.84668L5.35249 4.78832L7.06062 2.22613L5.64849 1.28517ZM3.51673 4.07343H0.848632V5.7707H3.51673V4.07343ZM0 4.92206V10.3533H1.69726V4.92206H0ZM12.0825 10.7858L12.8972 6.71234L11.2332 6.37967L10.4185 10.4531L12.0825 10.7858ZM3.94037 3.84668C3.89387 3.91642 3.83088 3.97361 3.75698 4.01317C3.68308 4.05273 3.60055 4.07343 3.51673 4.07343V5.7707C3.87994 5.77069 4.23753 5.68103 4.55777 5.50966C4.87801 5.33829 5.15099 5.09051 5.35249 4.78832L3.94037 3.84668ZM9.70088 1.77873C9.73737 1.55986 9.72574 1.33567 9.66679 1.12175C9.60785 0.907837 9.50301 0.709329 9.35956 0.540039C9.21612 0.370749 9.03752 0.234743 8.83618 0.14148C8.63484 0.0482174 8.41628 -6.21416e-05 8.19439 6.00274e-08V1.69726C8.16978 1.6972 8.1448 1.69179 8.12249 1.6814C8.10018 1.67102 8.0804 1.6559 8.06451 1.63711C8.04862 1.61832 8.03701 1.59629 8.03048 1.57257C8.02395 1.54884 8.02266 1.52398 8.0267 1.4997L9.70088 1.77873ZM10.7335 5.7707C10.8089 5.77064 10.8833 5.78731 10.9514 5.81951C11.0196 5.85171 11.0797 5.89863 11.1275 5.95689C11.1753 6.01515 11.2096 6.0833 11.2278 6.15641C11.2461 6.22952 11.2479 6.30578 11.2332 6.37967L12.8972 6.71234C12.9611 6.3923 12.9533 6.06205 12.8742 5.7454C12.7952 5.42875 12.6469 5.13358 12.44 4.88117C12.2331 4.62875 11.9728 4.42538 11.6778 4.2857C11.3828 4.14603 11.0605 4.07353 10.7342 4.07343L10.7335 5.7707ZM9.91881 12.5597C10.4289 12.5598 10.9233 12.383 11.3178 12.0596C11.7123 11.7361 11.9825 11.286 12.0825 10.7858L10.4185 10.4531C10.3954 10.5686 10.333 10.6725 10.2419 10.7472C10.1508 10.8218 10.0366 10.8626 9.91881 10.8625V12.5597ZM8.0491 6.00274e-08C7.57409 5.94031e-05 7.10644 0.117393 6.68766 0.341587C6.26888 0.56578 5.91193 0.889897 5.64849 1.28517L7.06062 2.22613C7.16913 2.06343 7.31612 1.93003 7.48856 1.83778C7.66099 1.74552 7.85354 1.69725 8.0491 1.69726V6.00274e-08ZM2.20644 10.8625C2.0714 10.8625 1.94189 10.8088 1.8464 10.7134C1.75091 10.6179 1.69726 10.4883 1.69726 10.3533H0C0 10.9385 0.232464 11.4997 0.646252 11.9135C1.06004 12.3273 1.62126 12.5597 2.20644 12.5597V10.8625Z" fill="black" />
                        <path d="M3.56421 4.92188V11.7109" stroke="black" stroke-width="2.5" />
                    </svg>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span style={{ color: '#F04C43' }}>No</span>&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path d="M4.62335 7.63751L5.46044 7.77736C5.48076 7.65576 5.47434 7.5312 5.44163 7.41234C5.40892 7.29347 5.3507 7.18316 5.27103 7.08908C5.19136 6.995 5.09214 6.91941 4.98029 6.86756C4.86844 6.81572 4.74663 6.78887 4.62335 6.78887V7.63751ZM12.0913 7.63751V8.48614C12.5598 8.48614 12.9399 8.10595 12.9399 7.63751H12.0913ZM10.7335 -0.000179291H3.02113V1.69708H10.7335V-0.000179291ZM2.20645 8.48614H4.62335V6.78887H2.20645V8.48614ZM3.78626 7.49765L3.23906 10.7808L4.91324 11.0599L5.46044 7.77668L3.78626 7.49765ZM4.74555 12.5596H4.89084V10.8623H4.74555V12.5596ZM7.29145 11.2744L8.99957 8.71289L7.58745 7.77125L5.87933 10.3334L7.29145 11.2744ZM9.42321 8.48614H12.0913V6.78887H9.42321V8.48614ZM12.9399 7.63751V2.20626H11.2427V7.63751H12.9399ZM0.857462 1.7738L0.0427761 5.84723L1.70677 6.1799L2.52146 2.10646L0.857462 1.7738ZM8.99957 8.71289C9.04607 8.64315 9.10906 8.58596 9.18296 8.5464C9.25686 8.50684 9.33939 8.48614 9.42321 8.48614V6.78887C9.06 6.78888 8.70241 6.87854 8.38217 7.04991C8.06193 7.22128 7.78895 7.46906 7.58745 7.77125L8.99957 8.71289ZM3.23906 10.7808C3.20257 10.9997 3.21421 11.2239 3.27315 11.4378C3.33209 11.6517 3.43694 11.8502 3.58038 12.0195C3.72382 12.1888 3.90243 12.3248 4.10376 12.4181C4.3051 12.5114 4.52366 12.5596 4.74555 12.5596V10.8623C4.77016 10.8624 4.79514 10.8678 4.81745 10.8782C4.83976 10.8886 4.85955 10.9037 4.87543 10.9225C4.89132 10.9413 4.90293 10.9633 4.90946 10.987C4.91599 11.0107 4.91728 11.0356 4.91324 11.0599L3.23906 10.7808ZM2.20645 6.78887C2.13109 6.78893 2.05665 6.77226 1.98852 6.74006C1.92038 6.70786 1.86025 6.66094 1.81244 6.60268C1.76464 6.54442 1.73037 6.47627 1.71209 6.40316C1.69382 6.33005 1.692 6.2538 1.70677 6.1799L0.0427761 5.84723C-0.0211926 6.16727 -0.0133657 6.49752 0.0656919 6.81417C0.144751 7.13082 0.293071 7.42599 0.499964 7.6784C0.706857 7.93082 0.967168 8.13419 1.26214 8.27387C1.55711 8.41354 1.8794 8.48604 2.20577 8.48614L2.20645 6.78887ZM3.02113 -0.000179291C2.51101 -0.000185013 2.01664 0.176568 1.62216 0.500003C1.22767 0.823438 0.957446 1.27357 0.857462 1.7738L2.52146 2.10646C2.54455 1.99097 2.60696 1.88704 2.69807 1.8124C2.78918 1.73775 2.90335 1.697 3.02113 1.69708V-0.000179291ZM4.89084 12.5596C5.36585 12.5595 5.8335 12.4422 6.25228 12.218C6.67106 11.9938 7.02801 11.6697 7.29145 11.2744L5.87933 10.3334C5.77082 10.4961 5.62382 10.6295 5.45138 10.7218C5.27895 10.8141 5.0864 10.8623 4.89084 10.8623V12.5596ZM10.7335 1.69708C10.8685 1.69708 10.9981 1.75073 11.0935 1.84622C11.189 1.94171 11.2427 2.07122 11.2427 2.20626H12.9399C12.9399 1.62108 12.7075 1.05986 12.2937 0.646072C11.8799 0.232285 11.3187 -0.000179291 10.7335 -0.000179291V1.69708Z" fill="black" />
                        <path d="M9.37573 7.6377V0.848642" stroke="black" stroke-width="2.5" />
                    </svg>
                </div>
                <button className={style.moreReviewButton}>Show More Review</button>
            </section>
            <div className={style.line}></div>
            <section className={style.ratingParent}>
                <div className={style.ratingMain}>
                    <h2 className={style.heading}>More services by <span id={style.username} style={{ color: '#F04C43' }}>@rashedadeloach</span></h2>
                    <div className={style.floatDiv}>
                        <div className={style.sideBySide}>
                            <div className={style.recommendation}>
                                <img src={carouselImage1} />
                                <span className={style.innerHeading}>Languages</span>
                                <span id={style.level}>level 1</span>
                                <p className={style.aboutRecommendation}>I will do cute illustration or cartoon</p>
                                <div className={gigCardStyle.rating}>
                                    <svg className={style.starRating} xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 22" fill="none">
                                        <path d="M8.02051 7.26458L7.74266 7.29755L0.941657 8.10455L0.94137 8.10458C0.846497 8.11578 0.756817 8.15393 0.682945 8.21451C0.609074 8.27509 0.554104 8.35556 0.524542 8.44641C0.494979 8.53725 0.492061 8.63466 0.516133 8.72712C0.540204 8.81957 0.590258 8.90319 0.660371 8.96808L5.69015 13.6179L5.8957 13.8079L5.84116 14.0825L4.50622 20.8021C4.50621 20.8022 4.5062 20.8023 4.50618 20.8023C4.4877 20.8959 4.49638 20.9929 4.5312 21.0817C4.56604 21.1706 4.62561 21.2476 4.70287 21.3038C4.78012 21.3599 4.87182 21.3927 4.96714 21.3983C5.06236 21.404 5.15722 21.3823 5.2405 21.3357L8.02051 7.26458ZM8.02051 7.26458L8.13774 7.01051L11.0077 0.790516C11.0478 0.703783 11.1118 0.630329 11.1922 0.578845C11.2727 0.527361 11.3662 0.5 11.4617 0.5C11.5573 0.5 11.6508 0.527361 11.7312 0.578845C11.8117 0.630322 11.8757 0.703763 11.9157 0.79048C11.9157 0.790492 11.9157 0.790504 11.9157 0.790516L14.7847 7.00948L14.9019 7.26354L15.1798 7.29654L21.9818 8.10454L21.9821 8.10458C22.077 8.11578 22.1667 8.15393 22.2405 8.21451C22.3144 8.27509 22.3694 8.35556 22.3989 8.44641C22.4285 8.53725 22.4314 8.63467 22.4073 8.72712C22.3833 8.81951 22.3333 8.90308 22.2633 8.96795C22.2632 8.96799 22.2632 8.96804 22.2631 8.96808L17.2343 13.6189L17.0288 13.809L17.0833 14.0835L18.4183 20.8015L18.4184 20.802C18.4372 20.8958 18.4286 20.9929 18.3938 21.082C18.359 21.1711 18.2994 21.2483 18.222 21.3045C18.1447 21.3607 18.0528 21.3935 17.9573 21.3991C17.8619 21.4047 17.7668 21.3828 17.6834 21.336L17.683 21.3357L11.706 17.9897L11.4617 17.853L11.2175 17.9897L5.24072 21.3356L8.02051 7.26458Z" fill="#F04C43" stroke="white" />
                                    </svg>
                                    &nbsp; <span className={gigCardStyle.ratingNumber}>4.3</span> &nbsp; <span className={style.starRating}>(1k+)</span>
                                    &nbsp;&nbsp;&nbsp;&nbsp; <span id={style.money}>From $100</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={style.ratingParent}>
                <div className={style.ratingMain}>
                    <h2 className={style.heading}>People who viewed this also</h2>
                    <div id={style.seeAll}><button id={style.seeAllButton}><h4 className={style.heading}>see all</h4></button></div>
                    <div className={style.floatDiv}>
                        <div className={style.sideBySide}>
                            <div className={style.recommendation}>
                                <img src={carouselImage1} />
                                <span className={style.innerHeading}>Languages</span>
                                <span id={style.level}>level 1</span>
                                <p className={style.aboutRecommendation}>I will do cute illustration or cartoon</p>
                                <div className={gigCardStyle.rating}>
                                    <svg className={style.starRating} xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 22" fill="none">
                                        <path d="M8.02051 7.26458L7.74266 7.29755L0.941657 8.10455L0.94137 8.10458C0.846497 8.11578 0.756817 8.15393 0.682945 8.21451C0.609074 8.27509 0.554104 8.35556 0.524542 8.44641C0.494979 8.53725 0.492061 8.63466 0.516133 8.72712C0.540204 8.81957 0.590258 8.90319 0.660371 8.96808L5.69015 13.6179L5.8957 13.8079L5.84116 14.0825L4.50622 20.8021C4.50621 20.8022 4.5062 20.8023 4.50618 20.8023C4.4877 20.8959 4.49638 20.9929 4.5312 21.0817C4.56604 21.1706 4.62561 21.2476 4.70287 21.3038C4.78012 21.3599 4.87182 21.3927 4.96714 21.3983C5.06236 21.404 5.15722 21.3823 5.2405 21.3357L8.02051 7.26458ZM8.02051 7.26458L8.13774 7.01051L11.0077 0.790516C11.0478 0.703783 11.1118 0.630329 11.1922 0.578845C11.2727 0.527361 11.3662 0.5 11.4617 0.5C11.5573 0.5 11.6508 0.527361 11.7312 0.578845C11.8117 0.630322 11.8757 0.703763 11.9157 0.79048C11.9157 0.790492 11.9157 0.790504 11.9157 0.790516L14.7847 7.00948L14.9019 7.26354L15.1798 7.29654L21.9818 8.10454L21.9821 8.10458C22.077 8.11578 22.1667 8.15393 22.2405 8.21451C22.3144 8.27509 22.3694 8.35556 22.3989 8.44641C22.4285 8.53725 22.4314 8.63467 22.4073 8.72712C22.3833 8.81951 22.3333 8.90308 22.2633 8.96795C22.2632 8.96799 22.2632 8.96804 22.2631 8.96808L17.2343 13.6189L17.0288 13.809L17.0833 14.0835L18.4183 20.8015L18.4184 20.802C18.4372 20.8958 18.4286 20.9929 18.3938 21.082C18.359 21.1711 18.2994 21.2483 18.222 21.3045C18.1447 21.3607 18.0528 21.3935 17.9573 21.3991C17.8619 21.4047 17.7668 21.3828 17.6834 21.336L17.683 21.3357L11.706 17.9897L11.4617 17.853L11.2175 17.9897L5.24072 21.3356L8.02051 7.26458Z" fill="#F04C43" stroke="white" />
                                    </svg>
                                    &nbsp; <span className={gigCardStyle.ratingNumber}>4</span> &nbsp; <span className={style.starRating}>(1k+)</span>
                                    &nbsp;&nbsp;&nbsp;&nbsp; <span id={style.money}>from $100</span>
                                </div>
                            </div>
                        </div>
                        <div className={style.sideBySide}>
                            <div className={style.recommendation}>
                                <img src={carouselImage1} />
                                <span className={style.innerHeading}>Languages</span>
                                <span id={style.level}>level 1</span>
                                <p className={style.aboutRecommendation}>I will do cute illustration or cartoon</p>
                                <div className={gigCardStyle.rating}>
                                    <svg className={style.starRating} xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 22" fill="none">
                                        <path d="M8.02051 7.26458L7.74266 7.29755L0.941657 8.10455L0.94137 8.10458C0.846497 8.11578 0.756817 8.15393 0.682945 8.21451C0.609074 8.27509 0.554104 8.35556 0.524542 8.44641C0.494979 8.53725 0.492061 8.63466 0.516133 8.72712C0.540204 8.81957 0.590258 8.90319 0.660371 8.96808L5.69015 13.6179L5.8957 13.8079L5.84116 14.0825L4.50622 20.8021C4.50621 20.8022 4.5062 20.8023 4.50618 20.8023C4.4877 20.8959 4.49638 20.9929 4.5312 21.0817C4.56604 21.1706 4.62561 21.2476 4.70287 21.3038C4.78012 21.3599 4.87182 21.3927 4.96714 21.3983C5.06236 21.404 5.15722 21.3823 5.2405 21.3357L8.02051 7.26458ZM8.02051 7.26458L8.13774 7.01051L11.0077 0.790516C11.0478 0.703783 11.1118 0.630329 11.1922 0.578845C11.2727 0.527361 11.3662 0.5 11.4617 0.5C11.5573 0.5 11.6508 0.527361 11.7312 0.578845C11.8117 0.630322 11.8757 0.703763 11.9157 0.79048C11.9157 0.790492 11.9157 0.790504 11.9157 0.790516L14.7847 7.00948L14.9019 7.26354L15.1798 7.29654L21.9818 8.10454L21.9821 8.10458C22.077 8.11578 22.1667 8.15393 22.2405 8.21451C22.3144 8.27509 22.3694 8.35556 22.3989 8.44641C22.4285 8.53725 22.4314 8.63467 22.4073 8.72712C22.3833 8.81951 22.3333 8.90308 22.2633 8.96795C22.2632 8.96799 22.2632 8.96804 22.2631 8.96808L17.2343 13.6189L17.0288 13.809L17.0833 14.0835L18.4183 20.8015L18.4184 20.802C18.4372 20.8958 18.4286 20.9929 18.3938 21.082C18.359 21.1711 18.2994 21.2483 18.222 21.3045C18.1447 21.3607 18.0528 21.3935 17.9573 21.3991C17.8619 21.4047 17.7668 21.3828 17.6834 21.336L17.683 21.3357L11.706 17.9897L11.4617 17.853L11.2175 17.9897L5.24072 21.3356L8.02051 7.26458Z" fill="#F04C43" stroke="white" />
                                    </svg>
                                    &nbsp; <span className={gigCardStyle.ratingNumber}>4.3</span> &nbsp; <span className={style.starRating}>(1k+)</span>
                                    &nbsp;&nbsp;&nbsp;&nbsp; <span id={style.money}>from $100</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
        </>

    )
}

export default GigDetailsPage

