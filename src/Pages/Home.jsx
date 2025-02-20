
import Cart from "../Components/Cart"
import Catogory_menu from "../Components/Catogory_menu"


const Home = () => {


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
          <Cart/>
       

         
        </div>
    </>
  )
}

export default Home