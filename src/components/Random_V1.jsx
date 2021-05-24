import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY= process.env.REACT_APP_API_KEY;

const Random = () => {
    const [gif, setGIF] = useState('');

    const fetchGif = async () => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const{ data } = await axios.get(url); //promise ...
        
        const imageSrc = data.data.images.downsized_large.url;

        setGIF(imageSrc);
    }


    //COMPONENT DID MOUNT ... first render
    useEffect(() => {   
        fetchGif();
    }, []);

    const handleClick = () => {
        fetchGif();
    }

    return (
        <div className="container">
            <h1>Random GIF</h1>
            <img width="500" src={gif}/>
            <button onClick={handleClick}>CLICK FOR NEW</button>
        </div>
    )
}

export default Random;
