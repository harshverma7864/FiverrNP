import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../assets/styles/Brief/berif2.css"
// import arrows from "../../assets/images/arrows.png";
import calendar from "../../assets/images/calnder.png";
import mark from "../../assets/images/Vector.png";

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
      <div className="brief-subtitle">
        <h2>Now let's talk budget and timing</h2>
        <h4>You're not committing to anything final here.This just helps us find you the most relevant<span>How does this matching thing work?</span></h4>
      </div>

      <div className="brief-freelance">
        <div className="freelance-title">
          <img src={mark} alt="arrows" /> <h3>Are you a freelancer?</h3>
        </div>
        <div className="brief-button">
          <button>Become a Seller</button>
        </div>
      </div>

      {/* Input for budget */}
      <div className="brief2-project-title">
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
      <div className="brief2-project-title">
  <div className="brief-project">
    <h1>Let’s talk timing</h1>
  </div>
  <div className="product-input">
    <div style={{ position: "relative" }}>
      <DatePicker
        className="brief2"
        selected={deliveryDateInput}
        placeholderText="Select Delivery Date"
        onChange={(date) => setDeliveryDateInput(date)}
      />
      <span style={{ position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)" }}>
        {/* Render the calendar icon */}
        <img src={calendar} alt= "calendar" />
      </span>
    </div>
    <h5 className="brief2">We’ll find available freelancers.</h5>
  </div>
</div>

      <button className="brief1-btn" onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
};

export default Brief2;
