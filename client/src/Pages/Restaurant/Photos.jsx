import React from 'react'
import PhotosCollection from '../../Components/Restaurant/PhotosCollection'

const Photos = () => {
    return (
        <>
            <h2 className="text-xl md:text-2xl lg:text-2xl font-normal mb-5">Domino's Pizza Photos</h2>
            <PhotosCollection 
              images={[
                'https://b.zmtcdn.com/data/menus/555/61555/50a7b1f53c8eb5ef92971e844678343f.jpg',
                'https://b.zmtcdn.com/data/menus/555/61555/f175d82bcfb3597f4b04cc89c07e7514.jpg',
                'https://b.zmtcdn.com/data/menus/555/61555/bdb0c51a6f6037748307f3cdd761af32.jpg',
                'https://b.zmtcdn.com/data/menus/555/61555/180608b4945052c3ef03d8a65aa42e67.jpg',
                'https://b.zmtcdn.com/data/menus/555/61555/50a7b1f53c8eb5ef92971e844678343f.jpg',
                'https://b.zmtcdn.com/data/menus/555/61555/f175d82bcfb3597f4b04cc89c07e7514.jpg',
                'https://b.zmtcdn.com/data/menus/555/61555/bdb0c51a6f6037748307f3cdd761af32.jpg',
                'https://b.zmtcdn.com/data/menus/555/61555/180608b4945052c3ef03d8a65aa42e67.jpg',
                'https://b.zmtcdn.com/data/menus/555/61555/50a7b1f53c8eb5ef92971e844678343f.jpg',
                'https://b.zmtcdn.com/data/menus/555/61555/f175d82bcfb3597f4b04cc89c07e7514.jpg',
                'https://b.zmtcdn.com/data/menus/555/61555/bdb0c51a6f6037748307f3cdd761af32.jpg',
                'https://b.zmtcdn.com/data/menus/555/61555/180608b4945052c3ef03d8a65aa42e67.jpg',
            ]}
            />
            
        </>
    )
}

export default Photos
