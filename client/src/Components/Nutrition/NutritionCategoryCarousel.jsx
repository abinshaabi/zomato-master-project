import React from 'react'
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../CarousalArrow';


const CategoryCard = (props) => {
    return (<>
        <div className="w-24 md:w-56 lg:w-auto h-full flex flex-col items-center  shadow-lg rounded-md border lg:mr-5 lg:p-2">
            <div className="w-28 h-14 lg:w-44  lg:h-36">
                <img src={props.image}
                alt="food"
                className="w-full h-full  object-cover " />
            </div>
            <div>
                <h3 className="lg:text-xl py-1 md:py-2 lg:py-3 font-extralight text-center">{props.title}</h3>
            </div>
        </div>
    
    </>)
}

const NutritionCategoryCarousel = () => {
    const categories = [
        {
          image:
            "https://dote.zmtcdn.com/prod/data/admin_assets/images/baf809f0523c43d29f51d1e05f9f46be_1629263595.png?output-format=webp",
          title: "Protein & Fitness",
        },
        {
          image:
            "https://dote.zmtcdn.com/prod/data/admin_assets/images/de47fcc91ced4e33b354909e897456e8_1628243615.png?output-format=webp",
          title: "Sleep & Stress",
        },
        {
          image:
            "https://dote.zmtcdn.com/prod/data/admin_assets/images/89fdc1246c12461db02d853a513ab616_1628243591.png?output-format=webp",
          title: "Digestion & Weight Loss",
        },
        {
          image:
            "https://dote.zmtcdn.com/prod/data/admin_assets/images/473ea322835ea870c0658b883c22dcf6_1626688305.png?output-format=webp",
          title: "Omegas & CoQ10",
        },
        {
          image:
            "https://dote.zmtcdn.com/prod/data/admin_assets/images/76336cff326938873f922d4c1c72066c_1628243556.png?output-format=webp",
          title: "Beauty & Skin Care",
        },
        {
          image:
            "https://dote.zmtcdn.com/prod/data/admin_assets/images/c021611d9bce8289f48f59303b2d0fc6_1628243496.png?output-format=webp",
          title: "Immunity & Bones",
        },
        
      ];
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
            <div className="my-10 flex flex-wrap gap-3 justify-between lg:hidden">
                {categories.map((item) => (
                    <CategoryCard {...item}/>
                ))}        
                    
                
            </div>
            
            <div className="my-10 hidden lg:block">
                <Slider {...settings}>
                    {categories.map((item) => (
                        <CategoryCard {...item}/>
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default NutritionCategoryCarousel
