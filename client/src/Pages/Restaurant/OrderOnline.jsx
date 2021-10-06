import React, { useEffect, useState } from 'react'
import { AiOutlineCompass } from 'react-icons/ai'
import { BiTimeFive } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'

//components
import FloatMenuButton from '../../Components/Restaurant/Order-Online/FloatMenuButton'
import FoodItem from '../../Components/Restaurant/Order-Online/FoodItem'
import FoodList from '../../Components/Restaurant/Order-Online/FoodList'
import MenuListContainer from '../../Components/Restaurant/Order-Online/MenuListContainer'
import { getFoodList } from '../../Redux/Reducer/Food/Food.action'

const OrderOnline = () => {
    const [menu, setMenu] = useState([])
    const [selected, setSelected] = useState("")
    const onClickHandler = (e) => {
        if (e.target.id) {
            setSelected(e.target.id)
        }
        return;
    }

    const dispatch = useDispatch()

    const reduxState = useSelector(
        (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
    )
console.log({reduxState});
    useEffect(() => {
        reduxState && 
           dispatch(getFoodList(reduxState.menu)).then(
               (data) => setMenu(data.payload.menus.menus)
           )
    }, [reduxState])
    return (
       <>
            <div className="w-full flex ">
                <aside className="hidden md:flex flex-col gap-5 border-r border-gray-200   h-screen w-1/4">
                    {menu.map((item) => (
                        <MenuListContainer
                         {...item} 
                         key={item._id}
                         onClickHandler={onClickHandler}
                         selected={selected} 
                        />
                    ))}
                </aside>
                <div className="w-full md:px-4 md:w-3/4">
                    <h2 className="text-xl md:text-2xl lg:text-2xl font-normal mb-2">Order Online</h2>
                    <h4 className="flex items-center gap-2 font-light text-gray-500">
                        <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
                    </h4>

                    <section className="h-screen scrollbar-none md:scrollbar md:scrollbar-thumb-gray-400 md:scrollbar-track-gray-200 md:overflow-y-scroll  my-6 ">
                        {menu.map((item) => (
                            <FoodList key={item._id} {...item} />
                        ))}                    
                        
                    </section>
                </div>
            </div>
            <FloatMenuButton />
       </>
    )
}

export default OrderOnline
