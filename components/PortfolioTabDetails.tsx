// import { eventSchema } from '@/app/[eventId]/page';
import React from "react";

function TradesRow() {
  return (
    <div className="w-full flex border-b border-b-slate-700 py-3">
      <div className="w-1/2 flex items-center gap-2 px-4">
        <img
          className="w-12 h-12 rounded-full"
          src="https://probo.in/_next/image?url=https%3A%2F%2Fprobo.gumlet.io%2Fimage%2Fupload%2Fw_100%2Ch_100%2Cc_fill%2Cr_max%2Fprobo_product_images%2FIMAGE_e75356f6-0648-4b8d-810b-a950e5feb23d.png&w=96&q=75"
        />
        <p className="text-slate-300 text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ut non labore hic sequi.</p>
      </div>
      <div className="w-1/2 flex">
        <p className=" text-slate-300 w-1/3 text-center">Rs 0.5</p>
        <p className=" text-slate-300 w-1/3 text-center">-Rs 0.5</p>
        <p className=" text-slate-300 w-1/3 text-center">Yes</p>
      </div>
    </div>
  );
}

// const PortfolioTabDetails = ({tabClicked,eventData}:{tabClicked:string,eventData:eventSchema}) => {
const PortfolioTabDetails = ({ tabClicked }: { tabClicked: string }) => {
  return (
    <div className=" p-6 rounded-lg flex flex-col gap-6">
      <div className="flex items-center gap-64 bg-[#1b1a1a] py-6 px-16">
        <div className="flex flex-col gap-1">
          <p className="font-semibold  text-slate-400">RETURNS</p>
          <p className="font-bold text-2xl px-2 text-slate-300">Rs 0.5</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-semibold  text-slate-400">INVESTMENT</p>
          <p className="font-bold text-2xl px-2 text-slate-300">Rs 0.5</p>
        </div>
      </div>

      <div className="w-full flex">
        <p className="w-1/2 font-[550] text-slate-200">Event</p>
        <div className="flex w-1/2">
          <p className="font-[540] text-slate-200  w-1/3 text-center">Investments</p>
          <p className="font-[540] text-slate-200 w-1/3 text-center">Returns</p>
          <p className="font-[540] text-slate-200 w-1/3 text-center">Result</p>
        </div>
      </div>

      <div className="flex flex-col ">
        <TradesRow/>
        <TradesRow/>
        <TradesRow/>
        <TradesRow/>
        <TradesRow/>
      </div>
    </div>
  );
};

export default PortfolioTabDetails;
