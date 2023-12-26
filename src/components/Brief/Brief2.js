import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MainBrief from "./MainBrief";
// import arrows from "../../assets/images/arrows.png";

const Brief2 = ({ data, onFormSubmit, activeStep, onStepClick }) => {
  const [budgetInput, setBudgetInput] = useState("");
  const [deliveryDateInput, setDeliveryDateInput] = useState(null); // Use null as the initial state for the date
  const [isBudgetFlexible, setIsBudgetFlexible] = useState(false)
  const [formattedDeliveryDate, setFormattedDeliveryDate] = useState("");

  useEffect(() => {
    if (deliveryDateInput) {
      const formattedDate = new Date(deliveryDateInput).toLocaleDateString();
      setFormattedDeliveryDate(formattedDate);
    }
  }, [deliveryDateInput]);

  const handleContinue = () => {
    console.log("Continue button clicked");
    console.log("Budget Input:", budgetInput);
    console.log("Delivery Date Input:", deliveryDateInput);

    const formData = {
      budget: budgetInput,
      deliveryDate: formattedDeliveryDate,
      isBudgetFlexible: isBudgetFlexible,
      // Add other fields as needed
    };

    onFormSubmit(formData);

    const nextStep = activeStep + 1;
    onStepClick(nextStep);
  };

  return (
    <div className="brief-main-component">
      {/* Navigation */}
      <MainBrief data={data} />

      {/* Input for budget */}
      <div className="brief-project-title">
        <div className="brief-project">
          <h1>I'm looking to spend...</h1>
        </div>
        <div className="product-input">
          <div style={{ position: "relative" }}>
            <input
              className="brief"
              placeholder="Up To..."
              value={budgetInput}
              onChange={(e) => setBudgetInput(e.target.value)}
            />
          </div>
          <h5>Average range for this service: ₹3,498.31–₹21,864.41</h5>
          {/* Checkbox */}
          <div className="checkbox">
          <input 
              type="checkbox" 
              className="red-outline-checkbox" 
              name="hello" 
              onChange={() => setIsBudgetFlexible((prev) => !prev)}
            />
            <h4>My budget is flexible</h4>
          </div>
        </div>
      </div>

      {/* Input for delivery date */}
      <div className="brief-project-title">
        <div className="brief-project">
          <h1>Let’s talk timing</h1>
        </div>
        <div className="product-input">
          <div style={{ position: "relative" }}>
            <DatePicker
              className="brief"
              selected={deliveryDateInput}
              placeholderText="Select Delivery Date"
              onChange={(date) => setDeliveryDateInput(date)}
            />
          </div>
          <h5>We’ll find available freelancers.</h5>
        </div>
      </div>

      <button className="brief1-btn" onClick={handleContinue}>
        Submit
      </button>
    </div>
  );
};

export default Brief2;
