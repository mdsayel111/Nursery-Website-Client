import { configureStore } from '@reduxjs/toolkit/react';
import { baseApi } from './apis/base-api';
import productsReducel from './slices/products-slice';
import storage from 'redux-persist/lib/storage';
import cartReducer from './slices/cart-slice';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import latestProductsReducer from './slices/latest-product';
import orderReducer from './slices/order-slice';

// persist config
const persistConfig = {
  key: 'cart',
  storage,
}

// persists cart state
const cartPersistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
  reducer: {
    produts: productsReducel,

    cart: cartPersistedReducer,

    latestProducts: latestProductsReducer,

    order: orderReducer,

    // add base api reduces
    [baseApi.reducerPath]: baseApi.reducer
  },

  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    }).concat(baseApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// persistor
export const persistor = persistStore(store)