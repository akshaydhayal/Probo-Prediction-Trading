"use client";
import React from 'react'
import ChartIcon from './icons/ChartIcon'
import { useRouter } from 'next/navigation'
import { eventType } from '@/app/page';

const EventCard = ({event}:{event:eventType}) => {
    const router=useRouter();
    return (
      <div
        className="w-2/5 shadow-sm shadow-slate-700 bg-[#121212] px-8 py-4 rounded-lg
     flex flex-col gap-3 cursor-pointer"
        onClick={() => router.push(`/${event.id}`)}
      >
        <div className="flex items-center gap-1">
          <ChartIcon />
          <p className="text-gray-400 text-sm">{event._count.bettings} tradings</p>
        </div>
        <div className="flex gap-4 ">
          {/* <img
            className="rounded-md w-16 h-16"
            src="https://probo.in/_next/image?url=https%3A%2F%2Fprobo.gumlet.io%2Fimage%2Fupload%2Fprobo_product_images%2FIMAGE_6307afd6-a60e-4647-9ab1-8b3896c020c1.png&w=256&q=75"
          /> */}
          <img className="bg-yellow-300 p-0 rounded-md w-16 h-16" src={event.imageUrl} />
          <p className="font-medium text-gray-300 text-[17px]">{event.title}</p>
        </div>
        <p className="text-gray-300 text-sm px-4"> {event.description}</p>
      </div>
    );
}

export default EventCard