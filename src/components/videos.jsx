import React from "react";
import YoutubeEmbed from "./youtubeEmbed";

function Videos(){
    return(
        <div className="demoVideoSection">
            <div className="demoVideos">
                <YoutubeEmbed embedId="QcDN3Q0TgCU"/>
                <YoutubeEmbed embedId="q6O9js6K6sY"/>
                <YoutubeEmbed embedId="d6Tzqg8BWzc"/>
            </div>
        </div>
    )
}
export default Videos;