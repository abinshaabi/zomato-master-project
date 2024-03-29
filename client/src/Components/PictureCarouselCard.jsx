import React from 'react'
import { IoMdArrowDropright} from "react-icons/io"

const PictureCarouselCard = () => {
    return (
        <>
           <div className=" mr-4 h-64 lg:h-80 relative rounded-lg ">
               <div className="image w-52 lg:w-full h-full">
                   <img src="https://b.zmtcdn.com/data/collections/42e666d436d9a3b90431e6cc4a6b242d_1582106525.jpg?output-format=webp"
                   alt="image"
                    className="w-full h-full object-cover rounded-lg" />
               </div>
               <div className="shade absolute w-full h-full rounded-lg z-10 bottom-0" 
                    style={{background: "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)"}} 
                />
               <div className="text-white absolute bottom-2 left-3 z-20">
                   <h4 className="text-lg">Trending This Week</h4>
                   <span className="text-sm flex items-center gap-1">30 Places <IoMdArrowDropright className="pt-1 w-6 h-6"/></span>
               </div>
           </div>
        </>
    )
}

export default PictureCarouselCard
