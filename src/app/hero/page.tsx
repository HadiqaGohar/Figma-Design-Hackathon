import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { IoTimeOutline } from 'react-icons/io5'
import { CiCalendar } from 'react-icons/ci'
import Header from '../components/Header'
import Asgaard from '../asgaardsofa/page'

function Hero() {
    return (
        <div className=' text-[#000000] mx-auto max-w-screen-2xl flex flex-col '>
          
            {/* SECTION 1 */}

            <div className="bg-[#FBEBB5] mx-auto max-w-screen-2xl flex flex-col md:flex-row w-full h-auto md:h-[900px] items-center px-4">
                {/* Text Section */}
                <div className="w-full md:w-[440px] h-auto md:h-[276px] text-center md:text-left mt-6 md:mt-0 md:ml-[202px]">
                    <h1 className="scroll-animate-left  text-[32px] md:text-[64px] font-medium leading-tight">
                        Rocket Single Seater
                    </h1>
                    <Link href="/shop" aria-label="Shop for Rocket Single Seater">
                        <p className="scroll-animate-left scroll-delay-1s text-[18px] md:text-[24px] mt-4 md:mt-8 font-medium underline underline-offset-8">
                            Shop Now
                        </p>
                    </Link>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-[853px] h-auto flex justify-center mt-6 md:mt-0">
                    <Image
                        src="/hero/main.png"
                        alt="Rocket single seater hero image"
                        height={1000}
                        width={853}
                        className="max-w-full h-auto scroll-animate-left scroll-delay-2s"
                    />
                </div>
            </div>


            {/* SECTION 2 */}


            <div className="bg-[#FAF4F4] mx-auto  flex flex-wrap justify-center gap-8 w-full max-w-[1540px] h-[672px] p-4">
                {/* Image 1 */}
                <div className="flex flex-col items-center max-w-[605px]">
                    <Image
                        src="/hero/sec2img1.png"
                        alt="A stylish wooden side table"
                        height={562}
                        width={605}
                        className="rounded-lg scroll-animate-left scroll-delay-1s"
                    />
                    <div className='-mt-40 -ml-48'>
                        <h2 className="scroll-animate-left scroll-delay-1s text-[28px] md:text-[36px] mt-8 md:mt-0  font-medium">Side Table</h2>
                        <Link href="/">
                            <p className="scroll-animate-left scroll-delay-2s text-[15px] md:text-[20px] mt-4 font-medium underline underline-offset-8 ">
                                View More
                            </p>
                        </Link>
                    </div>
                </div>

                {/* Image 2 */}
                <div className="flex flex-col items-center max-w-[605px]">
                    <Image
                        src="/hero/sec2img2.png"
                        alt="A modern minimalist side table"
                        height={562}
                        width={605}
                        className="rounded-lg scroll-animate-left "
                    />
                    <div className='-mt-32 -ml-48'>
                        <h2 className="scroll-animate-left scroll-delay-1s text-[28px] md:text-[36px] mt-8 md:mt-0 font-medium ">Side Table</h2>
                        <Link href="/">
                            <p className="scroll-animate-left scroll-delay-2s text-[15px] md:text-[20px] mt-4 font-medium underline underline-offset-8 ">
                                View More
                            </p>
                        </Link>
                    </div>
                </div>
            </div>

            
            {/* SECTION 3 */}
            <div className="flex flex-col items-center my-auto text-center h-auto w-full font-medium">
                <div className='flex flex-col my-auto items-center w-full'>
                    <div>
                        <h2 className="text-[36px] mt-20">Top Picks For You</h2>
                        <p className="text-[#9F9F9F] text-[16px] mb-8">
                            Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 lg:gap-6 xl:gap-8">
                        {/* Picture 1 */}
                        <div className="text-left h-[397px] w-[287px]">
                            <div className='flex items-center w-[287px] h-[287px]'>
                                <Image
                                    src="/hero/sec3img1.png"
                                    alt="A modern minimalist side table"
                                    height={287}
                                    width={287}
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="mt-4">
                                <p className="text-[16px]">Trenton modular sofa_3</p>
                                <h3 className="text-[24px] font-semibold">Rs. 25,000.00</h3>
                            </div>
                        </div>

                        {/* Picture 2 */}
                        <div className="text-left h-[397px] w-[287px]">
                            <div className='flex items-center w-[287px] h-[287px]'>
                                <Image
                                    src="/hero/sec3img2.png"
                                    alt="A modern minimalist side table"
                                    height={287}
                                    width={287}
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="mt-4">
                                <p className="text-[16px]">Trenton modular sofa_3</p>
                                <h3 className="text-[24px] font-semibold">Rs. 25,000.00</h3>
                            </div>
                        </div>

                        {/* Picture 3 */}
                        <div className="text-left h-[397px] w-[287px]">
                            <div className='flex items-center w-[287px] h-[287px]'>
                                <Image
                                    src="/hero/sec3img3.png"
                                    alt="A modern minimalist side table"
                                    height={287}
                                    width={287}
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="mt-4">
                                <p className="text-[16px]">Trenton modular sofa_3</p>
                                <h3 className="text-[24px] font-semibold">Rs. 25,000.00</h3>
                            </div>
                        </div>

                        {/* Picture 4 */}
                        <div className="text-left h-[397px] w-[287px]">
                            <div className='flex items-center w-[287px] h-[287px]'>
                                <Image
                                    src="/hero/sec3img4.png"
                                    alt="A modern minimalist side table"
                                    height={287}
                                    width={287}
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="mt-4">
                                <p className="text-[16px]">Trenton modular sofa_3</p>
                                <h3 className="text-[24px] font-semibold">Rs. 25,000.00</h3>
                            </div>
                        </div>
                    </div>
                    <Link href="/">
                        <p className="text-[20px] mb-10 mt-4 font-medium underline underline-offset-8 ">
                            View More
                        </p>
                    </Link>
                </div>
            </div>


            <Asgaard/>

            {/* SECTION 5 */}
            <div className="flex flex-col items-center w-full h-auto text-center px-4">
                {/* Section Title */}
                <div className="my-10">
                    <h2 className="text-[36px] font-medium">Our Blogs</h2>
                    <p className="text-[16px] text-[#9F9F9F] mt-2">
                        Find a bright idea to suit your taste with our great selection
                    </p>
                </div>

                {/* Blog Container */}
                <div className="w-full max-w-[1240px] h-auto flex flex-wrap justify-between gap-6 mx-auto">

                    {/* Blog Post 1 */}
                    <div className="w-full md:w-[393px] h-auto">
                        <div className="h-[393px] w-full">
                            <Image
                                src='/hero/sec5img1.png'
                                height={393}
                                width={393}
                                alt="Blog 1"
                                className=" object-cover w-full h-full"
                            />
                        </div>
                        <div className="my-4">
                            <p className="text-[20px]">Going all-in with millennial design</p>
                            <Link href={''}>
                                <p className="text-[24px] text-center mx-auto underline underline-offset-8 text-black-600 font-medium">
                                    Read More
                                </p>
                            </Link>
                            <span className="flex text-center justify-center mt-4">
                                <span className="flex">
                                    <IoTimeOutline size={20} className='animate-bounce'/>
                                    <p className="ml-1">5 min</p>
                                </span>
                                <span className="flex ml-3">
                                    <CiCalendar size={20} className='animate-bounce'/>
                                    <p className="ml-1">12<sup>th</sup> Oct 2022</p>
                                </span>
                            </span>
                        </div>
                    </div>

                    {/* Blog Post 2 */}
                    <div className="w-full md:w-[393px] h-auto">
                        <div className="h-[393px] w-full">
                            <Image
                                src='/hero/sec5img2.png'
                                height={393}
                                width={393}
                                alt="Blog 2"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="my-4">
                            <p className="text-[20px]">Going all-in with millennial design</p>
                            <Link href={''}>
                                <p className="text-[24px] text-center mx-auto underline underline-offset-8 text-black-600 font-medium">
                                    Read More
                                </p>
                            </Link>
                            <span className="flex text-center justify-center mt-4">
                                <span className="flex">
                                    <IoTimeOutline size={20} className='animate-bounce'/>
                                    <p className="ml-1">5 min</p>
                                </span>
                                <span className="flex ml-3">
                                    <CiCalendar size={20} className='animate-bounce'/>
                                    <p className="ml-1">12<sup>th</sup> Oct 2022</p>
                                </span>
                            </span>
                        </div>
                    </div>

                    {/* Blog Post 3 */}
                    <div className="w-full md:w-[393px] h-auto">
                        <div className="h-[393px] w-full">
                            <Image
                                src='/hero/sec5img3.png'
                                height={393}
                                width={393}
                                alt="Blog 3"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="my-4">
                            <p className="text-[20px]">Going all-in with millennial design</p>
                            <Link href={''}>
                                <p className="text-[24px] text-center mx-auto underline underline-offset-8 text-black-600 font-medium">
                                    Read More
                                </p>
                            </Link>
                            <span className="flex text-center justify-center mt-4">
                                <span className="flex">
                                    <IoTimeOutline size={20} className='animate-bounce'/>
                                    <p className="ml-1">5 min</p>
                                </span>
                                <span className="flex ml-3">
                                    <CiCalendar size={20} className='animate-bounce'/>
                                    <p className="ml-1">12<sup>th</sup> Oct 2022</p>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                {/* View All Posts Button */}
                <button className="text-[24px] mb-10 text-center mx-auto underline underline-offset-8 text-black-600 font-medium mt-8">
                    View All Posts
                </button>
            </div>


            {/* SECTION 6 */}
            <div className="relative w-full h-[450px] flex flex-col items-center justify-center">
                <div className="relative w-full h-full">
                    {/* Image Section */}
                    <Image
                        src="/hero/sec6img1.png"
                        height={450}
                        width={1440}
                        alt="Instagram Section"
                        className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    />
                    {/* Content Section */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
                        <h2 className="text-[40px] sm:text-[60px] font-bold text-center">
                            Our Instagram
                        </h2>
                        <p className="text-[16px] sm:text-[20px]  text-center mt-2">
                            Follow our store on Instagram
                        </p>
                        <button className="mt-4 rounded-full text-black hover:text-white hover:bg-black h-[48px] sm:h-[64px] w-[200px] sm:w-[255px] md:px-16 md:py-4 shadow-md hover:shadow-lg">
                            Follow Us
                        </button>
                        
                    </div>
                </div>
            </div>


        </div >
    )
}

export default Hero

// New