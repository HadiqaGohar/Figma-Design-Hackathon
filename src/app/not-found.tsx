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
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 ">
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
                        <Link href="/not-found" className="hover:underline">404</Link>
                    </p>
                </div>
            </div>


            <div className="text-center my-10">
                <h2 className="text-xl md:text-3xl font-medium">Oops! Looks like something went wrong</h2>
                {/* <p className='mt-4'>Page cannot be found! We’ll have it figured out in no time. Meanwhile, check out these fresh ideas:</p> */}
                <Link href="/" aria-label="Go to Home Page">
                    <button className="mt-8 w-[175px] h-[40px] md:w-[255px] md:h-[64px] border border-black hover:bg-black hover:text-white transition duration-300">
                        Go To Home Page
                    </button>
                </Link>
            </div>

        </div>

    )
}

export default NotFound