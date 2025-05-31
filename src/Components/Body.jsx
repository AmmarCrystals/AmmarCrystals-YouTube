import React from 'react'
import SideBar from './SideBar'
import MainPortion from './MainPortion'

const Body = () => {
  return (
    <div className='grid grid-flow-col'>
        <SideBar/>
        <MainPortion/>
    </div>
  )
}

export default Body