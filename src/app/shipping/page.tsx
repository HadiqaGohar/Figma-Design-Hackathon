// 'use client';

// import { useRouter } from 'next/navigation';
// import React, { useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { useDispatch, useSelector } from 'react-redux';
// import { saveShippingAddress } from '../../redux/slices/cartSlice';
// import CheckoutWizard from '../components/CheckoutWizard';
// import Round from '../components/Round';
// import Image from 'next/image';
// import Link from 'next/link';
// import { client } from '../../sanity/lib/client'; // Make sure this client is correctly configured
// import Header from '../components/Header';
// import toast from 'react-hot-toast';

// interface CartState {
//   loading: boolean;
//   cartItems: any[];
//   shippingAddress: ShippingAddress | null;
// }

// interface RootState {
//   cart: CartState;
// }

// interface ShippingAddress {
//   fullName: string;
//   address: string;
//   city: string;
//   postalCode: string;
//   country: string;
// }

// function ShippingAddressPage() {
//   const {
//     handleSubmit,
//     register,
//     formState: { errors },
//     setValue,
//   } = useForm<ShippingAddress>();

//   const router = useRouter();
//   const dispatch = useDispatch();

//   const { shippingAddress } = useSelector((state: RootState) => state.cart);

//   useEffect(() => {
//     if (shippingAddress) {
//       setValue('fullName', shippingAddress.fullName);
//       setValue('address', shippingAddress.address);
//       setValue('city', shippingAddress.city);
//       setValue('postalCode', shippingAddress.postalCode);
//       setValue('country', shippingAddress.country);
//     }
//   }, [setValue, shippingAddress]);

//   const submitHandler = async ({
//     fullName,
//     address,
//     city,
//     postalCode,
//     country,
//   }: ShippingAddress) => {
//     console.log('Submitting address:', { fullName, address, city, postalCode, country });
//     try {
//       // Save address to Redux
//       dispatch(
//         saveShippingAddress({ fullName, address, city, postalCode, country })
//       );
  
//       // Save address to Sanity
//       const result = await client.create({
//         _type: 'shippingAddress',
//         fullName,
//         address,
//         city,
//         postalCode,
//         country,
//       });
      
//       console.log('Sanity response:', result);
      
//       if (result._id) {
//         toast.success('Shipping address saved successfully!');
//         router.push('/payment'); // Redirect to payment page
//       } else {
//         toast.error(`Failed to save the shipping address. Error: ${JSON.stringify(result)}`);
//       }
      
//     } catch (error) {
//       console.error('Error saving address:', error);
//       toast.error('Failed to save the shipping address. Please try again.');
//     }
//   };
  

//   return (
//     <div className="min-h-screen py-8">
//       <Header />
//       <div className="relative text-black">
//         <Image
//           src="/shop/shop.png"
//           alt="Shop Banner"
//           height={400}
//           width={1600}
//           className="w-full h-40 md:h-auto object-cover"
//         />
//         <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-10">
//           <Image
//             src="/shop/logo.png"
//             alt="Shop Logo"
//             height={77}
//             width={77}
//             className="object-contain"
//           />
//         </div>
//         <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-[48px] text-[24px] font-medium -mt-4 md:mt-0">
//           Shipping
//         </h1>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
//           <p className="text-gray-700 text-xs md:text-xl flex items-center">
//             <Link href="/cart" className="font-bold hover:underline">Cart</Link>
//             <span className="font-bold mx-2">{'>'}</span>
//             <Link href="/shipping" className="hover:underline">Shipping</Link>
//           </p>
//         </div>
//       </div>

//       <CheckoutWizard activeStep={1} />

//       <div className="max-w-3xl mx-auto p-6">
//         <form className="space-y-6" onSubmit={handleSubmit(submitHandler)}>
//           <h3 className="font-semibold text-2xl mt-10 mb-8">Shipping Address</h3>

//           <div>
//             <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
//               Full Name
//             </label>
//             <input
//               id="fullName"
//               type="text"
//               autoFocus
//               className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               {...register('fullName', { required: 'Please enter full name' })}
//             />
//             {errors.fullName && (
//               <p className="mt-1 text-sm text-yellow-500">{errors.fullName.message}</p>
//             )}
//           </div>

//           <div>
//             <label htmlFor="address" className="block text-sm font-medium text-gray-700">
//               Address
//             </label>
//             <input
//               id="address"
//               type="text"
//               className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               {...register('address', {
//                 required: 'Please enter address',
//                 minLength: { value: 3, message: 'Address must be at least 3 characters long' },
//               })}
//             />
//             {errors.address && (
//               <p className="mt-1 text-sm text-yellow-500">{errors.address.message}</p>
//             )}
//           </div>

//           <div>
//             <label htmlFor="city" className="block text-sm font-medium text-gray-700">
//               City
//             </label>
//             <input
//               id="city"
//               type="text"
//               className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               {...register('city', { required: 'Please enter city' })}
//             />
//             {errors.city && (
//               <p className="mt-1 text-sm text-yellow-500">{errors.city.message}</p>
//             )}
//           </div>

//           <div>
//             <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
//               Postal Code
//             </label>
//             <input
//               id="postalCode"
//               type="text"
//               className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               {...register('postalCode', { required: 'Please enter postal code' })}
//             />
//             {errors.postalCode && (
//               <p className="mt-1 text-sm text-yellow-500">{errors.postalCode.message}</p>
//             )}
//           </div>

