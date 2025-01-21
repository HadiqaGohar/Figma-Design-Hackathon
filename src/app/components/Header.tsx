'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'; // Import icons for menu toggle
import { useSelector } from 'react-redux';
import { RiShoppingBag4Fill } from 'react-icons/ri';
import { usePathname } from 'next/navigation';
// import { RootState } from '@/redux/store';


interface CartState {
    loading: boolean;
    cartItems: any[]; // Replace 'any' with a more specific type if possible
    wishlistItems : any[]
  }
  
  interface RootState {
    cart: CartState;
    wishlist : CartState
  }
  

function Header() {
    // ................ Redux ...................
    // const { loading, cartItems } = useSelector((state) => state.cart);
    const { loading, cartItems } = useSelector((state: RootState) => state.cart);

    const pathname = usePathname();

    // Calculate total items in the wishlist

    const { wishlistItems } = useSelector((state : RootState) => state.wishlist); // Accessing wishlist items

    const wishlistCount = wishlistItems ? wishlistItems.length : 0;







    // ...........................................

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div className="flex justify-between items-center mx-auto max-w-screen-2xl p-4">
                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-2xl"
                    aria-label="Toggle Mobile Menu"
                >
                    {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
                </button>

                {/* Navigation Links for Desktop */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-16 md:ml-[400px] font-medium">
                        <li>
                            <Link href="/" aria-label="Navigate to Home" className="hover:underline">Home</Link>
                        </li>
                        <li>
                            <Link href="/shop" aria-label="Navigate to Shop" className="hover:underline">Shop</Link>
                        </li>
                        <li>
                            <Link href="/blog" aria-label="Navigate to Blog" className="hover:underline">Blog</Link>
                        </li>
                        <li>
                            <Link href="/contact" aria-label="Navigate to Contact" className="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </nav>

                {/* Icons */}
                <div className="flex gap-3 md:space-x-12 md:mr-32 items-center">
                    <Link href='/myaccount'>
                        <FaRegUser aria-label="User Profile" size={20} />
                    </Link>
                    <Link href='/search'>
                        <FiSearch aria-label="Search" size={22} />
                    </Link>
                    <div className="relative">
                        <Link href="/wishlist" className="relative">
                            <IoMdHeartEmpty aria-label="Favorites" size={25} />
                        </Link>

                        <span
                            className={`absolute top-0 right-0 left-3 -mt-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center ${wishlistCount > 0 ? "" : "hidden"
                                }`}
                        >
                            {loading ? "" : wishlistCount}
                        </span>
                    </div>


                    <div className="relative">
                        <Link href='/cart'>
                            <div className="flex items-center">
                                <AiOutlineShoppingCart size={25} />
                            </div>
                            <span className="absolute top-0 right-0 left-3 -mt-1  bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                {loading ? '' : cartItems.reduce((a, c) => a + c.qty, 0)}
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (Visible when isMenuOpen is true) */}
            <nav
                className={`md:hidden fixed top-0 left-0 w-full h-full bg-[#fbebb5] z-20 transition-transform duration-300 ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <button
                        onClick={toggleMenu}
                        className="text-2xl"
                        aria-label="Close Mobile Menu"
                    >
                        <HiOutlineX />
                    </button>
                </div>
                <ul className="flex flex-col items-center font-bold space-y-6 py-8">
                    <li>
                        <Link href="/" aria-label="Navigate to Home" className="hover:underline">Home</Link>
                    </li>
                    <li>
                        <Link href="/shop" aria-label="Navigate to Shop" className="hover:underline">Shop</Link>
                    </li>
                    <li>
                        <Link href="/blog" aria-label="Navigate to Blog" className="hover:underline">Blog</Link>
                    </li>
                    <li>
                        <Link href="/contact" aria-label="Navigate to Contact" className="hover:underline">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

