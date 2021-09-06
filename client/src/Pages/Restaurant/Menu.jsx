import React, { useState } from 'react'

//components
import MenuCollection from '../../Components/Restaurant/MenuCollection'

const Menu = () => {
    const [menus, setMenus] = useState([])
    
    return (
        <>
            <h2 className="text-xl md:text-2xl lg:text-2xl font-normal mb-2">Domino's Pizza Menu</h2>
                    
            <div className="flex flex-wrap gap-3">
                {menus.map((menu) => (
                    <MenuCollection {...menu} />
                ))}
            </div>
        </>
    )
}

export default Menu
