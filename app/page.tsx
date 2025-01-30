import EventCard from "@/components/EventCard";

export default function Home() {
  return (
    <div className="bg-[#201f1f] w-screen h-screen">
      <div className="flex gap-8 mt-8 flex-wrap justify-center">
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
      </div>
    </div>
  );
}
