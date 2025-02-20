
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faMinus,faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { removeCart ,increament , decreament } from "../Redux_Toolkit/CartSlice";
const Cart_Items = ({name,price,img,quantity,id}) => {

    const dispatch = useDispatch() ;
  return (
    <div className='flex p-1 bg-slate-900 text-white gap-5 mb-4'>
        <div className=''>
            <img src={img} alt="not found"  className="w-[50px] h-[50px] text-white"/>
        </div>
        <div>
            <div className="flex justify-between ">
               
                <h1>{name}</h1>
                <h1 className="right-3 cursor-pointer absolute"><FontAwesomeIcon icon={faTrash} 
                onClick={()=>{
                
                    dispatch(removeCart({id}))
                }}/></h1>

            </div>
            <div className="flex gap-10 mt-2">
                <div>
                    <h1>{price}$</h1>
                </div>
                <div className="flex  gap-3 absolute right-4">
                    <h1 className="cursor-pointer"><FontAwesomeIcon icon={faPlus} 
                    onClick={()=>{

                         dispatch(increament({id}))
                    }}   /></h1>
                    <h1>{quantity}</h1>
                    <h1 className="cursor-pointer"><FontAwesomeIcon icon={faMinus}
                    onClick={()=>{

                        quantity>1 && dispatch(decreament({id,quantity}))
                    }} /></h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart_Items