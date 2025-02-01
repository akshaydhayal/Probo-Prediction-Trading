"use client";
import React, { useState } from 'react'
import MinusIcon from './icons/MinusIcon';
import PlusIcon from './icons/PlusIcon';

const PlaceOrder = () => {
  const [betOn,setBetOn]=useState('yes');
  const [price,setPrice]=useState(5);
  const [quantity,setQuantity]=useState(1);

  return (
    <div className="w-full flex flex-col gap-6 border border-slate-500 p-4 rounded-lg">
      <div className="flex border border-slate-600 rounded-2xl">
        <div className={`${betOn=='yes'?'bg-blue-700':''} cursor-pointer rounded-lg font-medium text-slate-100 flex-1 py-2 
        text-center`} onClick={()=>setBetOn('yes')}>Yes Rs {price}</div>
        <div className={`${betOn=='no'?'bg-red-700':''} cursor-pointer rounded-lg font-medium text-slate-100 flex-1 py-2
         text-center`} onClick={()=>setBetOn("no")}>No Rs {price}</div>
      </div>

      <p className="text-slate-300 font-semibold">Set Price</p>

      <div className="border border-slate-500 rounded-xl p-2 px-4 flex flex-col gap-8">
        <div className="flex justify-between  items-center gap-0">
          <p className="text-slate-300 font-medium w-2/5">Price</p>
          <div className="flex gap-3 items-center justify-between border py-1 px-2 w-3/5 border-slate-600 rounded-lg">
            <div className="border p-[.1rem] cursor-pointer hover:border-slate-500 hover:bg-[#202020]
             border-slate-600 rounded-md text-blue-500" onClick={()=>setPrice(o=>(o>1?o-1:o))}>
              <MinusIcon />
            </div>
            <p className=" text-slate-200 font-medium ">Rs {price}</p>
            <div className="border p-[.1rem] cursor-pointer border-slate-600 hover:border-slate-500
             hover:bg-[#202020] rounded-md text-blue-500" onClick={()=>setPrice(o=>o+1)}>
              <PlusIcon />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center gap-0">
          <p className="text-slate-300 font-medium w-2/5 ">Quantity</p>
          <div className="flex gap-3 items-center justify-between border w-3/5 py-1 px-2 border-slate-600 rounded-lg">
            <div className="border p-[.1rem] cursor-pointer border-slate-600 hover:border-slate-500
             hover:bg-[#202020] rounded-md text-blue-500" onClick={()=>setQuantity((o)=>(o>1?o-1:o))}>
              <MinusIcon />
            </div>
            <p className=" text-slate-200 font-medium ">{quantity}</p>
            <div className="border p-[.1rem] cursor-pointer border-slate-600 hover:border-slate-500
             hover:bg-[#202020] rounded-md text-blue-500" onClick={()=>setQuantity(o=>o+1)}>
              <PlusIcon />
            </div>
          </div>
        </div>

        <div className="flex px-2">
          <div className="flex flex-col flex-1 items-center">
            <p className="font-semibold text-slate-100">Rs {price*quantity}</p>
            <p className="text-slate-400 text-sm">You Put</p>
          </div>
          <div className="flex flex-col flex-1 items-center">
            <p className="font-semibold text-green-400">Rs 10.0</p>
            <p className="text-slate-400 text-sm">You get</p>
          </div>
        </div>
      </div>
      <button className={`font-semibold text-slate-100 ${betOn=='yes'?'bg-blue-700':'bg-red-700'} py-2 rounded-md`}>Place Order</button>
    </div>
  );
}

export default PlaceOrder