'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {client} from '../../sanity/lib/client'

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

function TopPicks() {


    const [products, setProducts] = useState<Product[]>([]);


    useEffect(() => {
        const fetchData = async () => {
            const query = `*[_type == "product"  && id in ["1", "2", "3", "4"]]{
        id,
        name,
        description,
        price,
        rating,
        ratingCount,
        tags,
        topPicks,
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
    <div>
         <div className="flex flex-col items-center my-auto text-center h-auto w-full font-medium">
                <div className='flex flex-col my-auto items-center w-full'>
                    <div className='mx-2'>
                        <h2 className="text-[18px] sm-[20px] md:text-[26px] xl:text-[30px] 2xl:text-[36px] mt-20">Top Picks For You</h2>
                        <p className="text-[#9F9F9F] text-[10px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] md:mb-8">
                            Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
                        </p>
                    </div>
                    {/* <div className="flex flex-wrap justify-center gap-6 md:gap-12 lg:gap-6 xl:gap-8"> */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-screen-2xl container mx-auto pb-8 px-4">


                        {/* Picture 1 */}

                        {
                            products.map((product) => {
                                return (
                                    <>
                                        <div key={product.id} className="flex flex-col items-start text-left mx-auto md:p-4 rounded-lg w-full">
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
                                                        <p className="text-xs md:text-[16px] text-gray-700 font-medium">{product.name}</p>
                                                        <h3 className="text-[15px] md:text-xl text-gray-800 font-bold">${product.price}</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                            {/* </div> */}
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                    <Link href="/shop">
                        <p className="mb-10 text-[12px] sm:text-[14px] md:text-[18px] lg:text-[20px] xl:text-[22px] mt-2 md::mt-4 font-medium underline underline-offset-8">
                            View More
                        </p>
                    </Link>
                </div>
            </div>

    </div>
  )
}

export default TopPicks