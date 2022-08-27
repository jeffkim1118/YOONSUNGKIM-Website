import React from "react";
import YoutubeEmbed from "./youtubeEmbed";

function Videos(){
    return(
        <div className="demoVideoSection">
            <h1>Portfolio Showcase</h1>
            <div className="demoVideos">
                <div className="first-video" id="video">                 
                    <YoutubeEmbed embedId="QcDN3Q0TgCU"/>
                    <h3>GD Watcher</h3>
                    <p>Web app to display all video games deals in many online stores. Also, it creates watchlist to keep track of demanded video games to purchase.</p>
                    <a href="https://github.com/jeffkim1118/game-deals-watcher" target="_blank" rel="noreferrer">Github</a>
                </div>
                <div className="second-video" id="video">    
                    <YoutubeEmbed embedId="q6O9js6K6sY"/>
                    <h3>Bloggy</h3>
                    <p>A blogging web application built with React and Ruby on Rails frameworks. It utilizes PostgreSQL database to store users' credential and their blog posts. Implemented authentication and validation methods to make sure right user has right to make changes to their posts.</p>
                    <a href="https://github.com/jeffkim1118/blog-website" target="_blank" rel="noreferrer">Github</a>
                </div>
                <div className="third-video" id="video">               
                    <YoutubeEmbed embedId="d6Tzqg8BWzc"/>
                    <h3>Ez Weather</h3>
                    <p>A weather web application built with HTML5, CSS3, and JavaScript. It provides temperature and weather conditions of cities that are searched.</p>
                    <a href="https://github.com/jeffkim1118/EZ-Weather" target="_blank" rel="noreferrer">Github</a>
                </div>
            </div>
        </div>
    )
}
export default Videos;