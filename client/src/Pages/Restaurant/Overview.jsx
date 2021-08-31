import React from 'react'
import { IoMdArrowDropright } from 'react-icons/io'
import { Link, useParams } from 'react-router-dom'
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../../Components/CarousalArrow';
import MenuCollection from '../../Components/Restaurant/MenuCollection';
import MenuSimilarRestaurantcard from '../../Components/Restaurant/MenuSimilarRestaurantCard';
import ReactStars from "react-rating-stars-component";
import ReviewCard from '../../Components/Restaurant/Reviews/ReviewCard';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


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
                      pages="3"
                      image="https://b.zmtcdn.com/data/menus/382/50382/bca3a30ee8bcb0e4e3e94ad52f580e75.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
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
                    <h4 className="text-xl font-normal mt-8 mb-3">Rate Your Delivery Rating</h4>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={30}
                        activeColor="#ffd700"
                    />,
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
               className="hidden md:block md:w-4/12 sticky rounded-xl top-2 p-3 bg-white shadow-xl"
            >
                <div>
                    <h4 className="text-xl font-normal ">Call</h4>
                    <h5 className="text-zomato-400 font-normal">+919562364752</h5>
                </div>
                <div>
                    <h4 className="text-xl font-normal ">Direction</h4>
                    <div className="w-full h-48">
                        <MapContainer center={[12.958647429470709, 77.52561168192169]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[12.958647429470709, 77.52561168192169]}>
                            <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                        </MapContainer>
                    </div>
                </div>
            </aside>
          </div>  
        </>
    )
}

export default Overview
