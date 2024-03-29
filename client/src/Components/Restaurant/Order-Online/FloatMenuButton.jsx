import React, { useState } from 'react'
import { HiMenu } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'


//components
import MenuListContainer from './MenuListContainer';

const FloatMenuButton = () => {
    const [isClicked, setIsClicked] = useState(false);

    const toggleMenu = () => {
        setIsClicked((prev) => !prev)
    }

    return (
        <>
            <div className="fixed z-30 w-8/12 flex flex-col gap-3 items-end bottom-2 right-2 md:hidden">
                
                {isClicked && (
                    <div className=" p-3 bg-white h-64 overflow-y-scroll">
                        <MenuListContainer />
                    </div>
                )}


                <button onClick={toggleMenu} className="flex items-center gap-2  md:hidden text-white bg-yellow-900 px-3 py-2 rounded-full">
                    {isClicked ? <MdClose /> :<HiMenu />} Menu
                </button>
            </div>
        </>
    )
}

export default FloatMenuButton
