import React from 'react'
import style from '../assets/styles/homepage.module.css'
import { Navbar2 } from '../components'
import bannerImage from '../assets/images/bannerImage1.png'


const HomePage2 = () => {
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