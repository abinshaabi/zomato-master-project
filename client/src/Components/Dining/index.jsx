import React, { useState } from 'react'
import RestaurantCard from '../RestaurantCard'


//comppnents
import CollectionCarousel from './CollectionCarousel'

const Dining = () => {
    const [restaurantList, setRestaurantList] = useState([
        {
          _id: "123456",
          photos: [
            "https://b.zmtcdn.com/data/pictures/chains/8/18443088/d26f90bcacb3caeb175479a90e1eddb2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
          ],
          name: "Samosa Party",
          cuisine: ["Street Food", "Beverages", "Tea"],
          averageCost: 100,
          isPro: true,
          isOff: 80,
          durationOfdelivery: 47,
          restaurantReviewValue: 4.1,
        },
        {
          _id: "123456-3",
          photos: [
            "https://b.zmtcdn.com/data/pictures/chains/8/18443088/d26f90bcacb3caeb175479a90e1eddb2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
          ],
          name: "Samosa Party",
          cuisine: ["Street Food", "Beverages", "Tea"],
          averageCost: 100,
          isPro: true,
          isOff: 80,
          durationOfdelivery: 47,
          restaurantReviewValue: 4.1,
        },
        {
          _id: "123456-2",
          photos: [
            "https://b.zmtcdn.com/data/pictures/chains/6/50036/db2271e47065db0a611237066279297b_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
          ],
          name: "Al-Bek",
          cuisine: ["Mughlai", "Arabian", "North Indian", "Chinese", "Seafood"],
          averageCost: 100,
          isPro: true,
          isOff: 80,
          durationOfdelivery: 47,
          restaurantReviewValue: 4.1,
        },
      ]);
    return (
        <>
           <div className="  ">
               <h1 className="text-2xl md:text-3xl  font-medium py-2 md:pt-2 md:pb-6">Collections</h1>
               <h3 className="md:text-xl font-light  pb-3">Explore curated lists of top restaurants, cafes, pubs, and bars in Bengaluru, based on trends</h3>
               <CollectionCarousel />
           </div>
           <h1 className="text-2xl font-medium mt-10 mb-2 md:mt-16 md:mb-6 md:text-3xl md:font-medium">
                Dine-Out Restaurants in Kochi
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

export default Dining
