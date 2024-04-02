import { Route, Routes } from "react-router-dom"
import Red from "./Red";
import Blue from "./Blue";
import Home from "./home";
import Yellow from "./Yellow";



const MainRoutes = () => {

  return(
<div id="main-section">
          <Routes>
            <Route path='/blue' element={<Blue></Blue>}></Route>
            <Route path='/red' element={<Red></Red>}></Route>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path="yellow" element={<Yellow></Yellow>}></Route>
          </Routes>
             
          
        </div>


  )
}

export default MainRoutes;