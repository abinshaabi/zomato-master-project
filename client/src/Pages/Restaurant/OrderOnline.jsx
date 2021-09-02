import React from 'react'
import { AiOutlineCompass } from 'react-icons/ai'
import { BiTimeFive } from 'react-icons/bi'

//components
import FloatMenuButton from '../../Components/Restaurant/Order-Online/FloatMenuButton'
import FoodItem from '../../Components/Restaurant/Order-Online/FoodItem'
import FoodList from '../../Components/Restaurant/Order-Online/FoodList'
import MenuListContainer from '../../Components/Restaurant/Order-Online/MenuListContainer'

const OrderOnline = () => {
    return (
       <>
            <div className="w-full flex ">
                <aside className="hidden md:flex flex-col gap-5 border-r border-gray-200   h-screen w-1/4">
                    <MenuListContainer />
                    <MenuListContainer />
                    <MenuListContainer />
                    <MenuListContainer />
                    <MenuListContainer />
                    
                    <MenuListContainer />
                </aside>
                <div className="w-full md:px-4 md:w-3/4">
                    <h2 className="text-xl md:text-2xl lg:text-2xl font-normal mb-2">Order Online</h2>
                    <h4 className="flex items-center gap-2 font-light text-gray-500">
                        <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
                    </h4>

                    <section className="h-screen scrollbar-none md:scrollbar md:scrollbar-thumb-gray-400 md:scrollbar-track-gray-200 md:overflow-y-scroll  my-6 ">
                        <div >
                        <FoodList 
                           title="Recommended"
                           items={[
                               {
                                image:"https://b.zmtcdn.com/data/dish_photos/839/62575c08ce26635e3f48b3642805d839.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*", 
                                title:"Andhra Mutton Biryani Family Pack",
                                rating:3,
                                price:"869",
                                description:"In fact, inserting any fantasy text or a famous text, be it a poem, a speech, a literary passage, a song's text, etc., our text generator will provide the random extraction of terms and steps to compose your own exclusive Lorem Ipsum."
                                    
                               },
                               {
                                image:"https://b.zmtcdn.com/data/dish_photos/839/62575c08ce26635e3f48b3642805d839.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*", 
                                title:"Andhra Mutton Biryani Family Pack",
                                rating:3,
                                price:"869",
                                description:"In fact, inserting any fantasy text or a famous text, be it a poem, a speech, a literary passage, a song's text, etc., our text generator will provide the random extraction of terms and steps to compose your own exclusive Lorem Ipsum."
                                    
                               },
                               {
                                image:"https://b.zmtcdn.com/data/dish_photos/839/62575c08ce26635e3f48b3642805d839.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*", 
                                title:"Andhra Mutton Biryani Family Pack",
                                rating:3,
                                price:"869",
                                description:"In fact, inserting any fantasy text or a famous text, be it a poem, a speech, a literary passage, a song's text, etc., our text generator will provide the random extraction of terms and steps to compose your own exclusive Lorem Ipsum."
                                    
                               },
                               
                           ]}
                        />
                        <FoodList 
                           title="Recommended"
                           items={[
                               {
                                image:"https://b.zmtcdn.com/data/dish_photos/839/62575c08ce26635e3f48b3642805d839.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*", 
                                title:"Andhra Mutton Biryani Family Pack",
                                rating:3,
                                price:"869",
                                description:"In fact, inserting any fantasy text or a famous text, be it a poem, a speech, a literary passage, a song's text, etc., our text generator will provide the random extraction of terms and steps to compose your own exclusive Lorem Ipsum."
                                    
                               },
                               {
                                image:"https://b.zmtcdn.com/data/dish_photos/839/62575c08ce26635e3f48b3642805d839.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*", 
                                title:"Andhra Mutton Biryani Family Pack",
                                rating:3,
                                price:"869",
                                description:"In fact, inserting any fantasy text or a famous text, be it a poem, a speech, a literary passage, a song's text, etc., our text generator will provide the random extraction of terms and steps to compose your own exclusive Lorem Ipsum."
                                    
                               },
                               {
                                image:"https://b.zmtcdn.com/data/dish_photos/839/62575c08ce26635e3f48b3642805d839.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*", 
                                title:"Andhra Mutton Biryani Family Pack",
                                rating:3,
                                price:"869",
                                description:"In fact, inserting any fantasy text or a famous text, be it a poem, a speech, a literary passage, a song's text, etc., our text generator will provide the random extraction of terms and steps to compose your own exclusive Lorem Ipsum."
                                    
                               },
                               
                           ]}
                        />
                        <FoodList 
                           title="Recommended"
                           items={[
                               {
                                image:"https://b.zmtcdn.com/data/dish_photos/839/62575c08ce26635e3f48b3642805d839.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*", 
                                title:"Andhra Mutton Biryani Family Pack",
                                rating:3,
                                price:"869",
                                description:"In fact, inserting any fantasy text or a famous text, be it a poem, a speech, a literary passage, a song's text, etc., our text generator will provide the random extraction of terms and steps to compose your own exclusive Lorem Ipsum."
                                    
                               },
                               {
                                image:"https://b.zmtcdn.com/data/dish_photos/839/62575c08ce26635e3f48b3642805d839.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*", 
                                title:"Andhra Mutton Biryani Family Pack",
                                rating:3,
                                price:"869",
                                description:"In fact, inserting any fantasy text or a famous text, be it a poem, a speech, a literary passage, a song's text, etc., our text generator will provide the random extraction of terms and steps to compose your own exclusive Lorem Ipsum."
                                    
                               },
                               {
                                image:"https://b.zmtcdn.com/data/dish_photos/839/62575c08ce26635e3f48b3642805d839.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*", 
                                title:"Andhra Mutton Biryani Family Pack",
                                rating:3,
                                price:"869",
                                description:"In fact, inserting any fantasy text or a famous text, be it a poem, a speech, a literary passage, a song's text, etc., our text generator will provide the random extraction of terms and steps to compose your own exclusive Lorem Ipsum."
                                    
                               },
                               
                           ]}
                        />
                        </div>

                        
                        
                    </section>
                </div>
            </div>
            <FloatMenuButton />
       </>
    )
}

export default OrderOnline
