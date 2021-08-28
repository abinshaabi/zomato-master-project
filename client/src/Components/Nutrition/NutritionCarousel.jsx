import React, { useState } from 'react'
import Slider from 'react-slick'
import { NextArrow, PrevArrow } from '../CarousalArrow'


const CarouselCard = (props) => {
    return( <>
        <div className="w-full h-48 md:h-full">
            <img src={props.imgUrl}
             alt="image"
             className="w-full h-full" />
        </div>
    
    </>)
}

const NutritionCarousel = () => {
    const [nutritionImage, setNutritionImage] = useState([
        {
            sm:"https://b.zmtcdn.com/web/nutrition/assets/ca2ad666f06033a3e2060d7d34a698261620108893.png",
            lg:"https://b.zmtcdn.com/web/nutrition/assets/47fb421f35ca12ad3111e3d99d1737571620108828.png",
        },
        {
            sm:"https://b.zmtcdn.com/web/nutrition/assets/3411bca9bef796775ae924ace20916bc1620108901.png",    
            lg:"https://b.zmtcdn.com/web/nutrition/assets/0a8f2dad65904b89178905213efe886c1620108711.png"
        },
        {
            sm:"https://b.zmtcdn.com/web/nutrition/assets/bbee8bb8e4e6cc102804cea54f6bc22b1620108868.png",    
            lg:"https://b.zmtcdn.com/web/nutrition/assets/f8da550c375c3bec2f6ba341336324561620108741.png"
        },
        {
            sm:"https://b.zmtcdn.com/web/nutrition/assets/c96ca6e3ce4a907e1c65134709db152c1620108861.png",    
            lg:"https://b.zmtcdn.com/web/nutrition/assets/cfbb36a56a4203c7efac5de27318ea381620108756.png"
        },
        {
            sm:"https://b.zmtcdn.com/web/nutrition/assets/0bde69a7f760111a662f42fe890b97bf1620108908.png",    
            lg:"https://b.zmtcdn.com/web/nutrition/assets/3872dc3041e9633ba40b51e7dbff263a1620108770.png"
        },
        {
            sm:"https://b.zmtcdn.com/web/nutrition/assets/bb5be66c9aed89521cc37717103f32d31620108878.png",    
            lg:"https://b.zmtcdn.com/web/nutrition/assets/6070ce964372e9e39c5bf6345a7bf78c1620108789.png"
        },
        {
            sm:"https://b.zmtcdn.com/web/nutrition/assets/39dbd67fa046284b1b21906606d641db1620108887.png",    
            lg:"https://b.zmtcdn.com/web/nutrition/assets/136f6056ec55c6431172d5405cb645761620108811.png"
        }

    ])

    const settings = {
        arrows:true,
        dots: true,
        speed:500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,

    }

    return (
        <>
        <div className="hidden md:block px-3 pb-8 lg:px-0">
            <Slider {...settings} >
                {nutritionImage.map((img) => (
                    <CarouselCard imgUrl={img.lg}/>
                ))}
                
            </Slider>
        </div>
        <div className="md:hidden px-1 pb-4">
            <Slider {...settings} >
                {nutritionImage.map((img) => (
                    <CarouselCard imgUrl={img.sm}/>
                ))}
                
            </Slider>
        </div>
        </>
    )
}

export default NutritionCarousel
