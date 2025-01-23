'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '@/redux/slices/wishlistSlice';
import toast from 'react-hot-toast';
import { AiFillHeart } from 'react-icons/ai';

function AddToWishlist({ product }) {
  const dispatch = useDispatch();

  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
// ...
  const addToWishlistHandler = () => {
    const existItem = wishlistItems.find((x) => x.id === product.id);
    if (existItem) {
      toast.error('Product already in wishlist!');
    } else {
      dispatch(addToWishlist(product));
      toast.success(`${product.name} added to wishlist!`);
    }
  };

  return (
    <button
      onClick={addToWishlistHandler}
      className=" hover:bg-yellow-500 bg-yellow-700 text-white  md:mt-6 px-6 py-2 text-sm  md:text-lg font-medium rounded-lg shadow-lg flex items-center justify-center transform transition-all duration-300 hover:scale-105 focus:outline-none"
    >
      <AiFillHeart className="mr-2" size={20} /> Add to Wishlist
    </button>
  );
}

export default AddToWishlist;
