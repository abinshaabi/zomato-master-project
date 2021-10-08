import React from 'react'
import {AiOutlineCamera} from "react-icons/ai"

const ImageGrid = (props) => {
    return (
        <>
            
                <div className="md:hidden w-full mt-5 h-60 ">
                    <img src={props.images.length && props.images[0].location} 
                    alt="restaurant image"
                    className="w-full h-full object-cover rounded-lg"/>
                </div>

                <div className="hidden md:flex mt-10 w-full h-80 lg:h-96 pb-1 lg:pb-3 flex gap-1">
                    <div className="w-8/12 h-full overflow-hidden ">
                        <img src={props.images.length && props.images[0].location} 
                        alt="restaurant image"
                        className="w-full h-full object-cover  transform transition duration-700 hover:scale-110" />
                    </div>
                    <div className="w-5/12 h-full flex gap-1">
                        <div className="w-1/2 h-full flex flex-col gap-1">
                            <div className="overflow-hidden w-full h-1/2 ">
                                <img src={props.images.length >=1 && props.images[1].location}
                                alt="restaurant image"
                                className="w-full h-full object-cover  transform transition duration-700 hover:scale-110 " />
                            </div>
                            <div className="overflow-hidden w-full h-1/2 ">
                                <img src={props.images.length >=2 && props.images[2]?.location}
                                alt="restaurant image"
                                className="w-full h-full object-cover  transform transition duration-700 hover:scale-110 " />
                            </div>
                        </div>
                        <div className="w-1/2 h-full flex flex-col gap-1">
                            <div className="relative w-full h-1/2">
                                <img src={props.images.length >=3 && props.images[3]?.location}
                                alt="restaurant image"
                                className="w-full h-full absolute z-5 object-cover " />
                                <div className="absolute z-10 inset-0 bg-opacity-40 w-full h-full bg-black "/>
                                <h4 className="absolute z-20  text-white text-base lg:text-lg  w-full h-full flex items-center justify-center ">View Gallery</h4>
                            </div>
                            <div className="relative w-full h-1/2">
                                <img src="https://b.zmtcdn.com/data/zomaland/a6750d1975cd3139cb91535088efb0c71578913426.jpeg?fit=around|69.75:68.25&crop=69.75:68.25;*,*"
                                alt="outlay"
                                className="w-full h-full absolute  object-cover " />
                                <div className="absolute z-20  text-white text-lg  w-full h-full flex  flex-col items-center justify-center">
                                    <div className="w-10 h-10 rounded-full bg-gray-500 p-2"><AiOutlineCamera className="w-full h-full"/></div>
                                    <h4 className="  text-white text-base lg:text-lg    ">Add Photos</h4>    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            
        </>
    )
}

export default ImageGrid
