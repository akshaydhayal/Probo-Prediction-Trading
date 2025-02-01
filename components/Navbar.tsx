"use client";
import React, { useState } from "react";
import HomeIcon from "./icons/HomeIcon";
import PortfolioIcon from "./icons/PortfolioIcon";
import RupeeIcon from "./icons/RupeeIcon";
import Usericon from "./icons/Usericon";
import ChartIcon from "./icons/ChartIcon";
import EventModal from "./EventModal";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector, UseSelector } from "react-redux";
import { updateUser } from "@/store/userSlice";

const Navbar = () => {
  const router = useRouter();
  const dispatch=useDispatch();
  const [openModal, setModalOpen] = useState(false);
  //@ts-ignore
  const userInfo = useSelector((state) => state?.userSlice?.user);
  console.log(userInfo);
  return (
    <div className="w-full  py-3 sticky top-0 left-0 px-4">
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
            <div className="flex gap-1 items-center  cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 rounded-full px-3 py-[3px]">
              <RupeeIcon />
              <p className="text-white font-medium">{userInfo?userInfo.balance:0}</p>
            </div>
            {userInfo && (
              <div className="flex items-center gap-2">
                <div className="flex gap-[2px] items-center cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-[4px]">
                  <Usericon />
                </div>
                <p className="text-gray-200 hover:text-gray-50 font-medium">
                  Hi {userInfo.name}
                </p>
                {/* <div className="flex gap-[2px] items-center cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-[5px]">
                  <Usericon />
                </div> */}
              </div>
            )}
            {/* <button className="bg-slate-300 hover:bg-slate-200 text-black py-1 px-4 text-base font-[530] rounded-sm">Login/Signup</button> */}
            {!userInfo ? 
              <button
                className="bg-blue-700 hover:bg-blue-600 text-white py-1 px-4 
            text-base font-[530] rounded-md"
                onClick={() => router.push("/signin")}
              >
                Login/Signup
              </button>:
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
            }
          </div>
        </div>
      </div>
      {openModal && <EventModal setModalOpen={setModalOpen} />}
    </div>
  );
};

export default Navbar;
