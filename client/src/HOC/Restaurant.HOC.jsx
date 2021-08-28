import React from 'react'
import { Route } from 'react-router-dom'

//Layouts
import RestaurantLayout from '../Layout/Restaurant.layout'



const RestaurantHOC = ({component: Component, ...rest}) => {
    return (
        <>
            <Route {...rest} component = {(props) => (
                <RestaurantLayout>
                    <Component  {...props} />
                </RestaurantLayout>
            )} /> 
        </>
    )
}

export default RestaurantHOC
