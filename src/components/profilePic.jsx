import React from "react";
import MyImage from '../images/pic.jpg';

function ProfilePic(){
    return(
        <div className="image-container" id="main-page">
            <img className="profilePic" src={MyImage} alt="profile"/>
        </div>
    )
}
export default ProfilePic;