import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import style from '../assets/styles/homepage.module.css'
import bannerImage from '../assets/images/bannerImage1.png'
const HomePage = () => {
  return (
    <>
    <Navbar/>

    <div className={style.banner}>
        <div className={style.bannerBox}>
            <div className={style.bannerImage}>
                <img src={bannerImage}/>
            </div>
            <div className={style.bannerbox2}>
                <h1>Graphic & Design</h1>
                <h2>Designs To Make You Stand Out</h2>
                <button className={style.bannerButton}>
                    More &nbsp;&nbsp; >
                </button>
            </div>
        </div>
        
    </div>



    <Footer/>
    </>
  )
}

export default HomePage