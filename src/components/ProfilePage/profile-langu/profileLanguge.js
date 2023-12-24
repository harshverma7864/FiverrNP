import React from "react";

const LanguagesComponent = () => {
  const languages = ["English", "Hindi", "Urdu"];
  const speeds = ["Normal", "Fluent", "Average"];

  return (
    <>
      <div className="profile-discrption">
        <div className="disc-title">
          <h1>Languages</h1>
          <span>Add New</span>
        </div>
        <div>
          <ul>
            {languages.map((language, index) => (
              <li key={index}>
                {language} - {speeds[index]}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="line"></div>
    </>
  );
};

export default LanguagesComponent;
