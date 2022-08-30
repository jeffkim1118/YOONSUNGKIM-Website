import React from "react";
import Pic from "../images/pic2.jpg";

function Bio(){
    return(
        <div className="bio-section">
            <div className="bio-container">
                <img src={Pic} alt="mypic" className="bio-photo"/>
                <p className="bio-content">Born in South Korea, raised in New York. 
                I graduated from CUNY Baruch College, Zicklin School of Business as a Computer Information Systems major in 2021.
                I spent my time, after college, to figure out what do I want to do with my life. Then, I decided to become a Software Engineer
                to work in business and technology field. I started out my coding journey with self-learning HTML, CSS, and JavaScript. Then,
                I moved on to learning a JavaScript framework called REACT JS. Here's my first personal website project that I worked on before building this
                website: <a href="https://yoonsungkim.netlify.app/" target="_blank" rel="noreferrer">First version of my website</a>. I moved on further in learning by
                attending Flatiron School Software Engineering program and graduated in 2022.
                </p>
            </div>
        </div>
    )
}
export default Bio;