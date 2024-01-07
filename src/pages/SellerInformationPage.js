import React, { useState , useEffect } from 'react'
import { Navbar, Navbar2, Table } from '../components'
import '../assets/styles/profileInfo.css'
import arrow from '../assets/images/arrows (1) 2.png'
import checked from '../assets/images/checked (2) 1.png'
import upImage from '../assets/images/upload-big-arrow 1.png'
import verified from '../assets/images/verified 1.png'
import useInfoLogic from './pageLogic/SellerInfoLogic'
import Cookies from 'js-cookie'

const SellerInformationPage = () => {

const [phoneNumber , setPhoneNumber] = useState();
const [isEmailVerified , setIsEmailVerified] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
          try {

              const user = JSON.parse(Cookies.get("user"))
              setPhoneNumber(user.phone_number);
              setIsEmailVerified(user.is_emailverified)
          } catch (error) {
            // Handle error
            console.error('Error in component:', error);
          }
        };
    
        fetchData();
      }, []);



    const [personalDetail, setPersonalDetails] = useState(true);
    const [professionalDetail, setProfessionalDetails] = useState(false);
     


    const {
        complete1,
        complete2,
        complete3,
        active,
        displayName,
        desc,
        language,
        country,
        expertise,
        skill,
        occupation,
        education,
        certification,
        personalWebsite,
        profilePicture, 
        skillAray,
        languageArray,
        educationArray,
        certificationArray,
        setProfilePicture,
        setWebsite,
        setActive,
        setCountry,
        setExpertise,
        handleJson,
        setDisplayName,
        setDesc,
        setOccupation,
        handleOkayClick,
        handleAddButton,
        handleContinueClick,
        handleImageChange
    } = useInfoLogic();


   


    return (
        <>
            <Navbar />

            <div className='container'>



                <div className='fillStatus'>
                    <div onClick={() => setActive(1)} className="formStatus" style={{ color: (active === 1) ? ("#F04C43") : ("black") }}> <p> {complete1 ? (<img src={checked} />) : ('')} </p>1. Personal Details</div>
                    <img src={arrow} />
                    <div onClick={() => setActive(2)} className="formStatus" style={{ color: (active === 2) ? ("#F04C43") : ("black") }}><p> {complete2 ? (<img src={checked} />) : ('')}</p>2. Professional Details</div>
                    <img src={arrow} />
                    <div onClick={() => setActive(3)} className="formStatus" style={{ color: (active === 3) ? ("#F04C43") : ("black") }}><p> {complete3 ? (<img src={checked} />) : ('')}</p>3. Account Security</div>
                </div>


                <form className="infoForm">

                    {
                        active === 1 ? (

                            <>

                                <h2 style={{ color: "#F04C43" }}>Personal Details</h2>
                                <p>Tell us a bit about yourself. This information will appear on your public profile, so that potential buyers can get to know you better.</p>
                                <br />

                                <div className="formElement">
                                    <div className="title">
                                        <h3>Profile Picture<span style={{ color: "#F04C43" }}>*</span></h3>
                                        <p>Add a profile picture of yourself so customers will know exactly who they’ll be working with.</p>
                                    </div>
                                    <div className="imageDropBox">
                                        <div className="innerImageBox">
                                            <img src={profilePicture} required alt='img'/>

                                        </div>
                                    </div>
                                    <div className="title2">
                                        <p>Drag Image Here To Upload Or</p>
                                        <input type="file" className="drop"  onChange={handleImageChange} placeholder="choose Image" required/>
                                    </div>
                                </div>


                                <div className="formElement">
                                    <div className="title">
                                        <h3>Display Name<span style={{ color: "#F04C43" }}>*</span></h3>
                                        <p>To help build credible and authentic connections with customers, they’ll now see your display name.</p>
                                    </div>
                                    <div className="displayNameInput">
                                        <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} name="displayName" id="" placeholder="Type Your Display Name" />
                                    </div>

                                </div>

                                <div className="formElement">
                                    <div className="title">
                                        <h3>Description<span style={{ color: "#F04C43" }}>*</span></h3>
                                    </div>
                                    <div className="textArea">
                                        <textarea type="text" value={desc} onChange={(e) => setDesc(e.target.value)} rows="4" cols="150" name="description" id="" placeholder="Type Your Description" />
                                        <p>min. 150 characters</p>
                                    </div>
                                </div>
                              
                                <div className="formElement">
                              
                                    <div className="title">
                                        <h3>Languages<span style={{ color: "#F04C43" }}>*</span></h3>
                                        <p>Select which languages you can communicate in and your proficiency level.
                                        </p>
                                    </div>
                                    <div className="displayNameInput">
                                        <input
                                            type="text"
                                            name="language"
                                            onChange={(event) => handleJson("language", event)}
                                            value={language.language}
                                            placeholder="Language"

                                        />
                                    </div>

                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <div className="displayNameInput">
                                        <input type="text"
                                            name="profiency"
                                            onChange={(event) => handleJson("language", event)}
                                            value={language.profiency}
                                            placeholder="Language Level"
                                        />
                                    </div>
                                    
                                    <div className="title2">
                                        <button className="drop" onClick={(event) => handleAddButton("language", event)} >Add</button>
                                       
                                    </div>
                                </div>
                                    { languageArray && languageArray.length > 0 ? ( <Table tableData={languageArray} />) : ("")}

                               

                                <div className="formElement">
                                    <div className="title">
                                        <h3>Country<span style={{ color: "#F04C43" }}>*</span></h3>
                                        <p>Select which Country you belong.
                                        </p>
                                    </div>
                                    <div className="displayNameInput">
                                        <input
                                            type="text"
                                            name="country"
                                            onChange={(e) => setCountry(e.target.value)}
                                            value={country}
                                            placeholder="Country"

                                        />
                                    </div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    {/*                         
                         <div className="title2">
                            <button className="drop" onClick={(event)=>handleAddButton("language", event)} >Add</button>
                        </div> */}
                                </div>

                                <button onClick={(e) => handleContinueClick(1,e)} class="continueButton">Continue</button>


                            </>) : ('')
                    }


                    {active === 2 ? (
                        <>
                            <h2 style={{ color: "#F04C43" }}>Professional Details</h2>
                            <p>This is your time to shine. Let potential buyers know what you do best and how you gained your skills, certifications and experience.</p>
                            <br />
                            <div className="formElement">
                                <div className="title">
                                    <h3>Your Occupation<span style={{ color: "#F04C43" }}>*</span></h3>

                                </div>
                                <div className="displayNameInput" id="Occupation">
                                    <input
                                        type="text" onChange={(e) => setOccupation(e.target.value)} name="occupation" value={occupation}
                                        id="" placeholder="Select Occupation" />
                                </div>
                            </div>

                            <div className="formElement">
                                <div className="title">
                                    <h3>Skills<span style={{ color: "#F04C43" }}>*</span></h3>
                                    <p>To help build credible and authentic connections with customers, they’ll now see your display name.</p>
                                </div>
                                <div className="educationFields">
                                    <div class="line1">
                                        <div className="displayNameInput">
                                            <input
                                                onChange={(event) => handleJson("skill", event)}
                                                type="text"
                                                name="skill"
                                                value={skill.skill} placeholder="Add Skill (Ex. Graphic Design)" />
                                        </div>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <div className="displayNameInput">
                                            <input
                                                type="text"
                                                name="experience"
                                                onChange={(event) => handleJson("skill", event)}
                                                id=""
                                                value={skill.experience}
                                                placeholder="Experience Level " />
                                        </div>
                                    </div>
                                    <div class="buttons">
                                        <div className="title2">
                                            <button className="drop" onClick={(event) => handleAddButton("skill", event)}>Add</button>
                                        </div>
                                        <div className="title2">
                                            <button className="drop" onClick={(e) => { handleOkayClick("skill", e) }}>Okay</button>
                                        </div>
                                      
                                    </div>
                                   <div>        
                                                                 { skillAray && skillAray.length > 0 ? ( <Table tableData={skillAray} />) : ("")}
</div>
                                </div>
                            </div>

                            <div className="formElement">
                                <div className="title">
                                    <h3>Education</h3>
                                    <p>Add any relevant education details that will help customers to get to know you better.</p>
                                </div>
                                <div class="educationFields">
                                    <div class="line1">
                                        <div className="displayNameInput">
                                            <input
                                                type="text"
                                                onChange={(event) => handleJson("education", event)}
                                                name="country"
                                                value={education.country}
                                                id=""
                                                placeholder="Country Of College/University" />
                                        </div>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <div className="displayNameInput">
                                            <input
                                                onChange={(event) => handleJson("education", event)}
                                                type="text"
                                                name="college"
                                                value={education.college}
                                                id=""
                                                placeholder="College/University Name " />
                                        </div>
                                    </div>
                                    <div class="line2">
                                        <div className="displayNameInput">
                                            <input
                                                type="text"
                                                name="title"
                                                value={education.title}
                                                id=""
                                                onChange={(event) => handleJson("education", event)}
                                                placeholder="Title " />
                                        </div>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <div className="displayNameInput">
                                            <input
                                                type="text"
                                                name="major"
                                                value={education.major}
                                                id=""
                                                onChange={(event) => handleJson("education", event)}
                                                placeholder="Major" />
                                        </div>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <div className="displayNameInput">
                                            <input
                                                type="number"
                                                name="passout_year"
                                                value={education.year}
                                                onChange={(event) => handleJson("education", event)}
                                                id=""
                                                placeholder="Year " />
                                        </div>
                                    </div>
                                    <div class="buttons">
                                        <div className="title2">
                                            <button className="drop" onClick={(event) => handleAddButton("education", event)} >Add</button>
                                        </div>
                                        <div className="title2">
                                            <button className="drop" onClick={(e) => { handleOkayClick("education", e) }}>Okay</button>
                                        </div>
                                    </div>
                                    <div>
                                    { educationArray && educationArray.length > 0 ? ( <Table tableData={educationArray} />) : ("")}

                                    </div>
                                </div>
                            </div>

                            <div className="formElement">
                                <div className="title">
                                    <h3>Certifications</h3>
                                    <p>Include any certificates or awards that are relevant to the services you're offering.</p>
                                </div>
                                <div class="educationFields">
                                    <div class="line1">
                                        <div className="displayNameInput">
                                            <input
                                                type="text"
                                                value={certification.name}
                                                name="name"
                                                id=""
                                                onChange={(event) => handleJson("certificate", event)}
                                                placeholder="Certificate or Award" />
                                        </div>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <div className="displayNameInput">
                                            <input
                                                onChange={(event) => handleJson("certificate", event)}
                                                type="text"
                                                name="from"
                                                id=""
                                                value={certification.from}
                                                placeholder="Certified From (Ex. Adobe) " />
                                        </div>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <div className="displayNameInput">
                                            <input
                                                onChange={(event) => handleJson("certificate", event)}
                                                type="number"
                                                name="year"
                                                id=""
                                                value={certification.year}
                                                placeholder="Year" />
                                        </div>
                                    </div>

                                    <div class="buttons">
                                        <div className="title2">
                                            <button className="drop" onClick={(event) => handleAddButton("certificate", event)}>Add</button>
                                        </div>
                                        <div className="title2">
                                            <button className="drop" onClick={(e) => handleOkayClick("certificate", e)}>Okay</button>
                                        </div>
                                    </div>
                                    <div>            
                                            { certificationArray && certificationArray.length > 0 ? ( <Table tableData={certificationArray} />) : ("")}
</div>
                                </div>
                            </div>


                            <div className="formElement">
                                <div className="title">
                                    <h3>Expertise</h3>
                                    <p>Add Here your fields of expertise</p>
                                </div>
                                <div className="displayNameInput" id="Occupation">
                                    <input type="text" name="expertise" value={expertise} onChange={(e)=>setExpertise(e.target.value)} id="" placeholder="Provide Technologies (Comma separated values)" />
                                </div>
                            </div>


                            <div className="formElement">
                                <div className="title">
                                    <h3>Personal Website</h3>
                                    <p>Include a link to your personal website or portfolio with your work samples.</p>
                                </div>
                                <div className="displayNameInput" id="Occupation">
                                    <input type="text" name="personalWebsite" value={personalWebsite}  onChange={(e)=>setWebsite(e.target.value)} id="" placeholder="Provide the Link" />
                                </div>
                            </div>
                            <button onClick={(e) => handleContinueClick(2,e)} class="continueButton">Continue</button>

                        </>) : ('')
                    }

                    {active === 3 ? (
                        <>
                            <h2 style={{ color: "#F04C43" }}>Account Security</h2>
                            <p>Trust and safety is a big deal in our community. Please verify your email and phone number so that we can keep your account secured.</p>
                            <br />

                            <div className="formElement2">
                                <div className="title">
                                    <h3>Email<span style={{ color: "#F04C43" }}>*</span></h3>
                                </div>
                                <div className="verified">
                                   { isEmailVerified ? ( <><p>verified</p> <img src={verified} /></>):(<p>Veirfy Now</p>)}
                                </div>
                            </div>
                            <div className="formElement2">
                                <div className="title">
                                    <h3>Phone<span style={{ color: "#F04C43" }}>*</span></h3>
                                </div>
                                <div className="verified">
                                    <p>{phoneNumber}</p>
                                </div>
                            </div>
                            <button class="continueButton">Continue</button>

                        </>) : ('')
                    }


                </form>





            </div>










        </>
    )
}

export default SellerInformationPage