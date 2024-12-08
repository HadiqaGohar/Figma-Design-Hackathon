import React from 'react';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Image from 'next/image';
import { BsFacebook } from 'react-icons/bs';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

function AsgaardSofa() {
    const images = ["/hero5.jpeg", "/hero6.jpeg", "/hero3.jpeg", "/hero4.jpeg"]; // Replace with correct image paths
    const sizes = ["L", "XL", "XS"];
    const colors = ["bg-purple-700", "bg-blue-500", "bg-green-400"]; // Add color classes here

    return (
        <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
            <Header />
            <nav className="text-gray-700 text-lg flex items-center space-x-2">
                <Link href="/" className="font-bold hover:underline">
                    Home
                </Link>
                <span className="font-bold">{'>'}</span>
                <Link href="/shop" className="hover:underline">
                    Shop
                </Link>
                <span className="font-bold">{'|'}</span>
                <span>Asgaard Sofa</span>
            </nav>

            <div className="flex gap-8 mt-8">
                {/* Left Side: Small Images */}
                <div className="flex flex-col gap-4 h-[180px] w-[200px]">
                    {images.map((img, idx) => (
                        <Image
                            key={idx}
                            src={img}
                            alt={`Sofa Image ${idx + 1}`}
                            height={180}
                            width={200}
                            className="rounded-lg object-cover cursor-pointer hover:scale-105 transition-transform"
                        />
                    ))}
                </div>

                {/* Center: Big Image */}
                <div className="flex-1 h-[700px] w-[500px]">
                    <Image
                        src="/hero7.jpeg"
                        alt="Main Sofa Image"
                        height={500}
                        width={300}
                        className="w-full h-[550px] rounded-lg object-cover"
                    />
                </div>

                {/* Right Side: Product Details */}
                <div className="flex-1">
                    <h3 className="text-2xl font-medium">Asgaard Sofa</h3>
                    <p className="text-xl text-gray-500">Rs: 250,000.00</p>
                    <div className="flex items-center space-x-2 mt-2">
                        <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                        <span className="text-gray-700">(5 Customer Reviews)</span>
                    </div>
                    <p className="mt-4 text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, ea
                        excepturi. Minima adipisci, ratione, aspernatur culpa cum dolor eos optio
                        maiores eius, reiciendis earum aut laborum delectus exercitationem velit
                        alias.
                    </p>

                    {/* Size Options */}
                    <div className="mt-4">
                        <h4 className="font-semibold">Size</h4>
                        <div className="flex gap-2 mt-2">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    className="border rounded-md px-4 py-2 hover:bg-gray-200"
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Color Options */}
                    <div className="mt-4">
                        <h4 className="font-semibold">Color</h4>
                        <div className="flex gap-2 mt-2">
                            {colors.map((color, idx) => (
                                <div
                                    key={idx}
                                    className={`rounded-full h-5 w-5 ${color}`}
                                ></div>
                            ))}
                        </div>
                    </div>

                    {/* Quantity and Add to Cart */}
                    <div className="flex items-center gap-4 mt-6">
                        <div className="flex items-center border p-2 gap-4">
                            <button aria-label="Decrease quantity">-</button>
                            <span>1</span>
                            <button aria-label="Increase quantity">+</button>
                        </div>
                        <button className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90">
                            Add To Cart
                        </button>
                    </div>

                    <hr className="my-6" />

                    {/* Additional Information */}
                    <div className='mr-52 space-y-4'>
                        <div className="flex justify-between">
                            <span>SKU:</span>
                            <span>SS001</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Category:</span>
                            <span>Sofas</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Tags:</span>
                            <span>Sofa, Chair, Home, Shop</span>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <span>Share:</span>
                            <div className="flex space-x-2">
                                <BsFacebook className="cursor-pointer" size={25} />
                                <FaLinkedin className=" cursor-pointer" size={25} />
                                <FaTwitter className="cursor-pointer" size={25} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <h3 className='text-2xl font-medium my-10 flex justify-center space-x-8'>
                    <span>Description</span>
                    <span className='text-gray-400'>Additional Information</span>
                    <span className='text-gray-400'>Reviews [5]</span>
                </h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus blanditiis sed laudantium neque saepe, laboriosam quasi at sit ipsa adipisci deleniti amet. Reiciendis fuga quia sed eum cum nisi voluptatem? Amet sequi culpa dolor veniam adipisci laborum assumenda repellendus quasi?</p>
                <br />
                <p className='mb-20'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, dolorum ducimus aliquid deserunt impedit magni sapiente rem assumenda libero explicabo quaerat facere asperiores, deleniti officiis quidem temporibus nemo est. Inventore eos voluptatem est itaque, ipsa delectus accusamus ab provident esse ducimus dolorum optio, quae commodi. Amet, porro recusandae! Eligendi recusandae nobis autem dolorum dolor deserunt eius sapiente quidem, fuga adipisci, sed beatae repellat distinctio error ducimus quasi, iure impedit eaque dolore ad sit. Aspernatur eveniet ea eligendi ratione quos, aut nihil tenetur laudantium neque! Adipisci ex ea vel ducimus vitae recusandae nisi omnis dolores, vero fugit tempora, nulla aliquid sit?</p>

            </div>
            <div className='flex gap-10'>
                <div className="w-1/2 h-[500px]">
                    <Image
                        alt='Related Product 1'
                        src='/sofaset2.jpeg'
                        height={500}
                        width={900}
                        className="rounded-lg cursor-pointer hover:scale-105 transition-transform"
                    />
                </div>
                <div className="w-1/2 h-[400px]">
                    <Image
                        alt='Related Product 2'
                        src='/sofaset.jpeg'
                        height={400}
                        width={650}
                        className="rounded-lg cursor-pointer hover:scale-105 transition-transform"
                    />
                </div>
            </div>

            <h2 className="text-3xl font-medium mt-8">Related Products</h2>
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
        </div>
    );
}

export default AsgaardSofa;
