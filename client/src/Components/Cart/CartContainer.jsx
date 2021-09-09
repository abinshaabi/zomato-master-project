import React, { useState } from 'react'
import {IoMdArrowDropup, IoMdArrowDropright} from 'react-icons/io'
import {IoCloseSharp} from 'react-icons/io5'

import FoodItem from './FoodItem'

const CartSm = ({toggle}) => {
    return(<>
        <div className="p-2 md:hidden flex items-center justify-between" style={{boxShadow: " 0px -1px 2px #a9b2ae"}}>
        <div className="flex flex-col items-start font-semibold" >
          <small className="flex items-center gap-1" onClick={toggle} >
            1 ITEM <IoMdArrowDropup />
          </small>
          <h4>
            ₹250
            <sub>(plus tax)</sub>
          </h4>
        </div>
        <button
          
          className="flex items-center gap-1 bg-zomato-400 px-4 py-2 text-white rounded-lg"
        >
          Continue <IoMdArrowDropright />
        </button>
      </div>
    </>)
}

const CartLg = ({toggle}) => {
    return(<>
        <div className="p-2 hidden md:flex items-center justify-between container px-20 mx-auto">
            <div className="flex gap-5 text-xl items-start">
            <span
                className="border bg-white border-gray-300 p-1 rounded"
                onClick={toggle}
            >
                <IoMdArrowDropup />
            </span>
            <h4>Your Order (1)</h4>
            </div>
            <div className="flex items-center md:gap-3 lg:gap-10">
            <h4 className="text-xl">
                Subtotal:₹ 250.00
                
            </h4>
            <button
                 
                className="flex items-center text-lg h-10 font-light gap-1 bg-zomato-400 px-4 lg:px-6 py-2 text-white rounded-lg"
            >
                Continue <IoMdArrowDropright />
            </button>
            </div>
        </div>
    </>)
}

const CartContainer = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleCart = () => setIsOpen((prev) => !prev)
    const closeCart = () => setIsOpen(false)

    return (<>
        {isOpen && (
            <div className="fixed w-full overflow-y-scroll h-48 bg-white  z-10 p-2 bottom-16  px-3">
              <div className="flex items-center justify-between md:px-20">
                <h3 className="text-xl md:text-2xl font-semibold">Your Orders</h3>
                <IoCloseSharp onClick={closeCart} className="md:w-6 md:h-6" />
              </div>
              <hr className="my-2" />

              <div className="flex flex-col gap-2 md:px-20">
                
                  <FoodItem  />
                  <FoodItem  />
                  <FoodItem  />
                  <FoodItem  />
                
              </div>
            </div>
          )}
        
        <div className="fixed w-full bg-white z-10  bottom-0">
            <CartSm toggle={toggleCart}/>
            <CartLg toggle={toggleCart}/>
            
        </div>
    </>)
}

export default CartContainer
