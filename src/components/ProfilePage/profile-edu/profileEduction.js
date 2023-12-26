import React from "react";

const ProfileEduction = ({ userData }) => {
  // Check if userData exists and has education as an array
  const educationData = userData || [];

  return (
    <>
      <div className="profile-discrption">
        <div className="disc-title">
          <h1>Education</h1>
          <span>Add New</span>
        </div>

        {educationData.length > 0 ? (
          educationData.map((education, index) => (
            <div key={index}>
              {education.education && education.education.length > 0 ? (
                <>
                  {education.education.map((education, skillIndex) => (
                    <div key={skillIndex}>
                      <h2>{education.major} - {education.title}</h2>
                      <p>
                        {education.college}, {education.country}, Passout {education.passout_year}
                      </p>
                    </div>
                  ))}
                </>
              ) : (
                <p>No skills found for this education.</p>
              )}
            </div>
          ))
        ) : (
          <p>No education data found.</p>
        )}
      </div>

      <div className="line"></div>
    </>
  );
};

export default ProfileEduction;
