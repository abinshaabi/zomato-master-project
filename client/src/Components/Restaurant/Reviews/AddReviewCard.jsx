import React, { useState } from 'react'
import ReviewModal from './ReviewModal';

const AddReviewCard = () => {
    const [isOpen, setIsOpen] = useState(false)
 

    const openModal = () => {
        if (!localStorage.zomatoUser) {
            return alert("Please Sign In to post a Review")
        }
        
        setIsOpen(true)

    }
    
    const setRating = () => {
        console.log("jj");
    }

    return (
        <>
            <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen}  />
            <h3 className="text-xl font-normal ">Rate Your Experience</h3>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <input type="radio" name="review" id="dining" />
                    <label htmlFor="dining">Dining</label>
                </div>
                <div className="flex items-center gap-2">
                    <input type="radio" name="review" id="delivery" />
                    <label htmlFor="delivery">Delivery</label>
                </div>
            </div>

            <button onClick={openModal} className="text-zomato-400">Write a Review</button>
        
        </>
    )
}

export default AddReviewCard
