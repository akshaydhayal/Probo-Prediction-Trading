import { eventSchema } from "@/app/[eventId]/page";
import EventTabDetails from "./EventTabDetails";
import EventTabs from "./EventTabs"

const EventDetails = ({eventData}:{eventData:eventSchema}) => {
  return (
    <div className="py-4 px-8 flex flex-col gap-4">
      <div className="flex gap-8 items-center ">
        <img
          className="bg-yellow-300 p-1 rounded-md w-24 h-24" src={eventData.imageUrl}/>
        <p className="font-semibold tracking-wide text-slate-300 text-2xl">{eventData.title}</p>
      </div>

      <EventTabs eventData={eventData}/>
      {/* <EventTabDetails/> */}
    </div>
  );
}

export default EventDetails