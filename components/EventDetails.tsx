import EventTabDetails from "./EventTabDetails";
import EventTabs from "./EventTabs"

const EventDetails = () => {
  return (
    <div className="py-4 px-8 flex flex-col gap-4">
      <div className="flex gap-8 items-center ">
        <img
          className="rounded-md w-24 h-24"
          src="https://probo.in/_next/image?url=https%3A%2F%2Fprobo.gumlet.io%2Fimage%2Fupload%2Fprobo_product_images%2FIMAGE_6307afd6-a60e-4647-9ab1-8b3896c020c1.png&w=256&q=75"
        />
        <p className="font-semibold tracking-wide text-slate-300 text-2xl">pLorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nobis.</p>
      </div>

      <EventTabs/>
      {/* <EventTabDetails/> */}
    </div>
  );
}

export default EventDetails