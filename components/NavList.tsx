import React from 'react'

const NavList = () => {
    const navTopics=['All events','Cryto','Cricket','News','Youtube','Stocks']
  return (
    <div className='flex gap-10 border-t border-b py-3 px-16 border-slate-700 '>
        {navTopics.map((t,ind)=>{
            return <p key={ind} className='text-slate-400 hover:text-slate-300 cursor-pointer font-medium'>{t}</p>
        })}
    </div>
  )
}

export default NavList