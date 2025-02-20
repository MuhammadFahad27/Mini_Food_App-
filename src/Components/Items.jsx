import { useDispatch } from "react-redux";
import { addCart } from "../Redux_Toolkit/CartSlice";

const Items = ({ img, name, price, rating, des ,id}) => {

  


    const dispatch = useDispatch () ; 
  return (
    <div className="text-black bg-slate-900 flex justify-center p-5">
      <div className="w-[250px] h-[350px] p-3 border rounded-md bg-sky-600 flex flex-col justify-between flex-shrink-0">
        <img
          src={img}
          alt={name}
          className="rounded-md hover:scale-95 cursor-pointer duration-500 w-full h-[150px]  "
        />

        <div className="flex justify-between mt-2">
          <h1 className="text-xl">{name}</h1>
          <h3 className="font-semibold">{price}$</h3>
        </div>

        <p className="text-sm text-ellipsis overflow-hidden mt-2">{des}</p>

        <div className="flex justify-between mt-2">
          <h2 className="text-md">
            <span className="text-sm mr-1">⭐</span>{rating}
          </h2>
          <button className="bg-slate-900 text-gray-50 rounded-md px-2 
           py-1 cursor-pointer"
           onClick={()=>{

              dispatch(addCart({id,name,price,rating,quantity:1,img}))

           }}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Items;
