import React from 'react'

const Playlist = ({playlist}) => {
  return (
    <li href={playlist.external_urls.spotify} key={playlist.id} class="playlist">
        <div className="playlist__image-container">
        <img src={playlist.images[0].url} alt={playlist.description} />
        </div>
        <div className="playlist__info-container">
        <h3 className="playlist__name">
            <a href={playlist.external_urls.spotify}>{playlist.name}</a>
        </h3>
        <div className="playlist__description">
            {playlist.description}
        </div>
        </div>
    </li>
  )
}

export default Playlist