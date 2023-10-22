import React from 'react'

const Artist = ({artist}) => {
  return (
    <a href={artist.external_urls.spotify} target='_blank'>{artist.name}</a>
  )
}

export default Artist