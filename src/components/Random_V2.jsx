import React, { useState } from 'react';

import useGIF from './useGIF';

const Random = () => {
    
    const {gif, fetchGif} = useGIF();        

    return (
        <div className="container">
            <h1>Random GIF</h1>
            <img width="500" src={gif}/>
            <button onClick={fetchGif}>CLICK FOR NEW</button>
        </div>
    )
}

export default Random;
