

'use client';

import { addToCart, removeFromCart } from '@/redux/slices/cartSlice';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import Round from "../components/Round";
import { AiOutlineDelete } from 'react-icons/ai';
import CheckoutWizard from '../components/CheckoutWizard';
import Header from '../components/Header';
import { urlFor } from "../../sanity/lib/image"; // Import Sanity URL transformation function
import Field from "../components/Field"

function CartPage() {
  const [loading, setLoading] = useState(false);

  const handlePaymentClick = async () => {
    setLoading(true);
    const response = await fetch('/api/create-payment-link', {
      method: 'POST',
    });
    const data = await response.json();
    window.location.href = data.url; // Redirect the user to the Stripe checkout page
  };

  const dispatch = useDispatch();
  const router = useRouter();
  const { cartItems = [] } = useSelector((state) => state.cart);
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex justify-center items-center h-[600px] bg-gray-50 text-center">
        <div>
          <p className="text-xl font-semibold">Cart is empty.</p>
          <Link href="/shop" className="text-yellow-500 hover:underline mt-4 block">Go shopping</Link>
        </div>
      </div>
    );
  }

  // Function to get image URL
  const getImageUrl = (item) => {
    // Check if images exist and are valid
    if (item.images && item.images[0]) {
      const imageUrl = urlFor(item.images[0]).url(); // Using Sanity URL transformation
      return imageUrl;
    }
    return "/images/default-product.jpg"; // Return default image if not found
  };

  
  return (
    <div className="">
     
      <div className="relative text-gray-800">
        {/* Main Banner Image */}
        <Image
          src="/shop/shop.png" // Replace with the correct image file path
          alt="Shop Banner"
          height={400}
          width={1600}
          className="w-full h-40 md:h-auto object-cover"
        />

        {/* Logo Image - Positioned Above Banner */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 ">
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
            <Link href="/cart" className="hover:underline">Cart</Link>
          </p>
        </div>
      </div>

      {/* <CheckoutWizard activeStep={0} /> */}

      <div className='max-w-screen-2xl mx-auto'>
        <div className="text-2xl text-center md:text-left my-8 md:text-3xl font-bold text-yellow-600 mb-6">Shopping Cart</div>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="md:col-span-3 bg-white shadow-md rounded-lg">
            <table className="min-w-full table-auto">
              <thead className="bg-[#FFF9E5] text-yellow-700">
                <tr>
                  <th className="text-xs md:text-lg md:p-4 py-4 px-1 text-left">Product</th>
                  <th className="text-xs md:text-lg md:p-4 py-4 px-1 text-right">Quantity</th>
                  <th className="text-xs md:text-lg md:p-4 py-4 px-1 text-right">Price</th>
                  <th className="text-xs md:text-lg md:p-4 py-4 px-1">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-yellow-50">
                    <td className="md:p-4 py-4 px-1 flex items-center">
                      <Link href={`/shop/${item.id}`} className="flex items-center space-x-4">
                        <Image
                          src={item.image ? urlFor(item.image).width(100).height(100).url() : "/images/default-product.jpg"}
                          alt={item.name || "Product Image"}
                          width={80}
                          height={80}
                          className="p-1 rounded"
                        />
                        <span className='text-xs md:text-sm'>{item.name}</span>
                      </Link>
                    </td>

                    <td className=" md:p-4 md:py-4 md:px-1  text-right">
                      <div className="flex items-center  p-2 space-x-2 my-2">
                        <button
                          onClick={() => addToCartHandler(item, item.qty > 1 ? item.qty - 1 : 1)}
                          className="md:bg-gray-200 px-1.5 md:px-3 text-lg font-bold rounded-full hover:bg-gray-300"
                          disabled={item.countInStock === 0}
                        >
                          -
                        </button>
                        <div className="text-sm md:text-lg font-semibold">{item.qty}</div>
                        <button
                          onClick={() => addToCartHandler(item, item.qty + 1)}
                          className="md:bg-gray-200 px-1 md:px-2.5 text-lg font-bold rounded-full hover:bg-gray-300"
                          disabled={item.countInStock === 0 || item.qty >= item.countInStock}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="text-xs md:text-sm md:p-4 py-4 px-1 text-right text-yellow-600">${item.price}</td>
                    <td className="md:p-4 py-4 px-2 text-center">
                      <button
                        className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                        onClick={() => removeFromCartHandler(item.id)}
                        aria-label="Remove Item"
                      >
                        <AiOutlineDelete size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#FFF9E5] p-5 shadow-md h-72 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">Cart Totals</h2>
            <ul className="space-y-4">
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr>
                    <th className="py-3 text-left">Subtotal</th>
                    <th className="py-3 text-right text-gray-400"><span>({cartItems.reduce((a, c) => a + c.qty, 0)})</span> : ${itemsPrice}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 text-left font-bold">Total</td>
                    <td className="py-3 text-right text-lg font-bold text-yellow-700"> ${itemsPrice}</td>
                  </tr>
                </tbody>
              </table>
              <li className=''>
                <button
                // Remove /shipping and add /checkout
                  onClick={() => router.push('/ship')}
                  className="w-full px-6 py-3 border border-black hover:bg-black hover:text-white translate-x-1  rounded-xl"
                >
                  Proceed to checkout
                </button>
                {/* <button onClick={handlePaymentClick} disabled={loading} className="w-full px-6 py-3 mt-3 border border-black hover:bg-black hover:text-white translate-x-1 rounded-xl">
                  {loading ? 'Loading...' : 'Pay with Stripe'}
                </button> */}
                
                {/* <PayButton/> */}
                
              </li>
            </ul>
          </div>
        </div>

        <div className='my-10'>
        <Field />
        </div>
      </div>
    </div>
  );
}

