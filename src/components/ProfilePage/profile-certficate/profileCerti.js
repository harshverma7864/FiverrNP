import React from "react";

const ProfileCertification = () => {
  // Example certification data
  const certificationData = [
    {
      title: "React Developer Certification",
      provider: "CodeAcademy",
      completionYear: 2022,
    },
    {
      title: "Digital Marketing Specialist",
      provider: "Google",
      completionYear: 2021,
    },
    // Add more certification entries as needed
  ];

  return (
    <>
    <div className="profile-discrption">
      <div className="disc-title">
        <h1>Certification</h1>
        <span>Add New</span>
      </div>

      {certificationData.map((certification, index) => (
        <div key={index}>
          <h2>{certification.title}</h2>
          <p>
            {certification.provider}, Completion Year: {certification.completionYear}
          </p>
        </div>
      ))}
    </div>

    </>
  );
};

export default ProfileCertification;
