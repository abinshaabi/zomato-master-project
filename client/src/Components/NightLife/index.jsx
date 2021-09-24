import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import RestaurantCard from '../RestaurantCard'


//comppnents
import CollectionCarousel from './CollectionCarousel'

const Nightlife = () => {
    const [restaurantList, setRestaurantList] = useState([]);

    const reduxState = useSelector((globalStore) => globalStore.restaurant.restaurants)
  
    useEffect(() => {
      reduxState.restaurants && setRestaurantList(reduxState.restaurants)
        
    },[reduxState.restaurants])

    return (
        <>
           <div className="  ">
               <h1 className="text-2xl md:text-3xl  font-medium py-2 md:pt-2 md:pb-6">Collections</h1>
               <h3 className="md:text-xl font-light  pb-3">Explore curated lists of top restaurants, cafes, pubs, and bars in Bengaluru, based on trends</h3>
               <CollectionCarousel />
           </div>
           <h1 className="text-2xl font-medium mt-10 mb-2 md:mt-16 md:mb-6 md:text-3xl md:font-medium">
                Nightlife Restaurants in Kochi
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

export default Nightlife
