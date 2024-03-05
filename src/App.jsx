import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/navbar";
import Login from "./components/Login/Login";
import SingleProduct from "./components/SingleProduct/SingleProduct";

import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import { CartProvider } from 'react-use-cart';
import Payment from "./components/Payment/Payment";
import Register from "./components/Register/Register";
import ProductCart from "./components/ProductCart/ProductCart";

function App() {
 
  
  return (
    <>
    <CartProvider>
    <Router>
      <NavBar  />
      <Routes>
        <Route path="/" element={<Home  />}></Route>
        {/* <Route path="/profile" element={<Home />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/singleproduct/:id" element={<SingleProduct />}></Route>
        
        <Route path='/cart-page' element={<ShoppingCart/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/products' element={<ProductCart />}/>
      </Routes>
    </Router>
    </CartProvider>
    </>
  );
}

export default App;
