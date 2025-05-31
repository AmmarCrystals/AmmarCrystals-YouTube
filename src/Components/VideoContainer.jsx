import React, { useEffect, useState } from 'react'
import { API } from '../Utils/constant';
import { useDispatch } from 'react-redux';
import { setVideoList } from '../Utils/videoListSlice';
import { Link } from 'react-router-dom';
import { setMenuClose } from '../Utils/appSlice';
import useFectchMovies from '../Utils/useFectchMovies';

const VideoContainer = () => {
    const dispatch = useDispatch();
    const [videoData, setVideoData] = useState();



    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async () => {
        const response = await fetch(API)
        const data = await response.json();
        dispatch(setVideoList(data.items));
        setVideoData(data.items);
    }

    const handleSidebar = () => {
        dispatch(setMenuClose());
    }
    return (
        <div className="flex flex-wrap justify-center gap-4 p-4">
            {videoData && videoData.map((video) => (
                <Link to={"/watch?v=" + video.id} onClick={() => handleSidebar()}>
                    <div key={video.id} className="w-80 rounded-2xl overflow-hidden bg-white  transition-shadow transform hover:scale-105 duration-300 cursor-pointer">
                        <img src={video?.snippet?.thumbnails?.high?.url} alt="Video Thumbnail" className="w-full h-44 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{video.snippet.title}</h3>
                            <p className="text-sm text-gray-500 mt-1">{video.snippet.channelTitle}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default VideoContainer