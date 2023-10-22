import React from 'react'

const AlbumTitle = ({name, external_urls}) => {
  return (
    <h3 className="album__title">
        <a href={external_urls.spotify} target='_blank'>{name}</a>
    </h3>
  )
}

export default AlbumTitle