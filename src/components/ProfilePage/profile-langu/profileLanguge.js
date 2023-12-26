import React from "react";

const LanguagesComponent = ({ userData }) => {
  // Check if userData exists and has language_proficiency as an array
  const users = userData || [];

  // Log the users to the console for debugging
  console.log("Users:", users);

  return (
    <>
      <div className="profile-discrption">
        <div className="disc-title">
          <h1>Languages</h1>
          <span>Add New</span>
        </div>
        <div>
        {users.length > 0 ? (
            users.map((user, userIndex) => (
              <>
              {/* <h2>User: {userIndex + 1}</h2> */}
                {user.language_proficiency && user.language_proficiency.length > 0 ? (
                  <ul>
                    {user.language_proficiency.map((language, index) => (
                      <li key={index}>
                        {language.language} - {language.profiency}
                      </li>
                    ))}
                  </ul>
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

      <div className="line"></div>
    </>
  );
};

export default LanguagesComponent;
