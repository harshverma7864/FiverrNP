import React, { useState } from "react";
import Brief1 from "./Brief1";
import Brief2 from "./Brief2";
import Brief3 from "./Brief3";

const BriefContainer = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState();
  /* structure of formData
    { title: '',
      description: '',
      category: '',
      industry: '',
      websiteType: '',
      expertise: '',
      image: file,
      budget: 0,
      isBudgetFlexible: false,
      deliveryDate: Date() } */

  const handleStepClick = (step) => {
    setActiveStep(step);
    return 2;
  };

  const handleFormSubmit = (data) => {
    // Combine the new data with the existing form data
    const newFormData = { ...formData, ...data };
    console.log("Form data submitted:", newFormData);

    setFormData(newFormData);
  };

  return (
    <>
      {activeStep === 1 && (
        <Brief1
          activeStep={activeStep}
          onStepClick={(step) => handleStepClick(step)}
          onFormSubmit={handleFormSubmit}
        />
      )}
      {activeStep === 2 && (
        <Brief2 
          activeStep={activeStep} 
          onStepClick={(step) => handleStepClick(step)} 
          onFormSubmit={handleFormSubmit}
        />
      )}
      {activeStep === 3 && (
        <Brief3 
          activeStep={activeStep} 
          onStepClick={(step) => handleStepClick(step)} 
          onFormSubmit={handleFormSubmit}
          formData={formData}
        />
      )}
    </>
  );
};



export default BriefContainer;
