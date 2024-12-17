import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <div className="bg-gray-100 py-10 px-6">
      {/* Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto">
        {/* Address Section */}
        <div className="my-auto text-center lg:text-left">
          <p className="text-gray-600">400 University Drive Suite 200 Coral</p>
          <p className="text-gray-600">Gables, FL 33134 USA</p>
        </div>

        {/* Links Section */}
        <div className="text-center lg:text-left">
          <h3 className="text-lg text-gray-500 font-semibold mb-4">Links</h3>
          <ul className="space-y-4">
            <li>
              <Link href="/">
                <p className="font-medium hover:underline">Home</p>
              </Link>
            </li>
            <li>
              <Link href="/shop">
                <p className="font-medium hover:underline">Shop</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p className="font-medium hover:underline">About</p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p className="font-medium hover:underline">Contact</p>
              </Link>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="text-center lg:text-left">
          <h3 className="text-lg text-gray-500 font-semibold mb-4">Help</h3>
          <ul className="space-y-4">
            <li>
              <Link href="/payment-options">
                <p className="font-medium hover:underline">Payment Options</p>
              </Link>
            </li>
            <li>
              <Link href="/returns">
                <p className="font-medium hover:underline">Returns</p>
              </Link>
            </li>
            <li>
              <Link href="/privacy-policies">
                <p className="font-medium hover:underline">Privacy Policies</p>
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="text-center lg:text-left">
          <h3 className="text-lg text-gray-500 font-semibold mb-4">Newsletter</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="font-medium text-sm py-2 border-b-2 border-black bg-gray-100 focus:outline-none w-full"
            />
            <button className="px-6 py-2 font-medium border-b-2 border-black  text-black hover:bg-black hover:text-white">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <hr className="my-6 border-gray-300" />
      <div className="text-center text-gray-600 text-sm md:text-base">
        <p>2022 Meubel House. All rights reserved.</p>
        <p>Copyright © Hadiqa Gohar</p>
      </div>
    </div>
  );
}

export default Footer;
