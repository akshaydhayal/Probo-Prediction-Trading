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
      {/* <div className="flex gap-12 mt-4">
        <p className="text-gray-400 font-medium text-[17px] cursor-pointer hover:text-gray-300">Orderbook</p>
        <p className="text-gray-400 font-medium text-[17px] cursor-pointer hover:text-gray-300">Overview</p>
      </div> */}
      <EventTabs/>

      <div className="border border-slate-700 p-6 rounded-lg flex flex-col gap-6">
        <p className="text-lg font-semibold text-slate-200">About the Event</p>
        <div className="flex justify-between mr-32">
          <div>
            <p className="font-medium text-gray-300 text-sm">Source of Truth</p>
            <p className="text-gray-400 text-sm font-medium">Fancode</p>
          </div>
          <div>
            <p className="font-medium text-gray-300 text-sm">Event Started on</p>
            <p className="text-gray-400 text-sm font-medium">31 January 2025</p>
          </div>
          <div>
            <p className="font-medium text-gray-300 text-sm">Event expires on</p>
            <p className="text-gray-400 text-sm font-medium">05 February 2025</p>
          </div>
        </div>
        <div>
            <p className="font-medium text-gray-300 text-sm">Event Description</p>
            <p className="text-gray-400 text-sm font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia velit nobis blanditiis ab explicabo repellat accusantium aspernatur nemo minus, saepe libero consectetur obcaecati unde perferendis cupiditate. Corporis deleniti adipisci fugiat, a fuga possimus, dolorum voluptas saepe assumenda optio, sunt aperiam ex eum cumque illo necessitatibus numquam expedita quidem id magni.</p>
        </div>
      </div>
    </div>
  );
}

export default EventDetails