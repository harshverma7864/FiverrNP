import { React } from "react";
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

const ProfilePage = () => {
  const first_name = "Navneet";
  const last_name = "Kumar";
  const username = "navi@9971";
  const profileBio = "4X Award Winning Designer and Creator";

  const rank_number = "4.5";
  const ranked_user = "15";

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
            {/* <div className="bubble">
              <span class="bubble-outer-dot">
                <span class="bubble-inner-dot"></span>
              </span>
            </div> */}
          </div>

          <div className="profile-user-names">
            <h1>
              {" "}
              {first_name} {last_name} <span>@{username}</span>
            </h1>
            <h3>{profileBio}</h3>
            <img src={star} alt="star-rank" />
            <span className="ranked-number">{rank_number}</span>{" "}
            <span className="ranked-number">({ranked_user}K)</span>
          </div>

          <div className="profile-from-since">
            <div className="from">
              <h2>From</h2>
              <h4>India</h4>
            </div>

            <div className="since">
              <h2>Member Since</h2>
              <h4>Dec 2013</h4>
            </div>
          </div>

          <button> Perview Profile</button>
        </div>

        <div className="profile-content">
          <ProfileDesc />
          <LanguagesComponent />
          <ProfileSkills />
          <ProfileEduction />
          <ProfileCertification />
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
