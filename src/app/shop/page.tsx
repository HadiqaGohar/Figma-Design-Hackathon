import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import ShopLine from '../components/ShopLine'
import Field from '../components/Field'
import Page from '../components/Page'


const item =
    [
        { id: 1, src: '/hero3.jpeg', name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00', href: '/hero/3' },
        { id: 1, src: '/hero4.jpeg', name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00', href: '/hero/4' },
        { id: 1, src: '/hero5.jpeg', name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00', href: '/hero/5' },
        { id: 1, src: '/hero6.jpeg', name: 'Plain console with teak', price: 'Rs. 25,000.00', href: '/hero/6' },
        { id: 1, src: '/shop5.jpeg', name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00', href: '/shop/5' },
        { id: 1, src: '/shop6.jpeg', name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00', href: '/shop/6' },
        { id: 1, src: '/shop7.jpeg', name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00', href: '/shop/7' },
        { id: 1, src: '/shop8.jpeg', name: 'Plain console with teak', price: 'Rs. 25,000.00', href: '/shop/8' },
        { id: 1, src: '/shop9.jpeg', name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00', href: '/shop/9' },
        { id: 1, src: '/shop10.jpeg', name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00', href: '/shop/10' },
        { id: 1, src: '/shop11.jpeg', name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00', href: '/shop/11' },
        { id: 1, src: '/shop12.jpeg', name: 'Plain console with teak', price: 'Rs. 25,000.00', href: '/shop/12' },
        { id: 1, src: '/shop13.jpeg', name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00', href: '/shop/13' },
        { id: 1, src: '/shop14.jpeg', name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00', href: '/shop/14' },
        { id: 1, src: '/shop15.jpeg', name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00', href: '/shop/15' },
        { id: 1, src: '/shop16.jpeg', name: 'Plain console with teak', price: 'Rs. 25,000.00', href: '/shop/16' },
    ]



function Shop() {
    return (

        <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
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
                    className="w-full h-40 md:h-auto object-cover"
                />
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-5xl font-semibold ">
                    Shop
                </h1>
                {/* Breadcrumb Section */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
                    <p className="text-gray-700 text-xs md:text-xl flex items-center">
                        <Link href="/" className="font-bold hover:underline">Home</Link>
                        <span className="font-bold mx-2">{'>'}</span>
                        <Link href="/shop" className=" hover:underline">Shop</Link>
                    </p>
                </div>
            </div>

            <div className='my-6'>
                <ShopLine />
            </div>

            <div>
                {/* Product List */}
                <div className="flex flex-wrap justify-center md:justify-start  gap-6 ">
                    {/* Product Item */}
                    {item.map((item) => (
                    <div key={item.id} className="flex flex-col text-left mx-auto h-[300px] w-[350px]">
                        {/* <Link href={item.href} passHref> */}
                            <Image
                                src={item.src}
                                alt={item.name}
                                height={300}
                                width={350}
                                className="rounded-lg h-[300px] w-[300px] object-cover"
                            />
                        {/* </Link> */}
                        <p className="text-sm font-medium">{item.name}</p>
                        <h3 className="text-xl font-semibold">{item.price}</h3>
                    </div>
                ))}










<div className='justify-center mx-auto'>

<Page/>
</div>

                </div>
            </div>

            <Field/>

        </div>
    )
}

export default Shop
