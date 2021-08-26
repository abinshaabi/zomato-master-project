import React from 'react'
import { AiTwotoneStar } from "react-icons/ai";

const RestaurantCard = (props) => {
    return (
        <>
        <div className="bg-white   p-3 mb-4  w-full rounded-2xl transition duration-700 ease-in-out hover:shadow-lg md:w-6/12 lg:w-1/3">
            <div className="w-full h-56 lg:h-64 relative">
                <div className="absolute w-full bottom-4 flex items-end justify-between">
                    <div className="flex flex-col gap-2 items-start">
                      {props.isPro && (
                        <span className="bg-zomato-400 text-white px-2  rounded text-sm">
                        Pro extra 10% off
                        </span>
                      )}
                      {props.isOff && (
                        <span className="bg-blue-600 text-white px-2  rounded text-sm">
                        ₹75 OFF
                        </span>
                      )}
                    </div>
                    <span className="bg-white bg-opacity-75 px-1 rounded text-sm mr-3">
                    {props.durationOfDelivery} min
                    </span>
                </div>
                <img
                    src={props.photos.length && props.photos[0]}
                    alt="food"
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>
            <div className="my-2 flex flex-col ">
                <div className="flex items-center justify-between">
                    <h4 className="text-xl font-medium">{props.name}</h4>
                    <span className="bg-green-900 text-white text-sm px-1 rounded flex items-center">
                     {props.RestaurantrevieValue}<AiTwotoneStar />
                    </span>
                </div>
                <div className="flex items-center justify-between text-gray-500">
                    <p>{props.cuisine.join(", ")}</p>
                    <p>₹{props.averageCost} for one</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default RestaurantCard
