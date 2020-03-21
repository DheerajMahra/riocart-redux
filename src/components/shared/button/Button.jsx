import React from 'react'
import './Button.css'

export default function Button(props) {
    return (
        <span
        className="myBtn"
        onClick={() => { if(!props.event){ return } props.event()}
        }>
        {props.text}
        </span>
    )
}
