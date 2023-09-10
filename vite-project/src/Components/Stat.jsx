import React from 'react'

export const Stat = () => {
  return (
    <div className="stat py-[80px] flex justify-center px-[200px]  ">
    <div className="stat1 flex flex-col items-center border-r-[3px] border-grey-700 pr-2 md:pr-[100PX]"><span className='text-gray-600 text-center h1 text-xl sm:text-2xl font-normal'>Something</span> <span className='h1 text-gray-700 text-center text-3xl md:text-4xl font-medium'>+436</span> </div>
    <div className="stat2 flex flex-col items-center border-r-[3px] border-grey-700 px-2 md:px-[100PX]  "><span className='text-gray-600 text-center h1 text-xl sm:text-2xl font-normal '>Something</span> <span className='h1 text-gray-700 text-center text-3xl md:text-4xl font-medium'>+36</span></div>
    <div className="stat3 flex flex-col items-center pl-2 md:pl-[100px]"><span className='text-gray-600 text-center text-xl sm:text-2xl font-normal'>Something</span> <span className='h1 text-gray-700 text-center text-3xl md:text-4xl font-medium'>+6</span></div>
  </div>
  )
}
