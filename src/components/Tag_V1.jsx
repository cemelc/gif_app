import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY= process.env.REACT_APP_API_KEY;

const Tag = () => {
    const [tag, setTAG] = useState('anime');
    const [gif, setGIF] = useState('');

    const fetchGif = async (tag) => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        const{ data } = await axios.get(url); //promise ...
        
        const imageSrc = data.data.images.downsized_large.url;

        setGIF(imageSrc);
    }


    //COMPONENT DID MOUNT ... first render
    useEffect(() => {   
        fetchGif(tag);
    }, [tag]);

    const handleClick = () => {
        fetchGif(tag);
    }

    return (
        <div className="container">
            <h1>RANDOM {tag} GIF</h1>
            <img width="500" src={gif}/>
            <input value={tag} onChange={(e) => setTAG(e.target.value)}/>
            <button onClick={handleClick}>CLICK FOR NEW</button>
        </div>
    )
}

export default Tag;
