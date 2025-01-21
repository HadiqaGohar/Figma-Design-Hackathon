import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Field from '../components/Field'

function ViewCart() {
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
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-10">
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
                    Cart
                </h1>

                {/* Breadcrumb Section */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
                    <p className="text-gray-700 text-xs md:text-xl flex items-center">
                        <Link href="/" className="font-bold hover:underline">Home</Link>
                        <span className="font-bold mx-2">{'>'}</span>
                        <Link href="/viewcart" className="hover:underline">Cart</Link>
                    </p>
                </div>
            </div>

            {/* Cart Table Section */}
            <div className="mt-8 flex flex-col lg:flex-row justify-between md:gap-8">
                {/* Cart Items */}
                <div className="w-full lg:w-3/4 bg-white rounded-lg p-4 sm:p-6">
                    <table className="w-full text-xs md:text-lg table-auto border-collapse">
                        <thead className="bg-[#FFF9E5] text-gray-800">
                            <tr>
                                <th className="py-3 text-left">Product</th>
                                <th className="py-3 text-left hidden lg:table-cell">Price</th> {/* Hidden on small devices, visible on large */}
                                <th className="py-3 text-left">Quantity</th>
                                <th className="py-3 text-left">Subtotal</th>
                                <th className="py-3 text-left"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t">
                                <td className="flex flex-col md:flex-row items-center py-4">
                                    <Image
                                        src='/shop/group4/img2.png'
                                        height={120}
                                        width={120}
                                        alt="Asgaard Sofa"
                                    />
                                    <p className="ml-4 text-gray-700 text-sm sm:text-base">Asgaard Sofa <br /> x 1</p>
                                </td>
                                <td className="py-4 text-xs md:text-lg text-gray-500 hidden lg:table-cell">Rs: 250,000.00</td> {/* Hidden on small devices, visible on large */}
                                <td className="py-4 text-xs md:text-lg text-gray-500">
                                    <input type="number" value="1" className="w-12 text-xs md:text-lg text-center border md:p-2 rounded-md" />
                                </td>
                                <td className="py-4 text-right text-gray-700 text-xs md:text-sm sm:text-base">Rs: 250,000.00</td>
                                <td className="py-4 text-center">
                                    <RiDeleteBin6Line className="hidden lg:table-cell text-red-600 ml-4 cursor-pointer hover:text-red-800" size={20} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>



                {/* Cart Totals Section */}
                <div className="w-full lg:w-2/6 bg-[#FFF9E5] rounded-md p-10 mt-8 lg:mt-0">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Cart Totals</h2>
                    <table className="w-full table-auto border-collapse">
                        <thead>
                            <tr>
                                <th className="py-3 text-left">Subtotal</th>
                                <th className="py-3 text-right text-gray-400">Rs: 250,000.00</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-3 text-left font-bold">Total</td>
                                <td className="py-3 text-right text-lg font-bold text-yellow-700">Rs: 250,000.00</td>
                            </tr>
                            <tr>
                                <td colSpan={2} className="py-4">

                                    <Link href='/checkout'>
                                    <button className="w-full px-6 py-3 border border-black hover:bg-black hover:text-white translate-x-1  rounded-xl">
                                        Checkout
                                    </button>
                                    </Link>
                                </td>

                            </tr>
                            <div className="flex items-center mt-4">
                                <input type="radio" id="bankTransfer" name="payment" className="mr-2" />
                                <label htmlFor="bankTransfer" className="text-md">Direct Bank Transfer</label>
                            </div>
                            <Image
                                src='/PayPal.png'
                                alt='paypal'
                                height={80}
                                width={80}
                            />
                            {/* <p className="text-sm text-gray-400 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at arcu at eros malesuada facilisis.</p> */}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='my-10'>
                <Field />
            </div>
        </div>
    )
}

export default ViewCart;
