"use client";
import React, { useState } from "react";
import EventTabDetails from "./EventTabDetails";
import { eventSchema } from "@/app/[eventId]/page";

const EventTabs = ({eventData}:{eventData:eventSchema}) => {
  const [tabClicked, setTabClicked] = useState("overview");
  function toggleTab() {
    setTabClicked(tabClicked=="stats"?'overview':'stats');
    // tabClicked === "stats" ? setTabClicked("overview") : setTabClicked("stats");
  }

  return (
    <div className="w-full">
      <div className="flex gap-6 mt-4 ">
        <div className="flex flex-col gap-1" onClick={toggleTab}>
          <p className="text-gray-400 px-3 font-medium text-[17px] cursor-pointer hover:text-gray-300">Overview</p>
          {tabClicked == "overview" && <div className="h-[.11rem]  bg-slate-400"></div>}
        </div>
        <div className="flex flex-col gap-1" onClick={toggleTab}>
          <p className="text-gray-400 px-3 font-medium text-[17px] cursor-pointer hover:text-gray-300">Statistics</p>
          {tabClicked == "stats" && <div className="h-[.11rem] bg-slate-400"></div>}
        </div>
      </div>
      <EventTabDetails tabClicked={tabClicked} eventData={eventData}/>
    </div>
  );
};

export default EventTabs;
