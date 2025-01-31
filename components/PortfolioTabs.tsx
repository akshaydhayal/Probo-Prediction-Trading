"use client";
import React, { useState } from "react";
import EventTabDetails from "./EventTabDetails";
import PortfolioTabDetails from "./PortfolioTabDetails";
// import { eventSchema } from "@/app/[eventId]/page";

// const UserTabs = ({ eventData }: { eventData: eventSchema }) => {
const PortfolioTabs = () => {
  const [tabClicked, setTabClicked] = useState("Active Trades");
  function toggleTab() {
    tabClicked == "Active Trades" ? setTabClicked("Closed Trades") : setTabClicked("Active Trades");
  }

  return (
    <div className="w-full">
      <div className="flex justify-center gap-10 ">
        <div
          className="flex flex-col gap-1"
          onClick={() => {
            tabClicked == "Closed Trades" && setTabClicked("Active Trades");
          }}
        >
          <p className="text-gray-400 px-4 font-medium text-[17px] cursor-pointer hover:text-gray-300">Active Trades</p>
          {tabClicked == "Active Trades" && <div className="h-[.11rem] bg-slate-400"></div>}
        </div>
        <div
          className="flex flex-col gap-1"
          onClick={() => {
            tabClicked == "Active Trades" && setTabClicked("Closed Trades");
          }}
        >
          <p className="text-gray-400 px-4 font-medium text-[17px] cursor-pointer hover:text-gray-300">Closed Trades</p>
          {tabClicked == "Closed Trades" && <div className="h-[.11rem]  bg-slate-400"></div>}
        </div>
      </div>
      {/* <EventTabDetails tabClicked={tabClicked} eventData={eventData} /> */}
      <PortfolioTabDetails tabClicked={tabClicked} />
    </div>
  );
};

export default PortfolioTabs;
