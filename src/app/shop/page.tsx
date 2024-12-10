import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import ShopLine from '../components/ShopLine';
import Field from '../components/Field';
import Page from '../components/Page';

const item = [
    { id: 1, src: '/shop/group1/img1.png', name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00', href: '/hero/3' },
    { id: 2, src: '/shop/group1/img2.png', name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00', href: '/hero/4' },
    { id: 3, src: '/shop/group1/img3.png', name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00', href: '/hero/5' },
    { id: 4, src: '/shop/group1/img4.png', name: 'Plain console with teak', price: 'Rs. 25,000.00', href: '/hero/6' },
    { id: 5, src: '/shop/group2/img1.png', name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00', href: '/shop/5' },
    { id: 6, src: '/shop/group2/img2.png', name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00', href: '/shop/6' },
    { id: 7, src: '/shop/group2/img3.png', name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00', href: '/shop/7' },
    { id: 8, src: '/shop/group2/img4.png', name: 'Plain console with teak', price: 'Rs. 25,000.00', href: '/shop/8' },
    { id: 9, src: '/shop/group3/img1.png', name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00', href: '/shop/9' },
    { id: 10, src: '/shop/group3/img2.png', name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00', href: '/shop/10' },
    { id: 11, src: '/shop/group3/img3.png', name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00', href: '/shop/11' },
    { id: 12, src: '/shop/group3/img4.png', name: 'Plain console with teak', price: 'Rs. 25,000.00', href: '/shop/12' },
    { id: 13, src: '/shop/group4/img1.png', name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00', href: '/shop/13' },
    { id: 14, src: '/shop/group4/img2.png', name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00', href: '/shop/14' },
    { id: 15, src: '/shop/group4/img3.png', name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00', href: '/shop/15' },
    { id: 16, src: '/shop/group4/img4.png', name: 'Plain console with teak', price: 'Rs. 25,000.00', href: '/shop/16' },
];

function Shop() {
    return (
        <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
            {/* Header Section */}
            <div className="bg-[#faf4f4]">
                <Header />
            </div>

            {/* Banner Section */}
            <div className="relative text-black">
                <Image
                    src="/shop/shop.png"
                    alt="Shop Banner"
                    height={400}
                    width={1600}
                    className="w-full h-40 md:h-[400px] object-cover"
                />

                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-10">
                    <Image
                        src="/shop/logo.png"
                        alt="Shop Logo"
                        height={77}
                        width={77}
                        className="object-contain"
                    />
                </div>

                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[24px] md:text-[48px] font-medium">
                    Shop
                </h1>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
                    <p className="text-gray-700 text-sm md:text-lg flex items-center">
                        <Link href="/" className="font-bold hover:underline">Home</Link>
                        <span className="font-bold mx-2">{'>'}</span>
                        <Link href="/shop" className="hover:underline">Shop</Link>
                    </p>
                </div>
            </div>

            {/* ShopLine Component */}
            <div className="my-6">
                <ShopLine />
            </div>

            {/* Product List */}
{/* Product List */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {item.map((item) => (
        <div
            key={item.id}
            className="flex flex-col items-start text-left mx-auto p-4 rounded-lg w-full"
        >
            {/* Image Section */}
            <div className="w-full h-[287px] flex items-center justify-center overflow-hidden ">
                <Image
                    src={item.src}
                    alt={item.name}
                    width={287}
                    height={287}
                    className="object-contain w-full h-full"
                />
            </div>

            {/* Text Section */}
            <div className="mt-4">
                <p className="text-sm font-medium">{item.name}</p>
                <h3 className="text-lg font-semibold">{item.price}</h3>
            </div>
        </div>
    ))}
</div>




            {/* Pagination */}
            <div className="flex justify-center mt-8">
                <Page />
            </div>

            {/* Field Component */}
            <Field />
        </div>
    );
}

export default Shop;
