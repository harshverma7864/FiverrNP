import React from 'react'
import footer from '../assets/styles/footer.module.css'
import logo from '../assets/images/mainlogo.png'
import linkdinLogo from '../assets/images/linkdin.png'
import instaLogo from '../assets/images/insta.png'
import fbLogo from '../assets/images/fb.png'



const Footer = () => {
  return (
    <div className={footer.footerMain}>
        <div className={footer.footerTop}>
            <div className={footer.logoImage}>
            <img  src={logo} alt='Logo'/>
            </div>
            <div className={footer.socialMediaIcons}>
                <img src={instaLogo} alt='InstagramLogo'/>
                <img src={fbLogo} alt='FBlogo'/>
                <img src={linkdinLogo} alt='LinkedinLogo'/>
            </div>
        </div>
        <div className={footer.footerBox}>
            <div className={footer.footerBox1}>
                <h2>Categories</h2>
                 <p>Graphic and Designs</p>
                 <p>Writing and Translation</p>
                 <p>Programming and Tech</p>
                 <p>Digital Marketing</p>
                 <p>Data</p>
                 <p>Video and Animation</p>
                 <p>Voice and Audio</p>
                 <p>Photography</p>
                 <p>Business</p>
                 <p>AI Service</p>
            </div>
            <div className={footer.footerBox1}>
                <h2>About</h2>
                 <p>Career</p>
                 <p>Press and News</p>
                 <p>Partnerships</p>
                 <p>Privacy Policy</p>
                 <p>Terms of Services</p>
                 <p>Investors Relations</p>
            </div>
            <div className={footer.footerBox1}>
                <h2>Community</h2>
                 <p>Customer Success Stories</p>
                 <p>Community Hub</p>
                 <p>Forum</p>
                 <p>Events</p>
                 <p>Blog</p>
                 <p>Become a Seller</p>
                 <p>Community Standards</p>
            </div>
            <div className={footer.footerBox1}>
                <h2>Support and Education</h2>
                 <p>Help and Support</p>
                 <p>Trust and Safety</p>
                 <p>Guides</p>
                 <p>Workspace</p>
                 <p>Learn</p>
            </div>
        </div>
    </div>
  )
}

export default Footer