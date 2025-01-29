'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '../../sanity/lib/client'

// Define the type for a product
interface Product {
  title: string;
  link: string;
  imageUrl: string;
}

function SecondBanner() {
  const [products, setProducts] = useState<Product[]>([]); // Use the Product type for state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(`*[_type == "secondBanner"] {
          title,
          link,
          "imageUrl": image.asset->url
        }`);
        setProducts(data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="bg-[#FAF4F4] mx-auto flex flex-wrap justify-center gap-8 w-full max-w-[1540px] h-auto p-4 md:p-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center max-w-full md:max-w-[605px]"
          >
            <Image
              src={product.imageUrl}
              alt={product.title}
              height={562}
              width={605}
              className="rounded-lg scroll-animate-left scroll-delay-1s max-w-full h-auto"
            />
            <div className="relative -mt-16 sm:-mt-20 md:-mt-32 lg:-mt-40 ml-0 sm:ml-6 md:-ml-32 lg:-ml-48">
              <h2 className="scroll-animate-left scroll-delay-1s text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[36px] font-medium">
                {product.title}
              </h2>
              <Link href={product.link}>
                <p className="scroll-animate-left scroll-delay-2s text-[12px] sm:text-[14px] md:text-[18px] lg:text-[20px] xl:text-[22px] mt-2 md::mt-4 font-medium underline underline-offset-8">
                  View More
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SecondBanner;
