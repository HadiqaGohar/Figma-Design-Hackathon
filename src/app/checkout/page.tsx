"use client"; // Ensures this runs only on the client side in Next.js
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { createPaymentIntent } from "./action"; // Assuming this is the function that creates the payment intent
import { useSelector } from "react-redux";
import { urlFor } from "@/sanity/lib/client"; // Assuming this is a custom function to get image URL from Sanity
import Link from "next/link";

import axios from "axios";
import { Address, Rate, trackingObjType } from "../../../type";
import { cartProductsWhichCanBeShipped } from "../../../data";

const stripePublicKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY;
if (!stripePublicKey) {
  throw new Error("Missing NEXT_PUBLIC_STRIPE_PUBLIC_KEY in environment variables.");
}

const stripePromise = loadStripe(stripePublicKey);
interface CartItem {
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


export default function CheckoutPage() {

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


  return (
    <div className=" w-full mx-auto">
      {/* Banner Section */}
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
          Checkout
        </h1>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
          <p className="text-gray-700 text-xs md:text-xl flex items-center">
            <Link href="/" className="font-bold hover:underline">Home</Link>
            <span className="font-bold mx-2">{'>'}</span>
            <Link href="/checkout" className="hover:underline">Checkout</Link>
          </p>
        </div>
      </div>

      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <div className="flex flex-col-reverse lg:flex-row justify-center  space-x-4">
            {/* `justify-center` centers the content horizontally and `items-center` centers it vertically */}
            <div className="w-full lg:w-1/2 ">
              <ShippingRatesPage />
              {/* <OrderDetails cartItems={cartItems} /> */}
            </div>
            <div className="w-full lg:w-1/2">
              {/* <ShippingRatesPage /> */}
              <OrderDetails cartItems={cartItems} />
            </div>
          </div>
        </Elements>

      )}
    </div>
  );
}

function OrderDetails({ cartItems }: { cartItems: any[] }) {

  const [shippingPrice, setShippingPrice] = useState<number>(0);

  // const [paymentMethod, setPaymentMethod] = useState(null);
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  // const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  // const handlePaymentSelection = (event) => {
  //   setPaymentMethod(event.target.value);
  // };
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handlePaymentSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
  };

  const handlePlaceOrder = () => {
    setShowOrderSummary(true); // Show order summary and payment details
    if (paymentMethod === 'cod') {
      setShowSuccessAlert(true);
    }
    // Handle form submission if needed for Direct Bank
  };
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.qty, 0);
  const total = subtotal + shippingPrice;

  return (
    <div className="order-details w-full p-6 rounded-lg">
    <div className="flex flex-col gap-6 mt-8">
  
      {/* Order Summary on the Left */}
      <div className="w-full lg:w-1/2 mt-4 px-4 lg:px-6">
        <div className="mb-10">
          <h3 className="font-semibold text-xl sm:text-2xl mt-6 mb-8">Order Summary</h3>
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="py-2 text-left text-sm sm:text-xl">Product</th>
                <th className="py-2 text-right text-sm sm:text-xl">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <div key={item.id} className="order-item mt-6 flex items-center justify-between mb-4">
                    <Image
                      src={item.image ? urlFor(item.image).width(100).height(100).url() : "/images/default-product.jpg"}
                      alt={item.name || "Product Image"}
                      width={80}
                      height={80}
                      className="rounded-md"
                    />
                    <div className="ml-4 flex-grow">
                      <span className="font-medium text-sm sm:text-base">{item.name}</span>
                      <div className="text-xs sm:text-sm text-gray-500">{item.qty} x ${item.price}</div>
                    </div>
                  </div>
                </tr>
              ))}
              <tr>
                <td className="py-2 font-semibold text-sm sm:text-base">Subtotal</td>
                <td className="py-2 text-right text-sm sm:text-base">
                  ${cartItems.reduce((total, item) => total + item.price * item.qty, 0)}
                </td>
              </tr>
              <tr>
                <td className="py-2 font-semibold text-sm sm:text-base">Shipping</td>
                <td className="py-2 text-right text-sm sm:text-base">
                  ${shippingPrice}
                </td>
              </tr>
              <tr className="border-b font-semibold">
                <td className="py-2 text-sm sm:text-base">Total</td>
                <td className="py-2 text-yellow-700 text-right text-sm sm:text-xl">
                  ${total}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  
      {/* Payment Form on the Right */}
      <div className="w-full lg:w-1/2 mt-6 px-4 lg:px-6">
        <h2 className="font-semibold text-xl sm:text-2xl mt-10 mb-8">Payment Details</h2>
        <PaymentForm />
      </div>
    </div>
  </div>
  
    );
}

