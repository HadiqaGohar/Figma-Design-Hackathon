import React from 'react'

function Field() {
  return (
    <div>
      <div className='bg-[#FAFAFA] py-16'>
        <div className='flex flex-wrap justify-between mx-auto max-w-screen-xl'>
          {/* Free Delivery Section */}
          <div className='text-left mb-6 sm:mb-0 w-full sm:w-auto'>
            <h3 className='font-semibold text-2xl'>Free Delivery</h3>
            <p className='text-gray-600 text-sm'>For all orders over $50, consectetur adipiscing elit.</p>
            <p className='text-gray-600 text-sm'>adipiscing elit.</p>
          </div>

          {/* 90 Days Return Section */}
          <div className='text-left mb-6 sm:mb-0 w-full sm:w-auto'>
            <h3 className='font-semibold text-2xl'>90 Days Return</h3>
            <p className='text-gray-600 text-sm'>If goods have problems, consectetur </p>
            <p className='text-gray-600 text-sm'>adipiscing elit.</p>
          </div>

          {/* Secure Payment Section */}
          <div className='text-left mb-6 sm:mb-0 w-full sm:w-auto'>
            <h3 className='font-semibold text-2xl'>Secure Payment</h3>
            <p className='text-gray-600 text-sm'>100% secure payment, consectetur </p>
            <p className='text-gray-600 text-sm'>adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Field
