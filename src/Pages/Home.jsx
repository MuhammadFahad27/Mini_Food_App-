import ClipLoader from "react-spinners/ClipLoader";
import BarLoader  from "react-spinners/BarLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Cart from "../Components/Cart"
import Catogory_menu from "../Components/Catogory_menu"
import {useState} from "react"
import spin from "../Components/Items"
import { useSelector } from "react-redux";


const Home = () => {

  const [cart,setCart] = useState(false) ;
  const item_quantity = useSelector((state) => state.item.item) 


  
  
 
  
  return (
   
    <>
      
        
        <div className="bg-slate-950 h-screen">

      

          <div>
              <input type="search" autoComplete="off"  className="bg-white
              rounded-md sm:p-2 lg:w-[500px] lg:mt-[200px] lg:ml-[230px] xl:ml-[330px] 2xl:ml-[460px]
              sm:ml-[130px] sm:mt-[200px] sm:w-[300px]
              md:ml-[180px]  md:w-[300px] outline-none  w-100%
              ml-12  mt-16  p-1  " placeholder="find food " autoFocus  />
              <button className="bg-blue-600  text-gray-200 ml-2 px-3 py-1 rounded-md 
              cursor-pointer hover:bg-blue-400 hover:text-black
              sm:py-2 sm:ml-4 sm:px-9">Search </button>
          </div>
          <Catogory_menu/>

            <div className="">


              <h1><FontAwesomeIcon icon={faCartShopping}
              className={`text-white text-4xl absolute right-0 mr-6 mb-6 bottom-0
              cursor-pointer
              ` }
              onClick={()=>{
                setCart(!cart)
              }}/></h1>

                <h1 className="text-red-700 absolute text-xl font-bold right-0 bottom-0 mr-[37px] mb-[36px]">
                  {item_quantity}
                </h1>
            </div>
         
              {cart && <Cart/>}
        
         
        </div>

          
    </>
  )
}

export default Home