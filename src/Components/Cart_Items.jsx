
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faMinus,faTrash } from "@fortawesome/free-solid-svg-icons";


const Cart_Items = () => {
  return (
    <div className='flex p-1 bg-slate-900 text-white gap-5 mb-4'>
        <div className=''>
            <img src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5" alt=""  className="w-[50px] h-[50px]"/>
        </div>
        <div>
            <div className="flex justify-between ">
               
                <h1>Name of food </h1>
                <h1 className="right-3 cursor-pointer absolute"><FontAwesomeIcon icon={faTrash} /></h1>

            </div>
            <div className="flex gap-10 mt-2">
                <div>
                    <h1>Price</h1>
                </div>
                <div className="flex  gap-3 absolute right-4">
                    <h1 className="cursor-pointer"><FontAwesomeIcon icon={faPlus} /></h1>
                    <h1>1</h1>
                    <h1 className="cursor-pointer"><FontAwesomeIcon icon={faMinus} /></h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart_Items