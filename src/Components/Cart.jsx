import Cart_Items from "./Cart_Items"
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {

  console.log("hello")
    let [cart,setCart] = useState(false) ;
    let data = useSelector((state) => state.cart.cart)
    
    let total_items = data.reduce((total,curr)=>total+curr.quantity,0) ;
    let price = data.reduce((total,curr)=>total+curr.price*curr.quantity,0) ;
    
  return (
    <div className={`bg-gray-300 w-[100vw] sm:w-[40vw] h-full top-0 right-0 xl:w-[25vw]  fixed  p-1
    overflow-y-auto z-[1000]
    ${cart && "hidden"}`}>

            <div className="flex  justify-between p-3">
                
                <h1 className="text-2xl font-semibold">My Orders </h1>
                <button className={`cursor-pointer border-black text-black  px-1 
                `}
                onClick={()=>{
                    setCart(!cart) ;
                }}>X</button>
            </div>
                
                { data.length > 0 ?
                  data.map((item)=>{

                    return <Cart_Items key={item.id} 
                    name ={item.name}
                    price = {item.price}
                    img = {item.img}
                    quantity = {item.quantity}
                    id = {item.id}/>

                  }) : <h1 className="ml-2 text-red-700 font-bold text-3xl">Cart Is Empty </h1>
                }
                
           
               
            <div className=" mt-auto  mb-1 ml-3">
                <h1>Total Items : {total_items} </h1>
                <h1 className="mb-1">Total Amount : {price}$ </h1>
                <Link to={"/confirm"}>

                  <button className="bg-slate-900 text-white w-[90vw] 
                  sm:w-[33vw] xl:w-[22vw] rounded-md 
                  cursor-pointer  py-1">Check Out </button>
                </Link>
                
            </div>
    </div>
  )
}

export default Cart