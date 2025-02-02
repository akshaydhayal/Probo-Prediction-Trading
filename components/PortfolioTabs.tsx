"use client";
import React, { useState } from "react";
import PortfolioTabDetails from "./PortfolioTabDetails";
import { useRouter } from "next/navigation";

const PortfolioTabs = () => {
  const [tabClicked, setTabClicked] = useState("Active Trades");
  const router=useRouter();

  if(!localStorage.getItem('token')){
    router.push("/");
  }
  return (
    <div className="w-full">
      <div className="flex justify-center gap-10 ">
        <div
          className="flex flex-col gap-1"
          onClick={() => {
            if(tabClicked == "Closed Trades") setTabClicked("Active Trades");
          }}
        >
          <p className="text-gray-400 px-4 font-medium text-[17px] cursor-pointer hover:text-gray-300">Active Trades</p>
          {tabClicked == "Active Trades" && <div className="h-[.11rem] bg-slate-400"></div>}
        </div>
        <div
          className="flex flex-col gap-1"
          onClick={() => {
            if(tabClicked == "Active Trades") setTabClicked("Closed Trades");
          }}
        >
          <p className="text-gray-400 px-4 font-medium text-[17px] cursor-pointer hover:text-gray-300">Closed Trades</p>
          {tabClicked == "Closed Trades" && <div className="h-[.11rem]  bg-slate-400"></div>}
        </div>
      </div>
      <PortfolioTabDetails tabClicked={tabClicked} />
    </div>
  );
};

export default PortfolioTabs;
