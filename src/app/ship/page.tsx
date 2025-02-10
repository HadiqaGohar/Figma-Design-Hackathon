'use client'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import Link from 'next/link'
import Field from '../components/Field'
import { client, urlFor } from '@/sanity/lib/client'
import { useSelector } from 'react-redux'
import { createPaymentIntent } from '../checkout/action'
import { v4 as uuidv4 } from "uuid"; // Install `uuid` package if not already
import { toast } from "react-hot-toast";
import { useRouter } from 'next/navigation'


interface CartItem {
  shippingPrice: number
  image(image: any): unknown
  id: string;
  name: string;
  price: number;
  qty: number;
}

interface CartState {
  cartItems: CartItem[];
}

interface RootState {
  cart: CartState;
}

function Ship() {



  const [order, setOrder] = useState({
    firstName: "",
    id: "",
    lastName: "",
    country: "",
    street: "",
    city: "",
    provinces: "",
    postalCode: "",
    phone: "",
    email: "",
    state: "",
    cartItems: [],
    total: "",
    status: "pending",
    image: "",
    productName: "",
    shippingPrice: 100, // Default shipping price
    subtotal: 0,
    totalPrice: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Required fields validation
    if (!order.firstName || !order.lastName || !order.country || !order.street ||
      !order.city || !order.provinces || !order.postalCode || !order.phone || !order.email) {
      // alert("Please fill in all the required billing details before proceeding.");
      toast.error("Please fill in all the required billing details before proceeding.");

      return; // Stop form submission
    }

    // Proceed to place order if all fields are filled
    console.log("Form submitted successfully!", order);
    toast.success("Form submitted successfully!!");
    // Yahan aap redirect logic ya API call likh sakte hain
    // Ensure cart items are correctly extracted
    const updatedCartItems = cartItems.map((item) => ({
      id: item.id,
      name: item.name,
      image: urlFor(item.image).url(), // Ensure image URL is correctly formatted
      price: item.price,
      qty: item.qty,
    }));

    // Calculate subtotal & total price
    const subtotal = cartItems.reduce((total, item) => total + item.price * item.qty, 0);
    const totalPrice = subtotal + order.shippingPrice;

    try {
      const newOrder = await client.create({
        _type: "order",
        id: updatedCartItems.map((item) => item.id),
        firstName: order.firstName,
        lastName: order.lastName,
        country: order.country,
        street: order.street,
        city: order.city,
        provinces: order.provinces,
        postalCode: order.postalCode,
        phone: order.phone,
        email: order.email,
        state: order.state,
        // cartItems: cartItems, // Ensure cart items are correctly passed
        cartItems: updatedCartItems,
        subtotal,
        shippingPrice: order.shippingPrice, // Ensure shipping is added
        totalPrice,
        status: "pending",
        // image: order.image,
        // productName: order.productName,
        image: updatedCartItems.map((item) => item.image), // Extract images
        productName: updatedCartItems.map((item) => item.name).join(", "),
      });

      console.log("Order Created:", newOrder);
      // alert("Order Placed Successfully!");
      toast.success("Order Placed Successfully!");

      // Redirect to checkout page after 5 seconds
      setTimeout(() => {
        router.push('/checkout');
      }, 1000);


      setOrder({
        id: "",
        firstName: "",
        lastName: "",
        country: "",
        street: "",
        city: "",
        provinces: "",
        postalCode: "",
        phone: "",
        email: "",
        state: "",
        cartItems: [],
        total: "",
        status: "pending",
        image: "",
        productName: "",
        shippingPrice: 100, // Default shipping price
        subtotal: 0,
        totalPrice: 0,
      });
    } catch (error) {
      console.error("Error creating order:", error);
      // alert("Failed to place order!");
      toast.error("Failed to place order!");
    }
  };

  // const subtotal = cartItems.reduce((total, item) => total + item.price * item.qty, 0);
  // const total = subtotal + order.shippingPrice;


  const [shippingAmount, setShippingAmount] = useState<number>(0);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  // const { cartItems = [] } = useSelector((state) => state.cart);

  const { cartItems = [] } = useSelector((state: RootState) => state.cart);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.qty, 0);

  useEffect(() => {
    async function fetchPaymentIntent() {
      try {
        const res = await createPaymentIntent(totalPrice);
        if (res?.clientSecret) {
          setClientSecret(res.clientSecret);
        } else {
          console.error("Error: No client secret received.");
        }
      } catch (error) {
        console.error("Failed to fetch payment intent:", error);
      }
    }

    if (totalPrice) {
      fetchPaymentIntent();
    }
  }, [totalPrice]);

  if (!clientSecret) {
    return <div className="text-center py-4">Loading...</div>;
  }

  const newCartItem = {
    _key: uuidv4(), // Generate a unique key
    product: { _ref: "product_id_here", _type: "reference" },
    quantity: 1, // Example quantity
  };

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
        {/* ... */}
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
          Checkout
        </h1>

        {/* Breadcrumb Section */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
          <p className="text-gray-700 text-xs md:text-xl flex items-center">
            <Link href="/" className="font-bold hover:underline">Home</Link>
            <span className="font-bold mx-2">{'>'}</span>
            <Link href="/checkout" className="hover:underline">Checkout</Link>
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Billing Section */}
        <div className="flex flex-col lg:flex-row mx-10 gap-6 mt-8">
          <div className="w-full lg:w-1/2 md:mx-20">
            <h3 className="font-semibold text-2xl mt-10 mb-8">Billing Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div>
                <label htmlFor="firstName" className="block my-4">First Name</label>
                <input type="text" name='firstName' id="firstName" value={order.firstName} onChange={handleChange} className="w-full border border-gray-500 rounded p-3" />
              </div>
              <div>
                <label htmlFor="lastName" className="block my-4">Last Name</label>
                <input type="text" name='lastName' id="lastName" value={order.lastName} onChange={handleChange} className="w-full border border-gray-500 rounded p-3" />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="country" className="block my-4 mt-6">Country / Region</label>
              <input type="text" name='country' id="country" value={order.country} onChange={handleChange} className="w-full border-gray-500 rounded border p-3" />
            </div>

            <div className="mt-4">
              <label htmlFor="street" className="block my-4 mt-6">Street Address</label>
              <input type="text" name='street' id="street" value={order.street} onChange={handleChange} className="w-full border-gray-500 rounded border p-3" />
            </div>

            <div className="gap-4 mt-4">
              <div>
                <label htmlFor="city" className="block my-4 mt-6">Town / City</label>
                <input type="text" name='city' id="city" value={order.city} onChange={handleChange} className="w-full border-gray-500 rounded border p-3" />
              </div>
              <div>
                <label htmlFor="provinces" className="block my-4 mt-6">Province</label>
                <input type="text" name='provinces' id="provinces" value={order.provinces} onChange={handleChange} className="w-full border-gray-500 rounded border p-3" />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="postalCode" className="block my-4 mt-6">Postal Code</label>
              <input type="text" name='postalCode' id="postalCode" value={order.postalCode} onChange={handleChange} className="w-full border-gray-500 rounded border p-3" />
            </div>

            <div className="mt-4">
              <label htmlFor="phone" className="block my-4 mt-6">Phone</label>
              <input type="text" name='phone' id="phone" value={order.phone} onChange={handleChange} className="w-full border-gray-500 rounded border p-3" />
            </div>

            <div className="mt-4">
              <label htmlFor="email" className="block my-4 mt-6">Email Address</label>
              <input type="text" name='email' id="email" value={order.email} onChange={handleChange} className="w-full border-gray-500 rounded border p-3" />
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/2 md:mx-20 mt-4 lg:mt-8">
            <div className="mt-4">
              <table className="w-full table-auto">
                <thead>
                  <tr>
                    <th className="py-2 text-left text-xl">Product</th>
                    <th className="py-2 text-right text-xl">Subtotal</th>
                  </tr>
                </thead>
                <tbody className=''>
                  {cartItems.map((item, index) => (
                    <>
                      <tr>
                        <Image
                          src={item.image ? urlFor(item.image).width(100).height(100).url() : "/images/default-product.jpg"}
                          alt={item.name || "Product Image"}
                          width={80}
                          height={80}
                          className="rounded-md"
                        />
                      </tr>
                      <tr>
                        <td className="py-2 text-gray-500">{item.name} x {item.qty}</td>
                        <td className="py-2 text-right">${item.price}</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-semibold">Product ID : </td>
                        <td className="py-2 text-right">{item.id}</td>
                      </tr>

                    </>
                  ))}


                </tbody>
                <tbody className='border-t-2 '>
                  <th className="py-5 text-left text-xl text-yellow-700">Amount :</th>
                  <tr>
                    <td className="py-2 font-semibold">Subtotal</td>
                    <td className="py-2 text-right">${totalPrice}</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">Shipping</td>
                    <td className="py-2 text-right">${order.shippingPrice}</td>
                  </tr>
                  <tr className="border-b font-semibold">
                    <td className="py-2">Total</td>
                    <td className="py-2 text-yellow-700 text-right text-xl">${totalPrice + order.shippingPrice}</td>
                  </tr>
                </tbody>

              </table>

            </div>


            <button type="submit" className="mt-6 border border-black py-3 px-14 rounded-xl">Place Order</button>
          </div>
        </div>

      </form>
      <div className='my-10'>
        <Field />
      </div>
    </div>
  )
}

export default Ship