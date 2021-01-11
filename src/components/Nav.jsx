import React from 'react';
import { MdVideoLibrary } from "react-icons/md";

const Nav = ({libraryRef}) => {

const displayLibraryHandler = () => {
    
    libraryRef.current.classList.toggle('onDisplay')
}

    return (
        <div className="menu">
            <button onClick={displayLibraryHandler}> Library <MdVideoLibrary />  </button>
        </div>
    )
}

export default Nav;