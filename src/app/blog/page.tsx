import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import { FaCalendar, FaUserLarge } from 'react-icons/fa6';
import { GiWoodenChair } from 'react-icons/gi';
import Page from '../components/Page';
import Field from '../components/Field';
import { FiSearch } from 'react-icons/fi';

function Blog() {
  return (
    <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
      {/* Header Section */}
      <div className="bg-[#faf4f4]">
        <Header />
      </div>
{/* ... */}
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
          Blog
        </h1>

        {/* Breadcrumb Section */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
          <p className="text-gray-700 text-xs md:text-xl flex items-center">
            <Link href="/" className="font-bold hover:underline">Home</Link>
            <span className="font-bold mx-2">{'>'}</span>
            <Link href="/blog" className="hover:underline">Blog</Link>
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Blog Posts Section */}
        <div className="mt-8 w-full lg:w-3/4 gap-6">
          {/* Single Blog Post */}
          {[
            { image: "/blog/img1.png", title: "Going all-in with millennial design", category: "Crafts", date: "01 Jan 2023" },
            { image: "/blog/img2.png", title: "Exploring new ways of decorating", category: "Design", date: "15 Mar 2023" },
            { image: "/blog/img3.png", title: "Handmade pieces that took time to make", category: "Wood", date: "20 Sep 2023" },
          ].map((post, index) => (
            <div key={index} className="bg-white p-4 rounded-lg transition-shadow">
              <Image
                src={post.image}
                height={500}
                width={817}
                alt={`Image for ${post.title}`}
                className="rounded-t-lg"
              />
              <div className="flex items-center space-x-4 mt-3 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <FaUserLarge />
                  <p>Admin</p>
                </div>
                <div className="flex items-center space-x-1">
                  <FaCalendar />
                  <p>{post.date}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <GiWoodenChair />
                  <p>{post.category}</p>
                </div>
              </div>
              <h2 className="text-[30px] font-semibold mt-4">{post.title}</h2>
              <p className="mt-2 text-gray-700 text-[15px] line-clamp-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
              </p>
              <Link
                href={`/blog/post-id-${index + 1}`} // Dynamic link based on post ID
                className="mt-4 block text-primary underline underline-offset-4"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>

        {/* Sidebar Section */}
        <div className="mt-10 lg:w-1/4 p-6 gap-6">
          {/* Search Bar */}
          <div className="p-3 rounded-lg">
            <div className="flex items-center rounded w-full border-2 border-gray-300 h-[58px]">
              <input
                type="text"
                placeholder="Search"
                className="flex-grow h-full px-4 border-none outline-none"
              />
              <FiSearch size={28} className="mr-5 text-gray-600" />
            </div>
          </div>

          {/* Categories */}
          <div className="p-6 rounded-lg mt-6">
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-8 text-[16px] text-gray-500">
              {[
                { name: 'Crafts', count: 2 },
                { name: 'Design', count: 8 },
                { name: 'Handmade', count: 7 },
                { name: 'Interior', count: 1 },
                { name: 'Wood', count: 6 },
              ].map((category, index) => (
                <li key={index} className="flex justify-between text-sm">
                  <span>{category.name}</span>
                  <span>{category.count}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="p-6 rounded-lg w-full">
            <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
            <div className="space-y-6">
              {[
                { image: '/blog/post/img1.png', title: 'Going all-in with millennial design', date: '03 Aug 2022' },
                { image: '/blog/post/img2.png', title: 'Exploring new ways of decorating', date: '03 Aug 2022' },
                { image: '/blog/post/img3.png', title: 'Handmade pieces that took time to make', date: '03 Aug 2022' },
                { image: '/blog/post/img4.png', title: 'Modern home in Milan', date: '03 Aug 2022' },
                { image: '/blog/post/img5.png', title: 'Colorful office redesign', date: '03 Aug 2022' },
              ].map((post, index) => (
                <div key={index} className="flex space-x-3 w-full">
                  <Image src={post.image} height={100} width={100} alt="" />
                  <div>
                    <h4 className="text-[14px] font-semibold">{post.title}</h4>
                    <p className='text-[12px]'>{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="justify-center mx-auto text-center">
        <Page />
        <Field />
      </div>
    </div>
  );
}

export default Blog;
