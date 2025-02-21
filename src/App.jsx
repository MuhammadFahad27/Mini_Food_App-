import { Routes,Route } from 'react-router-dom';
import Home from "./Pages/Home.jsx"
import Order from "./Pages/Order.jsx"
import Error from "./Pages/Error.jsx"
import All_Items from './Components/All_Items.jsx';
import Sucesses from './Components/Sucesses.jsx';
import Lunch from './Components/Lunch.jsx';
import BreakFast from './Components/BreakFast.jsx';
import Dinner from './Components/Dinner.jsx';
import Snacks from './Components/Snacks.jsx';
const App = () => {
  return (

    <>
    
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path="/*" element = {<Error/>}/>
          <Route path='/ALL_Items' element={<All_Items/>}/>
          <Route path='/confirm' element={<Sucesses/>}/>
          <Route path='/lunch' element={<Lunch/>}/>
          <Route path='/breakfast' element={<BreakFast/>}/>
          <Route path='/dinner' element={<Dinner/>}/>
          <Route path='/snacks' element={<Snacks/>}/>

        </Routes>
    </>
  )
}

export default App