import React from 'react';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Image from 'next/image';
import { BsFacebook } from 'react-icons/bs';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const products = [
  {
    id: 1,
    href: "/asgaardsofa/1",
  },
];

function AsgaardSofaId() {
  const images = [
    "/shop/group4/img1.png",
    "/shop/group4/img2.png",
    "/shop/group4/img3.png",
    "/shop/group4/img4.png",
  ]; // Replace with correct image paths
  const sizes = ["L", "XL", "XS"];
  const colors = ["bg-purple-700", "bg-blue-500", "bg-green-400"]; // Add color classes here

  return (
    <div className="max-w-screen-2xl container font-sans mx-auto pb-8 px-4">
      <Header />
      <nav className="text-gray-700 text-sm flex flex-wrap items-center space-x-2 my-4">
        <Link href="/" className="font-bold hover:underline" aria-label="Go to Home">
          Home
        </Link>
        <span className="font-bold">{'>'}</span>
        <Link href="/shop" className="hover:underline" aria-label="Go to Shop">
          Shop
        </Link>
        <span className="font-bold">{'|'}</span>
        <span>Asgaard Sofa</span>
      </nav>

      <div className="flex flex-wrap gap-8 mt-8">
        <div className="flex flex-col md:flex-row gap-8 w-full">
          {/* Left Side: Small Images */}
          <div className="w-full md:w-1/5 flex md:flex-col gap-4">
            {images.map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt={`Sofa Image ${idx + 1}`}
                height={80}
                width={76}
                className="rounded-lg object-cover cursor-pointer hover:scale-105 transition-transform"
              />
            ))}
          </div>

          {/* Center: Big Image */}
          <div className="md:-ml-20 w-full md:w-2/4">
            <Image
              src="/shop/group4/img2.png"
              alt="Main Sofa Image"
              height={391}
              width={481}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          {/* Right Side: Product Details */}
          <div className="w-full md:w-2/5">
            <h3 className="text-2xl font-medium">Asgaard Sofa</h3>
            <p className="text-xl text-gray-500">Rs: 250,000.00</p>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              <span className="text-gray-700 text-sm">(5 Customer Reviews)</span>
            </div>
            <p className="mt-4 text-gray-700 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, ea excepturi.
              Minima adipisci, ratione, aspernatur culpa cum dolor eos optio maiores eius,
              reiciendis earum aut laborum delectus exercitationem velit alias.
            </p>

            {/* Size Options */}
            <div className="mt-4">
              <h4 className="font-semibold">Size</h4>
              <div className="flex gap-2 mt-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className="border rounded-md px-4 py-2 hover:bg-gray-200"
                    aria-label={`Select size ${size}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Options */}
            <div className="mt-4">
              <h4 className="font-semibold">Color</h4>
              <div className="flex gap-2 mt-2">
                {colors.map((color, idx) => (
                  <div
                    key={idx}
                    className={`rounded-full h-5 w-5 ${color}`}
                    aria-label={`Color option ${idx + 1}`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <div className="flex items-center border p-2 gap-4">
                <button aria-label="Decrease quantity">-</button>
                <span>1</span>
                <button aria-label="Increase quantity">+</button>
              </div>
              <button className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90">
                Add To Cart
              </button>
            </div>

            <hr className="my-6" />

            {/* Additional Information */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>SKU:</span>
                <span>SS001</span>
              </div>
              <div className="flex justify-between">
                <span>Category:</span>
                <span>Sofas</span>
              </div>
              <div className="flex justify-between">
                <span>Tags:</span>
                <span>Sofa, Chair, Home, Shop</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span>Share:</span>
                <div className="flex space-x-2">
                  <BsFacebook className="cursor-pointer" size={25} />
                  <FaLinkedin className="cursor-pointer" size={25} />
                  <FaTwitter className="cursor-pointer" size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-6" />

      <div className="mt-8 text-left ">
        <h3 className="md:text-2xl font-medium my-10 flex justify-center space-x-8">
          <span>Description</span>
          <span className="text-gray-400">Additional Information</span>
          <span className="text-gray-400">Reviews [5]</span>
        </h3>
        <p className="text-sm md:text-md md:mx-28">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.

        </p>
        <br />
        <p className="text-sm md:text-md  md:mx-28">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio that boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine-tune the controls to your preferences, while the guitar-influenced leather strap enables easy and stylish travel.

        </p>
      </div>

      <div className="flex flex-col lg:w-[1239px] lg:h-[348px] sm:flex-row gap-8 my-8 mx-auto justify-center px-4">
        <div className="bg-[#FFF9EF] lg:w-[605px] lg:h-[348px] sm:w-[48%] md:w-[45%]  ">
          <Image
            src="/asgaardsofa/1.png"
            alt="Product Image 1"
            width={605}
            height={348}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="bg-[#FFF9EF] lg:w-[605px] lg:h-[348px] sm:w-[48%] md:w-[45%]  ">
          <Image
            src="/asgaardsofa/2.png"
            alt="Product Image 2"
            width={605}
            height={348}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>

     {/* Related Products */}
<div className='mx-auto'>
  <h2 className="text-3xl font-medium my-12 xl:ml-20">Related Products</h2>
  <div className="flex flex-col lg:flex-row justify-center gap-6 lg:mt-4">

    {/* First Product */}
    <div className="flex flex-col text-left w-full sm:w-[287px]">
      <Image
        src='/shop/group1/img1.png'
        alt='Trenton modular sofa_3'
        height={397}
        width={287}
        className="rounded-lg object-cover"
      />
      {/* Text Section */}
      <div className="mt-4">
        <p className="text-sm font-medium">Trenton modular sofa_3</p>
        <h3 className="text-lg font-semibold">Rs. 25,000.00</h3>
      </div>
    </div>

    {/* Second Product */}
    <div className="flex flex-col text-left w-full sm:w-[287px] mt-10 sm:mt-0 md:mt-12">
      <Image
        src='/shop/group1/img2.png'
        alt='Granite dining table with dining chair'
        height={397}
        width={287}
        className="rounded-lg object-cover"
      />
      {/* Text Section */}
      <div className="mt-4">
        <p className="text-sm font-medium mt-10">Granite dining table with dining chair</p>
        <h3 className="text-lg font-semibold">Rs. 25,000.00</h3>
      </div>
    </div>

    {/* Third Product */}
    <div className="flex flex-col text-left w-full sm:w-[287px] mt-10 sm:mt-0">
      <Image
        src='/shop/group1/img3.png'
        alt='Outdoor bar table and stool'
        height={397}
        width={287}
        className="rounded-lg object-cover"
      />
      {/* Text Section */}
      <div className="mt-4">
        <p className="text-sm font-medium">Outdoor bar table and stool</p>
        <h3 className="text-lg font-semibold">Rs. 25,000.00</h3>
      </div>
    </div>

    {/* Fourth Product */}
    <div className="flex flex-col text-left w-full sm:w-[287px] md:mt mt-10 sm:mt-0">
      <Image
        src='/shop/group1/img4.png'
        alt='Plain console with teak'
        height={397}
        width={287}
        className="rounded-lg object-cover"
      />
      {/* Text Section */}
      <div className="mt-4">
        <p className="text-sm font-medium  mt-10">Plain console with teak</p>
        <h3 className="text-lg font-semibold">Rs. 25,000.00</h3>
      </div>
    </div>

  </div>
</div>







    </div>

  );
}

export default AsgaardSofaId;
