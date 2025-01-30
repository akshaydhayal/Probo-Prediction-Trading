import React from 'react'
import HomeIcon from './icons/HomeIcon'
import PortfolioIcon from './icons/PortfolioIcon'
import RupeeIcon from './icons/RupeeIcon'
import Usericon from './icons/Usericon'

const Navbar = () => {
  return (
    // <div className="w-full bg-[#121212] z-50 flex items-center justify-between py-3 sticky top-0 left-0">
    <div className="w-full bg-[#121212]  flex items-center justify-between py-3 sticky top-0 left-0 px-4">
      <p className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-2xl font-semibold">probo</p>
      <div className='flex items-center gap-16'>
      <div className="flex items-center gap-6">
        <div className="flex gap-2 items-center cursor-pointer">
          <HomeIcon />
          <p className="text-slate-100 font-medium ">Home</p>
        </div>
        <div className="flex gap-2 items-center cursor-pointer">
          <PortfolioIcon />
          <p className="text-slate-100 font-medium">Portfolio</p>
        </div>
    </div>
      <div className="flex items-center gap-6">
        <div className="flex gap-[2px] items-center cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 rounded-full px-3 py-[3px]">
          <RupeeIcon />
          <p className="text-white font-medium">15</p>
        </div>
        <div className="flex gap-[2px] items-center cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-[7px]">
          <Usericon />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar