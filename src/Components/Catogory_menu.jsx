
import { Link } from "react-router-dom"
import { useState ,useEffect} from "react";
import { useDispatch } from "react-redux";
import {setCatogory} from "../Redux_Toolkit/CatogorySlice"
import FoodData from "../Data/data";
const Catogory_menu = () => {

  const dispatch = useDispatch() ;
  
 

    

      const cat = ()=>{

        const unique = [...new Set(FoodData.map((item)=> item.category ))];
        dispatch(setCatogory(unique)) ;
       
        
    
      }

      useEffect(() => {
        console.log("running");
        
        cat() ;
      },[])
      
    
    
    


  return (
    <div>
        <div>
            <h3 className="text-gray-300 ml-12 mb-2 mt-2 
            sm:ml-[130px]
            md:ml-[190px] lg:ml-[230px]
            xl:ml-[330px]
            2xl:ml-[460px]" >Find the best Food </h3>
        </div>
        <div className="sm:ml-[120px] sm:mt-4 md:ml-[200px] lg:ml-[220px] xl:flex 
        xl:ml-[330px] xl:gap-7
        2xl:ml-[460px]">
           
           <Link  to={"ALL_Items"} >

                  
             <button className="bg-gray-500 text-gray-300 ml-12  w-[260px] py-1 hover:text-black rounded-sm cursor-pointer  mb-3
             sm:w-[300px] lg:w-[450px]
             xl:w-[100px] xl:ml-0 ">All</button> 

           </Link>
           
            <Link to={"lunch"}>
              <button className="bg-gray-500 text-gray-300 ml-12  w-[260px] py-1 hover:text-black rounded-sm cursor-pointer  mb-3
             sm:w-[300px] lg:w-[450px]
             xl:w-[100px] xl:ml-0 ">Lunch</button> 
            </Link>
            <Link to={"breakfast"}>

            <button className="bg-gray-500 text-gray-300 ml-12  w-[260px] py-1  hover:text-black rounded-sm cursor-pointer  mb-3
            sm:w-[300px] lg:w-[450px] xl:w-[100px] xl:ml-0">Break Fast</button>
                
            </Link>
            <Link to={"dinner"}>
              <button className="bg-gray-500 text-gray-300 ml-12  w-[260px] py-1 hover:text-black rounded-sm cursor-pointer  mb-3
              sm:w-[300px] lg:w-[450px] xl:w-[100px] xl:ml-0">Dinner</button>
            </Link>
           <Link to={"snacks"}>

            <button className="bg-gray-500 text-gray-300 ml-12  w-[260px] py-1 hover:text-black rounded-sm cursor-pointer  mb-3
            sm:w-[300px] lg:w-[450px] xl:w-[100px]
            xl:ml-0">Snacks</button>
           </Link>
        </div>
    </div>
  )
}

export default Catogory_menu