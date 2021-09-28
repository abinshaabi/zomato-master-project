import React from 'react'
import Gravatar from 'react-gravatar'
import { FaUserAlt } from "react-icons/fa"

import {AiOutlineArrowLeft} from "react-icons/ai"
import UserDropdown from './UserDropdown'
import { useSelector } from 'react-redux'





const CheckoutNavbar = () => {
    const reduxState = useSelector(globalStore => globalStore.user.user)

    const name = reduxState?.user?.fullName.split(' ')[0]
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
                    <div className="flex flex-row-reverse items-center gap-3">
                        
                            <button  className=" text-gray-600 text-xl hover:text-gray-800">
                                {name}
                            </button>
                            <span className="w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 border  border-gray-300 text-zomato-400 rounded-full">
                                <Gravatar className="w-full rounded-full h-full object-cover" email={reduxState?.user?.email} />
                            </span>
                    </div>
                </div>
            </div>    
                
           </nav>

        </>
    )
}

export default CheckoutNavbar
