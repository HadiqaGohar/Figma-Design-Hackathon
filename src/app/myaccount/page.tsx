import React from 'react';
import Header from '../components/Header';
import Link from 'next/link';
import Image from 'next/image';
import Field from '../components/Field';

function MyAccount() {
    return (
        <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
            <div className="bg-gray-100">
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
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-5xl font-semibold">
                    My Account
                </h1>
                {/* Breadcrumb Section */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
                    <p className="text-gray-700 text-xs md:text-xl flex items-center">
                        <Link href="/" className="font-bold hover:underline">
                            Home
                        </Link>
                        <span className="font-bold mx-2">{'>'}</span>
                        <Link href="/myaccount" className="hover:underline">
                            My Account
                        </Link>
                    </p>
                </div>
            </div>

           {/* Content Section */}
<div className="mt-8 grid gap-8 mx-4 lg:mx-32 lg:grid-cols-2">
    {/* Login Section */}
    <div className="p-4 rounded">
        <h2 className="text-3xl font-bold my-8">Log In</h2>
        <div className='flex flex-col'>
            <label className="my-2 text-gray-700 mb-2" htmlFor="username">
                Username or email address
            </label>
            <input
                type="text"
                id="username"
                className="w-full sm:w-[300px] my-2 border border-gray-400 rounded p-2 mb-4"
            />
        </div>
        <div className='flex flex-col'>
            <label className="my-2 text-gray-700 mb-2" htmlFor="password">
                Password
            </label>
            <input
                type="password"
                id="password"
                className="w-full sm:w-[300px] my-2 border border-gray-400 rounded p-2 mb-4"
            />
        </div>
        <div className="flex items-center mb-4">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-gray-800 my-4">
                Remember me
            </label>
        </div>
        <div className="flex items-center">
            <button className="border border-black font-medium text-black px-10 py-3 rounded-xl hover:text-white hover:bg-gray-700">
                Log In
            </button>
            <p className="ml-6 text-gray-500 text-sm hover:underline cursor-pointer">
                Lost Your Password?
            </p>
        </div>
    </div>

    {/* Register Section */}
    <div className="p-4 rounded">
        <h2 className="text-3xl font-bold my-8">Register</h2>
        <label className="block my-2 text-gray-700 mb-2" htmlFor="register-email">
            Email address
        </label>
        <input
            type="text"
            id="register-email"
            className="w-full sm:w-[300px] my-2 border border-gray-400 rounded p-2 mb-4"
        />
        <p className="text-gray-500 my-4">
            A link to set a new password will be sent to your email address.
        </p>
        <p className="text-gray-500 mb-4">
            Your personal data will be used to support your experience throughout this
            website, to manage access to your account, and for other purposes described
            in our <span className="font-bold text-gray-700">privacy policy</span>.
        </p>
        <button className="border my-10 border-black font-medium text-black px-10 py-3 rounded-xl hover:text-white hover:bg-gray-700">
            Register
        </button>
    </div>
</div>
            <Field/>
        </div>
    );
}

export default MyAccount;
