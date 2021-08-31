import React from 'react'
import classname from 'classnames'
import { Link, useLocation, useParams } from 'react-router-dom'

const Tab = (props) => {
    const { id } = useParams();
    return (
    <Link to={`/restaurant/${id}/${props.route}`}>
        <div className={classname(
            " text-gray-600 font-light pb-4 ",{
                "text-zomato-400 font-semibold border-b-2 border-zomato-400": props.isActive
            }
        )}>
            <h3 className={classname(
                "text-lg flex-grow w-full font-normal lg:text-xl",{
                    " truncate":props.title==="Order Online"
                }
            )}>
                {props.title}
            </h3>
        </div>
    </Link>)
}

const TabContainer = (props) => {
    const location = useLocation();
    const currentPath = location.pathname;

    const tabs = [
        {
            title: "Overview",
            route: "overview",
            isActive: currentPath.includes("overview")
        },
        {
            title: "Order Online",
            route: "order-online",
            isActive: currentPath.includes("order-online")
        },
        {
            title: "Reviews",
            route: "reviews",
            isActive: currentPath.includes("reviews")
        },
        {
            title: "Menu",
            route: "menu",
            isActive: currentPath.includes("menu")
        },
        {
            title: "Photos",
            route: "photos",
            isActive: currentPath.includes("photos")
        },
        
        
        
    ]
    
    return (
        <>
            <div className=" flex  items-center gap-8 md:gap-16 overflow-x-scroll lg:overflow-x-hidden  border-b-2">
                {tabs.map((tab) => (
                    <Tab {...tab} key={`1234${tab.route}`} />
                ))}
            </div>        
        </>
    )
}

export default TabContainer
