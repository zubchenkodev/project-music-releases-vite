import React, { Fragment } from 'react'
import AlbumTitle from './AlbumTitle'
import Artist from './Artist';
import Cover from './Cover';

const Album = ({album}) => {

    return (
        <li className='album'>
            <Cover album={album}/>
            <div className="album__info-container">
                <AlbumTitle name={album.name} external_urls={album.external_urls}/>
                <div className="album__artists">
                    {album.artists.map((artist, index) => 
                        <div key={artist.id} className='album__artist'>
                            <Artist artist={artist} />
                            {album.artists.length === 2 && index === 0 && 
                                <span> & </span> 
                            }
                            {album.artists.length > 2 && index < album.artists.length - 2 &&
                                <span>, </span> 
                            }
                            {album.artists.length > 2 && index === album.artists.length - 2 &&
                                <span> & </span> 
                            }
                        </div>
                    )}
                </div>
            </div>
        </li>
    )
}

export default Album