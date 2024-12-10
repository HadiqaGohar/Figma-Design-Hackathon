import React from 'react';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Image from 'next/image';
import { BsFacebook } from 'react-icons/bs';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

function AsgaardSofaId() {
    const images = ["/shop/group4/img1.png", "/shop/group4/img2.png", "/shop/group3/img3.png", "/shop/group4/img4.png"]; // Replace with correct image paths
    const sizes = ["L", "XL", "XS"];
    const colors = ["bg-purple-700", "bg-blue-500", "bg-green-400"]; // Add color classes here

    return (
        <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
            <Header />
            <nav className="text-gray-700 text-sm flex flex-wrap items-center space-x-2 my-4">
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

            <div className="flex flex-wrap gap-8 mt-8">
                <div className='flex flex-col md:flex-row gap-8 w-full'>
                    {/* Left Side: Small Images */}
                    <div className='w-full md:w-1/5 flex md:flex-col gap-4'>
                        {images.map((img, idx) => (
                            <Image
                                key={idx}
                                src={img}
                                alt={`Sofa Image ${idx + 1}`}
                                height={80}
                                width={76}
                                className="rounded-lg object-cover cursor-pointer hover:scale-105 transition-transform"
                            />
                        ))}
                    </div>

                    {/* Center: Big Image */}
                    <div className="md:-ml-20 w-full md:w-2/4">
                        <Image
                            src="/hero7.jpeg"
                            alt="Main Sofa Image"
                            height={391}
                            width={481}
                            className="w-full h-auto rounded-lg object-cover"
                        />
                    </div>

                    {/* Right Side: Product Details */}
                    <div className="w-full md:w-2/5">
                        <h3 className="text-2xl font-medium">Asgaard Sofa</h3>
                        <p className="text-xl text-gray-500">Rs: 250,000.00</p>
                        <div className="flex items-center space-x-2 mt-2">
                            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                            <span className="text-gray-700 text-sm">(5 Customer Reviews)</span>
                        </div>
                        <p className="mt-4 text-gray-700 text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, ea excepturi. Minima adipisci,
                            ratione, aspernatur culpa cum dolor eos optio maiores eius, reiciendis earum aut laborum delectus
                            exercitationem velit alias.
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
                        <div className="flex flex-wrap items-center gap-4 mt-6">
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
                        <div className="space-y-4">
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
            </div>

            <hr className='mt-6'/>

            <div className="mt-8 text-center">
                <h3 className='md:text-2xl font-medium my-10 flex justify-center space-x-8'>
                    <span>Description</span>
                    <span className='text-gray-400'>Additional Information</span>
                    <span className='text-gray-400'>Reviews [5]</span>
                </h3>
                <p className="text-sm md:mx-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, mollitia explicabo! Consectetur, iste necessitatibus? Harum non qui minus porro, laudantium reprehenderit, earum quas, fugiat repellendus facere consectetur. Sint, aliquid! Laboriosam voluptatibus tenetur, dolorum quaerat dolorem repellendus quibusdam blanditiis aspernatur laudantium iure iste quod consequatur aliquid dolor corrupti vel dolores minima minus, enim provident rem officiis! Soluta eius amet quidem ea. Dicta totam nisi magni quod, quas dolores iusto dolorum magnam molestiae, incidunt consequuntur perspiciatis deserunt alias est rem omnis reiciendis laboriosam exercitationem. Ipsam, iure corporis tenetur asperiores ipsa optio, soluta non, molestias eius ex quibusdam sit nemo vel repudiandae totam?</p>
                
            </div>

            <div className='flex flex-col md:flex-row gap-4 mt-8'>
                <div className="w-full lg:w-1/2">
                    <Image
                        alt='Related Product 1'
                        src='/sofaset2.jpeg'
                        height={500}
                        width={900}
                        className="rounded-lg cursor-pointer hover:scale-105 transition-transform"
                    />
                </div>
                <div className="w-full lg:w-1/2">
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
            <div className="flex flex-wrap justify-center gap-6 mt-4">
                {[
                    { src: '/hero3.jpeg', name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00' },
                    { src: '/hero4.jpeg', name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00' },
                    { src: '/hero5.jpeg', name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00' },
                    { src: '/hero6.jpeg', name: 'Plain console with teak', price: 'Rs. 25,000.00' },
                ].map((item, index) => (
                    <div key={index} className="flex flex-col text-left w-[300px]">
                        <Image
                            src={item.src}
                            alt={item.name}
                            height={300}
                            width={300}
                            className="rounded-lg object-cover"
                        />
                        <p className="text-sm font-medium">{item.name}</p>
                        <h3 className="text-lg font-semibold">{item.price}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AsgaardSofaId;
