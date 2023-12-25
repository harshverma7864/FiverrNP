import React, { useState } from "react";
import "../../assets/styles/Brief/brief1.css";
import arrows from "../../assets/images/arrows.png";
import mark from "../../assets/images/Vector.png";
import uploader from "../../assets/images/upload-big.png";

const Brief1 = ({ activeStep, onStepClick }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [titleInputValue, setTitleInputValue] = useState("");
  const [descriptionInputValue, setDescriptionInputValue] = useState("");

  const titleWordLimit = 70;
  const descriptionWordLimit = 2000;

  console.log(activeStep);
  console.log(onStepClick);

  const Upgrade = ["Digital Marketing", "CSS", "HTML"];

  const handleInputChange = (event, setValue, limit) => {
    const inputText = event.target.value;
    const words = inputText.split(/\s+/).filter((word) => word !== "");
    const wordCount = words.length;

    if (wordCount <= limit) {
      setValue(inputText);
    }
  };

  const remainingTitleWords = titleWordLimit - titleInputValue.split(/\s+/).filter((word) => word !== "").length;
  const remainingDescriptionWords = descriptionWordLimit - descriptionInputValue.split(/\s+/).filter((word) => word !== "").length;

  const handleContinue = () => {
    console.log("handleContinue called. onStepClick:", onStepClick);
    if (activeStep === 1) {
      // Add logic for step 1 continuation if needed
    }

    const nextStep = activeStep + 1;
    console.log("Next Step:", nextStep);
    onStepClick(nextStep);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    setIsDragOver(false);

    const files = event.dataTransfer.files;

    for (const file of files) {
      console.log('Dropped file:', file.name);
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log('Selected file:', selectedFile.name);
  };

  return (
    <div className="brief-main-component">
      <div className="brief-navigate">
        <div className="brief-navigate-title">
          <h1
            className={activeStep === 1 ? "active" : ""}
            onClick={() => handleContinue(1)}
          >
            1. Share brief description
          </h1>
          <img className="brief-arrow" src={arrows} alt="arrows" />
          <h1
            className={activeStep === 2 ? "active" : ""}
            onClick={() => handleContinue(2)}
          >
            2. Add timeline and budget
          </h1>
        </div>
        <h2>Exit</h2>
      </div>

      <div className="brief-subtitle">
        <h2>Let the matching begin...</h2>
        <h4>This is where you fill us in on the big picture. <span>How does this matching thing work?</span></h4>
      </div>

      <div className="brief-freelance">
        <div className="freelance-title">
          <img src={mark} alt="arrows" /> <h3>Are you a freelancer?</h3>
        </div>
        <div className="brief-button">
          <button>Become a Seller</button>
        </div>
      </div>

      <div className="brief-project-title">
        <div className="brief-project">
          <h1>Give your project brief a title</h1>
          <h5>Keep it short and simple - this will help us match you to the right category.</h5>
        </div>
        <div className="product-input">
          <div style={{ position: "relative" }}>
            <input
              className="brief"
              placeholder="Example: Create a WordPress Website For My Company"
              value={titleInputValue}
              onChange={(event) => handleInputChange(event, setTitleInputValue, titleWordLimit)}
            />
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                right: "10px",
                color: remainingTitleWords >= 0 ? "black" : "red",
              }}
            >
              {remainingTitleWords >= 0 ? `${titleWordLimit - remainingTitleWords}/${titleWordLimit} ` : "Limit exceeded"}
            </div>
          </div>
          <h5>Some Title Examples</h5>
        </div>
      </div>

      <div className="brif-project-main-scnd">
        <div className="brief-project-title-scnd">
          <div className="brief-project">
            <h1>What are you looking to get done?</h1>
            <h5>This will help get your brief to the right talent. Specifics help here.</h5>
          </div>
          <div className="product-input">
            <div style={{ position: "relative" }}>
              <input
                className="brief"
                placeholder="I Need........."
                value={descriptionInputValue}
                onChange={(event) => handleInputChange(event, setDescriptionInputValue, descriptionWordLimit)}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "10px",
                  color: remainingDescriptionWords >= 0 ? "black" : "red",
                }}
              >
                {remainingDescriptionWords >= 0 ? `${descriptionWordLimit - remainingDescriptionWords}/${descriptionWordLimit} ` : "Limit exceeded"}
              </div>
            </div>
            <h5>How To Write a Good Description</h5>
          </div>
        </div>

        <div className="uploader">
          <div className="uploader-file">
            <div className={`uploader-img-div ${isDragOver ? 'drag-over' : ''}`} onDragOver={handleDragOver} onDrop={handleFileDrop}>
              <img className="uploader-img" src={uploader} alt="up" />
            </div>
            <div className="file-input-container" onDragOver={handleDragOver} onDrop={handleFileDrop}>
              <p>Drag File Here To Upload</p>
              <input type="file" id="fileInput" onChange={handleFileChange} />
            </div>
          </div>
        </div>
      </div>

      <div className="brif-project-main-third">
        <div className="multiple-option">
          <div className="option-container">
            <label>Which category fits your project?</label>
            <select>
              <option value=""> Select 1 Category</option>
              <option value="left-hand">Left Hand</option>
              <option value="right-hand">Right Hand</option>
            </select>
          </div>

          <div className="option-container">
            <label>Which industry are you in?</label>
            <select>
              <option value=""> Select Industry</option>
              <option value="left-hand">Left Hand</option>
              <option value="right-hand">Right Hand</option>
            </select>
          </div>

          <div className="option-container">
            <label>Choose up to 2 website types</label>
            <select>
              <option value=""> Select</option>
              <option value="left-hand">Left Hand</option>
              <option value="right-hand">Right Hand</option>
            </select>
          </div>

          <div className="option-container">
            <label>Choose up to 2 types of expertise designer should have</label>
            <select>
              <option value=""> Select</option>
              <option value="left-hand">Left Hand</option>
              <option value="right-hand">Right Hand</option>
            </select>
          </div>
        </div>

        <div className="multiple-option">
          <h3>Upgrade with popular extras (Optional)</h3>
          <div className="language">
            {Upgrade.map((lang, index) => (
              <div key={index} className="language-box">
                {lang}
              </div>
            ))}
          </div>
        </div>
      </div>

      <button className="brief1-btn" onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
};

export default Brief1;
