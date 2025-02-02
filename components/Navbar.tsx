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
import { RootState } from "@/store/store";
import Logout from "./icons/Logout";
import LogoutIcon from "./icons/LogoutIcon";

const Navbar = () => {
    const router = useRouter();
  const dispatch = useDispatch();
  const [openModal, setModalOpen] = useState(false);
  const userInfo = useSelector((state:RootState) => state.userSlice.user);
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
        <div className="flex items-center gap-10 sm:gap-32 md:gap-8 lg:gap-44 ">
          <div className="flex items-center gap-3 sm:gap-6 md:gap-3 lg:gap-8">
            <div className="flex gap-1 items-center cursor-pointer" onClick={() => router.push("/")}>
              <HomeIcon />
              <p className="hidden md:block text-gray-200 hover:text-gray-50 font-medium md:text-sm lg:text-base">Home</p>
            </div>
            {userInfo && (
              <>
                <div className="flex gap-1 items-center cursor-pointer" onClick={() => router.push("/portfolio/1")}>
                  <PortfolioIcon />
                  <p className="hidden md:block text-gray-200 hover:text-gray-50 font-medium md:text-sm lg:text-base">Portfolio</p>
                </div>
                <div className="flex gap-1 items-center cursor-pointer" onClick={() => setModalOpen(true)}>
                  <ChartIcon />
                  <p className="hidden md:block text-gray-200 hover:text-gray-50 md:text-sm font-medium lg:text-base">Create Opinion</p>
                </div>
              </>
            )}
          </div>
          <div className="flex items-center gap-4 sm:gap-8 md:gap-2 lg:gap-6">
            <div className="flex items-center gap-1 ">
              <div className="flex gap-0 items-center  cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 rounded-full px-[6px] py-[1px] sm:px-2 lg:px-3 sm:py-[2px] lg:py-[3px]">
                <RupeeIcon />
                <p className="text-white font-medium text-sm lg:text-base ">{userInfo ? userInfo.balance : 0}</p>
              </div>

              {userInfo && (
                <p
                  className="text-gray-200 text-sm  hover:text-gray-50 font-medium hover:underline hover:underline-offset-4
             cursor-pointer"
                  onClick={getMoney}
                >
                  Get Rs 50
                </p>
              )}
            </div>
            <div className="flex items-center gap-2 sm:gap-3 md:gap-1 lg:gap-2">
              {userInfo && (
                <div className="flex items-center gap-1">
                  <div className="flex  items-center cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-[2px] sm:p-[3px] md:p-[4px]">
                    <Usericon />
                  </div>
                  <p className="hidden md:block text-gray-200 hover:text-gray-50 font-medium text-sm">Hi {userInfo.name}</p>
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
                <>
                  <button
                    className="bg-blue-700 hidden md:block hover:bg-blue-600  text-white md:py-[2px] lg:py-1 md:px-2 lg:px-4
                lg:text-base text-sm font-[530] rounded-md"
                    onClick={() => {
                      localStorage.removeItem("token");
                      dispatch(updateUser(null));
                    }}
                  >
                    Logout
                  </button>
                  <div
                    className="block md:hidden cursor-pointer"
                    onClick={() => {
                      localStorage.removeItem("token");
                      dispatch(updateUser(null));
                    }}
                  >
                    <LogoutIcon />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {openModal && <EventModal setModalOpen={setModalOpen} />}
    </div>
  );
};

export default Navbar;



// "use client";
// import { useState } from "react";
// import Link from "next/link";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-black text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Left side - Logo & Main Nav */}
//           <div className="flex items-center space-x-8">
//             {/* Logo */}
//             <Link href="/" className="text-2xl font-bold text-[#7B68EE]">
//               probo
//             </Link>

//             {/* Desktop Navigation - hidden on mobile */}
//             <div className="hidden md:flex items-center space-x-8">
//               <Link href="/" className="flex items-center space-x-2 hover:text-purple-400">
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                   {/* Home icon */}
//                 </svg>
//                 <span>Home</span>
//               </Link>
//               <Link href="/portfolio" className="flex items-center space-x-2 hover:text-purple-400">
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                   {/* Portfolio icon */}
//                 </svg>
//                 <span>Portfolio</span>
//               </Link>
//               <Link href="/create-opinion" className="flex items-center space-x-2 hover:text-purple-400">
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                   {/* Create Opinion icon */}
//                 </svg>
//                 <span>Create Opinion</span>
//               </Link>
//             </div>
//           </div>

//           {/* Right side - Balance & Profile */}
//           <div className="hidden md:flex items-center space-x-6">
//             {/* Balance */}
//             <div className="bg-[#7B68EE] px-4 py-2 rounded-full">
//               <span>₹ 800</span>
//             </div>

//             {/* Get Rs 50 Button */}
//             <button className="text-white hover:text-purple-400">Get Rs 50</button>

//             {/* Profile */}
//             <div className="flex items-center space-x-3">
//               <div className="w-8 h-8 bg-[#7B68EE] rounded-full flex items-center justify-center">{/* User icon or avatar */}</div>
//               <span>Hi Akshay</span>
//             </div>

//             {/* Logout */}
//             <button className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700">Logout</button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md hover:bg-gray-800">
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         <div className={`${isOpen ? "block" : "hidden"} md:hidden pb-4`}>
//           <div className="space-y-4">
//             <Link href="/" className="block hover:bg-gray-800 px-3 py-2 rounded-md">
//               Home
//             </Link>
//             <Link href="/portfolio" className="block hover:bg-gray-800 px-3 py-2 rounded-md">
//               Portfolio
//             </Link>
//             <Link href="/create-opinion" className="block hover:bg-gray-800 px-3 py-2 rounded-md">
//               Create Opinion
//             </Link>
//             <div className="border-t border-gray-700 pt-4 mt-4">
//               <div className="px-3 py-2">₹ 800</div>
//               <button className="block w-full text-left px-3 py-2 hover:bg-gray-800 rounded-md">Get Rs 50</button>
//               <div className="px-3 py-2">Hi Akshay</div>
//               <button className="block w-full text-left px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-md">Logout</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;