import React from "react";

const ProfileCertification = ({ userData }) => {
  // Example certification data
  const certificationData = userData || [];

  return (
    <>
      <div className="profile-discrption">
        <div className="disc-title">
          <h1>Certification</h1>
          <span>Add New</span>
        </div>
        {certificationData.length > 0 ? (
          certificationData.map((certification, userIndex) => (
            <div key={userIndex}>
              {certification.certifications && certification.certifications.length > 0 ? (
                certification.certifications.map((certificationEntry, index) => (
                  <div key={index}>
                    <h2>{certificationEntry.name}</h2>
                    <p>
                      {certificationEntry.from}, Completion Year: {certificationEntry.year}
                    </p>
                  </div>
                ))
              ) : (
                <p>No certifications available.</p>
              )}
            </div>
          ))
        ) : (
          <p>No certification data available.</p>
        )}
      </div>
    </>
  );
};

export default ProfileCertification;
