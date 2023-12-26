import React from "react";


const ProfileDesc = ({ userData }) => {
  // Access userData and render relevant information
  const userDescription = userData.map((user, index) => (
    <p key={index}>{user.description}</p>
  ));

  return (
   <>
      <div className="profile-discrption">
        <div className="disc-title">
          <h1>Description</h1>
          <span>Edit</span>
        </div>
        <p>{userDescription}</p>
      </div>

      <div className="line"></div>
      </>
  );
};

export default ProfileDesc;
