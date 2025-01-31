import Landing from '@/components/Landing';
import React, { ReactNode } from 'react'

const layout = ({children}:{children:ReactNode}) => {
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