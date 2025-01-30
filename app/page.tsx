import EventCard from "@/components/EventCard";

export default function Home() {
  return (
    <div className="bg-[#201f1f] w-full min-h-screen ">
      <div className="flex flex-wrap gap-10 mt-8 justify-center">
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
      </div>
    </div>
  );
}
