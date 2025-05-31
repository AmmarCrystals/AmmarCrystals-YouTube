import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API } from './constant';

const useFectchMovies = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async () => {
        const response = await fetch(API)
        const data = await response.json();
        dispatch(setVideoList(data.items));
        setVideoData(data.items);
        console.log(data.items);
        return data.items;
    }

}

export default useFectchMovies