// 'use client'
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import Header from '../components/Header';
// import ShopLine from '../components/ShopLine';
// import Field from '../components/Field';
// import Page from '../components/Page';
// import { client } from '@/sanity/lib/client';



// function Shop() {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         // GROQ query to fetch product data
//         const fetchData = async () => {
//             const query = `*[_type == "product"]{
//           id,
//           name,
//           description,
//           price,
//           rating,
//           ratingCount,
//           tags,
//           sizes,
//           image {
//             asset -> {
//               url
//             }
//           }
//         }`;

//             const result = await client.fetch(query);
//             setProducts(result);
//         };

//         fetchData();
//     }, []);

//     return (
//         <div className="mx-auto">
//             {/* Header Section */}
//             <div className="bg-[#faf4f4]">
//                 <Header />
//             </div>

//             {/* Banner Section */}
//             <div className="relative text-black">
//                 <Image
//                     src="/shop/shop.png"
//                     alt="Shop Banner"
//                     height={400}
//                     width={1600}
//                     className="w-full h-40 md:h-[400px] object-cover"
//                 />

//                 <div className="absolute top-16 left-1/2 transform -translate-x-1/2 ">
//                     <Image
//                         src="/shop/logo.png"
//                         alt="Shop Logo"
//                         height={77}
//                         width={77}
//                         className="object-contain w-[50px] h-[50px] md:h-[77px] md:w-[77px] translate-y-4 "
//                     />
//                 </div>

//                 <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[24px]  md:text-[48px] font-medium">
//                     Shop
//                 </h1>

//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
//                     <p className="text-gray-700 text-sm md:text-lg flex items-center">
//                         <Link href="/" className="font-bold hover:underline">Home</Link>
//                         <span className="font-bold mx-2">{'>'}</span>
//                         <Link href="/shop" className="hover:underline">Shop</Link>
//                     </p>
//                 </div>
//             </div>

//             {/* ShopLine Component */}
//             <div className="my-6 mx-auto">
//                 <ShopLine />
//             </div>

//             {/* Product List */}
//             {/* Product List */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-screen-2xl container mx-auto pb-8 px-4">
//                 {products.map((product) => (
//                     <div
//                         key={product.id}
//                         className="flex flex-col items-start text-left mx-auto p-4 rounded-lg w-full"
//                     >
//                         <Link href={`/shop/${product.id}`}>
//                             {/* Image Section */}
//                             <div className="w-full h-[287px] flex items-center justify-center overflow-hidden ">
//                                 <Image
//                                     src={product.image?.asset?.url}
//                                     alt={product.name}
//                                     width={287}
//                                     height={287}
//                                     className="object-contain hover:scale-105 duration-300  w-full h-full"
//                                 />
//                             </div>

//                             {/* Text Section */}
//                             <div className="mt-4 flex gap-3">
//                                <div>
//                                <p className="text-md text-gray-700 font-medium">{product.name}</p>
//                                <h3 className="text-xl text-gray-800 font-bold">${product.price}</h3>
//                                </div>
//                                {/* <div className='bg-yellow-600 w-10 h-10 rounded'>

//                                </div> */}
//                             </div>
//                             </Link>
//                     </div>
//                 ))}
//             </div>




//             {/* Pagination */}
//             <div className="flex justify-center mt-8">
//                 <Page />
//             </div>

//             {/* Field Component */}
//             <Field />
//         </div>
//     );
// }

// export default Shop;
'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import ShopLine from '../components/ShopLine';
import Field from '../components/Field';
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

    useEffect(() => {
        // GROQ query to fetch product data
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

    return (
        <div className="mx-auto">
            {/* Header Section */}
            <div className="bg-[#faf4f4]">
                <Header />
            </div>

            {/* Banner Section */}
            <div className="relative text-black">
                <Image
                    src="/shop/shop.png"
                    alt="Shop Banner"
                    height={400}
                    width={1600}
                    className="w-full h-40 md:h-[400px] object-cover"
                />

                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 ">
                    <Image
                        src="/shop/logo.png"
                        alt="Shop Logo"
                        height={77}
                        width={77}
                        className="object-contain w-[50px] h-[50px] md:h-[77px] md:w-[77px] translate-y-4 "
                    />
                </div>

                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[24px]  md:text-[48px] font-medium">
                    Shop
                </h1>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
                    <p className="text-gray-700 text-sm md:text-lg flex items-center">
                        <Link href="/" className="font-bold hover:underline">Home</Link>
                        <span className="font-bold mx-2">{'>'}</span>
                        <Link href="/shop" className="hover:underline">Shop</Link>
                    </p>
                </div>
            </div>

            {/* ShopLine Component */}
            <div className="my-6 mx-auto">
                <ShopLine />
            </div>

            {/* Product List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-screen-2xl container mx-auto pb-8 px-4">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="flex flex-col items-start text-left mx-auto p-4 rounded-lg w-full"
                    >
                        <Link href={`/shop/${product.id}`}>
                            {/* Image Section */}
                            <div className="w-full h-[287px] flex items-center justify-center overflow-hidden ">
                                <Image
                                    src={product.image?.asset?.url}
                                    alt={product.name}
                                    width={287}
                                    height={287}
                                    className="object-contain hover:scale-105 duration-300  w-full h-full"
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
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
                <Page />
            </div>

            {/* Field Component */}
            <Field />
        </div>
    );
}

export default Shop;
