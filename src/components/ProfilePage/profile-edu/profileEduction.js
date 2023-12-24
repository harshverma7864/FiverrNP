import React from "react";

const ProfileEduction = () => {
  // Example education data
  const educationData = [
    {
      degree: "BCA",
      institute: "VNSGU",
      location: "India",
      graduationYear: 2023,
    },
    // Add more education entries as needed
  ];

  return (
    <>
    <div className="profile-discrption">
      <div className="disc-title">
        <h1>Education</h1>
        <span>Add New</span>
      </div>

      {educationData.map((education, index) => (
        <div key={index}>
          <h2>others - {education.degree}</h2>
          <p>
            {education.institute}, {education.location}, Passout {education.graduationYear}
          </p>
        </div>
      ))}
    </div>

      <div className="line"></div>
      </>
  );
};

export default ProfileEduction;
