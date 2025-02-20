import { configureStore } from '@reduxjs/toolkit'
import CartSlice from "../Redux_Toolkit/CartSlice"
export const store = configureStore({
  reducer: {
    cart : CartSlice ,
  },
});
export default store ; 