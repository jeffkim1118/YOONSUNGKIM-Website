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
                    <a href=""></a>
                </div>
                <div className="second-video">
                    <h3>Bloggy</h3>
                    <YoutubeEmbed embedId="q6O9js6K6sY"/>
                    <a href=""></a>
                </div>
                <div className="third-video">
                    <h3>Ez Weather</h3>
                    <YoutubeEmbed embedId="d6Tzqg8BWzc"/>
                    <a href=""></a>
                </div>
            </div>
        </div>
    )
}
export default Videos;