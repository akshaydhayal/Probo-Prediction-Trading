"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { eventType } from "@/app/page";
import ChartSmallIcon from "./icons/ChartSmallIcon";

const EventCard = ({ event }: { event: eventType }) => {
  const router = useRouter();
  return (
    <div
      className="w-4/5 md:w-5/12 shadow-sm shadow-slate-700 bg-[#121212] px-8 py-4 rounded-lg
     flex flex-col gap-3 cursor-pointer"
      onClick={() => router.push(`/${event.id}`)}
    >
      <div className="flex items-center gap-1">
        <ChartSmallIcon />
        <p className="text-gray-400 text-sm">{event._count?.bettings} tradings</p>
      </div>
      <div className="flex gap-4 ">
        <img className="bg-yellow-300 p-0 rounded-md w-16 h-16" src={event.imageUrl} />
        <p className="font-medium text-gray-300 text-[17px]">{event.title}</p>
      </div>
      <p className="text-gray-300 text-sm px-4"> {event.description}</p>
    </div>
  );
};

export default EventCard;
