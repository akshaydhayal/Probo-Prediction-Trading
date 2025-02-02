import { eventSchema } from "@/app/[eventId]/page";
import { roundOff } from "@/lib/lib";
import React from "react";

const EventTabDetails = ({ tabClicked, eventData }: { tabClicked: string; eventData: eventSchema }) => {

  return (
    <div className="border border-slate-700 p-6 rounded-lg flex flex-col gap-6">
      {tabClicked == "overview" ? (
        <>
          <p className="text-lg font-semibold text-slate-200">About the Event {tabClicked}</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-between lg:mr-32">
            <div>
              <p className="font-medium text-gray-300 text-sm">Source of Truth</p>
              <p className="text-gray-400 text-sm font-medium">{eventData.sourceOfTruth}</p>
            </div>
            <div>
              <p className="font-medium text-gray-300 text-sm">Event Started on</p>
              <p className="text-gray-400 text-sm font-medium">{eventData.startTime}</p>
            </div>
            <div>
              <p className="font-medium text-gray-300 text-sm">Event expires on</p>
              <p className="text-gray-400 text-sm font-medium">{eventData.endTime}</p>
            </div>
          </div>
          <div>
            <p className="font-medium text-gray-300 text-sm">Event Description</p>
            <p className="text-gray-400 text-sm font-medium">{eventData.description}</p>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-2 px-6">
          <div className="flex justify-between">
            <p className="font-medium text-slate-300">Yes Rs {eventData.yesBetting}</p>
            <p className="font-medium text-slate-300">No Rs {eventData.noBetting}</p>
          </div>
          <div className="flex">
            <div className={`h-2 w-1/3 bg-blue-700 rounded-l-md`}></div>
            <div className={`h-2 w-2/3 bg-red-700 rounded-r-md`}></div>
          </div>
          <div className="flex gap-6 md:gap-4 mt-6">
            <div className="flex flex-col gap-1 border border-slate-700 md:py-6 md:px-8 p-4 bg-[#1b1b1b] flex-1">
              <p className="font-medium text-slate-300 ">Yes Odds</p>
              <p className="font-bold  md:text-3xl text-2xl text-slate-300">{roundOff(eventData.totalBetting==0?1:eventData.totalBetting/(eventData.yesBetting==0?1:eventData.yesBetting),2)}</p>
            </div>
            <div className="flex flex-col gap-1 border border-slate-700 p-4 md:py-6 md:px-8 bg-[#1b1b1b] flex-1">
              <p className="font-medium text-slate-300">No Odds</p>
              <p className="font-bold md:text-3xl text-2xl text-slate-300">{roundOff(eventData.totalBetting==0?1:eventData.totalBetting/(eventData.noBetting==0?1:eventData.noBetting),2)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventTabDetails;
