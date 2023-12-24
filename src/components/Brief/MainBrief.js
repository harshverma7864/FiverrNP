import React from "react";
import mark from "../../assets/images/Vector.png";

const MainBrief = () => {

    return(
<div className="brief-main-component">
<div className="brief-subtitle">
        <h2>Now let's talk budget and timing</h2>
        <h4>You're not committing to anything final here. This just helps us find you the most relevant</h4>
      </div>

      <div className="brief-freelance">
        <div className="freelance-title">
          <img src={mark} alt="arrows" /> <h3>Are you a freelancer?</h3>
        </div>
        <div className="brief-button">
          <button>Become a Seller</button>
        </div>
      </div>

</div>
    );
};

export default MainBrief;