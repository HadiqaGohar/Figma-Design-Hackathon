import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import Link from 'next/link'
import { IoLocationSharp } from 'react-icons/io5'
import { FaPhoneAlt } from 'react-icons/fa'
import { BsFillClockFill } from 'react-icons/bs'

function Contact() {
    return (
        // ...
        <div className="mx-auto">
           
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
                    Contact
                </h1>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
                    <p className="text-gray-700 text-sm md:text-lg flex items-center">
                        <Link href="/" className="font-bold hover:underline">
                            Home
                        </Link>
                        <span className="font-bold mx-2">{'>'}</span>
                        <Link href="/contact" className="hover:underline">
                            Contact
                        </Link>
                    </p>
                </div>
            </div>


           <div className='max-w-screen-2xl mx-auto'>
             {/* Contact Info Section */}
             <section className="mt-16 text-center px-4 md:px-32">
                <h2 className="text-xl lg:text-2xl 2xl:text-3xl font-bold">Get In Touch With Us</h2>
                <p className="mt-4 text-xs sm:text-sm lg:text-md 2xl:text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tempora libero aut, reiciendis, harum laboriosam quis minus quas maxime delectus sint dolores repudiandae, voluptate rerum nemo non corporis esse aspernatur?</p>
            </section>

            <div className="flex flex-col md:flex-row justify-between mt-12 gap-12 md:gap-16">
                {/* Contact Details */}
                <div className="flex flex-col mx-auto gap-8">
                    <div className="flex items-center space-x-4 md:my-6">
                        <div>
                            <span className='flex'>
                                <IoLocationSharp size={25} className="text-4xl text-primary" />
                                <h3 className="font-semibold text-sm md:text-lg xl:text-xl ml-4">Address</h3>
                            </span>
                            <p className='text-xs md:text-sm xl:text-md ml-10'>
                                238 5<sup>th</sup> SE Avenue,
                                <br /> New York NY10000,
                                <br /> United States
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 md:my-6">
                        <div>
                            <span className='flex'>
                                <FaPhoneAlt size={25} className="text-4xl text-primary" />
                                <h3 className="font-semibold ml-4 text-xs md:text-sm xl:text-md">Phone</h3>
                            </span>
                            <p className='text-xs md:text-sm xl:text-md  ml-10'>Mobile : +(84)546-6789</p>
                            <p className='text-xs md:text-sm xl:text-md  ml-10'>Hotline : +(84)546-6789</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 md:my-6">
                        <div>
                            <span className='flex'>
                                <BsFillClockFill size={25} className="text-4xl text-primary" />
                                <h3 className="ml-4 font-semibold text-xs md:text-sm xl:text-md">Working Time</h3>
                            </span>
                            <p className='text-xs md:text-sm xl:text-md  ml-10'>Monday-Friday: 9:00 -
                                <br />22:00</p>
                            <p className='text-xs md:text-sm xl:text-md ml-10'>Saturday-Sunday: 9:00 -
                                <br />21:00</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className=" bg-white mx-auto justify-center rounded-lg p-8 md:w-1/2">
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                            <input type="text" id="name" placeholder="Abc" className="w-full px-6 py-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700"> Email Address</label>
                            <input type="email" id="email" placeholder="Abc@def.com" className="w-full px-6 py-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                            <input type="text" id="subject" placeholder="This is optional" className="w-full px-6 py-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                            <textarea id="message" placeholder="Hi, I would like to ask about..." rows={4} className="w-full px-6 py-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                        </div>
                    </form>
                    <button type="submit" className="py-3 px-16 border border-black rounded-xl mt-8">Submit</button>
                </div>
            </div>
           </div>

        </div>
    )
}

export default Contact;
