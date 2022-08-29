import React from "react";
import Pic from "../images/pic2.jpg";

function Bio(){
    return(
        <div className="bio-section">
            <div className="bio-container">
                <img src={Pic} alt="mypic" className="bio-photo"/>
                <p className="bio-content">Born in South Korea, raised in New York.</p>
            </div>
        </div>
    )
}
export default Bio;