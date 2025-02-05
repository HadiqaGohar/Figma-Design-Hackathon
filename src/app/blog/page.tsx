'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendar, FaUserLarge } from 'react-icons/fa6';
import { GiWoodenChair } from 'react-icons/gi';
import { FiSearch } from 'react-icons/fi';
import { client } from '../../sanity/lib/client';
import Header from '../components/Header';
import Field from '../components/Field';

// Fetching posts and categories from Sanity CMS
async function fetchPosts() {
  const query = `
    *[_type == "blogPost"] {
      _id,
      title,
      slug,
      author,
      category,
      date,
      "mainImage": mainImage.asset->url,
      content
    }
  `;
  
  try {
    const posts = await client.fetch(query);
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

async function fetchCategories() {
  const query = `
    *[_type == "category"] {
      _id,
      title
    }
  `;
  
  try {
    const categories = await client.fetch(query);
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadPostsAndCategories = async () => {
      const fetchedPosts = await fetchPosts();
      const fetchedCategories = await fetchCategories();
      setPosts(fetchedPosts);
      setCategories(fetchedCategories);
      setLoading(false);
    };

    loadPostsAndCategories();
  }, []);

  // Handle search functionality
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Filter posts based on search term
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
      {/* Header Section */}
    

      {/* Banner Section */}
      <div className="relative text-black">
        <Image
          src="/shop/shop.png"
          alt="Shop Banner"
          height={400}
          width={1600}
          className="w-full h-40 md:h-auto object-cover"
        />
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
          <Image
            src="/shop/logo.png"
            alt="Shop Logo"
            height={77}
            width={77}
            className="object-contain"
          />
        </div>
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-[48px] text-[24px] font-medium -mt-4 md:mt-0">
          Blog
        </h1>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
          <p className="text-gray-700 text-xs md:text-xl flex items-center">
            <Link href="/" className="font-bold hover:underline">Home</Link>
            <span className="font-bold mx-2">{'>'}</span>
            <Link href="/blog" className="hover:underline">Blog</Link>
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col max-w-screen-2xl justify-around mx-auto lg:flex-row gap-8 mt-8">
        {/* Blog Posts Section */}
        <div className="w-full lg:w-3/3 2xl:w-[717px] gap-6">
          <div className="flex flex-col gap-6">
            {filteredPosts.map((post) => (
              <div key={post._id} className="p-4 ">
                <Image
                  src={post.mainImage}
                  height={500}
                  width={817}
                  alt={`Image for ${post.title}`}
                  className=" h-[400px] w-[717px] object-cover"
                />
                <div className="flex items-center space-x-4 mt-3 text-xs md:text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <FaUserLarge />
                    <p>{post.author || 'Admin'}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaCalendar />
                    <p>{new Date(post.date).toLocaleDateString()}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <GiWoodenChair />
                    <p>{post.category}</p>
                  </div>
                </div>
                <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold mt-4">{post.title}</h2>
                <p className="mt-2 text-gray-700 text-xs sm:text-[15px] line-clamp-4">
                  {post.content.slice(0, 400)}...
                </p>
                <Link
                  href={`/blog/${post.slug.current}`}
                  className="mt-4 block text-primary underline underline-offset-4"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Section */}
        <div className="lg:w-1/3 p-6">
          {/* Search Bar */}
          <div className="p-3 rounded-lg mb-6 border-2 border-gray-300">
            <div className="flex items-center rounded w-full">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearch}
                className="flex-grow h-6 px-4 border-none outline-none"
              />
              <FiSearch size={28} className="mr-5 text-yellow-600" />
            </div>
          </div>

          {/* Categories */}
          {/* <div className="p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-4 text-gray-500">
              {categories.map((category) => (
                <li key={category._id} className="text-sm">
                  <span>{category.title}</span>
                </li>
              ))}
            </ul>
          </div> */}

         {/* Recent Posts */}
<div className="p-6 rounded-lg">
  <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
  <div className="space-y-6">
    {filteredPosts.slice(0, 3).map((post, index) => (
      <div key={index} className="flex space-x-3 w-full">
        <Link href={`/blog/${post.slug.current}`} className="flex space-x-3 w-full">
        <Image
          src={post.mainImage}
          height={100}
          width={100}
          alt={`Image for ${post.title}`}
        />
        <div>
          <h4 className="text-[14px] font-semibold mt-8">{post.title}</h4>
          {/* <h4 className="text-[14px] font-medium ">{post.author}</h4> */}
          <p className="text-[12px]">{new Date(post.date).toLocaleDateString()}</p>
          {/* <Link href={`/blog/${post.slug.current}`}> */}
            {/* <p className="text-primary">Read More</p> */}
          
        </div>
        </Link>
      </div>
    ))}
  </div>
</div>

        </div>
      </div>

      {/* Footer Section */}
      <div className="text-center mt-12">
        <Field />
      </div>
    </div>
  );
}

export default Blog;







// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import Header from '../components/Header';
// import { FaCalendar, FaUserLarge } from 'react-icons/fa6';
// import { GiWoodenChair } from 'react-icons/gi';
// import Page from '../components/Page';
// import Field from '../components/Field';
// import { FiSearch } from 'react-icons/fi';


//  function Blog() {
 
//   return (
//     <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
//       {/* Header Section */}
//       <div className="bg-[#faf4f4]">
//         <Header />
//       </div>
// {/* ... */}
//       {/* Banner Section */}
//       <div className="relative text-black">
//         {/* Main Banner Image */}
//         <Image
//           src="/shop/shop.png" // Replace with the correct image file path
//           alt="Shop Banner"
//           height={400}
//           width={1600}
//           className="w-full h-40 md:h-auto object-cover"
//         />

//         {/* Logo Image - Positioned Above Banner */}
//         <div className="absolute top-16 left-1/2 transform -translate-x-1/2 ">
//           <Image
//             src="/shop/logo.png" // Replace with your logo file path
//             alt="Shop Logo"
//             height={77}
//             width={77}
//             className="object-contain"
//           />
//         </div>

//         {/* Main Heading */}
//         <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-[48px] text-[24px] font-medium  -mt-4 md:mt-0">
//           Blog
//         </h1>

//         {/* Breadcrumb Section */}
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
//           <p className="text-gray-700 text-xs md:text-xl flex items-center">
//             <Link href="/" className="font-bold hover:underline">Home</Link>
//             <span className="font-bold mx-2">{'>'}</span>
//             <Link href="/blog" className="hover:underline">Blog</Link>
//           </p>
//         </div>
//       </div>

//       <div className="flex flex-col lg:flex-row">
//         {/* Blog Posts Section */}
//         <div className="mt-8 w-full lg:w-3/4 gap-6">
//           {/* Single Blog Post */}
//           {[
//             { image: "/blog/img1.png", title: "Going all-in with millennial design", category: "Crafts", date: "01 Jan 2023" },
//             { image: "/blog/img2.png", title: "Exploring new ways of decorating", category: "Design", date: "15 Mar 2023" },
//             { image: "/blog/img3.png", title: "Handmade pieces that took time to make", category: "Wood", date: "20 Sep 2023" },
//           ].map((post, index) => (
//             <div key={index} className="bg-white p-4 rounded-lg transition-shadow">
//               <Image
//                 src={post.image}
//                 height={500}
//                 width={817}
//                 alt={`Image for ${post.title}`}
//                 className="rounded-t-lg"
//               />
//               <div className="flex items-center space-x-4 mt-3 text-xs md:text-sm text-gray-600">
//                 <div className="flex items-center space-x-1">
//                   <FaUserLarge />
//                   <p>Admin</p>
//                 </div>
//                 <div className="flex items-center space-x-1">
//                   <FaCalendar />
//                   <p>{post.date}</p>
//                 </div>
//                 <div className="flex items-center space-x-1">
//                   <GiWoodenChair />
//                   <p>{post.category}</p>
//                 </div>
//               </div>
//               <h2 className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[25px] xl:text-[28px] 2xl:text-[30px] font-semibold mt-4">{post.title}</h2>
//               <p className="mt-2 text-gray-700 text-xs sm:text-[15px] line-clamp-4">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
//               </p>
//               <Link
//                 href={`/blog/post-id-${index + 1}`} // Dynamic link based on post ID
//                 className="mt-4 block text-primary underline underline-offset-4"
//               >
//                 Read More
//               </Link>
//             </div>
//           ))}
//         </div>

//         {/* Sidebar Section */}
//         <div className="mt-10 lg:w-1/4 md:p-6 md:gap-6">
//           {/* Search Bar */}
//           <div className="p-3 rounded-lg">
//             <div className="flex items-center rounded w-full border-2 border-gray-300 md:h-[58px]">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="flex-grow h-full px-4 border-none outline-none"
//               />
//               <FiSearch size={28} className="mr-5 text-gray-600" />
//             </div>
//           </div>

//           {/* Categories */}
//           <div className="p-6 rounded-lg mt-6">
//             <h3 className="text-xl font-bold mb-4">Categories</h3>
//             <ul className="space-y-8 text-[16px] text-gray-500">
//               {[
//                 { name: 'Crafts', count: 2 },
//                 { name: 'Design', count: 8 },
//                 { name: 'Handmade', count: 7 },
//                 { name: 'Interior', count: 1 },
//                 { name: 'Wood', count: 6 },
//               ].map((category, index) => (
//                 <li key={index} className="flex justify-between text-sm">
//                   <span>{category.name}</span>
//                   <span>{category.count}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Recent Posts */}
//           <div className="p-6 rounded-lg w-full">
//             <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
//             <div className="space-y-6">
//               {[
//                 { image: '/blog/post/img1.png', title: 'Going all-in with millennial design', date: '03 Aug 2022' },
//                 { image: '/blog/post/img2.png', title: 'Exploring new ways of decorating', date: '03 Aug 2022' },
//                 { image: '/blog/post/img3.png', title: 'Handmade pieces that took time to make', date: '03 Aug 2022' },
//                 { image: '/blog/post/img4.png', title: 'Modern home in Milan', date: '03 Aug 2022' },
//                 { image: '/blog/post/img5.png', title: 'Colorful office redesign', date: '03 Aug 2022' },
//               ].map((post, index) => (
//                 <div key={index} className="flex space-x-3 w-full">
//                   <Image src={post.image} height={100} width={100} alt="" />
//                   <div>
//                     <h4 className="text-[14px] font-semibold">{post.title}</h4>
//                     <p className='text-[12px]'>{post.date}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="justify-center mx-auto text-center">
//         {/* <Page /> */}
//         <Field />
//       </div>
//     </div>
//   );
// }

// export default Blog;
