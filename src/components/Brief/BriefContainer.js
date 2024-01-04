import React, { useState } from "react";
import Brief1 from "./Brief1";
import Brief2 from "./Brief2";
import Brief3 from "./Brief3";
import arrows from "../../assets/images/arrows.png";
import Navbar from "../Navbar/Navbar";

const BriefContainer = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState(null);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  const handleFormSubmit = (data) => {
    const newFormData = { ...formData, ...data };
    console.log("Form data submitted:", newFormData);
    setFormData(newFormData);

    // Increment activeStep when form is submitted
    setActiveStep(activeStep + 1);
  };

  return (
    <>
    <Navbar />
      <div className="brief-main-component">
      <div className="brief-navigate">
        <div className="brief-navigate-title">
          <h1
            className={activeStep === 1 ? "active" : ""}
            onClick={() => handleStepClick(1)}
          >
            1. Share brief description
          </h1>
          <img className="brief-arrow" src={arrows} alt="arrows" />
          <h1
            className={activeStep === 2 ? "active" : ""}
            onClick={() => handleStepClick(2)}
          >
            2. Add timeline and budget
          </h1>
        </div>
        <h2>Exit</h2>
      </div>
      </div>

      {activeStep === 1 && (
        <Brief1
          activeStep={activeStep}
          onStepClick={handleStepClick}
          onFormSubmit={handleFormSubmit}
        />
      )}
      {activeStep === 2 && (
        <Brief2
          activeStep={activeStep}
          onStepClick={handleStepClick}
          onFormSubmit={handleFormSubmit}
        />
      )}
      {activeStep === 3 && (
  <Brief3
    onStepClick={handleStepClick}
    onFormSubmit={handleFormSubmit}
    formData={formData}
  />
)}

    </>
  );
};

export default BriefContainer;
