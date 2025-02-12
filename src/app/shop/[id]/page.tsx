'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Header from '../../components/Header';
import { client } from '@/sanity/lib/client';
import { FaStar, FaStarHalfAlt, FaRegStar, FaShoppingCart, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Import star icons from react-icons
import { BiSolidCommentCheck } from 'react-icons/bi';
import { RiShoppingCartFill } from 'react-icons/ri';
import { GoHeartFill } from "react-icons/go";
import { BsFacebook } from 'react-icons/bs';
import AddToCart from '../../components/AddToCart'

import AddToWishlist from '../../components/AddToWishlist'
import Link from 'next/link';


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
    countInStock: number;
    sku: string;
    category: string;
    sizes: string[];
    image: ProductImage;
}



const ProductPage = ({ params }: { params: { id: string } }) => {
    const [product, setProduct] = useState<Product | null>(null)

    useEffect(() => {
        const { id } = params;  // Get the product id from the params

        if (id) {
            // Fetch product details using the dynamic `id`
            const fetchProduct = async () => {
                const query = `*[_type == "product" && id == "${id}"]{
                    id,
                    name,
                    description,
                    price,
                    rating,
                    ratingCount,
                    tags,
                    countInStock,
                    sku,
                    category,
                    sizes,
                    image {
                        asset -> {
                            url
                        }
                    }
                }`;

                const result = await client.fetch(query);
                setProduct(result[0]); // Assuming the product array has one item
            };

            fetchProduct();
        }
    }, [params]);  // Re-run if params change

    if (!product) return <div>Loading...</div>;

    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating); // Full stars (integer part of the rating)
        const halfStar = rating % 1 >= 0.5; // If the rating has a half star
        const emptyStars = 5 - Math.ceil(rating); // Empty stars

        return (
            <>
                {[...Array(fullStars)].map((_, index) => (
                    <FaStar key={`full-${index}`} className="text-yellow-400" />
                ))}
                {halfStar && <FaStarHalfAlt className="text-yellow-400" />}
                {[...Array(emptyStars)].map((_, index) => (
                    <FaRegStar key={`empty-${index}`} className="text-yellow-400" />
                ))}
            </>
        );
    };

    return (
        <div className="md:mx-auto mx-2 ">

            {/* Product Details Section */}
            <div className="max-w-screen-2xl  container mx-auto flex flex-col  md:flex-row gap-6 my-12 md:my-24">
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                    <Image
                        src={product.image?.asset?.url}
                        alt={product.name}
                        width={600}
                        height={600}
                        className="object-contain hover:scale-105 duration-300"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 my-auto">
                    <h1 className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">{product.name}</h1>
                    {/* .. */}
                    <h2 className="text-xs sm:text-sm md:text-lg lg:text-xl font-semibold mt-4 bg-yellow-700 text-white w-14 md:w-20  rounded-full p-1.5 md:p-2">${product.price} </h2>
                    <div className='flex'>
                        {/* Render Stars instead of rating number */}
                        <div className="flex text-xs md:text-sm lg:text-md items-center mt-2">
                            {renderStars(product.rating)}

                        </div>
                        <span className="ml-3 mt-2 text-xs md:text-sm">({product.ratingCount} reviews)</span>
                    </div>
                    <hr className='mt-4 h-0.5' />
                    <p className="text-md md:text-lg text-gray-700 my-4 text-xs md:text-">{product.description}</p>

                    <span className="ml-3 mt-2 text-yellow-500 font-medium text-xs md:text-sm">({product.countInStock} items in stock)</span>

                    {/* Add to Cart Button with Cart Icon */}
                    <div className='flex flex-col md:flex-row gap-2'>


                        <div className=' mt-4 md:ml-12 md:mt-7'>
                            <AddToCart
                                showQty={false}
                                product={product}
                                increasePerClick={true}
                                redirect={false}

                            />
                        </div>

                        <div className='my-2 md:ml-8 md:mt-7'>
                            <AddToWishlist
                                // showQty={false}
                                product={product}
                            // increasePerClick={true}
                            // redirect={false}

                            />
                        </div>
                        <Link href="/commentForm">
      <div
        className="fixed right-5 bottom-5 h-[45px] w-[45px] bg-yellow-600 rounded-full flex items-center justify-center cursor-pointer shadow-lg 
        transition-transform duration-300 hover:scale-110 hover:bg-yellow-700"
      >
        <BiSolidCommentCheck size={25} color="white" />
        <span className="absolute right-12 text-sm bg-black text-white px-2 py-1 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100">
          Add a Comment
        </span>
      </div>
    </Link>
                        {/* <button className="md:mt-6 px-6 py-2 bg-yellow-800 text-white text-lg font-medium rounded-lg shadow-lg flex items-center justify-center transform transition-all duration-300 hover:bg-yellow-600 hover:scale-105 focus:outline-none">
                            <GoHeartFill className="mr-2" size={20} /> Add to Wishlist
                        </button> */}
                    </div>
                    <hr className='mt-6' />
                    {/* Additional Information */}
                    <div className="space-y-4 mt-6 text-xs md:text-sm">
                        <div className="flex justify-between">
                            <span>SKU:</span>
                            <span>{product.sku}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Category:</span>
                            <span>{product.category}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Tags:</span>
                            <span>{product.tags}</span>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <span>Share:</span>
                            <div className="flex space-x-2 ">
                                <BsFacebook className="cursor-pointer hover:text-yellow-500" size={25} />
                                <FaLinkedin className="cursor-pointer hover:text-yellow-500" size={25} />
                                <FaTwitter className="cursor-pointer hover:text-yellow-500" size={25} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
// ..........