import Landing from '@/components/Landing';
import React from 'react'

const layout = ({children}) => {
  return (
    <div className="flex">
      <div className="w-1/2">
        {children}
      </div>
      <div className="w-1/2 ">
        <Landing />
      </div>
    </div>
  );
}

export default layout