export default CartPage;



// // 'use client';

// // import { addToCart, removeFromCart } from '@/redux/slices/cartSlice';
// // import { useRouter } from 'next/navigation';
// // import React from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import Image from 'next/image';
// // import Link from 'next/link';
// // import Round from "../components/Round";
// // import { AiOutlineDelete } from 'react-icons/ai';
// // import CheckoutWizard from '../components/CheckoutWizard';
// // import Header from '../components/Header';
// // import { urlFor } from "../../sanity/lib/image"; // Import Sanity URL transformation function


// // function CartPage() {
// //   const dispatch = useDispatch();
// //   const router = useRouter();
// //   const { cartItems = [] } = useSelector((state) => state.cart);
// //   const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

// //   const removeFromCartHandler = (id) => {
// //     dispatch(removeFromCart(id));
// //   };

// //   const addToCartHandler = (product, qty) => {
// //     dispatch(addToCart({ ...product, qty }));
// //   };

// //   if (cartItems.length === 0) {
// //     return (
// //       <div className="flex justify-center items-center h-[600px] bg-gray-50 text-center">
// //         <div>
// //           <p className="text-xl font-semibold">Cart is empty.</p>
// //           <Link href="/shop" className="text-yellow-500 hover:underline mt-4 block">Go shopping</Link>
// //         </div>
// //       </div>
// //     );
// //   }

// //   // Function to get image URL
// //   const getImageUrl = (item) => {
// //     // Check if images exist and are valid
// //     if (item.images && item.images[0]) {
// //       const imageUrl = urlFor(item.images[0]).url(); // Using Sanity URL transformation
// //       return imageUrl;
// //     }
// //     return "/images/default-product.jpg"; // Return default image if not found
// //   };
// //   return (
// //     <div className="">
// //       <Header />
// //       <div className="relative text-gray-800">
// //         {/* Main Banner Image */}
// //         <Image
// //           src="/shop/shop.png" // Replace with the correct image file path
// //           alt="Shop Banner"
// //           height={400}
// //           width={1600}
// //           className="w-full h-40 md:h-auto object-cover"
// //         />

// //         {/* Logo Image - Positioned Above Banner */}
// //         <div className="absolute top-16 left-1/2 transform -translate-x-1/2 ">
// //           <Image
// //             src="/shop/logo.png" // Replace with your logo file path
// //             alt="Shop Logo"
// //             height={77}
// //             width={77}
// //             className="object-contain"
// //           />
// //         </div>

// //         {/* Main Heading */}
// //         <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-[48px] text-[24px] font-medium  -mt-4 md:mt-0">
// //           Cart
// //         </h1>

// //         {/* Breadcrumb Section */}
// //         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
// //           <p className="text-gray-700 text-xs md:text-xl flex items-center">
// //             <Link href="/" className="font-bold hover:underline">Home</Link>
// //             <span className="font-bold mx-2">{'>'}</span>
// //             <Link href="/cart" className="hover:underline">Cart</Link>
// //           </p>
// //         </div>
// //       </div>

// //       <CheckoutWizard activeStep={0} />

