import React, { useState } from 'react'
import ReviewCard from '../../Components/Restaurant/Reviews/ReviewCard';
import AddReviewCard from '../../Components/Restaurant/Reviews/AddReviewCard';


const Reviews = () => {
    const [reviews, setReviews] = useState(["","",""]);
    

    return (
        <>
          <div className="w-full flex flex-col md:flex-row relative">
            <div className="w-full md:w-8/12 flex flex-col gap-3 lg:gap-5">
                <div className="md:hidden flex flex-col items-start gap-3">
                <AddReviewCard />
                </div>
                {reviews.map((rev) => (
                    <ReviewCard {...rev} />
                ))}    
            </div>
          
            <aside 
               style={{ height: "fit-content", boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.1)"}} 
               className="hidden md:flex items-start flex-col gap-3 md:w-4/12 sticky rounded-xl top-2 p-3 bg-white ml-3 shadow-xl"
            >
                <AddReviewCard />
            </aside>
        </div>
        
        </>
    )
}

export default Reviews
