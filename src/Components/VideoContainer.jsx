import React, { useEffect } from 'react'
import { API } from '../Utils/constant';

const VideoContainer = () => {


    useEffect(() => {
        fetchVideos();
    }, []);


    const fetchVideos = async () => {
        const response = await fetch(API)
        const data = await response.json();
        console.log(data);
    }
    return (
        <div>
            <h1>Container</h1>
        </div>
    )
}

export default VideoContainer