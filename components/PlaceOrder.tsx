import React from 'react'

const PlaceOrder = () => {
  return (
    <div className="w-full flex flex-col gap-6 border border-slate-500 p-4 rounded-lg">
      <div className="flex">
        <div className="bg-blue-700 rounded-lg font-medium text-slate-100 flex-1 py-2 text-center">Yes Rs5.5</div>
        <div className="bg-red-700 rounded-lg font-medium text-slate-100 flex-1 py-2 text-center">No Rs0.5</div>
      </div>

      <p className="text-slate-300 font-semibold">Set Price</p>

      <div className="border border-slate-500 rounded-xl p-2 px-4 flex flex-col gap-8">
        <div className="flex justify-between  items-center gap-4">
          <p className="text-slate-300 font-semibold">Price</p>
          <div className="flex gap-3 items-center border py-1 px-2 border-slate-600 rounded-lg">
            <p className="border border-slate-600 rounded-md text-blue-500 px-2 text-2xl font-medium">--</p>
            <p className=" text-slate-200 font-semibold ">Rs 5.0</p>
            <p className="border border-slate-600 rounded-md text-blue-500 px-2 text-2xl font-medium">+</p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4">
          <p className="text-slate-300 font-semibold">Quantity</p>
          <div className="flex gap-3 items-center border py-1 px-2 border-slate-600 rounded-lg">
            <p className="border border-slate-600 rounded-md text-blue-500 px-2 text-2xl font-medium">--</p>
            <p className=" text-slate-200 font-semibold ">5</p>
            <p className="border border-slate-600 rounded-md text-blue-500 px-2 text-2xl font-medium">+</p>
          </div>
        </div>

        <div className="flex px-2">
          <div className="flex flex-col flex-1 items-center">
            <p className="font-semibold text-slate-100">Rs 6.0</p>
            <p className="text-slate-400 text-sm">You Put</p>
          </div>
          <div className="flex flex-col flex-1 items-center">
            <p className="font-semibold text-green-400">Rs 10.0</p>
            <p className="text-slate-400 text-sm">You get</p>
          </div>
        </div>
      </div>
      <button className='font-semibold text-slate-100 bg-blue-700 py-2 rounded-md'>Place Order</button>
    </div>
  );
}

export default PlaceOrder