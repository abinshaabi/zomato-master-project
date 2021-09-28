import React, { useState } from 'react'
import { FaUserAlt } from "react-icons/fa"
import { HiLocationMarker } from "react-icons/hi"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"
import { RiSearch2Line } from "react-icons/ri"
import {AiOutlineArrowLeft} from "react-icons/ai"

import SignIn from '../Auth/SignIn'
import SignUp from '../Auth/Signup'
import UserDropdown from './UserDropdown'
import { useSelector } from 'react-redux'

const MobileNav = ({ SignIn, SignUp }) => {
    return (
        
        <div className=" p-3 flex w-full items-center justify-between shadow lg:hidden ">
            <AiOutlineArrowLeft />
            <div className="h-5 pl-3">
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" 
                alt="zomato logo"
                className="w-full h-full" />
            </div>
            <div className="flex items-center gap-3">
                <button className="bg-zomato-400 text-white text-sm py-1 px-2 rounded-full ">Use App</button>
                
                {/*<span className="border p-2 border-gray-300 text-zomato-400 rounded-full">
                    <FaUserAlt />
                </span>*/}
                <UserDropdown
                 isOpen={SignIn.openSignIn} setIsOpen={SignIn.setOpenSignIn}
                 isUpOpen={SignUp.openSignUp} setIsUpOpen={SignUp.setOpenSignUp}
                />
            </div>
        </div>
        
    )
}

const MediumNav = () => {
    return (
        <>
            <div className="p-3 hidden md:flex lg:hidden w-full  items-center justify-between gap-4 ">
                
                <div className="w-36">
                    <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" 
                    alt="zomato logo"
                    className="w-full h-full" />
                </div>
                <div className="w-full bg-white shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-1 border-r-2 border-gray-300 pr-2 ">
                        <span className="text-zomato-300 w-6">
                            <HiLocationMarker className="w-full h-full"/>
                        </span>
                        <input className=" w-24 focus:outline-none " type="text" placeholder="Bengaluru" />
                        <IoMdArrowDropdown />
                    </div>
                    <div className="w-full flex items-center gap-2">
                        <RiSearch2Line /> 
                        <input  className="w-full focus:outline-none" type="search" placeholder="Search for restaurant, cuisine or a dish" />
                    </div>
                   
                </div>
                <div className="flex items-center  gap-3">
                    <button className=" text-gray-500 text-xl hover:text-gray-800">
                        Login
                    </button>
                    <button className=" text-gray-500 text-xl hover:text-gray-800">
                        Signup
                    </button>
                </div>
            </div>
        </>
    )

}

const LargeNav = ({ SignIn, SignUp}) => {
    const reduxState = useSelector(globalStore => globalStore.user.user)
    const name = reduxState?.user?.fullName.split(' ')[0]

    function openSignInModal() {
        SignIn.setOpenSignIn(true)
      }

    function openSignUpModal() {
        SignUp.setOpenSignUp(true)
    }

    return (
        <>
            
            <div className="p-3 hidden border-b  lg:flex w-full container px-20 mx-auto items-center justify-between gap-4 ">
                <div className=" flex items-center gap-5 justify-start">
                    <div className="w-40">
                        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" 
                        alt="zomato logo"
                        className="w-full h-full cursor-pointer" />
                    </div>
                    <div className="w-full bg-white shadow-md px-2 py-4 flex items-center gap-3 border border-gray-200 rounded-lg">
                        <div className=" flex items-center gap-1 border-r-2 border-gray-300 pr-2 ">
                            <span className="text-zomato-300 w-6">
                                <HiLocationMarker className="w-full h-full"/>
                            </span>
                            <input className=" w-28 focus:outline-none " type="text" placeholder="Bengaluru" />
                            <IoMdArrowDropdown />
                        </div>
                        <div className="w-96 flex items-center gap-2">
                            <RiSearch2Line /> 
                            <input  className="w-full focus:outline-none" type="search" placeholder="Search for restaurant, cuisine or a dish" />
                        </div>
                    
                    </div>
                </div>
                <div className=" flex items-center  gap-10">
                    {reduxState?.user?.fullName ? (
                        <>
                            <button  className=" text-gray-600 text-xl hover:text-gray-800">
                                {name}
                            </button>
                            <UserDropdown
                            isOpen={SignIn.openSignIn} setIsOpen={SignIn.setOpenSignIn}
                            isUpOpen={SignUp.openSignUp} setIsUpOpen={SignUp.setOpenSignUp}
                            />
                        </>
                    ) : (
                        <>
                            <button onClick={openSignInModal} className=" text-gray-500 text-xl hover:text-gray-800">
                                Login
                            </button>
                            <button onClick={openSignUpModal} className=" text-gray-500 text-xl hover:text-gray-800">
                                Signup
                            </button>
                        </>
                    )}
                </div>
            </div>
        </>
    )

}



const RestaurantNavbar = () => {
    const [openSignIn, setOpenSignIn] = useState(false)
    const [openSignUp, setOpenSignUp] = useState(false)
        
    return (
        <>
            <SignIn isOpen={openSignIn} setIsOpen={setOpenSignIn} />
            <SignUp isOpen={openSignUp} setIsOpen={setOpenSignUp} />
           <nav className=" bg-white flex  w-full items-center">
                <MobileNav SignIn={{openSignIn, setOpenSignIn}} SignUp={{openSignUp, setOpenSignUp}} />      
                    
                <LargeNav SignIn={{openSignIn, setOpenSignIn}}  SignUp={{openSignUp, setOpenSignUp}}/>
                
           </nav>

        </>
    )
}

export default RestaurantNavbar
