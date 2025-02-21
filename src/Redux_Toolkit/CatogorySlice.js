import { createSlice } from '@reduxjs/toolkit'
export const CatogorySlice = createSlice({

    name : "catogory" ,
    initialState:{

        catogory : []
    } ,
    reducers : {

        setCatogory : (state,action)=>{

            state.catogory =  action.payload  ; 

        }
    }

    
});
export const { setCatogory} = CatogorySlice.actions

export default CatogorySlice.reducer