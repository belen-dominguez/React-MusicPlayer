import React, {useState, useEffect} from 'react';
import {v4 as uuidv4} from "uuid";

const LibrarySong = ({ song, songs, currentSong, setCurrentSong}) => {

    const songSelectHandler = (e) => {
        let selectedSong = song;
    
        songs.map(song => {

            if(song.id === selectedSong.id){
               song.active = true
            }
            else {
                song.active = false
            }
        })
        setCurrentSong(songs.filter(song =>  song.active == true))

        const selectedDivId = e.target.attributes.id.value
 
    }

    return (
        <div key={uuidv4()}  id={uuidv4()}
         className={`library-song-container ${song.active ? 'selected' : ""}`}
        onClick={songSelectHandler}
        >
            <img src={song.cover} alt=""/>
            <div className="song-detail">
                <h3>{song.name}</h3>
                <p>{song.artist}</p>
            </div>
        </div>
    )
}

export default LibrarySong;