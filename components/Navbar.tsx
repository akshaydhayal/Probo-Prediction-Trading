"use client";
import React, { useEffect, useState } from "react";
import HomeIcon from "./icons/HomeIcon";
import PortfolioIcon from "./icons/PortfolioIcon";
import RupeeIcon from "./icons/RupeeIcon";
import Usericon from "./icons/Usericon";
import ChartIcon from "./icons/ChartIcon";
import EventModal from "./EventModal";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector, UseSelector } from "react-redux";
import { updateUser, updateUserBalance } from "@/store/userSlice";

const Navbar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [openModal, setModalOpen] = useState(false);
  //@ts-ignore
  const userInfo = useSelector((state) => state?.userSlice?.user);
  console.log(userInfo);

  async function getMoney(){
    try{
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user?deposit=50`,{
        method:'PUT',
        headers:{token:localStorage.getItem('token')??''}
      });
      const data=await response.json();
      if(data){
        dispatch(updateUserBalance(50));
      }
      console.log(data);
    }catch(e){
      console.log(e);
    }
  }

  return (
    <div className="w-full bg-[#121212] py-3 sticky top-0 left-0 px-4">
      <div className="bg-[#121212]  flex items-center justify-between">
        <p
          onClick={() => router.push("/")}
          className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-2xl font-semibold cursor-pointer"
        >
          probo
        </p>
        <div className="flex items-center gap-16">
          <div className="flex items-center gap-8">
            <div className="flex gap-1 items-center cursor-pointer" onClick={() => router.push("/")}>
              <HomeIcon />
              <p className="text-gray-200 hover:text-gray-50 font-medium ">Home</p>
            </div>
            {userInfo && (
              <>
                <div className="flex gap-1 items-center cursor-pointer" onClick={() => router.push("/portfolio/1")}>
                  <PortfolioIcon />
                  <p className="text-gray-200 hover:text-gray-50 font-medium">Portfolio</p>
                </div>
                <div className="flex gap-1 items-center cursor-pointer" onClick={() => setModalOpen(true)}>
                  <ChartIcon />
                  <p className="text-gray-200 hover:text-gray-50 font-medium">Create Opinion</p>
                </div>
              </>
            )}
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1">
              <div className="flex gap-1 items-center  cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 rounded-full px-3 py-[3px]">
                <RupeeIcon />
                <p className="text-white font-medium">{userInfo ? userInfo.balance : 0}</p>
              </div>
              
            {userInfo && <p className="text-gray-200 text-sm hover:text-gray-50 font-medium hover:underline hover:underline-offset-4
             cursor-pointer" onClick={getMoney}>Get Rs 50</p>}
            </div>
            {userInfo && (
              <div className="flex items-center gap-1">
                <div className="flex gap-[2px] items-center cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-[4px]">
                  <Usericon />
                </div>
                <p className="text-gray-200 hover:text-gray-50 font-medium text-sm">Hi {userInfo.name}</p>
                
              </div>
            )}
            {!userInfo ? (
              <button
                className="bg-blue-700 hover:bg-blue-600 text-white py-1 px-4 
            text-base font-[530] rounded-md"
                onClick={() => router.push("/signin")}
              >
                Login/Signup
              </button>
            ) : (
              <button
                className="bg-blue-700 hover:bg-blue-600 text-white py-1 px-4 
            text-base font-[530] rounded-md"
                onClick={() => {
                  localStorage.removeItem("token");
                  dispatch(updateUser(null));
                }}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
      {openModal && <EventModal setModalOpen={setModalOpen} />}
    </div>
  );
};

export default Navbar;
