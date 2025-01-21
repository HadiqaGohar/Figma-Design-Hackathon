import React from 'react'

function CheckoutWizard({ activeStep = 0 }) {
    return (
        <div className='text-xs md:text-lg my-6 mx-auto mb-5 flex flex-wrap'>
            {['User Login', 'Shipping Address', 'Payment Method', 'Place Order'].map(
                (step, index) => (
                    <div
                        key={step}
                        className={`flex-1 border-b-2  
                    text-center
                    ${index <= activeStep
                                ? 'border-yellow-500 text-yellow-600'
                                : 'border-gray-400 text-gray-400'
                            } 
                                `}
                    >
                        {step}
                    </div>
                )
            )}
        </div>
    )
}

export default CheckoutWizard