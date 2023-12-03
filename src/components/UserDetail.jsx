import { userData, userFields } from '../constant/constant';
import React from 'react';

const UserDetail = () => {
  return (
    <div className='max-w-md mx-auto bg-neutral-800 p-6 rounded-md shadow-md'>
      {userFields.map((item) => {
        return (
          <>
            <div className='mb-4 flex flex-row'>
              <label className='text-neutral-50 mr-3'>{item.key}:</label>
              <p className='font-bold'>{item.value}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default UserDetail;
