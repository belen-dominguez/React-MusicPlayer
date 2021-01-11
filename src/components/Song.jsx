import React from 'react';
import {v4 as uuidv4} from "uuid";

const Song = ({ currentSong}) => {

    return (
        <>
        {
            currentSong.map(song => {
                return (

                    <div key={uuidv4()} className="song-container">
                        <img src={song.cover} alt=""/>
                        <h3>{song.name}</h3>
                        <p>{song.artist}</p>
                    </div>
                )
            })
        }
            
            
        </>
    )
}

export default Song;