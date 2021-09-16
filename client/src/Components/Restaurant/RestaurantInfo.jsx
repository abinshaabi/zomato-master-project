import React from 'react'
import {TiStarFullOutline} from "react-icons/ti"

const RestaurantInfo = (props) => {
    return (<>
        <div className="my-3 md:my-2 lg:my-0">
                    <div className="flex flex-col flex-col-reverse md:flex-row md:items-center justify-between gap-3">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl lg:font-medium font-semibold  ">
                            {props.name}
                        </h1>
                        <div className="flex items-center lg:gap-10 gap-5">
                            <div className="flex items-center gap-2 text-xs md:text-sm lg:text-base">
                                <span className="rounded-md flex items-center gap-1 text-white text-base  lg:text-lg font-medium bg-green-600 px-1 lg:px-2  ">
                                    {props.restaurantRating}<TiStarFullOutline className="w-3 h-3"/>
                                </span>
                                <span >
                                    <strong>2</strong>
                                    <p className="border-b border-gray-400 border-dashed">Dining Reviews</p>
                                </span> 
                            </div>
                            <div className="flex items-center gap-2 text-xs md:text-sm lg:text-base">
                                <span className="rounded-md flex items-center gap-1 text-white text-base  lg:text-lg font-medium bg-green-600 px-1 lg:px-2  ">
                                {props.restaurantRating}<TiStarFullOutline className="w-3 h-3"/>
                                </span>
                                <span  >
                                    <strong>38</strong>
                                    <p className="border-b border-gray-400 border-dashed">Delivery Reviews</p>
                                </span> 
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-base md:text-lg text-gray-600">
                        <h3>{props.cuisine}</h3>
                        <h3 className="text-gray-400">{props.address}</h3>
                        <h3>
                            <span className="text-yellow-500">Open Now</span> - 11am - 8pm
                        </h3>
                    </div>
                </div>
    </>)
}

export default RestaurantInfo
