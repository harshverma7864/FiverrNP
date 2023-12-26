import React, { useState, useEffect } from "react";
import ToggleSwitch from "../../toggleswitch/toggleSwitch";
import "../../styles/Simulation/simulation.css";
import axiosInstance from "../../interceptors/axios";

function App() {
  const [isSimulation, setIsSimulation] = useState(true);
  const [responseData, setResponseData] = useState(null);  // Change to null initially

  const toggleSimulation = () => {
    setIsSimulation(!isSimulation);
  };

  useEffect(() => {
    axiosInstance
      .get('sean/itemli/')
      .then(response => {
        console.log('Response:', response.data);
        setResponseData(response.data[1]);  // Set data at index 1
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <ToggleSwitch active={!isSimulation} onClick={toggleSimulation} />

      <div className="simulation_btn">
        <button className="simulation_left_btn">Button 1</button>
        <button className="simulation_cntr_btn">Button 2</button>
        <button className="simulation_right_btn">Button 3</button>
      </div>

      <div className="simulation_content">
        <div className="simulation_box">
          <h3 className="simulation_box_title">How would you respond to this situation. (Max 30 words)</h3>

          {responseData && (
            <div className="simulation_item">
              <div className="simulation_content_pic">
                <img className="simulation_thumb" src={responseData.thumbnail} alt="thumbnail" />
              </div>
              <div className="simulation_title_left">
                <h4 className="simulation_heding_left">{responseData.item_name}</h4>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
