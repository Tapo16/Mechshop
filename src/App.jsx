import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import AllProducts from "./components/AllProducts/AllProducts";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/allproducts" element={<AllProducts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<SignUp/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
