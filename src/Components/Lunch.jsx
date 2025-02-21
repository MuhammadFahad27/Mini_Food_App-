import Items from "./Items";
import FoodData from "../Data/data"
const Lunch = () => {
  return (
        <>
    <div className=''>
        
        <h1 className="text-4xl text-gray-50  mt-8 text-center ">Find Lunch</h1>
    </div>

   
      {

        FoodData.filter((item)=>  item.category === "Lunch").map((i)=>{

          return <Items 
            key={i.id}
            img={i.img}
            name={i.name}
            price={i.price}
            rating={i.rating}
            des={i.desc.slice(0, 80)}
            id = {i.id}
            />

        })
      }
      </>
  )
}

export default Lunch