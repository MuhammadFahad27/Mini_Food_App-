import { createSlice } from '@reduxjs/toolkit'

const ItemSlice = createSlice({

    name : "item",
    initialState:{

        item : 0 
    },
    reducers : {

        setItem : (state)=>{

                state.item = state.item + 1 ;
        }

    } ,



}

) ;

export const { setItem} = ItemSlice.actions

export default ItemSlice.reducer