import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import categoriesReducer from "./categories/categoriesSlice";
import productsReducer from "./products/productsSlice";
import authReducer from "./auth/authSlice";
import ordersReducer from "./orders/ordersSlice";
import userReducer from "./user/userSlice";

export default combineReducers({
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    auth: authReducer,
    orders: ordersReducer,
    user: userReducer
})