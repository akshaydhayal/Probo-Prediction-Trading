import EventCard from "@/components/EventCard";
import NavList from "@/components/NavList";
import axios from "axios";

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
  _count:{bettings:number}
}

export default async function Home() {
  const events = await axios.get("http://localhost:3000/api/event");
  console.log(events.data);
  const eventsData=events.data.events;
  return (
    <div className="bg-[#201f1f] w-full min-h-screen ">
      <NavList/>
      <div className="flex flex-wrap gap-10 py-8 justify-center">
        {/* {[1,2,3,4,5].map((i)=>{
          return <EventCard eventId={i} key={i}/>
        })} */}
        {eventsData.map((event:eventType)=>{
          // return <EventCard eventId={event.id} key={event.id} event={event}/>
          return <EventCard key={event.id} event={event}/>
        })}
      </div>
    </div>
  );
}
