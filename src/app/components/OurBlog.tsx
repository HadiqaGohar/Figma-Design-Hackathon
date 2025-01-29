'use client'
import { client } from '@/sanity/lib/client';import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoTimeOutline } from 'react-icons/io5';
import { CiCalendar } from 'react-icons/ci';

// Function to fetch blog posts
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

// Helper function to estimate read time based on word count
function estimateReadingTime(content: string) {
  const wordsPerMinute = 200; // Average words per minute
  const wordCount = content.split(/\s+/).length;
  const timeInMinutes = Math.ceil(wordCount / wordsPerMinute);
  return `${timeInMinutes} min`;
}

function OurBlog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadPostsAndCategories = async () => {
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);
      setLoading(false);
    };

    loadPostsAndCategories();
  }, []);

  return (
    <div>
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
          {loading ? (
            <p>Loading...</p>
          ) : (
            posts.map((post) => (
              <div key={post._id} className="w-full md:w-[393px] h-auto">
                <div className="h-[393px] w-full">
                  <Image
                    src={post.mainImage}
                    height={393}
                    width={393}
                    alt={post.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="my-4">
                  <p className="text-[15px] sm:text-[18px] md:text-[20px]">{post.title}</p>
                  <Link href={`/blog/${post.slug.current}`}>
                    <p className="mb-10 text-[12px] sm:text-[14px] md:text-[18px] lg:text-[20px] xl:text-[22px] mt-2 md::mt-4 font-medium underline underline-offset-8">
                      Read More
                    </p>
                  </Link>
                  <span className="flex text-center justify-center mt-4">
                    <span className="flex">
                      <IoTimeOutline size={20} />
                      <p className="ml-1">{estimateReadingTime(post.content)}</p>
                    </span>
                    <span className="flex ml-3">
                      <CiCalendar size={20} />
                      <p className="ml-1">{new Date(post.date).toLocaleDateString()}</p>
                    </span>
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* View All Posts Button */}
        <Link href="/blog">
          <button className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] mb-10 text-center mx-auto underline underline-offset-8 text-black-600 font-medium mt-8">
            View All Posts
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OurBlog;
