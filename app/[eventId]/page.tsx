import EventDetails from "@/components/EventDetails";
import PlaceOrder from "@/components/PlaceOrder";
import { eventType } from "../page";
import { roundOff } from "@/lib/lib";

export interface eventSchema extends eventType{
    bettings :{
        id:number,
        amount:number,
        prediction:'YES'|'NO',
        eventId:number,
        userId:number
    }[]
}
export default async function EventPage({params}:{params:Promise<{eventId:string}>}){
    const {eventId}=await params;
    const event=await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/event/${eventId}`);
    const eventData:eventSchema=(await event.json()).event;
    const yesOdds=roundOff((eventData.totalBetting==0?1:eventData.totalBetting)/(eventData.yesBetting==0?1:eventData.yesBetting),2)
    const noOdds=roundOff((eventData.totalBetting==0?1:eventData.totalBetting)/(eventData.noBetting==0?1:eventData.noBetting),2)

    return(
        <div className="w-full lg:flex  lg:justify-center lg:gap-2 mt-8 px-4 ">
            <div className="lg:w-2/3 w-full ">
                <EventDetails eventData={eventData}/>
            </div>
            <div className="mt-8 lg:max-w-80 w-full flex  justify-center">
                <PlaceOrder eventId={eventData.id} yesOdds={yesOdds} noOdds={noOdds}/>
            </div>
        </div>
    )
}