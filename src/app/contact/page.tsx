import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import Link from 'next/link'
import { IoLocationSharp } from 'react-icons/io5'
import { FaPhoneAlt } from 'react-icons/fa'
import { BsFillClockFill } from 'react-icons/bs'

function Contact() {
    return (
        <div className="max-w-screen-xl container mx-auto pb-8 px-4">
             <div className='bg-[#faf4f4]'>
                <Header />
            </div>
            {/* Banner Section */}
            <div className="relative text-black">
                <Image
                    src="/shop.jpeg" // Replace with the correct image file path
                    alt="Shop Banner"
                    height={400}
                    width={1600}
                    className="w-full h-[200px] md:h-auto object-cover"
                />
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-5xl font-semibold ">
                    Contact
                </h1>
                {/* Breadcrumb Section */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
                    <p className="text-gray-700 text-xs md:text-xl flex items-center">
                        <Link href="/" className="font-bold hover:underline">Home</Link>
                        <span className="font-bold mx-2">{'>'}</span>
                        <Link href="/shop" className=" hover:underline">Contact</Link>
                    </p>
                </div>
            </div>

           {/* Contact Info Section */}
<section className="mt-16 text-center px-4 md:px-32">
    <h2 className="text-3xl font-bold">Get In Touch With Us</h2>
    <p className="mt-4 text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tempora libero aut, reiciendis, harum laboriosam quis minus quas maxime delectus sint dolores repudiandae, voluptate rerum nemo non corporis esse aspernatur?</p>
</section>

<div className="flex flex-col md:flex-row justify-between mt-12 gap-12 md:gap-16">
    {/* Contact Details */}
    <div className="flex flex-col gap-8">
        <div className="flex items-center space-x-4 my-6">
            <div>
                <span className='flex'>
                    <IoLocationSharp size={25} className="text-4xl text-primary" />
                    <h3 className="font-semibold text-xl ml-4">Address</h3>
                </span>
                <p className='ml-10'>
                    238 5<sup>th</sup> SE Avenue,
                    <br /> New York NY10000,
                    <br /> United States
                </p>
            </div>
        </div>
        <div className="flex items-center space-x-4 my-6">
            <div>
                <span className='flex'>
                    <FaPhoneAlt size={25} className="text-4xl text-primary" />
                    <h3 className="font-semibold ml-4 text-lg">Phone</h3>
                </span>
                <p className='ml-10'>Mobile : +(84)546-6789</p>
                <p className='ml-10'>Hotline : +(84)546-6789</p>
            </div>
        </div>
        <div className="flex items-center space-x-4 my-6">
            <div>
                <span className='flex'>
                    <BsFillClockFill size={25} className="text-4xl text-primary" />
                    <h3 className="ml-4 font-semibold text-lg">Working Time</h3>
                </span>
                <p className='ml-10'>Monday-Friday: 9:00 - 
                    <br />22:00</p>
                <p className='ml-10'>Saturday-Sunday: 9:00 - 
                    <br />21:00</p>
            </div>
        </div>
    </div>

    {/* Contact Form Section */}
    <div className="mt-16 bg-white rounded-lg p-8 md:w-1/2">
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
    )
}

export default Contact;
