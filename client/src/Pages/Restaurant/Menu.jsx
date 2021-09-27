import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//components
import MenuCollection from '../../Components/Restaurant/MenuCollection'
import { getImage } from '../../Redux/Reducer/Image/Image.action'

const Menu = () => {
    const [menus, setMenus] = useState([])

    const dispatch = useDispatch()
    
    const reduxState = useSelector(
        (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
    )

    useEffect(() => {
        if(reduxState) {
            dispatch(getImage(reduxState?.menuImage)).then(
                (data) => {
                    const images= []
                    data.payload.image.images.map( ({ location }) => images.push(location) )
                    setMenus(images)
                }
            )
            
        }
    }, [reduxState])

    return (
        <>
            <h2 className="text-xl md:text-2xl lg:text-2xl font-normal mb-2">Domino's Pizza Menu</h2>
                    
            <div className="flex flex-wrap gap-3">
                <MenuCollection menuTitle="Menu"  pages={menus.length} image={menus}  /> 
            </div>
        </>
    )
}

export default Menu
