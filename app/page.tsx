import EventCard from "@/components/EventCard";

export default function Home() {
  return (
    <div className="bg-[#201f1f] w-full min-h-screen ">
      <div className="flex flex-wrap gap-10 mt-8 justify-center">
        {[1,2,3,4,5].map((i)=>{
          return <EventCard eventId={i} key={i}/>
        })}
      </div>
    </div>
  );
}
