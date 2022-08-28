import React from "react";
import Intro from './intro';
import ProfilePic from './profilePic';


function Home() {
    return(
        <div className="content-container">
            <ProfilePic />
            <Intro />
        </div>
    )
}
export default Home;