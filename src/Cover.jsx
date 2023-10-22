import React from 'react'
import heart from "./assets/icons/heart.svg";
import dots from "./assets/icons/dots.svg";
import play from "./assets/icons/play.svg";

const Cover = ({album}) => {
  return (
    <div className="album__cover-container">
        <img src={album.images[0].url} alt={album.name} />
        <div className="album-overlay">
            <div className="album__icons-container">
                <button type="button" class="icon-button">
                    <img className="icon" src={heart} alt="Like"/>
                </button>
                <button type="button" class="icon-button">
                    <img className="icon" src={dots} alt="Dots" />
                </button>
                <button type="button" class="icon-button">
                    <img className="icon play-icon" src={play} alt="Play" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Cover