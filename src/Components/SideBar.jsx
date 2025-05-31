import React from 'react'
import { useSelector } from 'react-redux'
import store from '../Utils/Store';

const SideBar = () => {

    const MenuStatus = useSelector((store) => store.app.isMenuOpen);
    console.log(MenuStatus)

if (!MenuStatus) return

    return (
        <div className='col-span-1'>

            <div className='flex flex-col items-start space-y-4 p-4 bg-gray-100 h-screen'>
                <p>Home</p>
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