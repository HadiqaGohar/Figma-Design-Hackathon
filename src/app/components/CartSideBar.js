import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/redux/slices/cartSlice";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AiOutlineDelete, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import React from "react";
import { urlFor } from "../../sanity/lib/image"; // Import Sanity URL transformation function

function CartSidebar() {
  const dispatch = useDispatch();
  const { loading, cartItems, itemsPrice } = useSelector((state) => state.cart);

  const pathname = usePathname();

  const [isOpen, setIsOpen] = React.useState(true);

  const addToCartHandler = (product, qty) => {
    if (product.countInStock > 0 && qty <= product.countInStock) {
      dispatch(addToCart({ ...product, qty }));
    }
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const toggleSidebar = () => {
    setIsOpen(false);
  };

  // Function to get image URL
  const getImageUrl = (item) => {
    // Check if images exist and are valid
    if (item.images && item.images[0]) {
      const imageUrl = urlFor(item.images[0]).url(); // Using Sanity URL transformation
      return imageUrl;
    }
    return "/images/default-product.jpg"; // Return default image if not found
  };

  return (
    <div
      className={
        loading
          ? ""
          : cartItems.length > 0 &&
            (pathname === "/" || pathname.indexOf("/shop/") >= 0)
            ? `fixed top-0 z-10 right-0 h-full w-[280px] shadow-lg border-l border-gray-300 overflow-y-auto bg-white transition-transform ease-in-out duration-300 ${isOpen ? "block" : "hidden"}`
            : "hidden"
      }
    >
      {loading ? (
        <div className="py-5 px-4 text-center">Loading...</div>
      ) : cartItems.length === 0 ? (
        <div className="py-5 px-4 text-center">Your cart is empty</div>
      ) : (
        <>
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-xl text-gray-500 hover:text-gray-700"
            aria-label="Close Cart"
          >
            <AiOutlineClose />
          </button>

          <div className="p-4 flex flex-col border-b border-gray-200">
            <div className="text-lg font-bold">Shopping Cart</div>
          </div>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="p-4 flex flex-col items-center border-b border-gray-200 hover:bg-gray-50 transition-all"
            >
              <Link href={`/shop/${item.id}`} className="flex items-center space-x-4">
                <div className="w-1/2">
                  <Image
                    src={item.image ? urlFor(item.image).width(100).height(100).url() : "/images/default-product.jpg"}
                    alt={item.name || "Product Image"}
                    width={100}
                    height={100}
                    className="p-1 rounded"
                  />
                </div>
                <div className="w-1/2">
                  <div className="text-md font-semibold">{item.name}</div>
                  <div className="text-sm mt-3 text-gray-500">Price: ${item.price}</div>
                  <div className="text-sm mt-3 text-gray-500">
                    Stock: {item.countInStock > 0 ? item.countInStock : "Out of Stock"}
                  </div>
                </div>
              </Link>

              {item.countInStock === 0 && (
                <div className="text-sm text-red-500 mt-2">Out of Stock</div>
              )}

              <div className="flex justify-between items-center mt-3 w-full">
                <div className="flex items-center border p-2 space-x-2 my-2">
                  <button
                    onClick={() => addToCartHandler(item, item.qty > 1 ? item.qty - 1 : 1)}
                    className="bg-gray-200 p-2 hover:bg-gray-300"
                    disabled={item.countInStock === 0}
                  >
                    -
                  </button>
                  <div className="text-lg font-semibold">{item.qty}</div>
                  <button
                    onClick={() => addToCartHandler(item, item.qty + 1)}
                    className="bg-gray-200 p-2 hover:bg-gray-300"
                    disabled={item.countInStock === 0 || item.qty >= item.countInStock}
                  >
                    +
                  </button>
                </div>
                <button
                  className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                  onClick={() => removeFromCartHandler(item.id)}
                  aria-label="Remove Item"
                >
                  <AiOutlineDelete size={20} />
                </button>
              </div>
            </div>
          ))}

          {/* Fixed content at the bottom */}
          <div className="w-[280px] fixed bottom-0 right-0 z-10">
            <div className="p-4 flex flex-col border-gray-200 bg-white">
              <div className="flex justify-between border-b my-5">
                <div className="text-lg font-semibold">Subtotal</div>
                <div className="text-xl font-bold text-yellow-600 mb-4">${itemsPrice}</div>
              </div>
              <div className="flex justify-between w-full gap-4">
                <Link href="/cart" className="w-full text-center py-3 rounded-full border-2 text-black border-black transition-all hover:bg-black hover:text-white">
                  View Cart
                </Link>
                {/* <Link href="/checkout" className="w-full text-center py-3 rounded-full border-2 text-black border-black transition-all hover:bg-black hover:text-white">
                  Checkout
                </Link> */}
              </div>
            </div>
          </div>

        </>
      )}
    </div>
  );
}

export default CartSidebar;
