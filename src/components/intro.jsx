import React from "react";

function Intro(){
    return(
        <div className="Intro-container">
            <div className="greet">
                <span>Hi there, I'm</span>
                <h1 className="fullname">Yoonsung Kim</h1>
            </div>
            
            <div className="intro">
                <span className="content">I'm a Software Engineer in New York. I enjoy creating fun stuffs on web and I worked on projects involving frontend and backend.</span>
            </div>
        </div>
    )
}
export default Intro;