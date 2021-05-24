import React, { useState } from 'react';

import useGIF from './useGIF';

const Tag = () => {
    const [tag, setTAG] = useState('anime');
    const {gif, fetchGif} = useGIF(tag);    
    

    return (
        <div className="container">
            <h1>RANDOM {tag} GIF</h1>
            <img width="500" src={gif}/>
            <input value={tag} onChange={(e) => setTAG(e.target.value)}/>
            <button onClick={() => {fetchGif(tag)}}>CLICK FOR NEW</button>
        </div>
    );
}

export default Tag
