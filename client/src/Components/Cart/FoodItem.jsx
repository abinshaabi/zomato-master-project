import React from "react";
import { BsTrashFill } from "react-icons/bs";

const FoodItem = (props) => {
  
  return (
    <>
      <div className="flex items-center scrollbar-none justify-between">
        <h5 className="text-lg ">{props.name}</h5>
        <div className="flex items-center gap-3">
          <div className="flex flex-col gap-1 items-end">
            <small>{props.price}</small>
            <div className="px-1 bg-zomato-400 text-white rounded flex items-center gap-1">
              <button
                
                className="p-1 bg-zomato-400 text-white rounded"
              >
                -
              </button>
              <small>{props.quantity}</small>
              <button
                
                className="p-1 bg-zomato-400 text-white rounded"
              >
                +
              </button>
            </div>
          </div>
          <BsTrashFill
            
            className="text-zomato-400 text-lg md:text-xl  "
          />
        </div>
      </div>
      <hr className="my-1" />
    </>
  );
};

export default FoodItem;