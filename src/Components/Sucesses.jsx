import {useState,useEffect} from "react" ;
import ClipLoader from "react-spinners/ClipLoader";
const Sucesses = () => {

    const [order,setOrder] = useState(true) ;
    useEffect(() => {
      
        setTimeout(() => {

            setOrder(false) ;
        }, 3000);
    
   
    }, [])
    
  return (
    <div  className="justify-center items-center flex h-screen">
       <div>

            {order?<div className="sm:ml-40">
            <ClipLoader color="white" size={240} />
            </div>:
            <div>
                <h1 className="text-green-500 mb-4 text-4xl sm:text-7xl">Confirmed Order ! </h1>
                <h2 className="text-white text-4xl">Thanks......</h2>
            </div>}
       </div>
    </div>
  )
}

export default Sucesses