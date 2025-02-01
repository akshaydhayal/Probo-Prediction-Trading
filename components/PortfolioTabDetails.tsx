// import { eventSchema } from '@/app/[eventId]/page';
import React from "react";
import TradesRow from "./TradeRow";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { roundOff } from "@/lib/lib";

// const PortfolioTabDetails = ({tabClicked,eventData}:{tabClicked:string,eventData:eventSchema}) => {
const PortfolioTabDetails = ({ tabClicked }: { tabClicked: string }) => {
  const userInfo = useSelector((state: RootState) => state.userSlice.user);
  const activeInvestments=userInfo?.bettings.filter(bet=>bet.event.result=='PENDING').reduce((acc,bet)=>acc+bet.amount,0);
  
  const activeGains=userInfo?.bettings.filter(bet=>bet.event.result=='PENDING').reduce((acc,bet)=>{
    const gain=bet.prediction=='YES'?((bet.event.totalBetting/bet.event.yesBetting)*bet.amount):((bet.event.totalBetting/bet.event.noBetting)*bet.amount);
    // console.log(bet.amount,bet.event.totalBetting,bet.event.yesBetting,bet.event.noBetting,gain);
    // console.log('b');
    // console.log('a',bet.amount,bet.event.totalBetting,bet.event.yesBetting,bet.event.noBetting,gain);
    return acc+gain;
  },0);
  
  const closedGains=userInfo?.bettings.filter(bet=>bet.event.result!='PENDING').reduce((acc,bet)=>{
    const gain=bet.prediction==bet.event.result?(bet.prediction=='YES'?(bet.event.totalBetting/bet.event.yesBetting*bet.amount):(bet.event.totalBetting/bet.event.noBetting*bet.amount)):-1*bet.amount;
    console.log('c',bet.amount,bet.event.totalBetting,bet.event.yesBetting,bet.event.noBetting,gain);
    return acc+gain;
  },0);
  
  const closedInvestments=userInfo?.bettings.filter(bet=>bet.event.result!='PENDING').reduce((acc,bet)=>acc+bet.amount,0);

  return (
    <div className=" p-6 rounded-lg flex flex-col gap-6">
      <div className="flex items-center gap-64 bg-[#1b1a1a] py-6 px-16">
        <div className="flex flex-col gap-1">
          <p className="font-semibold  text-slate-400">RETURNS</p>
          <p className="font-bold text-2xl px-2 text-slate-300">{tabClicked=='Active Trades'?'--':' Rs '+closedGains}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-semibold  text-slate-400">INVESTMENT</p>
          <p className="font-bold text-2xl px-2 text-slate-300">Rs {tabClicked=='Active Trades'?activeInvestments:closedInvestments}</p>
        </div>
      </div>

      <div className="w-full flex">
        <p className="w-1/2 font-[550] text-slate-200">Event</p>
        <div className="flex w-1/2">
          <p className="font-[540] text-slate-200  w-1/4 text-center">Investments</p>
          <p className="font-[540] text-slate-200 w-1/4 text-center">Returns</p>
          <p className="font-[540] text-slate-200 w-1/4 text-center">Predicted</p>
          <p className="font-[540] text-slate-200 w-1/4 text-center">Result</p>
        </div>
      </div>

      <div className="flex flex-col ">
        {tabClicked=='Closed Trades'?
        userInfo?.bettings.filter((bet)=>bet.event.result!='PENDING').map((bet) => {
          return (
            <TradesRow
              key={bet.id}
              title={bet.event.title}
              imageUrl={bet.event.imageUrl}
              amountInvested={bet.amount}
              result={bet.event.result}
              predicted={bet.prediction}
              amountGain={
                 bet.prediction == bet.event.result
                  ? `+ Rs ${
                      bet.prediction == "YES"
                        ? roundOff( (bet.event.totalBetting / bet.event.yesBetting)*bet.amount, 2)
                        : roundOff( (bet.event.totalBetting / bet.event.noBetting)*bet.amount, 2)
                    }`
                  : `- Rs ${bet.amount}`
              }
            />
          );
        }
      ):userInfo?.bettings.filter(bet=>bet.event.result=='PENDING').map((bet)=>{
        return (
          <TradesRow
            key={bet.id}
            title={bet.event.title}
            imageUrl={bet.event.imageUrl}
            amountInvested={bet.amount}
            result={bet.event.result}
            predicted={bet.prediction}
            amountGain="-"
          />
        );
      })
    }
      </div>
    </div>
  );
};

export default PortfolioTabDetails;