// //       <div className='max-w-screen-2xl mx-auto'>
// //         <div className="text-2xl text-center md:text-left my-8 md:text-3xl font-bold text-yellow-600 mb-6">Shopping Cart</div>
// //         <div className="grid md:grid-cols-4 gap-4">
// //           <div className="md:col-span-3 bg-white shadow-md rounded-lg">
// //             <table className="min-w-full table-auto">
// //               <thead className="bg-[#FFF9E5] text-yellow-700">
// //                 <tr>
// //                   <th className="text-xs md:text-lg md:p-4 py-4 px-1 text-left">Product</th>
// //                   <th className="text-xs md:text-lg md:p-4 py-4 px-1 text-right">Quantity</th>
// //                   <th className="text-xs md:text-lg md:p-4 py-4 px-1 text-right">Price</th>
// //                   <th className="text-xs md:text-lg md:p-4 py-4 px-1">Action</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {cartItems.map((item) => (
// //                   <tr key={item.id} className="border-b hover:bg-yellow-50">
// //                     <td className="md:p-4 py-4 px-1 flex items-center">
// //                       <Link href={`/shop/${item.id}`} className="flex items-center space-x-4">
// //                         {/* <Image
// //                           src={item.images && item.images[0] ? item.images[0] : "/images/default-product.jpg"}
// //                           alt={item.name || "Product Image"}
// //                           width={80}
// //                           height={80}
// //                           className="p-1 rounded"
// //                         /> */}
// //                         {/* <img
// //                           src={item.image ? urlFor(item.image).width(100).height(100).url() : "/images/default-product.jpg"}
// //                           alt={item.name || "Product Image"}
// //                           width={80}
// //                           height={80}
// //                         /> */}
// //                         <Image
// //                           src={item.image ? urlFor(item.image).width(100).height(100).url() : "/images/default-product.jpg"}
// //                           alt={item.name || "Product Image"}
// //                           width={80}
// //                           height={80}
// //                           className="p-1 rounded"
// //                         />
// //                         <span className='text-xs md:text-sm'>{item.name}</span>


// //                       </Link>
// //                       {item.countInStock === 0 && (
// //                         <div className="text-sm text-red-500 mt-2">Out of Stock</div>
// //                       )}
// //                     </td>

// //                     {item.countInStock === 0 && (
// //                       <div className="text-sm text-red-500 mt-2">Out of Stock</div>
// //                     )}

// //                     <td className=" md:p-4 md:py-4 md:px-1  text-right">
// //                       <div className="flex items-center  p-2 space-x-2 my-2">
// //                         <button
// //                           onClick={() => addToCartHandler(item, item.qty > 1 ? item.qty - 1 : 1)}
// //                           className="md:bg-gray-200 px-1.5 md:px-3 text-lg font-bold rounded-full hover:bg-gray-300"
// //                           disabled={item.countInStock === 0}
// //                         >
// //                           -
// //                         </button>
// //                         <div className="text-sm md:text-lg font-semibold">{item.qty}</div>
// //                         <button
// //                           onClick={() => addToCartHandler(item, item.qty + 1)}
// //                           className="md:bg-gray-200 px-1 md:px-2.5 text-lg font-bold rounded-full hover:bg-gray-300"
// //                           disabled={item.countInStock === 0 || item.qty >= item.countInStock}
// //                         >
// //                           +
// //                         </button>

// //                       </div>
// //                       {/* <div className="text-sm mt-3 text-gray-500">
// //                        Available Stock: {item.countInStock > 0 ? item.countInStock : "Out of Stock"}
// //                       </div> */}
// //                     </td>
// //                     <td className="text-xs md:text-sm md:p-4 py-4 px-1 text-right text-yellow-600">${item.price}</td>
// //                     <td className="md:p-4 py-4 px-2 text-center">
// //                       <button
// //                         className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
// //                         onClick={() => removeFromCartHandler(item.id)}
// //                         aria-label="Remove Item"
// //                       >
// //                         <AiOutlineDelete size={20} />
// //                       </button>
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>

// //           <div className="bg-[#FFF9E5] p-5 shadow-md h-72 rounded-lg">

// //             <h2 className="text-2xl font-semibold mb-4 text-center">Cart Totals</h2>
// //             <ul className="space-y-4">
// //               <table className="w-full table-auto border-collapse">
// //                 <thead>
// //                   <tr>
// //                     <th className="py-3 text-left">Subtotal</th>
// //                     <th className="py-3 text-right text-gray-400"><span>({cartItems.reduce((a, c) => a + c.qty, 0)})</span> : ${itemsPrice}</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   <tr>
// //                     <td className="py-3 text-left font-bold">Total</td>
// //                     <td className="py-3 text-right text-lg font-bold text-yellow-700"> ${itemsPrice}</td>
// //                   </tr>
// //                 </tbody>
// //               </table>
// //               <li className=''>
// //                 <button
// //                   onClick={() => router.push('/shipping')}
// //                   className="w-full px-6 py-3 border border-black hover:bg-black hover:text-white translate-x-1  rounded-xl"
// //                 >
// //                   Proceed to checkout
// //                 </button>
// //               </li>
// //             </ul>
// //           </div>
// //         </div>

// //         <div className='my-10'>
// //           <Round />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default CartPage;
