import {useState,useEffect} from "react" ;
import ClipLoader from "react-spinners/ClipLoader";


import { useSelector } from "react-redux";

const Sucesses = () => {

    let cart01 = useSelector((state)=>state.cart.cart) ;
    

    const [order,setOrder] = useState(true) ;
    useEffect(() => {
      
        setTimeout(() => {

            setOrder(false) ;
        }, 3000);
    
   
    }, [])
    
  return (
    <div  className="justify-center items-center flex h-screen">
       <div>

            {order ? <div className="sm:ml-20">
            <ClipLoader color="white" size={240} />
            </div> :

            

                cart01.length > 0 ? <div>
                <h1 className="text-green-500 mb-4 text-4xl sm:text-7xl">Confirmed Order ! </h1>
                <h2 className="text-white text-4xl">Thanks......</h2>
                </div>:
                <div >
                    <h1 className="text-red-500 text-4xl sm:text-5xl
                    lg:7xl">Your Cart is Empty ....</h1>
                </div>
            
            
            }
            
           
           
       </div>
    </div>
  )
}

export default Sucesses