import React from 'react'
import PortfolioTabs from '../../../components/PortfolioTabs';

const UserPage = async({params}:{params:Promise<{userId:string}>}) => {
    const { userId } = await params;
    return (
      <div className="w-full flex justify-center mt-8">
        <div className='w-4/5'>
          <PortfolioTabs/>
        </div>
      </div>
    );
}

export default UserPage;