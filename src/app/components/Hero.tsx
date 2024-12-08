import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { IoTimeOutline } from 'react-icons/io5';
import { CiCalendar } from 'react-icons/ci';
import Header from './Header';

function Hero() {
    return (
        <div className="bg-[#fbebb5]  mx-auto  max-w-screen-2xl">
            <Header />
            <div className="flex flex-col  md:mx-36 justify-around md:flex-row max-w-screen-2xl  p-20">
                {/* Text Content */}
                <div className=" my-auto text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold my-6">Rocket single</h1>
                    <span className="text-3xl sm:text-4xl md:text-6xl font-semibold block mb-6">seater</span>
                    <Link href="/">
                        <p className="text-2xl mt-8 underline underline-offset-8 text-black-600 ">Shop Now</p>
                    </Link>
                </div>
                {/* Image Section */}
                <div className="mt-6 md:mt-0">
                    <Image
                        src="/hero.jpeg"
                        height={600}
                        width={600}
                        alt="A stylish rocket single seater"
                        className="rounded-lg "
                    />
                </div>
            </div>
            <div>
                <div className='flex flex-col md:flex-row bg-[#F4F4F4] justify-around mx-auto p-10'>
                    <div>
                        <Image
                            alt=''
                            className=''
                            height={500}
                            width={500}
                            src='/hero1.jpeg'
                        />
                        <h3 className='text-3xl font-medium'>Side table</h3>
                        <Link href='/'>
                            <p className="text-xl mt-8 underline underline-offset-8 text-black-600 ">View More</p>
                        </Link>
                    </div>
                    <div>
                        <Image
                            alt=''
                            className=''
                            height={500}
                            width={500}
                            src='/hero2.jpeg'
                        />
                        <h3 className='text-3xl font-medium'>Side table</h3>
                        <Link href='/'>
                            <p className="text-xl mt-8 underline underline-offset-8 text-black-600 ">View More</p>
                        </Link>
                    </div>
                </div>
                <div className=" md:flex-row bg-[#FFFFFF] justify-around mx-auto py-10 px-4">
                    {/* Header Section */}
                    <div className="my-10 text-center mx-auto ">
                        <h2 className="text-3xl font-medium">Top Picks For You</h2>
                        <p className="text-gray-500 mt-10">
                            Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
                        </p>
                    </div>

                    {/* Product List */}
                    <div className="flex flex-wrap justify-center md:justify-start  gap-6 ">
                        {/* Product Item */}
                        {[
                            { src: '/hero3.jpeg', name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00' },
                            { src: '/hero4.jpeg', name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00' },
                            { src: '/hero5.jpeg', name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00' },
                            { src: '/hero6.jpeg', name: 'Plain console with teak', price: 'Rs. 25,000.00' },
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col text-left mx-auto h-[300px] w-[350px] ">
                                <Image
                                    src={item.src}
                                    alt={item.name}
                                    height={300}
                                    width={350}
                                    className="rounded-lg h-[300px] w-[300px] object-cover"
                                />
                                <p className="text-sm font-medium  ">{item.name}</p>
                                <h3 className="text-xl font-semibold">{item.price}</h3>
                            </div>
                        ))}
                    </div>

                    <p className="text-xl text-center mx-auto my-20 underline underline-offset-8 text-black-600 ">View More</p>
                </div>

            </div>
            <div className="flex flex-col bg-[#fff9e5] justify-around md:flex-row max-w-screen-2xl  p-3">
                {/* Image Section */}
                <div className="mt-6 md:mt-0 md:ml-10">
                    <Image
                        src="/hero7.jpeg"
                        height={900}
                        width={900}
                        alt="A stylish rocket single seater"
                        className="rounded-lg "
                    />
                </div>
                {/* Text Content */}
                <div className=" my-auto text-center md:mr-40 ">
                    <p className='font-bold text-xl'>New Arrivals</p>
                    <h2 className="text-4xl sm:text-4xl md:text-4xl font-black my-6">Asgaard sofa</h2>

                    <Link href="/asgaardsofa/">
                        <button className='py-3  px-8 border-black border-2'>Order Now</button>
                    </Link>
                </div>

            </div>
            <div className="md:flex-row bg-[#FFFFFF] justify-around mx-auto py-10 px-4">
                {/* Header Section */}
                <div className="my-10 text-center mx-auto">
                    <h2 className="text-3xl font-semibold">Our Blogs</h2>
                    <p className="text-gray-500 mt-6">
                        Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
                    </p>
                </div>

                {/* Blog Items Section */}
                <div className='flex gap-0 mx-10 flex-wrap justify-center'>
                    <div className='mx-auto text-center mb-10 sm:mb-5'>
                        <Image
                            src="/hero8.jpeg"
                            height={450}
                            width={450}
                            alt="A stylish rocket single seater"
                            className="rounded-lg"
                        />
                        <p className='text-xl font-normal my-3'>Going all-in with millennial design</p>
                        <p className="text-xl text-center mx-auto my-3 underline underline-offset-8 text-black-600 font-medium">Read More</p>
                        <span className='text-center mx-28 flex font-light'>
                            <span className='flex mx-auto text-center'>
                                <IoTimeOutline size={20} />
                                <p className='ml-3'>5 min</p>
                            </span>
                            <span className='flex  mx-auto text-center'>
                                <CiCalendar size={20} />
                                <p className='ml-3'>12<sup>th</sup> Oct 2022</p>
                            </span>
                        </span>
                    </div>

                    <div className='mx-auto text-center mb-10 sm:mb-5'>
                        <Image
                            src="/hero9.jpeg"
                            height={450}
                            width={450}
                            alt="A stylish rocket single seater"
                            className="rounded-lg"
                        />
                        <p className='text-xl font-normal my-3'>Going all-in with millennial design</p>
                        <p className="text-xl text-center mx-auto my-3 underline underline-offset-8 text-black-600 font-medium">Read More</p>
                        <span className='text-center mx-28 flex font-light'>
                            <span className='flex mx-auto text-center'>
                                <IoTimeOutline size={20} />
                                <p className='ml-3'>5 min</p>
                            </span>
                            <span className='flex mx-auto text-center'>
                                <CiCalendar size={20} />
                                <p className='ml-3'>12<sup>th</sup> Oct 2022</p>
                            </span>
                        </span>
                    </div>

                    <div className='mx-auto text-center mb-10 sm:mb-5'>
                        <Image
                            src="/hero10.jpeg"
                            height={450}
                            width={450}
                            alt="A stylish rocket single seater"
                            className="rounded-lg"
                        />
                        <p className='text-xl font-normal my-3'>Going all-in with millennial design</p>
                        <p className="text-xl text-center mx-auto my-3 underline underline-offset-8 text-black-600 font-medium">Read More</p>
                        <span className='text-center mx-28 flex font-light'>
                            <span className='flex  mx-auto text-center'>
                                <IoTimeOutline size={20} />
                                <p className='ml-3'>5 min</p>
                            </span>
                            <span className='flex mx-auto text-center'>
                                <CiCalendar size={20} />
                                <p className='ml-3'>12<sup>th</sup> Oct 2022</p>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="relative md:w-[1600px] md:h-[450px] mb-12">
                {/* Background Image */}
                <Image
                    src="/hero11.jpeg"
                    height={450}
                    width={1600}
                    alt="A stylish rocket single seater"
                    className="rounded-lg object-cover"
                />
                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-black">
                    <h3 className="text-3xl md:text-5xl font-bold mb-4">Our Instagram</h3>
                    <h4 className="md:text-xl mb-6">Follow our store on Instagram</h4>
                    <button className="rounded-full bg-[#FFFFFF] text-black px-10 py-2 md:px-16 md:py-4 shadow-md hover:shadow-lg">
                        Follow Us
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Hero;
