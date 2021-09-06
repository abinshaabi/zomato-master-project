import React from 'react'
import { IoMdArrowDropright } from 'react-icons/io'
import { Link, useParams } from 'react-router-dom'
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../../Components/CarousalArrow';
import MenuCollection from '../../Components/Restaurant/MenuCollection';
import MenuSimilarRestaurantcard from '../../Components/Restaurant/MenuSimilarRestaurantCard';
import ReactStars from "react-rating-stars-component";
import ReviewCard from '../../Components/Restaurant/Reviews/ReviewCard';
import MapView from '../../Components/Restaurant/MapView'


const Overview = () => {
    const {id} = useParams();
    const settings = {
        arrows:true,
        infinite:true,
        speed:500,
        slidesToShow:3,
        slidesToScroll:1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: true,
                  infinite: true,
                  speed: 500,
                  nextArrow: <NextArrow/>,
                  prevArrow: <PrevArrow />,
                }
              },
            
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                infinite: true,
                speed: 500,
                nextArrow: <NextArrow/>,
                prevArrow: <PrevArrow />,
              }
            }
          ],
    }

    const ratingChanged = (newRating) => {
        console.log(newRating);
      };

    return (
        <>
        
          <div className="flex flex-col md:flex-row relative">
            <div className="w-full md:w-8/12   ">
                
                <h2 className="text-xl md:text-2xl lg:text-2xl font-normal my-10">
                    About the Place
                </h2>
                
                
                <div className="flex justify-between items-center mt-5 mb-3">
                    <h4 className="text-xl font-normal">Menu</h4>
                    <Link to={`/restaurant/${id}/menu`}>
                        <span className="flex items-center gap-1 text-zomato-400"> 
                            See All Menu <IoMdArrowDropright />
                        </span>
                    </Link>          
                </div>
                <div className="flex flex-wrap gap-3">
                    <MenuCollection
                      menuTitle="Menu"
                      
                      images={[
                        'https://b.zmtcdn.com/data/menus/555/61555/50a7b1f53c8eb5ef92971e844678343f.jpg',
                        'https://b.zmtcdn.com/data/menus/555/61555/f175d82bcfb3597f4b04cc89c07e7514.jpg',
                        'https://b.zmtcdn.com/data/menus/555/61555/bdb0c51a6f6037748307f3cdd761af32.jpg',
                        'https://b.zmtcdn.com/data/menus/555/61555/180608b4945052c3ef03d8a65aa42e67.jpg',
                      ]}
                    />
                </div>
                
                
                
                <h4 className="text-xl font-normal mt-8 mb-3">Cuisines</h4>
                <div className="flex flex-wrap gap-2">
                    <span className="border border-gray-300 text-blue-600 px-2 py- rounded-full">
                        Street Food
                    </span>
                    <span className="border border-gray-300 text-blue-600 px-2 py- rounded-full">
                        Street Food
                    </span>
                    <span className="border border-gray-300 text-blue-600 px-2 py- rounded-full">
                        Street Food
                    </span>
                    <span className="border border-gray-300 text-blue-600 px-2 py- rounded-full">
                        Street Food
                    </span>
                </div>


                <div>
                    <h4 className="text-xl font-normal mt-8 mb-3">Average Cost</h4>
                    <h6 className="text-lg font-light">₹300 for two people (approx.)</h6>
                    <small className=" text-gray-500 font-light">Exclusive of applicable taxes and charges, if any</small>
                </div>


                
                <div className="">
                    <h4 className="text-xl font-normal mt-8 mb-3">Similar Restaurants</h4>
                    <Slider {...settings}>
                        <MenuSimilarRestaurantcard 
                        image="https://b.zmtcdn.com/data/pictures/chains/0/19519370/ac501703f9dd1f04518b27305ea767b4_featured_v2.jpg" 
                        title="Pizza Roma Italia"
                        />
                        <MenuSimilarRestaurantcard 
                        image="https://b.zmtcdn.com/data/pictures/chains/0/19519370/ac501703f9dd1f04518b27305ea767b4_featured_v2.jpg" 
                        title="Pizza Roma Italia"
                        />
                        <MenuSimilarRestaurantcard 
                        image="https://b.zmtcdn.com/data/pictures/chains/0/19519370/ac501703f9dd1f04518b27305ea767b4_featured_v2.jpg" 
                        title="Pizza Roma Italia"
                        />
                        <MenuSimilarRestaurantcard 
                        image="https://b.zmtcdn.com/data/pictures/chains/0/19519370/ac501703f9dd1f04518b27305ea767b4_featured_v2.jpg" 
                        title="Pizza Roma Italia"
                        />
                        <MenuSimilarRestaurantcard 
                        image="https://b.zmtcdn.com/data/pictures/chains/0/19519370/ac501703f9dd1f04518b27305ea767b4_featured_v2.jpg" 
                        title="Pizza Roma Italia"
                        />

                    </Slider>
                </div>


                <div>
                    <h4 className="text-xl font-normal mt-8 mb-3">Rate Your Delivery Experience</h4>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={30}
                        activeColor="#ffd700"
                    />,
                </div>

                <div className="md:hidden flex flex-col gap-5 mt-8 mb-10 ">
                    <MapView 
                        title="Domino's Pizza" 
                        phno="+918596365251" 
                        mapLocation={[12.958647429470709, 77.52561168192169]}  
                        address="32, Near Chandra Layout Bus Stop, 1st Stage, 3rd Phase, Vijay Nagar, Bangalore"
                    />
                </div>


                <div className="mt-8 mb-3">
                    <hr />
                    <div className="flex flex-col my-3 ">
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        
                    </div>
                    <hr />
                </div>



            </div>
            <aside
               style={{ height: "fit-content", boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.1)"}} 
               className="hidden md:flex flex-col gap-5 md:w-4/12 sticky rounded-xl top-2 p-3 bg-white ml-3 shadow-xl"
            >
                <MapView 
                    title="Domino's Pizza" 
                    phno="+918596365251" 
                    mapLocation={[12.958647429470709, 77.52561168192169]}  
                    address="32, Near Chandra Layout Bus Stop, 1st Stage, 3rd Phase, Vijay Nagar, Bangalore"
                />
            </aside>
          </div>  
        </>
    )
}

export default Overview
