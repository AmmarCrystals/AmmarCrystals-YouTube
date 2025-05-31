import React from 'react'

const Buttons = () => {

const ButtonList =["All","Live","Music","Gaming","News","Movies","Fashion","Learning","Sports","Entertainment","Comedy","Autos","Pets Cares","Trailers"]

  return (
    <div className='flex '>
        {ButtonList.map((button) => {
            return (
                <button key={button} className='bg-gray-200 px-4 h-10  py-2 m-2 rounded-lg hover:bg-gray-300'>
                    {button}
                </button>
            )
        })}
    </div>
  )
}

export default Buttons