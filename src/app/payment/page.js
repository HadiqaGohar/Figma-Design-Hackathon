
'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { savePaymentMethod } from '../../redux/slices/cartSlice'
import CheckoutWizard from '../components/CheckoutWizard'
import Round from '../components/Round'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'

function PaymentMethodPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm()

  const router = useRouter()
  const dispatch = useDispatch()
  const { shippingAddress, paymentMethod } = useSelector((state) => state.cart)

  useEffect(() => {
    if (!shippingAddress.address) {
      return router.push('/shipping')
    }
    setValue('paymentMethod', paymentMethod)
  }, [paymentMethod, router, setValue, shippingAddress])

  const submitHandler = ({ paymentMethod }) => {
    dispatch(savePaymentMethod(paymentMethod))
    router.push('/placeorder')
  }

  return (
    <div className='py-6'>
      <Header/>
      <div className="relative text-black">
        {/* Main Banner Image */}
        <Image
          src="/shop/shop.png" // Replace with the correct image file path
          alt="Shop Banner"
          height={400}
          width={1600}
          className="w-full h-40 md:h-auto object-cover"
        />

        {/* Logo Image - Positioned Above Banner */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-10">
          <Image
            src="/shop/logo.png" // Replace with your logo file path
            alt="Shop Logo"
            height={77}
            width={77}
            className="object-contain"
          />
        </div>

        {/* Main Heading */}
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-[48px] text-[24px] font-medium  -mt-4 md:mt-0">
          Payment
        </h1>

        {/* Breadcrumb Section */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
          <p className="text-gray-700 text-xs md:text-xl flex items-center">
            <Link href="/shipping" className="font-bold hover:underline">Shipping</Link>
            <span className="font-bold mx-2">{'>'}</span>
            <Link href="/payment" className="hover:underline">payment</Link>
          </p>
        </div>
      </div>
      <CheckoutWizard activeStep={2} />
      <div className='flex flex-col lg:flex-row max-w-screen-xl mt-16 mx-auto px-4'>
        {/* Payment Form */}
        <form
          className='w-full lg:w-1/2  p-6 mt-10  mx-auto'
          onSubmit={handleSubmit(submitHandler)}
        >
          <h2 className='font-semibold text-2xl  mb-8'>
            Select Payment Method
          </h2>

          {/* Render Payment Methods */}
          {['Paypal', 'Stripe', 'Cash On Delivery'].map((payment) => (
            <div key={payment} className='mb-4'>
              <input
                name='paymentMethod'
                className='p-2 border border-yellow-300 rounded-lg'
                id={payment}
                type='radio'
                value={payment}
                {...register('paymentMethod', {
                  required: 'Please select a payment method',
                })}
              />
              <label className='ml-2 ' htmlFor={payment}>
                <span className='font-medium text-gray-700'>{payment}</span>
                <p className='mt-4 text-sm text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at arcu at eros malesuada facilisis.</p>
                <hr className='mt-3'/>
              </label>
            </div>
          ))}

          {/* Display error message if payment method is not selected */}
          {errors.paymentMethod && (
            <div className='text-yellow-500 text-sm mb-4'>
              {errors.paymentMethod.message}
            </div>
          )}

          <div className='mb-4 flex '>
            <button className='mt-6 border border-black py-3 px-14 rounded-xl'>
              Next
            </button>
          </div>
        </form>

        {/* Image Component */}
        <div className='w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0'>
          <Image
            src='/pay.jpg' // Add your image path here
            alt='Payment Methods'
            width={500}
            height={200}
            className='rounded-lg'
          />
        </div>
      </div>
      {/* ... */}

      {/* Round Component */}
      <div className='mt-10'>
        <Round />
      </div>
    </div>
  )
}

export default PaymentMethodPage
