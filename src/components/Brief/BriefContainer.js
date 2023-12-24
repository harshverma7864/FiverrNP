import React, { useState } from "react";
import Brief1 from "./Brief1";
import Brief2 from "./Brief2";

const BriefContainer = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      {activeStep === 1 && <Brief1 activeStep={activeStep} onStepClick={handleStepClick} />}
      {activeStep === 2 && <Brief2 activeStep={activeStep} onStepClick={handleStepClick} />}
    </>
  );
};

export default BriefContainer;
