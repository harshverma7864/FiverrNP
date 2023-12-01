import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import style from '../assets/styles/homepage.module.css'
import bannerImage from '../assets/images/bannerImage1.png'
import Card from '../components/Card'

const HomePage = () => {

    var cardData = [
        {
            heading:"Logo and Brand Identity",
            subHeading:["Logo Design" , "Brand Style Guide" , "Business Cards" , "Fonts and Typography"]
        },
        
        {
            heading:"Web and App Design",
            subHeading:["Website Design" , "App Design" , "UX Design" , "Landing Page Design","Icon Design"]
        },
        
        {
            heading:"Art & Illustration",
            subHeading:["Website Design" , "App Design" , "UX Design" , "Landing Page Design","Icon Design" ,"Icon Design" , "Landing Page Design" ,"Landing Page Design"]
        },
        {
            heading:"Logo and Brand Identity",
            subHeading:["Logo Design" , "Brand Style Guide" , "Business Cards" , "Fonts and Typography"]
        },
        
        {
            heading:"Web and App Design",
            subHeading:["Website Design" , "App Design" , "UX Design" , "Landing Page Design","Icon Design"]
        },
        
        {
            heading:"Art & Illustration",
            subHeading:["Website Design" , "App Design" , "UX Design" , "Landing Page Design","Icon Design" ,"Icon Design" , "Landing Page Design" ,"Landing Page Design"]
        },
        {
            heading:"Logo and Brand Identity",
            subHeading:["Logo Design" , "Brand Style Guide" , "Business Cards" , "Fonts and Typography"]
        },
        
        {
            heading:"Web and App Design",
            subHeading:["Website Design" , "App Design" , "UX Design" , "Landing Page Design","Icon Design"]
        },
        
        {
            heading:"Art & Illustration",
            subHeading:["Website Design" , "App Design" , "UX Design" , "Landing Page Design","Icon Design" ,"Icon Design" , "Landing Page Design" ,"Landing Page Design"]
        },
        {
            heading:"Art & Illustration",
            subHeading:[]
        },

    ]


    var cardData2 = [
        {
            heading:"Logo and Brand Identity",
            subHeading:[]
        },
        
        {
            heading:"Web and App Design",
            subHeading:[]
        },
        
        {
            heading:"Art & Illustration",
            subHeading:[]
        },
        {
            heading:"Logo and Brand Identity",
            subHeading:[]
        },
        
        {
            heading:"Web and App Design",
            subHeading:[]
        },
        
        {
            heading:"Art & Illustration",
            subHeading:[]
        },
        {
            heading:"Logo and Brand Identity",
            subHeading:[]
        },
        
        {
            heading:"Web and App Design",
            subHeading:[]
        },
        
        {
            heading:"Art & Illustration",
            subHeading:[]
        },
        {
            heading:"Art & Illustration",
            subHeading:[]
        },

    ]
    var mostPopular =["Image Editing" , "Social Media Design" , "Ai Artist" , "Web Design" , "Interior Design",
    "Image Editing" , "Social Media Design" , "Ai Artist" , "Web Design" , "Interior Design"]

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

    <div className={style.serviceCardsOuter}>
    <h1 className={style.heading}>Explore Graphics and Design</h1> 
    <div className={style.serviceCards}>
    {
        cardData.map((item)=>(<Card heading={item.heading} subHeadings={item.subHeading}/>))
    }
    </div>
    </div>

    <div className={style.scrollView1} style={{height:'400px'}}>
      <h1 className={style.heading}>Graphics & Design Related Guides</h1>
      <div className={style.scrollViewInner}>
        {cardData2.map((item, index) => (
         <div key={index} className={style.scrollViewItem}>
          <Card heading={item.heading} subHeadings={item.subHeading} />
       </div>
        ))}
      </div>
    </div>
  
    <Footer/>
    </>
  )
}

export default HomePage