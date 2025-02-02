import React from 'react'
import PortfolioTabs from '../../../components/PortfolioTabs';

// const UserPage = async({params}:{params:Promise<{userId:string}>}) => {
const UserPage = async() => {
    // const { userId } = await params;
    return (
      <div className="w-full flex justify-center mt-8">
        <div className='lg:w-10/12 md:w-11/12 w-full'>
          <PortfolioTabs/>
        </div>
      </div>
    );
}

export default UserPage;