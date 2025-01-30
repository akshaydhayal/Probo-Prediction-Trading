import React from 'react'
import ChartIcon from './icons/ChartIcon'

const EventCard = () => {
  return (
    <div className='w-2/5 shadow-sm shadow-slate-700 bg-[#121212] px-8 py-4 rounded-lg flex flex-col gap-3 cursor-pointer'>
        <div className='flex items-center gap-1'>
            <ChartIcon/>
            <p className='text-slate-300 text-sm'>1107 traders</p>
        </div>
        <div className='flex gap-4 '>
            <img className='rounded-md w-16 h-16' src='https://probo.in/_next/image?url=https%3A%2F%2Fprobo.gumlet.io%2Fimage%2Fupload%2Fprobo_product_images%2FIMAGE_6307afd6-a60e-4647-9ab1-8b3896c020c1.png&w=256&q=75'/>
            <p className='font-medium text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nobis.</p>
        </div>
        <p className='text-slate-400 text-sm px-4'> ipsam commodi  incidunt, neque dicta. Nihil minima sapiente corrupti error necessitatibus suscipit.</p>
    </div>
  )
}

export default EventCard