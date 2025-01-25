'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { IoTimeOutline } from 'react-icons/io5'
import { CiCalendar } from 'react-icons/ci'
import Asgaard from '../asgaardsofa/page'
import { client } from '@/sanity/lib/client'

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


function Hero() {

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
        <div className=' text-[#000000] mx-auto max-w-screen-2xl flex flex-col '>

            {/* SECTION 1 */}

            <div className="bg-[#FBEBB5] mx-auto max-w-screen-2xl flex flex-col md:flex-row w-full h-auto md:h-[900px] items-center px-4">
                {/* Text Section */}
                <div className="w-full md:w-1/2 lg:w-[440px] h-auto md:h-[276px] text-center md:text-left mt-20 md:mt-0 md:ml-[202px]">
                    <h1 className="scroll-animate-left  text-[24px] sm:text-[29px] md:text-[39px] lg:text-[44px] xl:text-[54px] 2xl:text-[64px] font-medium leading-tight">
                        Rocket Single Seater
                    </h1>
                    <Link href="/shop" aria-label="Shop for Rocket Single Seater">
                        <p className="scroll-animate-left scroll-delay-1s text-[15px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] mt-4 md:mt-8 font-medium underline underline-offset-8">
                            Shop Now
                        </p>
                    </Link>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 lg:w-[853px] h-auto flex justify-center mt-6 md:mt-0">
                    <Image
                        src="/hero/main.png"
                        alt="Rocket single seater hero image"
                        height={1000}
                        width={853}
                        className="max-w-full h-auto scroll-animate-left scroll-delay-2s"
                    />
                </div>
            </div>


            {/* SECTION 2 */}
            <div className="bg-[#FAF4F4] mx-auto flex flex-wrap justify-center gap-8 w-full max-w-[1540px] h-auto p-4 md:p-8">
                {/* Image 1 */}
                <div className="flex flex-col items-center max-w-full md:max-w-[605px]">
                    <Image
                        src="/hero/sec2img1.png"
                        alt="A stylish wooden side table"
                        height={562}
                        width={605}
                        className="rounded-lg scroll-animate-left scroll-delay-1s max-w-full h-auto"
                    />
                    <div className="relative -mt-16 sm:-mt-20 md:-mt-32 lg:-mt-40 ml-0 sm:ml-6 md:-ml-32 lg:-ml-48">
                        <h2 className="scroll-animate-left scroll-delay-1s text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[36px] font-medium">
                            Side Table
                        </h2>
                        <Link href="/shop">
                            <p className="scroll-animate-left scroll-delay-2s text-[12px] sm:text-[14px] md:text-[18px] lg:text-[20px] xl:text-[22px] mt-2 md::mt-4 font-medium underline underline-offset-8">
                                View More
                            </p>
                        </Link>
                    </div>
                </div>

                {/* Image 2 */}
                <div className="flex flex-col items-center max-w-full md:max-w-[605px]">
                    <Image
                        src="/hero/sec2img2.png"
                        alt="A modern minimalist side table"
                        height={562}
                        width={605}
                        className="rounded-lg scroll-animate-left max-w-full h-auto"
                    />
                    <div className="relative -mt-16 sm:-mt-16 md:-mt-32  ml-0 sm:ml-6 md:-ml-32 lg:-ml-48">
                        <h2 className="scroll-animate-left scroll-delay-1s text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[36px] font-medium">
                            Side Table
                        </h2>
                        <Link href="/shop">
                            <p className="scroll-animate-left scroll-delay-2s text-[12px] sm:text-[14px] md:text-[18px] lg:text-[20px] xl:text-[22px] mt-2 md::mt-4 font-medium underline underline-offset-8">
                                View More
                            </p>
                        </Link>
                    </div>
                </div>
            </div>



            {/* SECTION 3 */}
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


            <Asgaard />

            {/* SECTION 5 */}
            <div className="flex flex-col items-center w-full h-auto text-center px-4">
                {/* Section Title */}
                <div className="my-10">
                    <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:-text-[30px] xl:text-[33px] 2xl:text-[36px] font-medium">Our Blogs</h2>
                    <p className="text-[16px] text-[#9F9F9F] mt-2">
                        Find a bright idea to suit your taste with our great selection
                    </p>
                </div>

                {/* Blog Container */}
                <div className="w-full max-w-[1240px] h-auto flex flex-wrap justify-between gap-6 mx-auto">

                    {/* Blog Post 1 */}
                    <div className="w-full md:w-[393px] h-auto">
                        <div className="h-[393px] w-full">
                            <Image
                                src='/hero/sec5img1.png'
                                height={393}
                                width={393}
                                alt="Blog 1"
                                className=" object-cover w-full h-full"
                            />
                        </div>
                        <div className="my-4">
                            <p className="text-[15px] sm:text-[18px] md:text-[20px]">Going all-in with millennial design</p>
                            <Link href={''}>
                                <p className="mb-10 text-[12px] sm:text-[14px] md:text-[18px] lg:text-[20px] xl:text-[22px] mt-2 md::mt-4 font-medium underline underline-offset-8">
                                    Read More
                                </p>
                            </Link>
                            <span className="flex text-center justify-center mt-4">
                                <span className="flex">
                                    <IoTimeOutline size={20} className='' />
                                    <p className="ml-1">5 min</p>
                                </span>
                                <span className="flex ml-3">
                                    <CiCalendar size={20} className='' />
                                    <p className="ml-1">12<sup>th</sup> Oct 2022</p>
                                </span>
                            </span>
                        </div>
                    </div>

                    {/* Blog Post 2 */}
                    <div className="w-full md:w-[393px] h-auto">
                        <div className="h-[393px] w-full">
                            <Image
                                src='/hero/sec5img2.png'
                                height={393}
                                width={393}
                                alt="Blog 2"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="my-4">
                            <p className="text-[15px] sm:text-[18px] md:text-[20px]">Going all-in with millennial design</p>
                            <Link href={''}>
                                <p className="mb-10 text-[12px] sm:text-[14px] md:text-[18px] lg:text-[20px] xl:text-[22px] mt-2 md::mt-4 font-medium underline underline-offset-8">
                                    Read More
                                </p>
                            </Link>
                            <span className="flex text-center justify-center mt-4">
                                <span className="flex">
                                    <IoTimeOutline size={20} className='' />
                                    <p className="ml-1">5 min</p>
                                </span>
                                <span className="flex ml-3">
                                    <CiCalendar size={20} className='' />
                                    <p className="ml-1">12<sup>th</sup> Oct 2022</p>
                                </span>
                            </span>
                        </div>
                    </div>

                    {/* Blog Post 3 */}
                    <div className="w-full md:w-[393px] h-auto">
                        <div className="h-[393px] w-full">
                            <Image
                                src='/hero/sec5img3.png'
                                height={393}
                                width={393}
                                alt="Blog 3"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="my-4">
                            <p className="text-[15px] sm:text-[18px] md:text-[20px]">Going all-in with millennial design</p>
                            <Link href={''}>
                                <p className="mb-10 text-[12px] sm:text-[14px] md:text-[18px] lg:text-[20px] xl:text-[22px] mt-2 md::mt-4 font-medium underline underline-offset-8">
                                    Read More
                                </p>
                            </Link>
                            <span className="flex text-center justify-center mt-4">
                                <span className="flex">
                                    <IoTimeOutline size={20} className='' />
                                    <p className="ml-1">5 min</p>
                                </span>
                                <span className="flex ml-3">
                                    <CiCalendar size={20} className='' />
                                    <p className="ml-1">12<sup>th</sup> Oct 2022</p>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                {/* View All Posts Button */}
                <Link href='/blog'>
                <button className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] mb-10 text-center mx-auto underline underline-offset-8 text-black-600 font-medium mt-8">
                    View All Posts
                </button>
                </Link>
            </div>


            {/* SECTION 6 */}
            <div className="relative w-full h-[450px] flex flex-col items-center justify-center">
                <div className="relative w-full h-full">
                    {/* Image Section */}
                    <Image
                        src="/hero/sec6img1.png"
                        height={450}
                        width={1440}
                        alt="Instagram Section"
                        className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    />
                    {/* Content Section */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
                        <h2 className="text-[35px] sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[55px] 2xl:text-[60px] font-bold text-center">
                            Our Instagram
                        </h2>
                        <p className="text-[16px] sm:text-[20px]  text-center mt-2">
                            Follow our store on Instagram
                        </p>
                        <button className="mt-4 rounded-full text-black hover:text-white hover:bg-black h-[48px] sm:h-[64px] w-[200px] sm:w-[255px] md:px-16 md:py-4 shadow-md hover:shadow-lg">
                            Follow Us
                        </button>
                        

                    </div>
                </div>
            </div>


        </div >
    )
}

export default Hero

// New