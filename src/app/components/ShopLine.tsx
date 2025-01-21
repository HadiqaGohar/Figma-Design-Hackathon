import React from 'react'
import { HiRectangleStack } from 'react-icons/hi2'
import { MdOutlineFilterList } from 'react-icons/md'
import { PiCirclesFourFill } from 'react-icons/pi'

function ShopLine() {
  return (
    <div className="bg-[#F4F4F4] ">
      <div className='max-w-screen-2xl mx-auto py-4 px-6 flex justify-between  items-center flex-wrap '>
        {/* Left Section */}
        <div className="flex items-center gap-4 flex-wrap mb-4 sm:mb-0">
          <div className="flex items-center gap-1 cursor-pointer">
            <MdOutlineFilterList className="text-xl" />
            <p className='ml-2 text-xs md:text-sm'>Filter</p>
          </div>
          <div className="flex items-center gap-2">
            <PiCirclesFourFill className="text-xl cursor-pointer" />
            <HiRectangleStack className="text-xl ml-2 cursor-pointer" />
          </div>
          <div className="w-[2px] h-10 bg-gray-400 mx-4 hidden md:block "></div>
          <p className='text-xs md:text-sm'>Showing 1-6 of 32 results</p>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <p className='text-xs md:text-sm'>Show</p>
            <div className="text-xs md:text-sm px-2 py-1 bg-white border border-gray-300 rounded-md cursor-pointer">16</div>
          </div>
          <div className="flex items-center gap-2">
            <p className='text-xs md:text-sm'>Sort by</p>
            <div className="text-xs md:text-sm px-2 py-1 bg-white border border-gray-300 rounded-md cursor-pointer">Default</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ShopLine
