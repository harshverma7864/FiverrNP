import React from "react";

const SkillsComponent = () => {
  const languages = ["Digital Marketing", "CSS", "HTML"];

  return (
    <>
    <div className="profile-discrption">
      <div className="disc-title">
        <div className="skills-language">
          <h1>Skills</h1>

          <div className="language">
            {languages.map((lang, index) => (
              <div key={index} className="language-box">
                {lang}
              </div>
            ))}
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
