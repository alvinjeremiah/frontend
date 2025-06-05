import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignup';
import Workshop from './Pages/Workshop';
import Advisory from './Pages/Advisory';
import Artist from './Pages/Artist';
import Signup from './Pages/Signup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/paintings' element={<ShopCategory category="painting"/>}/>
          <Route path='/drawing' element={<ShopCategory category="drawing"/>}/>
          <Route path='/workshop' element={<Workshop/>}/>
          <Route path='/advisory' element={<Advisory/>}/>
          <Route path='/artists' element={<Artist/>}/>
          <Route path="/product" element={<Product/>}>
            <Route path=':productID' element={<Product/>}/> 
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignUp/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
