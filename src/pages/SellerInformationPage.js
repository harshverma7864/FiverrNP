import React, { useState } from 'react'
import { Navbar, Navbar2 } from '../components'
import  '../assets/styles/profileInfo.css'
import arrow from '../assets/images/arrows (1) 2.png'
import checked from '../assets/images/checked (2) 1.png'
import upImage from '../assets/images/upload-big-arrow 1.png'
import verified from '../assets/images/verified 1.png'

const SellerInformationPage = () => {

    const [personalDetail, setPersonalDetails] = useState(true);
    const [professionalDetail, setProfessionalDetails] = useState(false);
    const [complete1,setComplete1] = useState(false);
    const [complete2,setComplete2] = useState(false);
    const [complete3,setComplete3] = useState(false);
    const [active,setActive] = useState(1);

    

    return (
        <>
            <Navbar/>

            <div className='container'>



            <div className='fillStatus'>
                <div onClick={()=>setActive(1)} className="formStatus" style={{color : (active === 1)?("#F04C43"):("black")}}> <p> {complete1 ? (<img src={checked}/>):('')} </p>1. Personal Details</div>
                <img src={arrow}/>
                <div onClick={()=>setActive(2)} className="formStatus" style={{color : (active === 2)?("#F04C43"):("black")}}><p> {complete2 ? (<img src={checked}/>):('')}</p>2. Professional Details</div>
                <img src={arrow}/>
                <div  onClick={()=>setActive(3)} className="formStatus" style={{color : (active === 3)?("#F04C43"):("black")}}><p> {complete3 ? (<img src={checked}/>):('')}</p>3. Account Security</div>
            </div>


            <form className="infoForm">
               
               {
                active === 1 ? (
               
               <>
               
                <h2  style={{color:"#F04C43"}}>Personal Details</h2>
                <p>Tell us a bit about yourself. This information will appear on your public profile, so that potential buyers can get to know you better.</p>
                <br/>
             
                <div className="formElement">
                    <div className="title">
                     <h3>Profile Picture<span style={{color:"#F04C43"}}>*</span></h3>
                     <p>Add a profile picture of yourself so customers will know exactly who they’ll be working with.</p>
                    </div>
                    <div className="imageDropBox">
                        <div className="innerImageBox">
                            <img src={upImage}/>
                        </div>
                    </div>
                    <div className="title2">
                        <p>Drag Image Here To Upload Or</p>
                        <button className="drop">Choose Image</button>
                    </div>
                </div>


                <div className="formElement">
                    <div className="title">
                     <h3>Display Name<span style={{color:"#F04C43"}}>*</span></h3>
                     <p>To help build credible and authentic connections with customers, they’ll now see your display name.</p>
                    </div>
                    <div className="displayNameInput">
                       <input type="text" name="displayName" id="" placeholder="Type Your Display Name"/>
                    </div>
                    
                </div>

                <div className="formElement">
                    <div className="title">
                     <h3>Description<span style={{color:"#F04C43"}}>*</span></h3>
                    </div>
                    <div className="textArea">
                       <textarea type="text" rows="4" cols="150" name="displayName" id="" placeholder="Type Your Display Name"/>
                       <p>min. 150 characters</p>
                    </div>
                </div>

                <div className="formElement">
                    <div className="title">
                     <h3>Languages<span style={{color:"#F04C43"}}>*</span></h3>
                    <p>Select which languages you can communicate in and your proficiency level.
                    </p>
                    </div>
                        <div className="displayNameInput">
                            <input type="text" name="displayName" id="" placeholder="Language"/>
                         </div>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="displayNameInput">
                            <input type="text" name="displayName" id="" placeholder="Language Level"/>
                         </div>
                         <div className="title2">
                            <button className="drop">Add</button>
                        </div>
                </div>

                <button onClick={()=>setActive(2)} class="continueButton">Continue</button>


                </>):('')
}


{ active === 2 ? (
                <>
                <h2  style={{color:"#F04C43"}}>Professional Details</h2>
                <p>This is your time to shine. Let potential buyers know what you do best and how you gained your skills, certifications and experience.</p>
                <br/>
                <div className="formElement">
                    <div className="title">
                     <h3>Your Occupation<span style={{color:"#F04C43"}}>*</span></h3>
                    
                    </div>
                        <div className="displayNameInput" id="Occupation">
                            <input type="text" name="displayName" id="" placeholder="Select Occupation"/>
                         </div>
                         
                         <div className="title2">
                            <button className="drop">Add</button>
                        </div>
                         <div className="title2">
                            <button className="drop">Okay</button>
                        </div>
                </div>

                <div className="formElement">
                    <div className="title">
                     <h3>Skills<span style={{color:"#F04C43"}}>*</span></h3>
                    <p>To help build credible and authentic connections with customers, they’ll now see your display name.</p>
                    </div>
                    <div className="educationFields">
                    <div class="line1">
                        <div className="displayNameInput">
                            <input type="text" name="displayName" id="" placeholder="Add Skill (Ex. Graphic Design)"/>
                         </div>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="displayNameInput">
                            <input type="text" name="displayName" id="" placeholder="Experience Level "/>
                         </div>
                        </div>
                        <div class="buttons">
                         <div className="title2">
                            <button className="drop">Add</button>
                        </div>
                         <div className="title2">
                            <button className="drop">Okay</button>
                        </div>
                    </div>
                </div>
                </div>

                <div className="formElement">
                    <div className="title">
                     <h3>Education<span style={{color:"#F04C43"}}>*</span></h3>
                    <p>Add any relevant education details that will help customers to get to know you better.</p>
                    </div>
                    <div class="educationFields">
                        <div class="line1">
                        <div className="displayNameInput">
                            <input type="text" name="displayName" id="" placeholder="Country Of College/University"/>
                         </div>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="displayNameInput">
                            <input type="text" name="displayName" id="" placeholder="College/University Name "/>
                         </div>
                        </div>
                        <div class="line2">
                        <div className="displayNameInput">
                            <input type="text" name="displayName" id="" placeholder="Title "/>
                         </div>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <div className="displayNameInput">
                            <input type="text" name="displayName" id="" placeholder="Major "/>
                         </div>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <div className="displayNameInput">
                            <input type="text" name="displayName" id="" placeholder="Year "/>
                         </div>
                        </div>
                        <div class="buttons">
                         <div className="title2">
                            <button className="drop">Add</button>
                        </div>
                         <div className="title2">
                            <button className="drop">Okay</button>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="formElement">
                    <div className="title">
                     <h3>Certifications<span style={{color:"#F04C43"}}>*</span></h3>
                    <p>Include any certificates or awards that are relevant to the services you're offering.</p>
                    </div>
                    <div class="educationFields">
                        <div class="line1">
                        <div className="displayNameInput">
                            <input type="text" name="displayName" id="" placeholder="Certificate or Award"/>
                         </div>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="displayNameInput">
                            <input type="text" name="displayName" id="" placeholder="Certified From (Ex. Adobe) "/>
                         </div>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <div className="displayNameInput">
                            <input type="text" name="displayName" id="" placeholder="Year"/>
                         </div>
                        </div>
                       
                        <div class="buttons">
                         <div className="title2">
                            <button className="drop">Add</button>
                        </div>
                         <div className="title2">
                            <button className="drop">Okay</button>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="formElement">
                    <div className="title">
                     <h3>Personal Website<span style={{color:"#F04C43"}}>*</span></h3>
                    <p>Include a link to your personal website or portfolio with your work samples.</p>
                    </div>
                        <div className="displayNameInput" id="Occupation">
                            <input type="text" name="displayName" id="" placeholder="Provide A Link"/>
                         </div>
                </div>
                <button onClick={()=>setActive(3)} class="continueButton">Continue</button>

                </>):('')
            }

{ active === 3 ? (
    <>
                <h2  style={{color:"#F04C43"}}>Account Security</h2>
                <p>Trust and safety is a big deal in our community. Please verify your email and phone number so that we can keep your account secured.</p>
                <br/>

                <div className="formElement2">
                    <div className="title">
                     <h3>Email<span style={{color:"#F04C43"}}>*</span></h3>
                    </div>
                    <div className="verified">
                        <p>verified</p> <img src={verified}/>
                    </div>
                </div>
                <div className="formElement2">
                    <div className="title">
                     <h3>Phone<span style={{color:"#F04C43"}}>*</span></h3>
                    </div>
                    <div className="verified">
                        <p>Add</p>
                    </div>
                </div>
                <button onClick={()=>setActive(2)} class="continueButton">Continue</button>

                </>):('')
            }


            </form>





        </div>










        </>
    )
}

export default SellerInformationPage