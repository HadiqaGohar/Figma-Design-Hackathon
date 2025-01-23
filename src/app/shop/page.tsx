'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Field from '../components/Field';
import { CiSearch } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
import Page from '../components/Page';
import { client } from '@/sanity/lib/client';

interface ProductImage {
    asset: {
        url: string;
    };
}

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    rating: number;
    ratingCount: number;
    tags: string[];
    sizes: string[];
    image: ProductImage;
}

function Shop() {
    const [products, setProducts] = useState<Product[]>([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const query = `*[_type == "product"]{
        id,
        name,
        description,
        price,
        rating,
        ratingCount,
        tags,
        sizes,
        image {
          asset -> {
            url
          }
        }
      }`;

            const result: Product[] = await client.fetch(query);
            setProducts(result);
        };

        fetchData();
    }, []);

    // Filter products based on search query
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
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
                    Shop
                </h1>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
                    <p className="text-gray-700 text-sm md:text-lg flex items-center">
                        <Link href="/" className="font-bold hover:underline">
                            Home
                        </Link>
                        <span className="font-bold mx-2">{'>'}</span>
                        <Link href="/shop" className="hover:underline">
                            Shop
                        </Link>
                    </p>
                </div>
            </div>

            <div className='max-w-screen-2xl mx-auto'>
                {/* Search bar to filter products */}
            <div className="w-full md:w-[350px] mx-auto md:mr-6 my-6 flex items-center justify-end">
                <div className="mx-3 relative w-full">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full py-1 md:py-2.5 pl-9 pr-16 border-2 border-gray-300 rounded-full text-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300 ease-in-out"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    />
                    {search && (
                        <IoMdClose
                            onClick={() => setSearch('')}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 cursor-pointer transition duration-200"
                        />
                    )}
                    <CiSearch className="text-xl absolute right-4 top-1/2 transform -translate-y-1/2 text-yellow-500 " size={25} />

                </div>
            </div>

            </div>

            {/* Product List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-screen-2xl container mx-auto pb-8 px-4">
                {filteredProducts.length === 0 ? (
                    <p className="col-span-full text-center text-gray-500">
                        No products found for your search.
                    </p>
                ) : (
                    filteredProducts.map((product) => (
                        <div key={product.id} className="flex flex-col items-start text-left mx-auto p-4 rounded-lg w-full">
                            <Link href={`/shop/${product.id}`}>
                                {/* Image Section */}
                                <div className="w-full h-[287px] flex items-center justify-center overflow-hidden">
                                    <Image
                                        src={product.image?.asset?.url}
                                        alt={product.name}
                                        width={287}
                                        height={287}
                                        className="object-contain hover:scale-105 duration-300 w-full h-full"
                                    />
                                </div>
                                {/* Text Section */}
                                <div className="mt-4 flex gap-3">
                                    <div>
                                        <p className="text-md text-gray-700 font-medium">{product.name}</p>
                                        <h3 className="text-xl text-gray-800 font-bold">${product.price}</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                )}
            </div>

            {/* Pagination */}
            {/* <div className="flex justify-center mt-8">
                <Page />
            </div> */}

            {/* Field Component */}
            <Field />
        </div>
    );
}

export default Shop;
