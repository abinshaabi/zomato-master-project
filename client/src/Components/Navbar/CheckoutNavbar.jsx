import React from 'react'
import { FaUserAlt } from "react-icons/fa"

import {AiOutlineArrowLeft} from "react-icons/ai"





const CheckoutNavbar = () => {
    return (
        <>
           
           <nav className=" bg-white flex   items-center border-b">
            <div className="container px-4 mx-auto lg:px-20  ">
                <div className=" p-3 flex w-full items-center justify-between    ">
                    <AiOutlineArrowLeft />
                    <div className="h-5 pl-3">
                        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" 
                        alt="zomato logo"
                        className="w-full h-full" />
                    </div>
                    <div className="flex items-center gap-3">
                        
                        <span className="fle items-center gap-2 border p-2 border-gray-300 text-zomato-400 rounded-full">
                            <FaUserAlt /> 
                        </span>
                        Pavan
                    </div>
                </div>
            </div>    
                
           </nav>

        </>
    )
}

export default CheckoutNavbar
