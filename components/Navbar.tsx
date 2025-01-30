import React from 'react'
import HomeIcon from './icons/HomeIcon'
import PortfolioIcon from './icons/PortfolioIcon'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-3'>
        <p>probo</p>
        <div className='flex items-center gap-6'>
            <div className='flex gap-2 items-center cursor-pointer'>
                <HomeIcon/>
                <p className='text-slate-100 font-medium '>Home</p>
            </div>
            <div className='flex gap-2 items-center cursor-pointer'>
                <PortfolioIcon/>
                <p className='text-slate-100 font-medium'>Portfolio</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar