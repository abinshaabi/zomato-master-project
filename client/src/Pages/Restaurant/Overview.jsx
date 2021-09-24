import React, { useEffect, useState } from 'react'
import { IoMdArrowDropright } from 'react-icons/io'
import { Link, useParams } from 'react-router-dom'
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../../Components/CarousalArrow';
import MenuCollection from '../../Components/Restaurant/MenuCollection';
import MenuSimilarRestaurantcard from '../../Components/Restaurant/MenuSimilarRestaurantCard';
import ReactStars from "react-rating-stars-component";
import ReviewCard from '../../Components/Restaurant/Reviews/ReviewCard';
import MapView from '../../Components/Restaurant/MapView'

//redux actions
import { getImage } from '../../Redux/Reducer/Image/Image.action';
import { getReviews } from '../../Redux/Reducer/Reviews/review.action';
import { useDispatch, useSelector } from 'react-redux';

const Overview = () => {
    const {id} = useParams();

    const [menuImage, setMenuImages] = useState({ images: [] });
    const [Reviews, setReviews] = useState([]);

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

    const reduxState = useSelector(
        (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
    )

    const dispatch = useDispatch();
    
    useEffect(() => {
        if(reduxState) {
            dispatch(getImage(reduxState?.menuImage)).then(
                (data) => {
                    const images= []
                    data.payload.image.images.map( ({ location }) => images.push(location) )
                    setMenuImages(images)
                }
            )
            
            //for reviews
            dispatch(getReviews(reduxState._id)).then((data) => setReviews(data.payload.reviews))
        }
    }, [reduxState])


    

    const ratingChanged = (newRating) => {
        console.log(newRating);
      };

    const getLatLong = (mapAddress) => {
        return mapAddress?.split(",").map((item) => parseFloat(item))
    }
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
                      
                      images={menuImage}
                    />
                </div>
                
                
                
                <h4 className="text-xl font-normal mt-8 mb-3">Cuisines</h4>
                <div className="flex flex-wrap gap-2">
                    {reduxState?.cuisine.map((data) => (
                        <span className="border border-gray-300 text-blue-600 px-2 py- rounded-full">
                            {data}
                        </span>
                    ))}
                    
                </div>


                <div>
                    <h4 className="text-xl font-normal mt-8 mb-3">Average Cost</h4>
                    <h6 className="text-lg font-light">₹{reduxState?.averageCost} for two people (approx.)</h6>
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
                        title={reduxState?.name} 
                        phno={`+91${reduxState?.contactNumber}`} 
                        mapLocation={getLatLong(reduxState?.mapLocation)}  
                        address={reduxState?.address}
                    />
                </div>


                <div className="mt-8 mb-3">
                    <hr />
                    <div className="flex flex-col my-3 ">
                        {Reviews.map((reviewDetails) => (
                            <ReviewCard {...reviewDetails} />
                            
                        ))}
                        
                    </div>
                    <hr />
                </div>



            </div>
            <aside
               style={{ height: "fit-content", boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.1)"}} 
               className="hidden md:flex flex-col gap-5 md:w-4/12 sticky rounded-xl top-2 p-3 bg-white ml-3 shadow-xl"
            >
                <MapView 
                    title={reduxState?.name} 
                    phno={`+91 ${reduxState?.contactNumber}`} 
                    mapLocation={getLatLong(reduxState?.mapLocation)}  
                    address={reduxState?.address}
                />
            </aside>
          </div>  
        </>
    )
}

export default Overview
