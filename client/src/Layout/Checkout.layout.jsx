import React from 'react'
import CheckoutNavbar from '../Components/Navbar/CheckoutNavbar'

const CheckoutLayout = (props) => {
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
