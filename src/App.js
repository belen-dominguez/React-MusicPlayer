import React, {useState, useEffect, useRef} from 'react';
import './styles/app.scss'
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import Nav from './components/Nav';
import data from './utils'

function App() {

const [songs, setSongs] = useState(data());
const [currentSong, setCurrentSong] = useState(songs.filter(song =>  song.active == true))
const [play, setPlay] = useState(false)
const libraryRef = useRef(null)

useEffect(() => {
  setPlay(false)
}, [])

  return (
    <div className="App">
        <Nav libraryRef={libraryRef} />
        <Song   currentSong={currentSong} />
        <Player 
          songs={songs} 
          currentSong={currentSong} 
          setCurrentSong={setCurrentSong} 
          play={play} 
          setPlay={setPlay}
         
        />
        <Library 
          libraryRef={libraryRef}
          songs={songs} 
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
        />

    </div>
  );
}

export default App;
