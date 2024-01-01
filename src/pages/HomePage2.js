import React, { useEffect } from 'react'
import style from '../assets/styles/homepage.module.css'
import { Navbar2 } from '../components'
import bannerImage from '../assets/images/bannerImage1.png'
import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'


const HomePage2 = () => {
 
  const history = useHistory();

  useEffect(() => {

    const userDetailCookie = Cookies.get("user");
    const isLoggedIn = localStorage.getItem('loggedin');


    if (isLoggedIn && userDetailCookie) {
      const userDetail = JSON.parse(userDetailCookie);
    // Check if the user is logged in by looking at the 'loggedin' item in localStorage
    const isLoggedIn = localStorage.getItem('loggedin');

    // If not logged in, redirect to the home page or another page of your choice
    if (isLoggedIn && userDetail.user_type === "internal_manager") {
      history.push('/requests');  // You can replace '/' with the path of the page where you want to redirect the user
    }else{
      history.push("/dashboard")
    } 
  }
    else{
      history.push("/")
    }
  }, [history]);



    var mostPopular =["Image Editing" , "Social Media Design" , "Ai Artist" , "Web Design" , "Interior Design",
    "Image Editing" , "Social Media Design" , "Ai Artist" , "Web Design" , "Interior Design"]

  return (
    <>
    <Navbar2 />
    <div className={style.banner}>
        <div className={style.bannerBox}>
            <div className={style.bannerImage}>
                <img src={bannerImage}/>
            </div>
            <div className={style.bannerbox2}>
                <h1>Graphic & Design</h1>
                <h2>Designs To Make You Stand Out</h2>
                <button className={style.bannerButton}>
                    More &nbsp;&nbsp; 
                </button>
            </div>
        </div>
    </div>


    <div className={style.scrollView1}>
      <h1 className={style.heading}>Most Popular Graphics and Design</h1>
      <div className={style.scrollViewInner}>
        {mostPopular.map((item, index) => (
          <div key={index} className={style.scrollViewItem}>
            {item} <span style={{color:'#F04C43'}}>&rarr;</span>
          </div>
        ))}
      </div>
    </div>

    
    </>
  )
}

export default HomePage2