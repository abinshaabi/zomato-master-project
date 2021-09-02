import React from 'react'
import { BiPlus } from 'react-icons/bi'
import ReactStars from 'react-rating-stars-component'

const FoodItem = (props) => {
    return (
        <>
            <div className="flex items-start gap-2 md:gap-3">
                <div className="w-3/12 h-24 md:h-28 lg:h-36">
                    <img src={props.image}
                     alt="food"
                     className="w-full h-full  rounded-lg "
                     />
                </div>
                <div className="w-9/12 md:w-7/12 h-full flex flex-col ">
                    <div className="flex items-center justify-between">
                        <h3 className="md:text-xl font-semibold">
                            {props.title}
                        </h3>
                        <button className="md:hidden flex items-center gap-2 text-zomato-400 bg-zomato-50 border border-zomato-400 px-2 py-1 md:px-4 md:py-2 rounded-lg"><BiPlus /> Add</button>

                    </div>
                    <ReactStars count={5}  value={props.rating} edit={false} />
                    <h5 className="md:mt-3 text-lg">₹{props.price}</h5>
                    <p className="truncate">
                        {props.description}
                    </p>
                </div>
                <div className="hidden md:block w-3/12">
                    <button className="flex items-center gap-2 text-zomato-400 bg-zomato-50 border border-zomato-400 px-4 py-1 lg:py-2 rounded-lg"><BiPlus /> Add</button>

                </div>
            </div>
        </>
    )
}

export default FoodItem
