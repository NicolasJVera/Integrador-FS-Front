import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { PERSIST, PURGE } from 'redux-persist';

import cartReducer from "./slices/cart/cartSlice";
import categoriesReducer from "./slices/categories/categoriesSlice";
import productsReducer from "./slices/products/productsSlice";
import authReducer from "./slices/auth/authSlice";
import ordersReducer from "./slices/orders/ordersSlice";
import userReducer from "./slices/user/userSlice";

const rootReducer = combineReducers({
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    auth: authReducer,
    orders: ordersReducer,
    user: userReducer
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart", "auth", "orders"],
}

// Middleware personalizado para manejar la acción de logout
const authMiddleware = (store) => (next) => (action) => {
    if (action.type === 'auth/logout') {
        next(action);
        storage.removeItem('persist:root');
        return;
    }
    return next(action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [PERSIST, PURGE],
            },
        }).concat(authMiddleware),
});

export const persistor = persistStore(store);