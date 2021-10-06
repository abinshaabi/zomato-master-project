import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import CheckoutNavbar from '../Components/Navbar/CheckoutNavbar'
import { getCart } from '../Redux/Reducer/Cart/Cart.action'

const CheckoutLayout = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCart())
    }, [])
    return (
        <>
            <CheckoutNavbar />
            <div className="container px-4 lg:px-20 mx-auto">
                {props.children}
            </div>
        </>
    )
}

export default CheckoutLayout
