import React, { useEffect, useState } from "react";
import axiosInstance from "../../interceptors/axios";
import "../../assets/styles/profilepage/profilepage.css";
import profileHead from "../../assets/images/profile-head.png";
import profileHead2 from "../../assets/images/profile-head-2.png";
import ProfileDesc from "./profile-desc/description";
import LanguagesComponent from "./profile-langu/profileLanguge";
import ProfileSkills from "./Profile-skills/ProfileSkills";
import ProfileEduction from "./profile-edu/profileEduction";
import ProfileCertification from "./profile-certficate/profileCerti";
import star from "../../assets/images/Star 1.png";
import learning from "../../assets/images/learning.png";
import logo from "../../assets/images/mainlogo.png";


function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString().slice();
  return `${day}/${month}/${year}`;
}


const ProfilePage = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axiosInstance.get('accounts/seller/');
        setUserData(result.data);
        console.log(result.data);
      } catch (error) {
        console.error('Error in component:', error);

        if (error.response) {
          console.error('Error response:', error.response.data);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="profile-page-container">
        <div className="profile-top-main">
          <img
            className="profile-img-left"
            src={profileHead2}
            alt="img-head2"
          />
          <div className="profile-top-box">
            <h1>Ready to earn on your own terms?</h1>
            <button>Become a seller</button>
          </div>
          <img
            src={profileHead}
            className="profile-top-img-right"
            alt="img-head"
          />
        </div>

        <div className="profile-section">
          <div className="profile-status">
            <img
              className="profile-circle"
              src={profileHead}
              alt="profile-img"
            />
          </div>
          <div className="profile-user-names">
            {userData.map((user, index) => (
              <div key={index}>
                <h1>
                  {user.display_name} {user.last_name} <span>@{user.username}</span>
                </h1>
                <h3>{user.country_description}</h3>
                <img src={star} alt="star-rank" />
                <span className="ranked-number">{user.rating_details.overall_rating}</span>{" "}
                <span className="ranked-number">({user.ranked_user}K)</span>
              </div>
            ))}
          </div>

          <div className="profile-from-since">
  {userData.map((user, index) => (
    <>
      <div className="from" key={index}>
        <h2>From</h2>
        <h4>{user.country}</h4>
      </div>

      <div className="since">
        <h2>Member Since</h2>
        <h4>{formatDate(user.onboarding_time)}</h4>
      </div>
    </>
  ))}
</div>
        
          <button>Preview Profile</button>
        </div>    

        <div className="profile-content">
        <ProfileDesc userData={userData} />
        <LanguagesComponent userData={userData} />
<ProfileSkills userData={userData} />
<ProfileEduction userData={userData} />
<ProfileCertification userData={userData} />
        </div>

        <div className="profile-bottom-main">
          <img
            className="profile-bottom-img-left"
            src={learning}
            alt="img-head2"
          />

          <div className="profile-bottom-box">
            <h1>Earn badges and stand out</h1>
            <h3>Boost your sales, by boosting your expertise.</h3>
            <button>Enroll Now</button>
          </div>

          <img src={logo} className="profile-bottom-img-right" alt="img-head" />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
