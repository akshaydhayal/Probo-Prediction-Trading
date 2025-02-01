import EventDetails from "@/components/EventDetails";
import PlaceOrder from "@/components/PlaceOrder";
import { eventType } from "../page";

export interface eventSchema extends eventType{
    bettings :{
        id:number,
        amount:number,
        prediction:'YES'|'NO',
        eventId:number,
        userId:number
    }[]
}
export default async function EventPage({params}:{params:{eventId:string}}){
    const {eventId}=await params;
    const event=await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/event/${eventId}`);
    const eventData:eventSchema=(await event.json()).event;
    console.log(eventData);

    return(
        <div className="w-full flex justify-end mt-8 px-4">
            <div className="w-3/4">
                <EventDetails eventData={eventData}/>
            </div>
            <div className="w-1/4">
                <PlaceOrder eventId={eventData.id}/>
            </div>
        </div>
    )
}