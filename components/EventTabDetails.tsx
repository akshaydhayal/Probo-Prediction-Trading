import { eventSchema } from '@/app/[eventId]/page';
import React from 'react'

const EventTabDetails = ({tabClicked,eventData}:{tabClicked:string,eventData:eventSchema}) => {
  return (
    <div className="border border-slate-700 p-6 rounded-lg flex flex-col gap-6">
      <p className="text-lg font-semibold text-slate-200">About the Event {tabClicked}</p>
      <div className="flex justify-between mr-32">
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
        <p className="text-gray-400 text-sm font-medium">
          {eventData.description}
        </p>
      </div>
    </div>
  );
}

export default EventTabDetails