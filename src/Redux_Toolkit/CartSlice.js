import { createSlice } from '@reduxjs/toolkit'

const CartSlice = createSlice({

    // name initial state reducers 

    name : "cart" ,
    initialState : {

        cart : [] ,
    },
    reducers : {

        addCart:(state,action)=>{

            // find the element 
            const finding = state.cart.find ((item)=>{

               return  item.id == action.payload.id ;

            }) ;
            // increament those which i want 
            if (finding ) {

                state.cart = state.cart.map ((items)=> items.id  === action.payload.id ? {...items,quantity:items.quantity+1} :  items )
                
            }
            else{

                state.cart.push (action.payload) ;
            }

            

        },
        
        removeCart : (state,action)=>{

            state.cart = state.cart.filter ((item)=>{

                 return item.id !== action.payload.id ;
            })
        },
        increament : (state,action)=>{

        state.cart = state.cart.map((item)=>item.id === action.payload.id ? {...item,quantity:item.quantity+1}:item);
        } ,
        decreament : (state,action)=>{

            state.cart = state.cart.map((item)=>item.id === action.payload.id ? {...item,quantity:item.quantity-1}:item);
        } ,

       
    },
});
export const { addCart ,removeCart  , increament , decreament } = CartSlice.actions

export default CartSlice.reducer