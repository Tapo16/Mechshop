import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = ({ cart, userName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleChange = () => {

    isOpen === false ? setIsOpen(true) : setIsOpen(false);
  };

  return (
    <>
      <div>
        <header className="bg-white border-b border-gray-200 relative">
          <div className="container mx-auto flex justify-between p-5 items-center">
            <div>
              <Link to='/'>
                <h3 className="font-bold text-2xl">
                  Amaxon<span>Shop</span>
                </h3>
              </Link>
            </div>

            <div className="hidden md:block">
              <ul className="flex items-center text-lg justify-center font-semibold">
                <Link to="/">
                  <li className="mr-5 hover:text-gray-900 cursor-pointer">Home</li>
                </Link>
                <Link to="/allproducts">
                  <li className="mr-5 hover:text-gray-900 cursor-pointer">All Products</li>
                </Link>
                <Link to="/about">
                  <li className="mr-5 hover:text-gray-900 cursor-pointer">About</li>
                </Link>
                <Link to="/Contact">
                <li className="mr-5 hover:text-gray-900 cursor-pointer">Contact</li>
                </Link>
              </ul>
            </div>

            {isOpen ? (
              <div>
                <ul className="flex flex-col gap-10 text-2xl absolute top-[73px] left-0 h-screen w-full z-10  bg-[#807575] text-white items-center justify-center font-semibold">
                  <Link to="/">
                    <li className="mt-5 hover:text-gray-900 cursor-pointer">Home</li>
                  </Link>
                  <li className="mt-5 hover:text-gray-900 cursor-pointer">All Products</li>
                  <li className="mt-5 hover:text-gray-900 cursor-pointer">Mens</li>
                  <li className="mt-5 hover:text-gray-900 cursor-pointer">Kids</li>
                </ul>
                <button className="absolute top-[75px] z-10 right-0 text-white py-2 px-4 cursor-pointer"><RxCross2 size={30} onClick={ToggleChange} /></button>
              </div>
            ) : (
              ""
            )}

            <div className="flex justify-center items-center gap-3">
              <Link to="/login">
                <button className="bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base font-semibold">
                  Login
                </button>
              </Link>
              <span>{userName}</span>

              <Link to='/cart'>
                <button>
                  <span className="text-[red]">{cart.length}</span>
                  <FaCartShopping size={25} />
                </button>
              </Link>
              {
                isOpen ? "" : <button className="md:hidden" onClick={ToggleChange}>
                  <GiHamburgerMenu size={25} />
                </button>
              }

            </div>
          </div>
        </header>
      </div>
    </>
  )
}

export default Navbar;

