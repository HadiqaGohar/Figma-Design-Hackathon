import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <div className="bg-gray-100 py-10 px-6">
      {/* Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-screen-xl mx-auto">
        {/* Address Section */}
        <div className='my-auto'>
          {/* <h3 className="text-lg font-semibold mb-4">Address</h3> */}
          <p className="text-gray-600">400 University Drive Suite 200 Coral</p>
          <p className="text-gray-600">Gables, FL 33134 USA</p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-lg text-gray-500 font-semibold mb-4">Links</h3>
          <ul className="space-y-8 text-lg">
            <li className=''>
              <Link href="/">
                <p className="font-medium ">Home</p>
              </Link>
            </li>
            <li>
              <Link href="/shop">
                <p className="font-medium ">Shop</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p className="font-medium ">About</p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p className="font-medium ">Contact</p>
              </Link>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-lg text-gray-500 font-semibold mb-4">Help</h3>
          <ul className="space-y-8 text-lg">
            <li>
              <Link href="/payment-options">
                <p className="font-medium ">Payment Options</p>
              </Link>
            </li>
            <li>
              <Link href="/returns">
                <p className="font-medium ">Returns</p>
              </Link>
            </li>
            <li>
              <Link href="/privacy-policies">
                <p className="font-medium ">Privacy Policies</p>
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
  <h3 className="text-lg text-gray-500 font-semibold mb-4">Newsletter</h3>
  <div className="flex flex-wrap md:flex-nowrap gap-2">
    <input
      type="email"
      placeholder="Enter Your Email Address"
      className="font-medium flex-1 px-4 py-2 bg-gray-100 border-b-2 border-black focus:ring-2 focus:ring-black focus:outline-none"
    />
    <button className="px-6 py-2 font-medium  text-black border-b-2 border-black hover:no-underline">
      Subscribe
    </button>
  </div>
</div>
      </div>

      {/* Footer Bottom */}
      <hr className="my-6 border-gray-300" />
      <p className="text-center text-gray-600">2022 Meubel House. All rights reserved.</p>
    </div>
  );
}

export default Footer;
