import { useState } from 'react';
import SellerService from '../../services/SellerService';
import { useHistory } from 'react-router-dom';
import axiosInstance from '../../utils/axios';
import { API_BASE_URL, SELLER_URI } from '../../environment';
import Cookies from 'js-cookie';


const useInfoLogic = () => {
  
  const [profilePicture, setProfilePicture] = useState(); 
  const [displayName , setDisplayName] = useState();
   const [desc , setDesc] = useState();
   const [language , setLanguage] = useState({language:'' , profiency:''});
   const [occupation  , setOccupation] = useState();
   const [country , setCountry] = useState("");
   const [selectedFile , setSelectedFile] = useState();
   const [expertise , setExpertise] = useState("");
   const [personalWebsite , setWebsite] = useState("");
   const [skill , setSkills] = useState({skill:'', experience:''});
   const [education  , setEducation] = useState({country:'', college:'' , title:'' , major:'', passout_year:null});
   const [certification  , setCertification] = useState({name:'', from:'' , year:null });
   const [certificationArray, setCertArray] = useState([]);
   const [skillAray, setSkillArray] = useState([]);
   const [educationArray, setEducationArray] = useState([]);
   const [languageArray, setLanguageArray] = useState([]);
   const formData = new FormData();
   const [complete1,setComplete1] = useState(false);
   const [complete2,setComplete2] = useState(false);
   const [complete3,setComplete3] = useState(false);
   const [active,setActive] = useState(1);
    const history = useHistory();

    const handleJson= (section,event)=>{
      const { name, value } = event.target;
      console.log(event.target)
      switch (section) {
        case "language":
          setLanguage((prevData) => ({
            ...prevData,
            [name]: value,
          }));
          break;
        case "skill":
          setSkills((prevData) => ({
            ...prevData,
            [name]: value,
          }));
          break;
        case "education":
          setEducation((prevData) => ({
            ...prevData,
            [name]: value,
          }));
          break;
        case "certificate":
          setCertification((prevData) => ({
            ...prevData,
            [name]: value,
          }));
          break;
        default:
          // Handle unknown section
          break;
      }
      
    }


   const handleAddButton  = (section, event)=>{
      event.preventDefault();
      switch (section) {
        case "language":
          setLanguageArray((prevArray) => [...prevArray, language]);
          setLanguage({ language: '', profiency: '' });
          break;
        case "skill":
          setSkillArray((prevArray) => [...prevArray, skill]);
          setSkills({ skill: "", experience: "" });
          break;
        case "education":
          setEducationArray((prevArray) => [...prevArray, education]);
          setEducation({ country: '', college: '', title: '', major: '', passout_year: 0 });
          break;
        case "certificate":
          setCertArray((prevArray) => [...prevArray, certification]);
          setCertification({ name: '', from: '', year: 0 });
          break;
        default:
          // Handle unknown section
          break;
      }
      
   }


    const handleImageChange = (event) =>{
        const inputElement = event.target;

        if (inputElement.files.length > 0) {
            const selectFile = inputElement.files[0];
            setSelectedFile(selectFile);
            const imageUrl = URL.createObjectURL(selectFile);
            setProfilePicture(imageUrl);
        }
    }

   const handleOkayClick = (section,e) =>{

    e.preventDefault();

    // switch (section) {
    //   case "skill":
    //     formData.append("skills",skillAray)
    //     break;
    //   case "education":
    //     formData.append("education",educationArray)
    //     break;
    //   case "certificate":
    //     formData.append("certifications",certificationArray)
    //     break;
    //   default:
    //     break;
    // }
    
   }



   const handleContinueClick = async (number , e) =>{
    e.preventDefault();  
    switch (number) {
        case 1:
          setActive(2)
          break
        case 2:
          formData.append('display_name', displayName);
          formData.append('description', desc);
          formData.append('language_proficiency', JSON.stringify(languageArray));
          formData.append('skills', JSON.stringify(skillAray));
          formData.append('education', JSON.stringify(educationArray));
          formData.append('certifications', JSON.stringify(certificationArray));
          formData.append('occupation', occupation);
          formData.append('personal_website', personalWebsite);
          formData.append('expertise', expertise);
          formData.append('country', country);


          // const mainJson = {
          //     country:country,
          //     description:desc,
          //     display_name:displayName,
          //     language_proficiency:languageArray,
          //     skills:skillAray,
          //     education:educationArray,
          //     certifications:certificationArray,
          //     personal_website:personalWebsite,
          //     expertise:expertise,
          //     occupation:occupation

          // }

          axiosInstance
          .post(`${API_BASE_URL}/${SELLER_URI}/`, formData)
          .then(async (res)=>{
            console.log(res.status)
            if (res.status === 201 || res.status === 200) {
              const userProfile = JSON.parse(Cookies.get("user"));
              Cookies.remove("user");
              userProfile.first_login = "False";
              Cookies.set("user", JSON.stringify(userProfile));
              const firstLogin = new FormData();
              firstLogin.append("first_login", "False");
              axiosInstance
              .put(`${API_BASE_URL}/accounts/user/${userProfile.id}/`)
              .then(async (response)=>{
                if (response.status === 201 || response.status === 200) {
                  setActive(3);
                  alert("Seller Profile Created SuccessFully")
                }else{
                  console.log("Error : " + response.status)
                }

              })
            }else{
              console.log(res.status)
            }
          })
          
          break   
        case 3:
          history.push("/profilepage")   
        default:
          break;
      }                      
   }

   const submitFormData = async() =>{
      
   }

  return {
    complete1,
    complete2,
    complete3,
    active,
    displayName, 
    desc, 
    personalWebsite,
    language,
    skill,
    occupation,
    education, 
    country, expertise,
    certification,
    profilePicture,
    skillAray,
    languageArray,
    educationArray, 
    certificationArray,   
    handleImageChange,
    setProfilePicture,
    setActive,
    setWebsite,
    setCountry, 
    setExpertise,
    handleJson,
    setDisplayName, 
    setDesc, 
    setOccupation, 
    handleAddButton,
    handleOkayClick,
    handleContinueClick,
  };
};

export default useInfoLogic;