'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from '../../sanity/lib/client'

// Define the Product type
interface Product {
  title: string;
  link: string;
  imageUrl: string;
}

function Banner() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(`*[_type == "banner"] {
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
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-[#FBEBB5] mx-auto max-w-screen-2xl flex flex-col md:flex-row w-full h-auto md:h-[900px] items-center px-4"
        >
          {/* Text Section */}
          <div className="w-full md:w-1/2 lg:w-[440px] h-auto md:h-[276px] text-center md:text-left mt-20 md:mt-0 md:ml-[202px]">
            <h1 className="scroll-animate-left text-[24px] sm:text-[29px] md:text-[39px] lg:text-[44px] xl:text-[54px] 2xl:text-[64px] font-medium leading-tight">
              {product.title}
            </h1>
            <Link href={product.link} aria-label={`Shop for ${product.title}`}>
              <p className="scroll-animate-left scroll-delay-1s text-[15px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] mt-4 md:mt-8 font-medium underline underline-offset-8">
                Shop Now
              </p>
            </Link>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 lg:w-[853px] h-auto flex justify-center mt-6 md:mt-0">
            <Image
              src={product.imageUrl}
              alt={product.title}
              height={1000}
              width={853}
              className="max-w-full h-auto scroll-animate-left scroll-delay-2s"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Banner;
