// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './features/cartSlice';

// export const makeStore = () => {
//   return configureStore({
//     reducer: {
//       cart: cartReducer,
//     },
//   });
// };



import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { baseApi } from '../services/baseApi';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
