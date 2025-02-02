import EventCard from "@/components/EventCard";
// import axios from "axios";

enum eventResult{
  YES='YES',
  NO='NO',
  PENDING='PENDING'
}
export type eventType={
  id: number,
  title: string,
  description: string,
  sourceOfTruth:string,
  imageUrl:string,
  totalBetting:number,
  yesBetting:number,
  noBetting:number,
  result:eventResult
  startTime:string, 
  endTime:string, 
  _count?:{bettings:number}
}

export default async function Home() {
  // const events = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/event`);
  const events = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/event`,{
    method:'GET',
    cache:'no-store'
  });
  // const eventsData=events.data.events;
  const eventsData=(await events.json()).data.events;
  console.log("main page rendered");
  return (
    <div className="bg-[#201f1f] w-full min-h-screen ">
      {/* <NavList/> */}
      <div className="flex flex-wrap gap-6 py-8 justify-center">
        {eventsData.map((event:eventType)=>{
          return <EventCard key={event.id} event={event}/>
        })}
      </div>
    </div>
  );
}
