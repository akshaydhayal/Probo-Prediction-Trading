import EventDetails from "@/components/EventDetails";
import PlaceOrder from "@/components/PlaceOrder";

export default function EventPage(){
    return(
        <div className="w-full flex justify-end mt-8 px-4">
            <div className="w-3/4">
                <EventDetails/>
            </div>
            <div className="w-1/4">
                <PlaceOrder/>
            </div>
        </div>
    )
}