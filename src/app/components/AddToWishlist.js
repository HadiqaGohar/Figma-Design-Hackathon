'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '@/redux/slices/wishlistSlice';
import toast from 'react-hot-toast';
import { AiFillHeart } from 'react-icons/ai';

function AddToWishlist({ product }) {
  const dispatch = useDispatch();

  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

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
      className="px-4 py-2 text-lg hover:bg-yellow-500 bg-yellow-700 text-white rounded-lg flex items-center"
    >
      <AiFillHeart className="mr-2" size={20} /> Add to Wishlist
    </button>
  );
}

export default AddToWishlist;
