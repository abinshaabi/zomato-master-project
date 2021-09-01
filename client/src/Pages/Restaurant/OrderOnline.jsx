import React from 'react'
import FloatMenuButton from '../../Components/Restaurant/Order-Online/FloatMenuButton'
import MenuListContainer from '../../Components/Restaurant/Order-Online/MenuListContainer'

const OrderOnline = () => {
    return (
       <>
            <div className="w-full">
                <aside className="hidden md:flex flex-col gap-5 border-r border-gray-200 overflow-y-scroll h-screen w-1/4">
                    <MenuListContainer />
                    <MenuListContainer />
                    <MenuListContainer />
                    <MenuListContainer />
                    <MenuListContainer />
                    
                    <MenuListContainer />
                </aside>
                <div className="w-full md:w-3/4"></div>
            </div>
            <FloatMenuButton />
       </>
    )
}

export default OrderOnline
