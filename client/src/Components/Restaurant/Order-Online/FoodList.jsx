import React from 'react'
import FoodItem from './FoodItem'

const FoodList = (props) => {
    
    return (
        <>
            <div className="flex flex-col gap-3 md:gap-5">
                <h2 className="bg-white w-full  py-2 z-10 sticky top-0 text-xl md:text-2xl lg:text-2xl font-normal">
                    {props.name}
                </h2>
        
                {props.items.map((item) => (
                    <FoodItem key={item} _id={item} />
                ))}
                
            </div>
        </>
    )
}

export default FoodList
