import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import AllProducts from "./components/AllProducts/AllProducts";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import { useState } from "react";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {


  const [cart, setCart] = useState([])

  // add to cart
  const AddToCart = (product) => {

    const isProductExist = cart.find((findItem) => findItem.id === product.id)

    if (isProductExist) {

      const upDateCart = cart.map((item) => (
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))

      setCart(upDateCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }])

    }


    console.log(cart)

  }


  const handleInc = (id) => {
    const incQuantity = cart.map((item) => (
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    setCart(incQuantity)

  }


  const handleDec = (id) => {
    const decQuantity = cart.map((item) => (
      item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item))
    setCart(decQuantity)


  }

  // handle remove

  const handleRemove = (id) =>{ 
     const updateByFilter = cart.filter((filterItem)=> filterItem.id !== id)
     setCart(updateByFilter);
  }

  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar cart={cart}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart cart={cart} handleDec={handleDec} handleInc={handleInc} handleRemove={handleRemove} />} />
            <Route path="/allproducts" element={<AllProducts AddToCart={AddToCart} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<SignUp />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
