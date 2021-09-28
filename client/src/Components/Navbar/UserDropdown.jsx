import { Menu, Transition } from '@headlessui/react'
import Gravatar from 'react-gravatar'
import { Fragment, useEffect, useRef, useState } from 'react'
import { FaUserAlt } from "react-icons/fa"
import { useSelector } from 'react-redux'
import SignIn from '../Auth/SignIn'
import './dropdown.css'

export default function UserDropdown({isOpen, setIsOpen, isUpOpen, setIsUpOpen}) {
  //let [ isOpenModal, setIsOpenModal ] = useState({isOpen})

  const reduxState = useSelector(globalStore => globalStore.user.user)


  function openSignInModal() {
    setIsOpen(true)
  }
  function openSignUpModal() {
    setIsUpOpen(true)
  }
  
    
  //SignIn({ isOpen, setIsOpen})
  
  return (
    <>
      <div className="">

        {reduxState?.user?.fullName ? (
            <div className="dropdown flex flex-col items-end relative">
                <a className="bg-transparent drodown-button text-gray-700 font-semibold  cursor-pointer rounded inline-flex items-center">
                  <span className="w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 border  border-gray-300 text-zomato-400 rounded-full">
                    <Gravatar className="w-full rounded-full h-full object-cover" email={reduxState?.user?.email} />
                  </span>
                </a>
                
                <div className="shadow-2xl dropdown-menu w-18 absolute hidden  text-gray-700 mt-8 md:mt-10 lg:mt-11">
                  
                  <button  onClick={openSignInModal} className="bg-gray-200 w-full  text-gray-700 hover:bg-gray-300 py-2 px-3 block whitespace-nowrap focus:outline-none">
                    Sign Out
                  </button>
                  

                </div>
            </div>
        ) : (
            <div className="dropdown flex flex-col items-end relative">
                <a className="bg-transparent drodown-button text-gray-700 font-semibold  cursor-pointer rounded inline-flex items-center">
                  <span className="border p-2 border-gray-300 text-zomato-400 rounded-full">
                    <FaUserAlt />
                  </span>
                </a>
                
                <div className="shadow-2xl dropdown-menu w-18 absolute hidden  text-gray-700 mt-10">
                  
                  <button  onClick={openSignInModal} className="bg-gray-100 w-full  text-gray-700 hover:bg-gray-200 py-2 px-3 block whitespace-nowrap focus:outline-none">
                  Sign In
                  </button>
                  <button onClick={openSignUpModal} className="bg-gray-100 w-full  text-gray-700 hover:bg-gray-200 py-2 px-3 block whitespace-nowrap focus:outline-none">
                  Sign Up
                  </button>

                </div>
            </div>
        )}
          
        
        

      </div>
    </>
  )
}

