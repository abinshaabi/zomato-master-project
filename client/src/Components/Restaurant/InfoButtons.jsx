import React from 'react'
import classname from "classnames"

const InfoButtons = (props) => {
    return (
        <>
            <button className={classname(
                "flex items-center gap-1 font-light text-gray-600 px-3 py-1 rounded-lg border border-gray-500",
                {"bg-zomato-400 border-zomato-400 text-yellow-100":props.isActive}
            )}>
                {props.children}
            </button>
        </>
    )
}

export default InfoButtons
