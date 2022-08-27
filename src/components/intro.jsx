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

            <div className="links">
                <a href="https://github.com/jeffkim1118" rel="noreferrer" target="_blank" className="githubLink" id="linkURL">Github</a>
                <a href="https://www.linkedin.com/in/yoonsung-kim-639b30178/" rel="noreferrer" target="_blank" className="linkedinLink" id="linkURL">Linkedin</a>
                <a href="https://medium.com/@1019yskim" rel="noreferrer" target="_blank" className="mediumLink" id="linkURL">Medium Blog</a>
            </div>
        </div>
    )
}
export default Intro;