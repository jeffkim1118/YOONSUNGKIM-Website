import React from "react";
import GithubLogo from "../images/githublogo.png";
import LinkedinLogo from "../images/linkedinlogo.png";
import MediumLogo from "../images/mediumlogo.png";

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
                <a href="https://github.com/jeffkim1118" rel="noreferrer" target="_blank" className="githubLink" id="linkURL">
                    <img src={GithubLogo} alt="github-link" id="logo"/>
                </a>
                <a href="https://www.linkedin.com/in/yoonsung-kim-639b30178/" rel="noreferrer" target="_blank" className="linkedinLink" id="linkURL">
                    <img src={LinkedinLogo} alt="linkedin-link" id="logo"/>
                </a>
                <a href="https://medium.com/@1019yskim" rel="noreferrer" target="_blank" className="mediumLink" id="linkURL">
                    <img src={MediumLogo} alt="medium-blog-link" id="logo"/>
                </a>
            </div>
        </div>
    )
}
export default Intro;