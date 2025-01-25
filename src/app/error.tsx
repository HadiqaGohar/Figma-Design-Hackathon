'use client';

import Image from 'next/image';
import React from 'react';

const Error: React.FC = () => {
    const handleRefresh = () => {
        window.location.reload(); // Page refresh logic
    };

    return (
        <div className="flex flex-col min-h-screen">
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
                <h1
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[24px] md:text-[48px] font-medium text-center"
                    aria-label="Error Page"
                >
                    Error
                </h1>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-12">
                    <p className="text-gray-700 text-sm md:text-lg flex items-center">
                        <span className="font-bold">Error</span>
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-screen-2xl mx-auto flex flex-col items-center justify-center mt-72 px-4 pb-4 md:mt-48">
                <h2 className="text-2xl md:text-4xl font-semibold text-center mb-2">
                    Error
                </h2>
                <p className="text-lg md:text-2xl font-medium text-center mb-4">
                    Oops! Something went wrong. Please try again later.
                </p>
                <button
                    onClick={handleRefresh}
                    className="px-6 py-2 md:px-10 md:py-4 border border-black hover:bg-black hover:text-white transition duration-300 rounded"
                    aria-label="Refresh Page"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
};

export default Error;
