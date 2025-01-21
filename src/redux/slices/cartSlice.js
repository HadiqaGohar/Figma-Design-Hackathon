import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie"; // Correctly import Cookies

// Initialize cart state from Cookies if available, otherwise use default state
const initialState = Cookies.get("cart")
    ? { ...JSON.parse(Cookies.get("cart")), loading: true }
    : {
        loading: true,
        cartItems: [],
        shippingAddress: {},
        paymentMethod: '',

        itemsPrice: 0,
        shippingPrice: 0,
        taxPrice: 0,
        totalPrice: 0,
    };

// Utility function to round numbers to two decimal places
const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
};

// Define the cart slice
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x.id === item.id);

            if (existItem) {
                // Update quantity or other item details if it already exists
                state.cartItems = state.cartItems.map((x) =>
                    x.id === existItem.id ? item : x
                );
            } else {
                // Add new item to the cart
                state.cartItems = [...state.cartItems, item];
            }

            // Recalculate prices
            state.itemsPrice = addDecimals(
                state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
            );
            state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 100);
            state.taxPrice = addDecimals(Number(0.15 * state.itemsPrice));
            state.totalPrice = addDecimals(
                Number(state.itemsPrice) +
                Number(state.shippingPrice) +
                Number(state.taxPrice)
            );

            // Save updated cart state to Cookies
            Cookies.set("cart", JSON.stringify(state));
        },
        removeFromCart: (state, action) => {
            // Remove item by filtering out the item with matching ID
            state.cartItems = state.cartItems.filter((x) => x.id !== action.payload);

            // Recalculate prices
            state.itemsPrice = addDecimals(
                state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
            );
            state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 100);
            state.taxPrice = addDecimals(Number(0.15 * state.itemsPrice));
            state.totalPrice = addDecimals(
                Number(state.itemsPrice) +
                Number(state.shippingPrice) +
                Number(state.taxPrice)
            );

            // Save updated cart state to Cookies
            Cookies.set("cart", JSON.stringify(state));
        },


        saveShippingAddress: (state, action) => {
            state.shippingAddress = action.payload
            Cookies.set('cart', JSON.stringify(state))
        },

        savePaymentMethod: (state, action) => {
            state.paymentMethod = action.payload
            Cookies.set('cart', JSON.stringify(state))
        },


        hideLoading: (state) => {
            // Toggle loading state to false
            state.loading = false;
        },
    },
});

// Export actions and reducer
export const { addToCart, removeFromCart, saveShippingAddress, savePaymentMethod, hideLoading } = cartSlice.actions;
export default cartSlice.reducer;