interface LocalAddress {
  name: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  addressLine1: string;
  addressLine2: string;
  cityLocality: string;
  stateProvince: string;
  countryCode: string;
  addressResidentialIndicator: "yes" | "no"; // Keep it restricted to "yes" or "no"
  email?: string; // Optional field
}

const ShippingRatesPage = () => {
  const [shipeToAddress, setshipeToAddress] = useState<LocalAddress>({
  name: "John Doe",
  phone: "+1 555-678-1234",
  street: "1600 Pennsylvania Avenue NW", // Ensure 'street' is included
  city: "Washington", // Ensure 'city' is included
  state: "DC", // Ensure 'state' is included
  country: "United States", // Ensure 'country' is included
  addressLine1: "1600 Pennsylvania Avenue NW",
  addressLine2: "",
  cityLocality: "Washington",
  stateProvince: "DC",
  postalCode: "20500",
  countryCode: "US",
  addressResidentialIndicator: "no",
});


  const [rates, setRates] = useState<Rate[]>([]);
  const [rateId, setrateId] = useState<string | null>(null);
  const [labelPdf, setLabelPdf] = useState<string | null>(null);
  const [trackingObj, setTrackingObj] = useState<trackingObjType | null>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  // Function to handle form submission of shipping rates
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors([]);
    setRates([]);

    try {
      const response = await axios.post("/api/shipengine/get-rates", {
        shipeToAddress,
        // map the cart products which can be shipped and use only weight and dimensions
        packages: cartProductsWhichCanBeShipped.map((product) => ({
          weight: product.weight,
          dimensions: product.dimensions,
        })),
      });
      console.log(response.data);
      setRates(response.data.shipmentDetails.rateResponse.rates);
    } catch (error) {
      console.log(error);
      setErrors(["An error occurred while fetching rates."]);
    } finally {
      setLoading(false);
    }
  };

  // Function to create label from selected rate
  const handleCreateLabel = async () => {
    if (!rateId) {
      alert("Please select a rate to create a label.");
    }

    setLoading(true);
    setErrors([]);

    try {
      const response = await axios.post("/api/shipengine/label", {
        rateId: rateId,
      });
      const labelData = response.data;
      console.log(labelData);
      setLabelPdf(labelData.labelDownload.href);
      setTrackingObj({
        trackingNumber: labelData.trackingNumber,
        labelId: labelData.labelId,
        carrierCode: labelData.carrierCode,
      });
    } catch (error) {
      console.log(error);
      setErrors(["An error occurred while creating the label."]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-black py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-6">
        {/* <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Shipping Rates Calculator
        </h1> */}

        {/* Combined Billing and Shipping Address Section */}
        <form onSubmit={handleSubmit} className="space-y-6 ">
          <div className="flex flex-col lg:flex-row mt-8">
            <div className="w-full lg:w-1/2 mx-auto ">
              <h3 className="font-semibold text-2xl mt- mb-8">Billing & Shipping Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols- gap-4">
                <div>
                  <label htmlFor="firstName" className="block my-4">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    value={shipeToAddress.name}
                    onChange={(e) => setshipeToAddress({ ...shipeToAddress, name: e.target.value })}
                    className="w-full border border-gray-500 rounded p-3"
                    required
                  />
                </div>
                {/* <div>
                  <label htmlFor="lastName" className="block my-4">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    value={shipeToAddress.phone}
                    onChange={(e) => setshipeToAddress({ ...shipeToAddress, phone: e.target.value })}
                    className="w-full border border-gray-500 rounded p-3"
                    required
                  />
                </div> */}
              </div>

              <div className="mt-4">
                <label htmlFor="country" className="block my-4 mt-6">Country / Region</label>
                <input
                  type="text"
                  id="country"
                  value={shipeToAddress.countryCode}
                  onChange={(e) => setshipeToAddress({ ...shipeToAddress, countryCode: e.target.value })}
                  className="w-full border-gray-500 rounded border p-3"
                  required
                />
              </div>

              <div className="mt-4">
                <label htmlFor="address" className="block my-4 mt-6">Street Address</label>
                <input
                  type="text"
                  id="address"
                  value={shipeToAddress.addressLine1}
                  onChange={(e) => setshipeToAddress({ ...shipeToAddress, addressLine1: e.target.value })}
                  className="w-full border-gray-500 rounded border p-3"
                  required
                />
              </div>

              <div className="gap-4 mt-4">
                <div>
                  <label htmlFor="town" className="block my-4 mt-6">Town / City</label>
                  <input
                    type="text"
                    id="town"
                    value={shipeToAddress.cityLocality}
                    onChange={(e) => setshipeToAddress({ ...shipeToAddress, cityLocality: e.target.value })}
                    className="w-full border-gray-500 rounded border p-3"
                    required
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="zip" className="block my-4 mt-6">Postal Code</label>
                <input
                  type="text"
                  id="zip"
                  value={shipeToAddress.postalCode}
                  onChange={(e) => setshipeToAddress({ ...shipeToAddress, postalCode: e.target.value })}
                  className="w-full border-gray-500 rounded border p-3"
                  required
                />
              </div>

              <div className="mt-4">
                <label htmlFor="phone" className="block my-4 mt-6">Phone</label>
                <input
                  type="text"
                  id="phone"
                  value={shipeToAddress.phone}
                  onChange={(e) => setshipeToAddress({ ...shipeToAddress, phone: e.target.value })}
                  className="w-full border-gray-500 rounded border p-3"
                  required
                />
              </div>

              <div className="mt-4">
                <label htmlFor="email" className="block my-4 mt-6">Email Address</label>
                <input
                  type="text"
                  id="email"
                  value={shipeToAddress.email}
                  onChange={(e) => setshipeToAddress({ ...shipeToAddress, email: e.target.value })}
                  className="w-full border-gray-500 rounded border p-3"
                  required
                />
              </div>
            </div>
          </div>

          {/* Shipping Rates Button */}
          {/* Shipping Rates Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              disabled={loading}
              className="py-3 w-[320px] rounded-xl bg-black text-white"
            >
              {loading ? "Fetching Rates..." : "Get Shipping Rates"}
            </button>
          </div>
        </form>
        <div className="gap-4 flex items-center justify-center flex-wrap my-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {rates.map((rate) => (
      <div
        key={rate.rateId}
        className={`p-4 w-[180px] h-[180px] border rounded-xl shadow-lg transition-transform transform hover:scale-105 cursor-pointer duration-300 ${rateId === rate.rateId
          ? "border-blue-500 bg-blue-50 shadow-xl"
          : "border-gray-300 bg-white"
          }`}
        onClick={() => setrateId(rate.rateId)}
      >
        <div className="flex items-start gap-3">
          {/* Custom Radio Button */}
          <input
            type="radio"
            name="shippingRate"
            checked={rateId === rate.rateId}
            onChange={() => setrateId(rate.rateId)}
            className="h-4 w-4 text-blue-600 accent-blue-500 cursor-pointer"
          />
          <div className="w-[160px] text-xs h-[110px]">
            <p className="text-lg font-semibold text-gray-800">
              {rate.carrierFriendlyName}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Service:</span> {rate.serviceType}
            </p>
            <p className="text-gray-700 font-semibold">
              <span className="font-medium">Cost:</span> {rate.shippingAmount.amount}{" "}
              {rate.shippingAmount.currency}
            </p>

            {/* Delivery Time (Days) based on Amount */}
            {rate.shippingAmount.amount >= 500 ? (
              <p className="text-xs text-gray-600 mt-2">
                <span className="font-medium">Estimated Delivery:</span> 1-2 days
              </p>
            ) : rate.shippingAmount.amount >= 400 ? (
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-medium">Estimated Delivery:</span> 2-3 days
              </p>
            ) : rate.shippingAmount.amount >= 300 ? (
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-medium">Estimated Delivery:</span> 3-4 days
              </p>
            ) : rate.shippingAmount.amount >= 200 ? (
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-medium">Estimated Delivery:</span> 4-5 days
              </p>
            ) : rate.shippingAmount.amount >= 100 ? (
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-medium">Estimated Delivery:</span> 5-7 days
              </p>
            ) : (
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-medium ">Estimated Delivery:</span> 7-10 days
              </p>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


        {/* Create Label Section */}
        {rateId && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleCreateLabel}
              disabled={loading}
              className="mt-4 py-3 w-[300px] rounded-xl bg-black text-white"
            >
              {loading ? "Creating Label..." : "Create Shipping Label"}
            </button>
          </div>
        )}

        {/* Display Label PDF or Tracking Info */}
        {labelPdf && (
          <div className="mt-8 justify-center flex gap-3">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Shipping Label</h2>
            <Link
              href={labelPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Download Shipping Label PDF
            </Link>
          </div>
        )}

        {trackingObj && (
          <div className="mt-8 flex flex-col items-center justify-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Tracking Info</h2>
            <div className="flex flex-col ">
              <p className="border-b p-1">Tracking Number: {trackingObj.trackingNumber}</p>
              <p className="border-b p-1">Label ID: {trackingObj.labelId}</p>
              <p className="border-b p-1">Carrier: {trackingObj.carrierCode}</p>
            </div>
          </div>
        )}


        {/* Error Handling */}
        {errors.length > 0 && (
          <div className="mt-8 text-red-600">
            <ul>
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};



function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.href,
      },
    });

    if (error) {
      setErrorMessage(error.message || "An unknown error occurred.");
      setIsProcessing(false);
    } else {
      // Handle success (e.g., redirect user, show confirmation)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      {errorMessage && <div className="text-red-500 mt-4">{errorMessage}</div>}
      <button
        type="submit"
        disabled={isProcessing}
        className={`mt-4 py-3 w-full rounded-xl ${isProcessing ? "bg-gray-300" : "bg-black text-white"}`}
      >
        {isProcessing ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
}









// // ..........................
// import React from 'react'
// import Header from '../components/Header'
// import Image from 'next/image'
// import Link from 'next/link'
// import Field from '../components/Field'

// function CheackOut() {
//     return (
//         <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
//             <div className='bg-[#faf4f4]'>
//                 <Header />
//             </div>

//             {/* Banner Section */}
//             <div className="relative text-black">
//                 {/* Main Banner Image */}
//                 <Image
//                     src="/shop/shop.png" // Replace with the correct image file path
//                     alt="Shop Banner"
//                     height={400}
//                     width={1600}
//                     className="w-full h-40 md:h-auto object-cover"
//                 />
//                 {/* ... */}
//                 {/* Logo Image - Positioned Above Banner */}
//                 <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-10">
//                     <Image
//                         src="/shop/logo.png" // Replace with your logo file path
//                         alt="Shop Logo"
//                         height={77}
//                         width={77}
//                         className="object-contain"
//                     />
//                 </div>

//                 {/* Main Heading */}
//                 <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-[48px] text-[24px] font-medium  -mt-4 md:mt-0">
//                     Checkout
//                 </h1>

//                 {/* Breadcrumb Section */}
//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
//                     <p className="text-gray-700 text-xs md:text-xl flex items-center">
//                         <Link href="/" className="font-bold hover:underline">Home</Link>
//                         <span className="font-bold mx-2">{'>'}</span>
//                         <Link href="/checkout" className="hover:underline">Checkout</Link>
//                     </p>
//                 </div>
//             </div>

//             {/* Billing Section */}
//             <div className="flex flex-col lg:flex-row mx-10 gap-6 mt-8">
//                 <div className="w-full lg:w-1/2 md:mx-20">
//                     <h3 className="font-semibold text-2xl mt-10 mb-8">Billing Details</h3>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                         <div>
//                             <label htmlFor="firstName" className="block my-4">First Name</label>
//                             <input type="text" id="firstName" className="w-full border border-gray-500 rounded p-3" />
//                         </div>
//                         <div>
//                             <label htmlFor="lastName" className="block my-4">Last Name</label>
//                             <input type="text" id="lastName" className="w-full border border-gray-500 rounded p-3" />
//                         </div>
//                     </div>

//                     {/* <div className="mt-4">
//                         <label htmlFor="companyName" className="block my-4 mt-6">Company Name (Optional)</label>
//                         <input type="text" id="companyName" className="w-full border-gray-500 rounded border p-3" />
//                     </div> */}

//                     <div className="mt-4">
//                         <label htmlFor="country" className="block my-4 mt-6">Country / Region</label>
//                         <input type="text" id="country" className="w-full border-gray-500 rounded border p-3" />
//                     </div>

//                     <div className="mt-4">
//                         <label htmlFor="address" className="block my-4 mt-6">Street Address</label>
//                         <input type="text" id="address" className="w-full border-gray-500 rounded border p-3" />
//                     </div>

//                     <div className="gap-4 mt-4">
//                         <div>
//                             <label htmlFor="town" className="block my-4 mt-6">Town / City</label>
//                             <input type="text" id="town" className="w-full border-gray-500 rounded border p-3" />
//                         </div>
//                         {/* <div>
//                             <label htmlFor="province" className="block my-4 mt-6">Province</label>
//                             <input type="text" id="province" className="w-full border-gray-500 rounded border p-3" />
//                         </div> */}
//                     </div>

//                     <div className="mt-4">
//                         <label htmlFor="zip" className="block my-4 mt-6">Postal Code</label>
//                         <input type="text" id="zip" className="w-full border-gray-500 rounded border p-3" />
//                     </div>

//                     <div className="mt-4">
//                         <label htmlFor="phone" className="block my-4 mt-6">Phone</label>
//                         <input type="text" id="phone" className="w-full border-gray-500 rounded border p-3" />
//                     </div>

//                     <div className="mt-4">
//                         <label htmlFor="email" className="block my-4 mt-6">Email Address</label>
//                         <input type="text" id="email" className="w-full border-gray-500 rounded border p-3" />
//                     </div>

//                     {/* <div className="mt-4">
//                         <input type="text" id="additionalInfo" placeholder="Additional Information" className="w-full border-gray-500 my-4 mt-6 rounded border p-3" />
//                     </div> */}
//                 </div>

//                 {/* Order Summary */}
//                 <div className="w-full lg:w-1/2 md:mx-20 mt-4 lg:mt-0">
//                     <div className="mt-4">
//                         <table className="w-full table-auto">
//                             <thead>
//                                 <tr>
//                                     <th className="py-2 text-left text-xl">Product</th>
//                                     <th className="py-2 text-right text-xl">Subtotal</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <tr>
//                                     <td className="py-2 text-gray-500">Asgaard Sofa x 1</td>
//                                     <td className="py-2 text-right">Rs: 250,000.00</td>
//                                 </tr>
//                                 <tr>
//                                     <td className="py-2 font-semibold">Subtotal</td>
//                                     <td className="py-2 text-right">Rs: 250,000.00</td>
//                                 </tr>
//                                 <tr className="border-b font-semibold">
//                                     <td className="py-2">Total</td>
//                                     <td className="py-2 text-yellow-700 text-right text-xl">Rs: 250,000.00</td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>

//                     {/* Payment Method */}
//                     <div className="flex items-center mt-4 text-gray-400">
//                         <input type="radio" id="cod" name="payment" className="mr-2" />
//                         <label htmlFor="cod" className="text-md">Cash On Delivery</label>
//                     </div>
//                     <p className="text-sm text-gray-600 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at arcu at eros malesuada facilisis.</p>

//                     <button className="mt-6 border border-black py-3 px-14 rounded-xl">Place Order</button>
//                 </div>
//             </div>

//             <div className='my-10'>
//                 <Field />
//             </div>
//         </div>
//     )
// }

// export default CheackOut