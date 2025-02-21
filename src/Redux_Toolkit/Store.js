import { configureStore } from '@reduxjs/toolkit'
import CartSlice from "../Redux_Toolkit/CartSlice"
import ItemSlice from "../Redux_Toolkit/ItemSlice"
export const store = configureStore({
  reducer: {
    cart : CartSlice ,
    item :ItemSlice ,
    
  },
});
export default store ; 