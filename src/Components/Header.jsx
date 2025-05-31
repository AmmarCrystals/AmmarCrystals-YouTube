import React, { use } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../Utils/appSlice';

const Header = () => {


    const dispatch = useDispatch()

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className='grid grid-flow-col col-span-12 justify-items-center shadow md h-22 '>
            <div className='flex col-span-1 items-center  space-x-4 -mx-8'>
                <img onClick={() => toggleMenuHandler()} className='w-10' src="https://cdn1.iconfinder.com/data/icons/systemui-vol-2/21/menu_hamburger-1024.png" alt="menu" />
                <img className='w-26' src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube2_colored_svg-1024.png" alt="YTLogo" /></div>
            <div className='col-span-10 flex items-center justify-center'>
                <input type="text" placeholder='Search' className='border border-gray-300 rounded-full px-4 py-2 w-96' />
                <img src="https://cdn1.iconfinder.com/data/icons/systemui-vol-2/21/search-1024.png" alt="search" className='w-6 h-6 ml-2 inline-block' />
            </div>
            <div className='col-span-1 flex items-center justify-end space-x-4'>
                <img className='w-10' src="https://cdn0.iconfinder.com/data/icons/pinpoint-interface/48/profile-1024.png" alt="user" />
            </div>
        </div>
    )
}

export default Header 