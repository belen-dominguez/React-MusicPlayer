import React from 'react';
import LibrarySong from './LibrarySong';



const Library = ({songs, currentSong, setCurrentSong, libraryRef}) => {
    return (
        <div className="library-container" ref={libraryRef}>
    
            {
                songs.map(song => 
                    <LibrarySong 
                        song={song} 
                        songs={songs}
                        setCurrentSong={setCurrentSong}
                        currentSong={currentSong}
                    />)
            }
        </div>
    )
}

export default Library;