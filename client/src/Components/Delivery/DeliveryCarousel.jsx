import React from 'react'
import Slider from 'react-slick' 

//components
import DeliveryCategory from './DeliveryCategory'
import { DelNextArrow, DelPrevArrow } from '../CarousalArrow'


const DeliveryCarousel = () => {

    const categories = [
        {
          image:
            "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
          title: "Biryani",
        },
        {
          image:
            "https://b.zmtcdn.com/data/dish_photos/cf9/08bf86a8c902df8e6d703e374391ecf9.jpg",
          title: "Kesari Bath",
        },
        {
          image:
            "https://b.zmtcdn.com/data/homepage_dish_data/4/742929dcb631403d7c1c1efad2ca2700.png",
          title: "Chicken",
        },
        {
          image:
            "https://b.zmtcdn.com/data/dish_images/aebeb88b78a4a83ea9e727f234899bed1602781186.png",
          title: "Chaat",
        },
        {
          image:
            "https://b.zmtcdn.com/data/dish_images/770ba11e5159e6740d68f71f1b838a261612463246.png",
          title: "Cake",
        },
        {
          image:
            "https://b.zmtcdn.com/data/homepage_dish_data/4/eb2ef145c0fcad44dbb4ed26aad1527d.png",
          title: "Rolls",
        },
        
      ];

    const settings = {
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <DelNextArrow/>,
      prevArrow: <DelPrevArrow />,
      responsive: [
        {
          breakpoint: 1279,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            infinite: true,
            speed: 500,
            nextArrow: <DelNextArrow/>,
            prevArrow: <DelPrevArrow />,
          }
        }
      ],
      
    }

    return (
        <>
          <div className="lg:my-10">
            <h1 className="text-xl font-semibold md:text-2xl lg:text-2xl mb-5 lg:mb-7 text-gray-800 ">Inspiration for your first order</h1>
            <div className="lg:hidden flex  gap-3 lg:gap-0 flex-wrap justify-between">
                
                {categories.map((food) => (
                    <DeliveryCategory {...food}/>
                ))}

            </div>

            <div className="hidden lg:block  ">
                <Slider {...settings} className="pl-4">
                  {categories.map((food) => (
                      <DeliveryCategory {...food}/>
                  ))}
                </Slider>
            </div>
          </div>
        </>
    )
}

export default DeliveryCarousel
