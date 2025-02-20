import Items from "./Items";
import FoodData from "../Data/data.js";
import { useState,useEffect } from "react";

const All_Items = () => {

  let [animation , setAnimation ] = useState("") ;

  

  useEffect(() => {
   
    setAnimation("slide-in-left")
   
  }, [])
  

  return (
    <div className="bg-slate-900">  
      <div className="bg-slate-900">
     

        <h1 className={`text-gray-50 text-6xl mt-4 text-center mb-4    duration-700
        ${animation}`
        }>Hi ! Find The Best Food </h1>
      
    
      </div>
      
          <div className="flex flex-wrap gap-10 bg-slate-900 shrink-0 justify-center">

          
     
            {FoodData.map((item) => {
          return (
          <div key={item.id} className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <Items
            img={item.img}
          name={item.name}
          price={item.price}
          rating={item.rating}
          des={item.desc.slice(0, 80)}
          id = {item.id}
        />
          </div>
      );
    })}
        
      </div>

    </div>
  );
};

export default All_Items;
