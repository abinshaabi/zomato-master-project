import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import RestaurantCard from '../RestaurantCard'
import Brand from './Brand'
import DeliveryCarousel from './DeliveryCarousel'

const Delivery = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  const reduxState = useSelector((globalStore) => globalStore.restaurant.restaurants)
  
  useEffect(() => {
    reduxState.restaurants && setRestaurantList(reduxState.restaurants)
      
  },[reduxState.restaurants])

  

  return (
      <>
        <DeliveryCarousel />  
        <Brand />
        <h1 className="text-2xl font-semibold mt-10 mb-2 md:mt-16 md:mb-6 md:text-3xl md:font-medium">
          Delivery Restaurants in Kochi
        </h1>
        <div className="flex justify-between flex-wrap">
          {restaurantList.map((restaurant) => (
            <RestaurantCard
              {...restaurant}
              key={restaurant._id}
              whereIsthisres="asf"
            />
          ))}
        
        </div>
      </>
  )
}

export default Delivery
