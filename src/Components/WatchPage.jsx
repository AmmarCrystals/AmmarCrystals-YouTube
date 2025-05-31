import React, { use, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMenuClose } from '../Utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import store from '../Utils/Store'

const WatchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setMenuClose())
  }, [])

  
  // const videoData = useSelector((store) => store.videoList.videoList);
  // console.log(videoData);


  // const filteredVideo = videoData.filter((video) => video.id === searchParams.get("v"));
  //   console.log(filteredVideo);
  return (
    <div className="flex flex-col lg:flex-row bg-white min-h-screen text-black">

      {/* Left Section - Video Player and Details */}
      <div className="w-full lg:w-2/3 p-4 space-y-4">
        {/* Video Player */}
        <div className="w-full aspect-video bg-black">
          <iframe className='w-full aspect-video' src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        {/* Video Title */}
        <h1 className="text-xl font-semibold">
          Learn React.js with Real Projects - Complete Guide for Beginners
        </h1>

        {/* Channel Info and Subscribe */}
        <div className="flex items-center justify-between flex-wrap gap-4 border-b pb-4">
          <div className="flex items-center gap-3">
            <img
              src="https://via.placeholder.com/40"
              alt="Channel Logo"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h2 className="font-semibold">Tech Mastery</h2>
              <p className="text-sm text-gray-500">1.2M subscribers</p>
            </div>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded-full font-semibold hover:bg-gray-900 transition">
            Subscribe
          </button>
        </div>

        {/* Video Description */}
        <div className="bg-gray-100 p-4 rounded-lg text-sm">
          <p><strong>1,234,567 views • May 31, 2025</strong></p>
          <p className="mt-2">
            In this tutorial, we will learn React.js by building real-world projects. Perfect for beginners and intermediates!
          </p>
        </div>
      </div>

      {/* Right Section - Suggested Videos */}
      <div className="w-full lg:w-1/3 p-4 space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition">
            <img
              src="https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
              alt="Suggested Video"
              className="w-40 h-24 object-cover rounded-lg"
            />
            <div className="flex flex-col">
              <h3 className="text-sm font-semibold line-clamp-2">
                Learn Tailwind CSS in 20 Minutes – Beginner Tutorial
              </h3>
              <p className="text-xs text-gray-500">Design Pro</p>
              <p className="text-xs text-gray-500">800K views • 2 weeks ago</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WatchPage