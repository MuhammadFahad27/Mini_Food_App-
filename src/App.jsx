import { Routes,Route } from 'react-router-dom';
import Home from "./Pages/Home.jsx"
import Order from "./Pages/Order.jsx"
import Error from "./Pages/Error.jsx"
import All_Items from './Components/All_Items.jsx';
import Sucesses from './Components/Sucesses.jsx';
const App = () => {
  return (

    <>
    
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path="/*" element = {<Error/>}/>
          <Route path='/ALL_Items' element={<All_Items/>}/>
          <Route path='/confirm' element={<Sucesses/>}/>
        </Routes>
    </>
  )
}

export default App