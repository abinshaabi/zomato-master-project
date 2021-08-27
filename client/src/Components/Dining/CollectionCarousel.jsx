import React from 'react'
import Slider from 'react-slick'

//components
import { NextArrow, PrevArrow } from '../CarousalArrow'
import PictureCarouselCard from '../PictureCarouselCard'


const CollectionCarousel = () => {
    const settings = {
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow />,
        
    }
    return (
        <>
            <div className="lg:hidden flex w-full overflow-x-scroll overflow-y-hidden transition duration-700 ease-in-out">
                <PictureCarouselCard  />
                <PictureCarouselCard  />
                <PictureCarouselCard />
                <PictureCarouselCard  />
                <PictureCarouselCard  />
                <PictureCarouselCard />
                <PictureCarouselCard />
                <PictureCarouselCard  />
                <PictureCarouselCard  />
                <PictureCarouselCard />
                
            </div>
            
            
            <div className="hidden lg:block">
                <Slider {...settings}>
                    <PictureCarouselCard />
                    <PictureCarouselCard />
                    <PictureCarouselCard />
                    <PictureCarouselCard />
                    <PictureCarouselCard />
                    <PictureCarouselCard />
                    
                </Slider>
            </div>     
            
                
             
            
        </>
    )
}

export default CollectionCarousel
