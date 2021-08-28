import React from 'react'


//components
import RestaurantNavbar from '../Components/Navbar/restaurantNavbar'
import ImageGrid from '../Components/Restaurant/ImageGrid'

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
            <ImageGrid image={images}/>
        </>
    )
}

export default RestaurantLayout
