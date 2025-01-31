import React from 'react'

const EventTabDetails = ({tabClicked}) => {
  return (
    <div className="border border-slate-700 p-6 rounded-lg flex flex-col gap-6">
      <p className="text-lg font-semibold text-slate-200">About the Event {tabClicked}</p>
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
        <p className="text-gray-400 text-sm font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia velit nobis blanditiis ab explicabo repellat accusantium aspernatur nemo minus, saepe
          libero consectetur obcaecati unde perferendis cupiditate. Corporis deleniti adipisci fugiat, a fuga possimus, dolorum voluptas saepe assumenda optio,
          sunt aperiam ex eum cumque illo necessitatibus numquam expedita quidem id magni.
        </p>
      </div>
    </div>
  );
}

export default EventTabDetails