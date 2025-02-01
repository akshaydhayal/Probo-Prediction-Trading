"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const EventModal = ({setModalOpen}:{setModalOpen:React.Dispatch<React.SetStateAction<boolean>>}) => {
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const [sourceOfTruth,setSourceOfTruth]=useState("");
    const [imageUrl,setImageUrl]=useState("");
    const [startDate,setStartDate]=useState("");
    const [endDate,setEndDate]=useState("");
    const router=useRouter();

    async function createEvent(){
        const response=await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/event`,
          {
            title,
            description,
            sourceOfTruth,
            imageUrl,
            startTime:startDate,
            endTime:endDate,
          },
          {
            headers: { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTczODMzMTU2MH0.jZIpjN7UwQdbcseq0ZCcbRvDBxlLpUW3vmVNg0fwn2I" },
          }
        );
        console.log(response.data);
        if(response.data){
            router.push("/");
            setModalOpen(false);
        }
    }
    
    return (
    <div className="w-screen h-screen backdrop-blur-[3px] fixed top-0 left-0 flex justify-center items-center">
      <div className="bg-[#1a1919] w-1/2 py-6 px-8 flex flex-col gap-4 shadow-sm shadow-slate-700 rounded-xl">
        <p className="font-semibold text-2xl text-slate-300 text-center">Create a Probo Opinion Event</p>
        <div className="flex flex-col gap-1">
          <p className="text-gray-300 font-medium">Event Title</p>
          <input type="text" className="py-2 w-full bg-black placeholder:text-slate-400 px-4 text-sm text-slate-200"
           placeholder="Type Event title" onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-gray-300 font-medium">Event Description</p>
          <textarea className="py-2 w-full bg-black placeholder:text-slate-400 px-4 text-sm text-slate-200"
          placeholder="Type Event description" onChange={(e)=>setDescription(e.target.value)}/>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col gap-1 flex-1">
            <p className="text-gray-300 font-medium">Event StartDate</p>
            <input
              type="date"
              onChange={(e)=>setStartDate(e.target.value)}
              onFocus={(e) => {
                // Try modern method first, fall back to click()
                if (e.target.showPicker) {
                  e.target.showPicker();
                } else {
                  e.target.click();
                }
              }}
              className="py-2 w-full bg-black placeholder:text-slate-400 px-4 text-sm text-slate-200"
              placeholder="Type Event title"
            />
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <p className="text-gray-300 font-medium">Event EndDate</p>
            <input
              type="date"
              onChange={(e)=>setEndDate(e.target.value)}
              onFocus={(e) => {
                // Try modern method first, fall back to click()
                if (e.target.showPicker) {
                  e.target.showPicker();
                } else {
                  e.target.click();
                }
              }}
              className="py-2 w-full bg-black placeholder:text-slate-400 px-4 text-sm text-slate-200"
              placeholder="Type Event title"
            />
          </div>
          
        <div className="flex flex-col gap-1 flex-1">
          <p className="text-gray-300 font-medium">Event Tag</p>
          <input className="py-2 w-full bg-black placeholder:text-slate-400 px-4 text-sm text-slate-200"
          placeholder="Event Tag" onChange={(e)=>setDescription(e.target.value)}/>
        </div>

        </div>

        <div className="flex gap-8">
            <div className="flex flex-col gap-1 flex-1">
                <p className="text-gray-300 font-medium">Event ImageURL</p>
                <input type="text" className="py-2 w-full bg-black placeholder:text-slate-400 px-4 text-sm text-slate-200"
                 placeholder="Type Event image url" onChange={(e)=>setImageUrl(e.target.value)}/>
            </div>
            <div className="flex flex-col gap-1 flex-1">
                <p className="text-gray-300 font-medium">Source of Truth</p>
                <input type="text" className="py-2 w-full bg-black placeholder:text-slate-400 px-4 text-sm text-slate-200"
                 placeholder="enter Truth source" onChange={(e)=>setSourceOfTruth(e.target.value)}/>
            </div>
        </div>
        <div className="flex justify-end gap-4">
              <button className="py-2 rounded-md px-6 bg-red-600 font-medium hover:bg-red-500 cursor-pointer" onClick={()=>setModalOpen(false)}>Close</button>
              <button className="py-2 rounded-md px-6 bg-blue-600 font-medium hover:bg-blue-500 cursor-pointer" onClick={createEvent}>Create</button>
        </div>

      </div>
    </div>
  );
};

export default EventModal;
