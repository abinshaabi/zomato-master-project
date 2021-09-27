import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PhotosCollection from '../../Components/Restaurant/PhotosCollection'
import { getImage } from '../../Redux/Reducer/Image/Image.action'

const Photos = () => {
    const [photos, setPhotos] = useState([])

    const dispatch = useDispatch()
    
    const reduxState = useSelector(
        (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
    )

    useEffect(() => {
        if(reduxState) {
            dispatch(getImage(reduxState?.photos)).then(
                (data) => {
                    const images= []
                    data.payload.image.images.map( ({ location }) => images.push(location) )
                    setPhotos(images)
                }
            )
            
        }
    }, [reduxState])
    console.log({photos});
    return (
        <>
            <h2 className="text-xl md:text-2xl lg:text-2xl font-normal mb-5">Domino's Pizza Photos</h2>
            <PhotosCollection 
              photos={photos}
            />
            
        </>
    )
}

export default Photos
