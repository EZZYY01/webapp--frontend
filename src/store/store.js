import { configureStore } from "@reduxjs/toolkit";
import adminOrderSlice from "./admin/order-slice";
import adminProductsSlice from "./admin/products-slice";
import authReducer from "./auth-slice";

import commonFeatureSlice from "./common-slice";
import shopAddressSlice from "./shop/address-slice/addresslice";
import shopCartSlice from "./shop/cart-slice/cartslice";
import shopOrderSlice from "./shop/order-slice/orderslice";
import shopProductsSlice from "./shop/products-slice/productslice";
import rentReducer from "./shop/rent-slice"; // Import rentReducer
import shopReviewSlice from "./shop/review-slice/reviewslice";
import shopSearchSlice from "./shop/search-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,

    adminProducts: adminProductsSlice,
    adminOrder: adminOrderSlice,

    shopProducts: shopProductsSlice,
    shopCart: shopCartSlice,
    shopAddress: shopAddressSlice,
    shopOrder: shopOrderSlice,
    shopSearch: shopSearchSlice,
    shopReview: shopReviewSlice,

    commonFeature: commonFeatureSlice,

    rent: rentReducer, // Add the rentReducer to the store
  },
});

export default store;
