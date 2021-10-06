import React, { useEffect } from 'react'

//components
import Navbar from '../Components/Navbar'
import FoodTab from '../Components/FoodTab'
import { useDispatch } from 'react-redux'
import { getCart } from '../Redux/Reducer/Cart/Cart.action'

const HomeLayout  = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCart())
    }, [])
    return (
        <>
           <Navbar />
           <FoodTab/>
           <div className="container mx-auto px-4 lg:px-20">
                
                
                {props.children}
           </div>
            

           
        </>
    )
}

export default HomeLayout
