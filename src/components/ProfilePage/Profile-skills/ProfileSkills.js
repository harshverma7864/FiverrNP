import React from "react";

const SkillsComponent = ({ userData }) => {
   // Check if userData exists and has language_proficiency as an array
   const users = userData || [];

    // Log the users to the console for debugging
  console.log("Users:", users);

  return (
    <>
    <div className="profile-discrption">
      <div className="disc-title">
        <div className="skills-language">
          <h1>Skills</h1>

          <div className="language">
          {users.length > 0 ? (
            users.map((user, userIndex) => (
              <>
              {/* <h2>User: {userIndex + 1}</h2> */}
                {user.skills && user.skills.length > 0 ? (
             <>     
             {user.skills.map((skills, index) => (
              <div key={index} className="language-box">
              {skills.skill} - {skills.experience}
              </div>
            ))}
            </>
                ) : (
                  <p>No languages found for this user.</p>
                )}
                </>
              ))
          ) : (
            <p>No users found.</p>
          )}
        </div>
        </div>
        <span>Add New</span>
      </div>
    </div>

      <div className="line"></div>
      </>
  );
};

export default SkillsComponent;
