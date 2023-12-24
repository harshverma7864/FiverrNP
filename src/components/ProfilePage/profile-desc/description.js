import React from "react";

const profile_disc = "I am a Medical Doctor with over a decade of clinical experience. I've published research for the Bill and Melinda Gates Foundation and Imperial College London. My professional background has given me a firm understanding of science and technology, which means I can write about a broad range of topics. I’m skilled at communicating complex ideas to people with varying levels of education and understanding. My past clients include global manufacturers, national newspapers, magazines, and Fortune 500 companies.";

const ProfileDesc = () => {

  return (
   <>
      <div className="profile-discrption">
        <div className="disc-title">
          <h1>Description</h1>
          <span>Edit</span>
        </div>
        <p>{profile_disc}</p>
      </div>

      <div className="line"></div>
      </>
  );
};

export default ProfileDesc;
