import React from 'react'

export const NextArrow = (props) => {
    return (
        <div 
            className={props.className}
            style={{ ...props.style, backgroundColor: "#e23744" }}
            onClick={props.onClick}
        />
    )
}


export const PrevArrow = (props) => {
    return (
        <div 
            className={props.className}
            style={{ ...props.style,backgroundColor: "#e23744"}}
            onClick={props.onClick}
        />
    )
}

export const DelNextArrow = (props) => {
    return (
        <div 
            className={props.className}
            style={{ ...props.style, margin: "25px ",top: 75, backgroundColor: "#e23744" }}
            onClick={props.onClick}
        />
    )
}


export const DelPrevArrow = (props) => {
    return (
        <div 
            className={props.className}
            style={{ ...props.style, margin: "25px ",left:-10,zIndex:10, top: 80 ,backgroundColor: "#e23744"}}
            onClick={props.onClick}
        />
    )
}

export const BrNextArrow = (props) => {
    return (
        <div 
            className={props.className}
            style={{ ...props.style,right:1, backgroundColor: "#e23744" }}
            onClick={props.onClick}
        />
    )
}


export const BrPrevArrow = (props) => {
    return (
        <div 
            className={props.className}
            style={{ ...props.style, left:15,zIndex:10, backgroundColor: "#e23744"}}
            onClick={props.onClick}
        />
    )
}

