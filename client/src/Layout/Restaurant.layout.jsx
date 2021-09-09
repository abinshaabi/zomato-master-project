import React from 'react'
import { RiDirectionLine, RiShareForwardLine } from 'react-icons/ri'
import { TiStarOutline } from 'react-icons/ti'
import { BiBookmarkPlus } from 'react-icons/bi'


//components
import RestaurantNavbar from '../Components/Navbar/restaurantNavbar'
import ImageGrid from '../Components/Restaurant/ImageGrid'
import InfoButtons from '../Components/Restaurant/InfoButtons'
import RestaurantInfo from '../Components/Restaurant/RestaurantInfo'
import TabContainer from '../Components/Restaurant/Tabs'
import CartContainer from '../Components/Cart/CartContainer'

const RestaurantLayout = (props) => {
    const images = [
        "https://b.zmtcdn.com/data/pictures/chains/2/50382/6fa52a1c7dad34faa24f1bae4e7159de.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        "https://b.zmtcdn.com/data/pictures/chains/2/50382/2eb4ebef13c3bba9c55a515f6ddf6e88.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
        "https://b.zmtcdn.com/data/pictures/chains/2/50382/bd8dfea96f558f70726e9adeea69ad59.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
        "https://b.zmtcdn.com/data/pictures/chains/2/50382/2781ab2c532b711ecd401571cdd87eb9.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
    ]
    return (
        <>
            <RestaurantNavbar />
            <div className="container mx-auto px-4 lg:px-20">
                <ImageGrid image={images}/>

                <RestaurantInfo />

                <div className="flex my-2 gap-4 flex-wrap">
                    <InfoButtons isActive>
                        <TiStarOutline />Add review
                    </InfoButtons>
                    <InfoButtons >
                        <RiDirectionLine className="text-zomato-400"/>Direction
                    </InfoButtons>
                    <InfoButtons >
                        <BiBookmarkPlus className="text-zomato-400"/>Bookmark
                    </InfoButtons>
                    <InfoButtons >
                        <RiShareForwardLine className="text-zomato-400"/>Share
                    </InfoButtons>
                </div>
                <div className="my-10">
                    <TabContainer />
                
                </div>
                {props.children}
            </div>
            <CartContainer />
        </>
    )
}

export default RestaurantLayout
