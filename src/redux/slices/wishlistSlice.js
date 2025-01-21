import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

// Initialize wishlist state from Cookies or default to an empty array
const initialState = Cookies.get("wishlist")
  ? JSON.parse(Cookies.get("wishlist"))
  : {
      wishlistItems: [],
    };

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const item = action.payload;
      const existItem = state.wishlistItems.find((x) => x.id === item.id);

      if (!existItem) {
        state.wishlistItems = [...state.wishlistItems, item];
        Cookies.set("wishlist", JSON.stringify(state));
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter((x) => x.id !== action.payload);
      Cookies.set("wishlist", JSON.stringify(state));
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
