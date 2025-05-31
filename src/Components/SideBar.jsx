import React from 'react'
import { useSelector } from 'react-redux'
import store from '../Utils/Store';
import { Link } from 'react-router-dom';
// import { setMenuClose } from '../Utils/appSlice';

const SideBar = () => {

const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
console.log(isMenuOpen)
    if (!isMenuOpen) return

    return (
        <div className='col-span-1  top-0'>

            <div className='flex flex-col items-start space-y-4 p-4 bg-gray-100 h-screen'>
                <Link to={"/"}> <p>Home</p></Link>
                <p>Short</p>
                <p>Subscription</p>
                <hr />
                <h2 className='text-xl'>Profile</h2>
                <p>History</p>
                <p>Playlist</p>
                <p>Your Videos</p>
                <p>Watch Later</p>
                <p>Liked Videos</p>
                <hr />
                <h2 className='text-xl'>Explore</h2>
                <p>Trending</p>
                <p>Shpoing</p>
                <p>Muscic</p>
                <p>Live</p>
                <p>Gaming</p>
                <p>Sport</p>
                <p>Course</p>
            </div>
        </div>
    )
}

export default SideBar