import { Routes,Route } from 'react-router-dom';
import Home from "./Pages/Home.jsx"
import Order from "./Pages/Order.jsx"
import Error from "./Pages/Error.jsx"
import All_Items from './Components/All_Items.jsx';
const App = () => {
  return (

    <>
    
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path="/*" element = {<Error/>}/>
          <Route path='/ALL_Items' element={<All_Items/>}/>
        </Routes>
    </>
  )
}

export default App