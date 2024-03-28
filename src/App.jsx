import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import AllProducts from "./components/AllProducts/AllProducts";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import { useEffect, useState } from "react";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import toast,{ Toaster } from 'react-hot-toast';
import { auth } from './FirebaseAuth/FirebaseAuth';
import { onAuthStateChanged } from 'firebase/auth';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
function App() {


  const [cart, setCart] = useState([])

  const [promocode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const [invalid, setInvalid] = useState("Invalid Promocode");

  const [userName, setUserName] = useState("")

  // add to cart
  const AddToCart = (product) => {

    const isProductExist = cart.find((findItem) => findItem.id === product.id)

    if (isProductExist) {

      const upDateCart = cart.map((item) => (
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))

      setCart(upDateCart);
      toast.success("Product added to cart")
    } else {
      setCart([...cart, { ...product, quantity: 1 }])

    }

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

  const handleRemove = (id) => {
    const updateByFilter = cart.filter((filterItem) => filterItem.id !== id)
    setCart(updateByFilter);
  }

  // calculate total price

  const getTotalPrice = () => {
    const totalPrice = cart.reduce((total, cartReduceItem) => {
      return total + cartReduceItem.price * cartReduceItem.quantity;
    }, 0)
    return totalPrice - discount;
  }

  // promocode


  const applyPromoCode = () => {
    if (promocode === "DISCOUNT10") {
      setDiscount(getTotalPrice() * 0.1)
      setPromoCode("")
    } else {
      setInvalid(invalid)
    }
  }


  // username display

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("")
      }
    })

  }, [])

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar cart={cart} userName={userName} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart cart={cart} handleDec={handleDec} handleInc={handleInc} handleRemove={handleRemove} getTotalPrice={getTotalPrice} applyPromoCode={applyPromoCode} promocode={promocode} setPromoCode={setPromoCode} invalid={invalid} />} />
            <Route path="/allproducts" element={<AllProducts AddToCart={AddToCart} />} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            
            <Route path="/singleProduct/:productId" element={<SingleProduct AddToCart={AddToCart} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<SignUp />} />
          </Routes>
          <Footer />
          <Toaster />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
