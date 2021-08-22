import React from 'react'
import { FaUserAlt } from "react-icons/fa"
import { HiLocationMarker } from "react-icons/hi"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"
import { RiSearch2Line } from "react-icons/ri"

const MobileNav = () => {
    return (
        
        <div className=" p-3 flex w-full items-center justify-between shadow lg:hidden ">
            <div className="h-5 pl-3">
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" 
                alt="zomato logo"
                className="w-full h-full" />
            </div>
            <div className="flex items-center gap-3">
                <button className="bg-zomato-400 text-white text-sm py-1 px-2 rounded-full ">Use App</button>
                
                <span className="border p-2 border-gray-300 text-zomato-400 rounded-full">
                    <FaUserAlt />
                </span>
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

const LargeNav = () => {
    return (
        <>
            
            <div className="p-3 hidden  lg:flex w-full container px-20 mx-auto items-center justify-between gap-4 ">
                <div className=" flex items-center gap-5 justify-start">
                    <div className="w-40">
                        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" 
                        alt="zomato logo"
                        className="w-full h-full cursor-pointer" />
                    </div>
                    <div className="w-full bg-white shadow-md px-3 py-4 flex items-center gap-3 border border-gray-200 rounded-lg">
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



const Navbar = () => {
    return (
        <>
           <nav className=" bg-white flex  w-full items-center">
                    <MobileNav />      
                    
                    <LargeNav />
                
           </nav>

        </>
    )
}

export default Navbar
