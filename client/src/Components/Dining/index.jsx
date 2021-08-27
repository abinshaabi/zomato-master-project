import React from 'react'


//comppnents
import CollectionCarousel from './CollectionCarousel'

const Dining = () => {
    return (
        <>
           <div className="  ">
               <h1 className="text-2xl md:text-3xl  font-medium py-2 md:pt-2 md:pb-6">Collections</h1>
               <h3 className="md:text-xl font-light  pb-3">Explore curated lists of top restaurants, cafes, pubs, and bars in Bengaluru, based on trends</h3>
               <CollectionCarousel />
           </div>
        </>
    )
}

export default Dining
