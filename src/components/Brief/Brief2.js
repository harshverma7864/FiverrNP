import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MainBrief from "./MainBrief";
import arrows from "../../assets/images/arrows.png";

const Brief2 = ({ data }) => {
  const [budgetInput, setBudgetInput] = useState("");
  const [deliveryDateInput, setDeliveryDateInput] = useState(null); // Use null as the initial state for the date

  const handleContinue = () => {
    console.log("Continue button clicked");
    console.log("Budget Input:", budgetInput);
    console.log("Delivery Date Input:", deliveryDateInput);
    // You can now use 'budgetInput' and 'deliveryDateInput' in your logic
  };

  return (
    <div className="brief-main-component">
      {/* Navigation */}
      <div className="brief-navigate">
        <div className="brief-navigate-title">
          <>
            <h1 className="active">1. Share brief description</h1>
            <img className="brief-arrow" src={arrows} alt="arrows" />
            <h1>2. Add timeline and budget</h1>
          </>
          <>
            <h1>1. Share brief description</h1>
            <img className="brief-arrow" src={arrows} alt="arrows" />
            <h1 className="active">2. Add timeline and budget</h1>
          </>
        </div>
        <h2>Exit</h2>
      </div>

      <MainBrief data={data} />

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
            <input type="checkbox" className="red-outline-checkbox" name="hello" />
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
              selected={deliveryDateInput}
              onChange={(date) => setDeliveryDateInput(date)}
              placeholderText="Select Delivery Date"
            />
          </div>
          <h5>We’ll find available freelancers.</h5>
        </div>
      </div>

      <button className="brief2-btn" onClick={handleContinue}>
        Submit
      </button>
    </div>
  );
};

export default Brief2;
