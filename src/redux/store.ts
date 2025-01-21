
import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from './slices/cartSlice'
// import wishlistSliceReducer from './slices/wishlistSlice'; // Import the wishlist reducer
import wishlistReducer from './slices/wishlistSlice';

// Configure the Redux store
export const store = configureStore({
    reducer: {
        cart: cartSliceReducer,
        // wishlist: wishlistSliceReducer, // Add the wishlist slice to the store
        wishlist: wishlistReducer,
   
        
    },
    devTools: process.env.NODE_ENV !== 'production',
});

// Define the RootState type for your Redux store
export type RootState = ReturnType<typeof store.getState>; // Inferred type from the store's state

// Optionally export the dispatch type as well
export type AppDispatch = typeof store.dispatch;
