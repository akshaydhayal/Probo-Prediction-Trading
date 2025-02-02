"use client";
import React, { useState } from "react";
import MinusIcon from "./icons/MinusIcon";
import PlusIcon from "./icons/PlusIcon";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { updateUser } from "@/store/userSlice";

const PlaceOrder = ({eventId,yesOdds,noOdds}:{eventId:number,yesOdds:number,noOdds:number}) => {
  const [betOn, setBetOn] = useState("YES");
  const [price, setPrice] = useState(5);
  const [quantity, setQuantity] = useState(1);
  const dispatch=useDispatch();

  async function getUserData(token: string) {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user`, {
        headers: { token },
      });
      if (response.status == 200) {
        dispatch(updateUser(response.data.user));
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function placeBetting(){
    if(!localStorage.getItem('token')){
      toast.error("Signin first to place a bet!!",{
        duration:1500
      });
      return;
    }
    try{
      const response=await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/event/${eventId}`,{
        amount:price * quantity,
        prediction: betOn
      },{
        headers:{token:localStorage.getItem('token')}
      });
      console.log(response.data);
      if(response.status==201){
        toast.success("Bet placed successfully! 🎉", {
          position: "bottom-right",duration:2000
        });
          getUserData(localStorage.getItem('token')??'');
      }else{
        toast.error("Failed to place bet!", {position:"bottom-right",duration:3000});
      }
    }catch(e){
      toast.error("Failed to place bet!", {position:"bottom-right",duration:3000});
      console.log(e);
    }
  }

  return (
    <div className="w-4/5 sm:w-3/5 md:max-w-[28rem] lg:w-full flex flex-col gap-6 border border-slate-500 p-4 rounded-lg">
      <div className="flex border border-slate-600 rounded-2xl">
        <div
          className={`${betOn == "YES" ? "bg-blue-700" : ""} cursor-pointer rounded-lg font-medium text-slate-100 flex-1 py-2 
        text-center`}
          onClick={() => setBetOn("YES")}
        >
          Yes Rs {price}
        </div>
        <div
          className={`${betOn == "NO" ? "bg-red-700" : ""} cursor-pointer rounded-lg font-medium text-slate-100 flex-1 py-2
         text-center`}
          onClick={() => setBetOn("NO")}
        >
          No Rs {price}
        </div>
      </div>

      <p className="text-slate-300 font-semibold">Set Price</p>

      <div className="border border-slate-500 rounded-xl p-2 px-4 flex flex-col gap-8">
        <div className="flex justify-between  items-center gap-0">
          <p className="text-slate-300 font-medium w-2/5">Price</p>
          <div className="flex gap-3 items-center justify-between border py-1 px-2 w-3/5 border-slate-600 rounded-lg">
            <div
              className="border p-[.1rem] cursor-pointer hover:border-slate-500 hover:bg-[#202020]
             border-slate-600 rounded-md text-blue-500"
              onClick={() => setPrice((o) => (o > 1 ? o - 1 : o))}
            >
              <MinusIcon />
            </div>
            <p className=" text-slate-200 font-medium ">Rs {price}</p>
            <div
              className="border p-[.1rem] cursor-pointer border-slate-600 hover:border-slate-500
             hover:bg-[#202020] rounded-md text-blue-500"
              onClick={() => setPrice((o) => o + 1)}
            >
              <PlusIcon />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center gap-0">
          <p className="text-slate-300 font-medium w-2/5 ">Quantity</p>
          <div className="flex gap-3 items-center justify-between border w-3/5 py-1 px-2 border-slate-600 rounded-lg">
            <div
              className="border p-[.1rem] cursor-pointer border-slate-600 hover:border-slate-500
             hover:bg-[#202020] rounded-md text-blue-500"
              onClick={() => setQuantity((o) => (o > 1 ? o - 1 : o))}
            >
              <MinusIcon />
            </div>
            <p className=" text-slate-200 font-medium ">{quantity}</p>
            <div
              className="border p-[.1rem] cursor-pointer border-slate-600 hover:border-slate-500
             hover:bg-[#202020] rounded-md text-blue-500"
              onClick={() => setQuantity((o) => o + 1)}
            >
              <PlusIcon />
            </div>
          </div>
        </div>

        <div className="flex px-2">
          <div className="flex flex-col flex-1 items-center">
            <p className="font-semibold text-slate-100">Rs {price * quantity}</p>
            <p className="text-slate-400 text-sm">You Put</p>
          </div>
          <div className="flex flex-col flex-1 items-center">
            <p className="font-semibold text-green-400">Rs {betOn=='YES'?price*quantity*yesOdds:price*quantity*noOdds}</p>
            <p className="text-slate-400 text-sm">You get</p>
          </div>
        </div>
      </div>
      <button className={`font-semibold text-slate-100 ${betOn == "YES" ?
         "bg-blue-700" : "bg-red-700"} py-2 rounded-md`} onClick={placeBetting}>Place Order</button>
    </div>
  );
};

export default PlaceOrder;
