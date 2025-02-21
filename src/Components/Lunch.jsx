import Items from "./Items";
import FoodData from "../Data/data"
const Lunch = () => {
  return (
        <>
    <div className=''>
        
        <h1 className="text-4xl text-gray-50  mt-8 text-center ">Find Lunch</h1>
    </div>

    <div className="flex flex-wrap gap-10 bg-slate-900 shrink-0 justify-center">


    {
  FoodData.filter((item) => item.category === "Lunch").map((i) => {

   
    return (
      <div key={i.id} className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <Items
          img={i.img}
          name={i.name}
          price={i.price}
          rating={i.rating}
          des={i.desc.slice(0, 80)}
          id={i.id}
        />
      </div>
    );
  })
}

    </div>

      </>
  )
}

export default Lunch