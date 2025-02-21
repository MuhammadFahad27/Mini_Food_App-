import { configureStore } from '@reduxjs/toolkit'
import CartSlice from "../Redux_Toolkit/CartSlice"
import ItemSlice from "../Redux_Toolkit/ItemSlice"
import CatogorySlice from "../Redux_Toolkit/CatogorySlice"


export const store = configureStore({
  reducer: {
    cart : CartSlice ,
    item :ItemSlice ,
    catogory : CatogorySlice ,
    
  },
});
export default store ; 