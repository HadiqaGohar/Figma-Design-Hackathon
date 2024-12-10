import React from 'react'
import Image from 'next/image'
import Header from './components/Header'
import Link from 'next/link'

function NotFound() {
  return (
   
        <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
            <div className='bg-[#faf4f4]'>
                <Header />
            </div>

           {/* Banner Section */}
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
                   404 Error
                </h1>

                {/* Breadcrumb Section */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
                    <p className="text-gray-700 text-xs md:text-xl flex items-center">
                        <Link href="/" className="font-bold hover:underline">Home</Link>
                        <span className="font-bold mx-2">{'>'}</span>
                        <Link href="/shop" className="hover:underline">404 Error</Link>
                    </p>
                </div>
            </div>

    </div>
  )
}

export default NotFound