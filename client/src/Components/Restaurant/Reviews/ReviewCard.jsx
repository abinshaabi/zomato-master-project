import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { TiStarFullOutline }  from 'react-icons/ti'
import { useDispatch } from 'react-redux';
import { getUser } from '../../../Redux/Reducer/User/User.action';

const ReviewCard = (props) => {
    const [user, setUser] = useState({});
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getUser(props.user)).then((data) =>
        //setUser(data.payload.user.user.user)
        console.log(data)
      );
    }, []);
  
    return (
        <>
            <div className=" my-5 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full">
                            <img src="https://b.zmtcdn.com/data/user_profile_pictures/b30/39b4e3077117b8f86fd1e9de477d4b30.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                            alt="avatar"
                            className="w-full h-full rounded-full object-cover" />
                        </div>
                        <div className="flex flex-col ">
                            <h3 className="text-lg font-semibold">{user?.fullName}</h3>
                            <small className="text-gray-500">5 Reviews &#8226; 3 Followers</small>
                        </div>
                    </div>
                    <button className="text-zomato-400 border border-zomato-400 p-2 rounded-lg">Follow</button>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <span className="text-white bg-green-700 px-1 text-sm rounded-md flex items-center gap-1">
                            {props.rating} <TiStarFullOutline />
                        </span>
                        <h5 className=" text-sm ">{props.isRestaurantReview ? "DINING" : "DELIVERY"}</h5>
                        <small className="text-gray-500">{dayjs(props.createdAt).format("DD MM YYYY")} days ago</small>
                    </div>
                    <div className="w-full">
                        <p className="w-full text-gray-600 font-light text-base">
                            {props.reviewText}    
                        </p>
                    </div>
                </div>
            
            </div>
        </>
    )
}

export default ReviewCard
