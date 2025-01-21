'use client';

import { addToCart, removeFromCart } from '@/redux/slices/cartSlice';
import { removeFromWishlist } from '@/redux/slices/wishlistSlice';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineDelete, AiOutlineShoppingCart } from 'react-icons/ai';
import Round from "../components/Round";
import Header from '../components/Header';
import { urlFor } from "../../sanity/lib/image"; // Import Sanity URL transformation function
import { SanityImageSource } from '@sanity/image-url/lib/types/types';


interface CartState {
  loading: boolean;
  cartItems: any[]; // Replace 'any' with a more specific type if possible
  wishlistItems: any[]
}

interface RootState {
  cart: CartState;
  wishlist : CartState
}



function WishlistPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { wishlistItems = [] } = useSelector((state : RootState) => state.wishlist);

  const removeFromWishlistHandler = (id: any) => {
    dispatch(removeFromWishlist(id));
  };

  const addToCartHandler = (product: any) => {
    dispatch(addToCart({ ...product, qty: 1 }));
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="flex justify-center items-center h-[400px] bg-gray-50 text-center">
        <div>
          <p className="text-xl font-semibold">Wishlist is empty.</p>
          <Link href="/shop" className="text-teal-500 hover:underline mt-4 block">Go shopping</Link>
        </div>
      </div>
    );
  }

  // Function to get image URL
  const getImageUrl = (item: { images: SanityImageSource[]; }) => {
    // Check if images exist and are valid
    if (item.images && item.images[0]) {
      const imageUrl = urlFor(item.images[0]).url(); // Using Sanity URL transformation
      return imageUrl;
    }
    return "/images/default-product.jpg"; // Return default image if not found
  };

  return (
    <div>
      <Header />
      <div className="relative text-black">
        <Image
          src="/shop/shop.png"
          alt="Shop Banner"
          height={400}
          width={1600}
          className="w-full h-40 md:h-auto object-cover"
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
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-[48px] text-[24px] font-medium -mt-4 md:mt-0">
          Wishlist
        </h1>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
          <p className="text-gray-700 text-xs md:text-xl flex items-center">
            <Link href="/" className="font-bold hover:underline">Home</Link>
            <span className="font-bold mx-2">{'>'}</span>
            <Link href="/wishlist" className="hover:underline">wishlist</Link>
          </p>
        </div>
      </div>

      <div className='max-w-screen-2xl mx-auto'>
        {/* <div className="text-3xl font-bold text-teal-600 mb-6">Your Wishlist</div> */}

        <div className="text-2xl text-center md:text-left my-8 md:text-3xl font-bold text-yellow-600 mb-6">Your Wishlist</div>
        <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-3 bg-white shadow-md rounded-lg">
            <table className="min-w-full table-auto">
              <thead className="bg-[#FFF9E5] text-yellow-700">
                <tr>
                  <th className="md:p-4 py-4 px-1 text-left">Product</th>
                  <th className="md:p-4 py-4 px-1 text-left">Name</th>
                  <th className="md:p-4 py-4 px-1 text-left">Cart</th>
                  <th className="md:p-4 py-4 px-1 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {wishlistItems.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-yellow-50">
                    <td className="md:p-4 py-4 px-1 flex items-center">
                      <Link href={`/products/${item.id}`} className="flex items-center space-x-4">
                       
                        {/* <img
                          src={item.image ? urlFor(item.image).width(100).height(100).url() : "/images/default-product.jpg"}
                          alt={item.name || "Product Image"}
                          width={80}
                          height={80}
                        /> */}
                        <Image
                          src={item.image ? urlFor(item.image).width(100).height(100).url() : "/images/default-product.jpg"}
                          alt={item.name || "Product Image"}
                          width={80}
                          height={80}
                          className="p-1 rounded"
                        />
                      </Link>
                    </td>
                    <td>
                      <span>{item.name}</span>
                    </td>
                    <td className="md:p-4 py-4 px-2 text-left">
                      <button
                        onClick={() => addToCartHandler(item)}
                        className="bg-yellow-600 text-white p-2 rounded-full hover:bg-yellow-700 ml-2"
                      >
                        <AiOutlineShoppingCart size={20} />
                      </button>
                    </td>
                    <td className="md:p-4 py-4 px-2 text-right">
                      <button
                        className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 ml-2"
                        onClick={() => removeFromWishlistHandler(item.id)}
                        aria-label="Remove from Wishlist"
                      >
                        <AiOutlineDelete size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className='my-10'>
          <Round />
        </div>
      </div>
    </div>
  );
}

export default WishlistPage;
