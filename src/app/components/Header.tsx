'use client';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import { SignedIn, SignedOut, useClerk, UserButton } from '@clerk/nextjs';


interface CartState {
    loading: boolean;
    cartItems: any[];
    wishlistItems: any[];
}

interface RootState {
    cart: CartState;
    wishlist: CartState;
}

function Header() {
    const { openSignIn } = useClerk(); // Use Clerk's hook to check if signed in and open sign-in modal


    const handleSignInClick = () => {
        openSignIn();
    };

    const { loading, cartItems } = useSelector((state: RootState) => state.cart);
    const pathname = usePathname();
    const { wishlistItems } = useSelector((state: RootState) => state.wishlist);
    const wishlistCount = wishlistItems ? wishlistItems.length : 0;

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const headerRef = useRef<HTMLHeadElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            ref={headerRef}
            className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
        >
            <div className="flex justify-between items-center mx-auto max-w-screen-2xl p-4">
                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden text-2xl"
                    aria-label="Toggle Mobile Menu"
                >
                    {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
                </button>

                {/* Navigation Links for Desktop */}
                <nav className="hidden lg:block">
                    <ul className="flex space-x-8 lg:space-x-16  md:ml-[400px] font-medium">
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
                <div className="flex ml-8 md-ml-0 space-x-3 xl:space-x-12 lg:mr-32 items-center">

                    {/* <Link href='/search'>
                        <FiSearch aria-label="Search" size={22} />
                    </Link> */}
                    <div className="relative ">
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
                    <div className=" transition-colors cursor-pointer">
                        <button
                            onClick={handleSignInClick}
                            className="transition-colors cursor-pointer"
                        >
                            <span className="flex items-center">
                                <SignedOut>
                                    {/* Show icon if signed out */}
                                    <FaRegUser  aria-label="User Profile" size={20} />
                                </SignedOut>

                                <SignedIn>
                                    {/* Hide the icon once signed in and show the UserButton */}
                                    <UserButton />
                                </SignedIn>
                            </span>
                        </button>
                        {/* ... */}
                    </div>
                    {/* <Link href='/myaccount'>
                        <FaRegUser aria-label="User Profile" size={20} />
                    </Link> */}
                </div>
            </div>

            {/* Mobile Menu (Visible when isMenuOpen is true) */}
            <nav
                className={`lg:hidden fixed top-0 left-0 w-72 border-r-2 h-full bg-[#fbebb5] z-20 transition-transform duration-300 ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}
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
                        <Link href="/" aria-label="Navigate to Home" className="hover:underline ">Home</Link>
                    </li>
                    <li>
                        <Link href="/shop" aria-label="Navigate to Shop" className="hover:underline ">Shop</Link>
                    </li>
                    <li>
                        <Link href="/blog" aria-label="Navigate to Blog" className="hover:underline ">Blog</Link>
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