//           <div>
//             <label htmlFor="country" className="block text-sm font-medium text-gray-700">
//               Country
//             </label>
//             <input
//               id="country"
//               type="text"
//               className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               {...register('country', { required: 'Please enter country' })}
//             />
//             {errors.country && (
//               <p className="mt-1 text-sm text-yellow-500">{errors.country.message}</p>
//             )}
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="mt-6 border border-black py-3 px-14 rounded-xl hover:bg-yellow-500 hover:text-white transition-colors"
//             >
//               Next
//             </button>
//           </div>
//         </form>
//       </div>

//       <div className="my-10">
//         <Round />
//       </div>
//     </div>
//   );
// }

// export default ShippingAddressPage;













'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../../redux/slices/cartSlice';
import CheckoutWizard from '../components/CheckoutWizard';
import Round from '../components/Round';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '../../sanity/lib/client'; // Import the sanity client
import Header from '../components/Header';


interface CartState {
  loading: boolean;
  cartItems: any[]; // Replace 'any' with a more specific type if possible
  shippingAddress: ShippingAddress | null; // Define it as ShippingAddress or null if it's not available
}

interface RootState {
  cart: CartState;
}
// ...

interface ShippingAddress {
  fullName: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  // Add other properties if necessary
}



function ShippingAddressPage() {
 
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm<ShippingAddress>(); // Specify ShippingAddress as the type
  

  const router = useRouter();
  const dispatch = useDispatch();

  const { shippingAddress } = useSelector((state : RootState) => state.cart);

  useEffect(() => {
    if (shippingAddress) {
      setValue('fullName', shippingAddress.fullName);
      setValue('address', shippingAddress.address);
      setValue('city', shippingAddress.city);
      setValue('postalCode', shippingAddress.postalCode);
      setValue('country', shippingAddress.country);
    }
  }, [setValue, shippingAddress]);

  const submitHandler = async ({ fullName, address, city, postalCode, country } : ShippingAddress) => {
    // Save address to redux
    dispatch(
      saveShippingAddress({ fullName, address, city, postalCode, country })
    );

    // Create a new shipping address document in Sanity
    try {
      await client.create({
        _type: 'shippingAddress',
        fullName,
        address,
        city,
        postalCode,
        country,
      });
      console.log('Shipping address saved to Sanity');
    } catch (error) {
      console.error('Error saving address to Sanity:', error);
    }

    // Redirect to payment page
    router.push('/payment');
  };

  return (
    <div className="min-h-screen py-8">
      <Header/>
      <div className="relative text-black">
        {/* Main Banner Image */}
        <Image
          src="/shop/shop.png" // Replace with the correct image file path
          alt="Shop Banner"
          height={400}
          width={1600}
          className="w-full h-40 md:h-auto object-cover"
        />

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
          Shipping
        </h1>

        {/* Breadcrumb Section */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
          <p className="text-gray-700 text-xs md:text-xl flex items-center">
            <Link href="/cart" className="font-bold hover:underline">Cart</Link>
            <span className="font-bold mx-2">{'>'}</span>
            <Link href="/shipping" className="hover:underline">shipping</Link>
          </p>
        </div>
      </div>
      <CheckoutWizard activeStep={1} />
      <div className="max-w-3xl mx-auto p-6">
        <form className="space-y-6" onSubmit={handleSubmit(submitHandler)}>
          {/* <h2 className="text-2xl font-semibold text-teal-600 mb-6">Shipping Address</h2> */}

          <h3 className="font-semibold text-2xl mt-10 mb-8">Shipping Address</h3>

          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              autoFocus
              className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              {...register('fullName', { required: 'Please enter full name' })}
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-yellow-500">{errors.fullName.message}</p>
            )}
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              id="address"
              type="text"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              {...register('address', {
                required: 'Please enter address',
                minLength: { value: 3, message: 'Address must be at least 3 characters long' },
              })}
            />
            {errors.address && (
              <p className="mt-1 text-sm text-yellow-500">{errors.address.message}</p>
            )}
          </div>

          {/* City */}
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              id="city"
              type="text"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              {...register('city', { required: 'Please enter city' })}
            />
            {errors.city && (
              <p className="mt-1 text-sm text-yellow-500">{errors.city.message}</p>
            )}
          </div>

          {/* Postal Code */}
          <div>
            <label htmlFor="postalcode" className="block text-sm font-medium text-gray-700">
              Postal Code
            </label>
            <input
              id="postalcode"
              type="text"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              {...register('postalCode', { required: 'Please enter postal code' })}
            />
            {errors.postalCode && (
              <p className="mt-1 text-sm text-yellow-500">{errors.postalCode.message}</p>
            )}
          </div>

          {/* Country */}
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <input
              id="country"
              type="text"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              {...register('country', { required: 'Please enter country' })}
            />
            {errors.country && (
              <p className="mt-1 text-sm text-yellow-500">{errors.country.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="mt-6 border border-black py-3 px-14 rounded-xl"
            >
              Next
            </button>
          </div>
        </form>
      </div>
      <div className="my-10">
        <Round />
      </div>
    </div>
  );
}

export default ShippingAddressPage;
