import Cart_Items from "./Cart_Items"
import { useState } from "react";

const Cart = () => {
    let [cart,setCart] = useState(false) ;
  return (
    <div className={`bg-gray-300 w-[100vw] sm:w-[40vw] h-full top-0 right-0 xl:w-[25vw]  fixed  p-1
    overflow-y-auto
    ${cart && "hidden"}`}>

            <div className="flex  justify-between p-3">
                
                <h1 className="text-2xl font-semibold">My Orders </h1>
                <button className={`cursor-pointer border-black text-black  px-1 
                `}
                onClick={()=>{
                    setCart(!cart) ;
                }}>X</button>
            </div>
            
            <Cart_Items/>
            
            
           
            
           
               
            <div className=" mt-auto  mb-1 ml-3">
                <h1>Items : </h1>
                <h1 className="mb-1">Total Amount : </h1>
                <button className="bg-slate-900 text-white w-[90vw] 
                sm:w-[33vw] xl:w-[22vw] rounded-md 
                cursor-pointer  py-1">Check Out </button>
            </div>
    </div>
  )
}

export default Cart