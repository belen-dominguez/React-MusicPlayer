import React, {useRef, useState, useEffect} from 'react';
import { AiOutlinePlayCircle, AiOutlinePauseCircle, AiFillFastBackward, AiFillFastForward } from "react-icons/ai";
import { ImLoop2 } from "react-icons/im";

const Player = ({songs, currentSong, setCurrentSong, setPlay, play}) => {

    //States
    const [songInfo, setSongInfo] = useState({
        currentTime: 0, 
        duration: 0,
        animationPercentage: 0})

    useEffect(() => {
        playSongHandler()
    }, [currentSong])

    //Functions
    const changeSongHandler = (number) => {

        let indexOfCurrent = songs.findIndex(song => song.active == true)
  
        let newIndex = indexOfCurrent + number;

        if(newIndex > (songs.length - 1) ){
            newIndex = 0;
        }
        if(newIndex < 0){
            newIndex = (songs.length - 1);
        }
       

        songs.forEach(song => {
            song.active = false;

            if(song === songs[newIndex]){
               song.active = true;
               setCurrentSong([song])
              
            }

        })

    }

    const audioRef = useRef(null);
 
    const playSongHandler = () => {
        setPlay(true)
        audioRef.current.play()

    }
    const pauseSongHandler = () => {
        setPlay(false)
        audioRef.current.pause()
    }

    const timeUpdateHandler = (e) => {
       
        const duration = e.target.duration;
        const currentTime = e.target.currentTime;
        const animationPercentage = Math.round((currentTime * 100) / duration)
        setSongInfo({...songInfo, currentTime: currentTime, duration, animationPercentage})
    }

    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }
    const dragHandler = (e) => {
        /*actualizamos el estado de la songInfo - en base al lugar q seleccionamos en el input*/
        setSongInfo({...songInfo, currentTime: e.target.value}) 
        /*actualizamos tmb el audio al mismo valor*/
        audioRef.current.currentTime = e.target.value;  
        
        if (songInfo.duration === songInfo.currentTime){
            changeSongHandler(+1)
        }
    }

    const loopHandler = (e) => {
        const audioAttributes = audioRef.current;
        
        if(audioAttributes.hasAttribute("loop")){
            audioAttributes.removeAttribute("loop")
            e.target.classList.remove('selected-btn')
        }
        else {
            audioAttributes. setAttribute("loop", 'loop')
            e.target.classList.add('selected-btn')
        }

    }

    //Style
    const trackAnim = {
        transform: `translateX(${songInfo.animationPercentage}%)`
    }

    return (
        <div className="player-container">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>

                <div 
                     style={{background: `linear-gradient(to right, ${currentSong[0].color[0]}, ${currentSong[0].color[1]})`}}
                    className="track"
                >
                    <input 
                        value={songInfo.currentTime} 
                        min={0} 
                        max={songInfo.duration || 0} 
                        type="range" 
                        onChange={dragHandler}
                    />
                    <div style={trackAnim} className="animate-track"></div>
                </div>
                

                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="player-control">
                <AiFillFastBackward  
                    onClick={() => changeSongHandler(-1)}
                    className="player-control_icons"
                />

                <AiOutlinePlayCircle 
                    style={play ? {display:"none"} : {display:"inline-block"}} 
                    onClick={playSongHandler} className="player-control_icons"
                />
                <AiOutlinePauseCircle  
                    onClick={pauseSongHandler}
                    style={play ? {display:"inline-block"} : {display:"none"}}  
                    className="player-control_icons"
                />
                <AiFillFastForward 
                    onClick={() => changeSongHandler(+1)}   
                    className="player-control_icons"
                />
                <ImLoop2 
                    onClick={loopHandler}
                    className="player-control_icons" 
                />

            </div>
            <audio 
                ref={audioRef} 
                src={currentSong[0].audio}
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler}
                onEnded={() => changeSongHandler(+1)}
            ></audio>
        </div>
    )
}

export default Player;