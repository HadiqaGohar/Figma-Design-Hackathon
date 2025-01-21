'use client'

import { hideLoading } from '@/redux/slices/cartSlice'
import { useDispatch } from 'react-redux'
import CartSidebar from './CartSideBar'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { usePathname } from 'next/navigation'
import { Toaster } from 'react-hot-toast'

function App({ children }) {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(hideLoading())
  }, [dispatch])

  const { cartItems, loading } = useSelector((state) => state.cart)

  // const { wishlistItems } = useSelector((state) => state.wishlist)

  const pathname = usePathname()

  // Condition to check if the sidebar should be displayed
  const showSidebar = cartItems.length > 0 && (pathname === '' || pathname.indexOf('/shop/') >= 0)

  return (
    <div>
      <div className={`${loading
        ? ''
        : showSidebar
        // 'mr-32'
          ? ''  // Add margin when the sidebar is visible
          : ''
        }`}>
        {/* <TopText/> */}
        {/* <Header /> */}
        <main>{children}
          {/* Conditionally render CartSidebar based on showSidebar */}


        </main>
        <div className={showSidebar ? '' : 'hidden'}>
        <CartSidebar />
      </div>
      </div>
      

      {/* <Footer /> */}
      <Toaster
        position='bottom-right'
        toastOptions={{
          style: {
            background: "#000000",
            color: "#ffffff",
          }
        }}
      />
    </div>
  )
}

export default App
