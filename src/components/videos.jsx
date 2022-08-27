import React from "react";
import YoutubeEmbed from "./youtubeEmbed";

function Videos(){
    return(
        <div className="demoVideoSection">
            <h1>Portfolio Showcase</h1>
            <div className="demoVideos">
                <div className="first-video">
                    <h3>GD Watcher</h3>
                    <YoutubeEmbed embedId="QcDN3Q0TgCU"/>
                    <p>Web app to display all video games deals in many online stores. Also, it creates watchlist to keep track of demanded video games to purchase.</p>
                    <a href="https://github.com/jeffkim1118/game-deals-watcher" target="_blank" rel="noreferrer">Github</a>
                </div>
                <div className="second-video">
                    <h3>Bloggy</h3>
                    <YoutubeEmbed embedId="q6O9js6K6sY"/>
                    <p>This is a simple blogging website that used React and Rails</p>
                    <a href="https://github.com/jeffkim1118/blog-website" target="_blank" rel="noreferrer">Github</a>
                </div>
                <div className="third-video">
                    <h3>Ez Weather</h3>
                    <YoutubeEmbed embedId="d6Tzqg8BWzc"/>
                    <span>A weather web application built with HTML5, CSS3, and JavaScript. It provides temperature and weather conditions of cities that are searched.</span>
                    <a href="https://github.com/jeffkim1118/EZ-Weather" target="_blank" rel="noreferrer">Github</a>
                </div>
            </div>
        </div>
    )
}
export default Videos;