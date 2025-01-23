import React from 'react'
import Image from 'next/image'
import Header from './components/Header'
import Link from 'next/link'

function NotFound() {
    return (

        <div className="">
           {/* Banner Section */}
           <div className="relative text-black">
                <Image
                    src="/shop/shop.png"
                    alt="Shop Banner"
                    height={400}
                    width={1600}
                    className="w-full h-40 md:h-[400px] object-cover"
                />
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                    <Image
                        src="/shop/logo.png"
                        alt="Shop Logo"
                        height={77}
                        width={77}
                        className="object-contain w-[50px] h-[50px] md:h-[77px] md:w-[77px] translate-y-4"
                    />
                </div>
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[24px] md:text-[48px] font-medium">
                    Not Found
                </h1>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
                    <p className="text-gray-700 text-sm md:text-lg flex items-center">
                        <Link href="/" className="font-bold hover:underline">
                            Home
                        </Link>
                        <span className="font-bold mx-2">{'>'}</span>
                        <Link href="/404" className="hover:underline">
                            404
                        </Link>
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