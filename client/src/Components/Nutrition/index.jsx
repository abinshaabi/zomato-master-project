import React from 'react'
import NutritionCard from './NutritionCard'
import NutritionCarousel from './NutritionCarousel'
import NutritionCategoryCarousel from './NutritionCategoryCarousel'

const Nutrition = () => {
    return (
        <>
            <NutritionCarousel />
            <NutritionCategoryCarousel />
            <h1 className="text-2xl font-medium mt-10 mb-2 md:mt-16 md:mb-6 md:text-3xl md:font-medium">
                All Products
            </h1>
            <div className="flex justify-between flex-wrap">
            <NutritionCard bg="red" image="https://dote.zmtcdn.com/prod/data/admin_assets/images/34e/384e52f7a60c840377ede182dcd3d34e_1614427090.png?output-format=webp"/>
            <NutritionCard bg="red" image="https://dote.zmtcdn.com/prod/data/admin_assets/images/34e/384e52f7a60c840377ede182dcd3d34e_1614427090.png?output-format=webp"/>
            <NutritionCard bg="red" image="https://dote.zmtcdn.com/prod/data/admin_assets/images/34e/384e52f7a60c840377ede182dcd3d34e_1614427090.png?output-format=webp"/>
            <NutritionCard bg="red" image="https://dote.zmtcdn.com/prod/data/admin_assets/images/34e/384e52f7a60c840377ede182dcd3d34e_1614427090.png?output-format=webp"/>
            <NutritionCard bg="red" image="https://dote.zmtcdn.com/prod/data/admin_assets/images/34e/384e52f7a60c840377ede182dcd3d34e_1614427090.png?output-format=webp"/>
            <NutritionCard bg="red" image="https://dote.zmtcdn.com/prod/data/admin_assets/images/34e/384e52f7a60c840377ede182dcd3d34e_1614427090.png?output-format=webp"/>
            <NutritionCard bg="red" image="https://dote.zmtcdn.com/prod/data/admin_assets/images/34e/384e52f7a60c840377ede182dcd3d34e_1614427090.png?output-format=webp"/>
            
            </div>
        </>
    )
}

export default Nutrition
