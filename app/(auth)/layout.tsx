import Landing from '@/components/Landing';
import React, { ReactNode } from 'react'

const layout = ({children}:{children:ReactNode}) => {
  return (
    <div className="flex flex-col items-center lg:flex mt-8 lg:justify-center lg:flex-row lg:items-start ">
      <div className="w-4/5 sm:w-3/5 md:w-1/2 lg:max-w-96">
        {children}
      </div>
      <div className="hidden md:block lg:w-3/5 mt-12 ">
        <Landing />
      </div>

    </div>
  );
}

export default layout