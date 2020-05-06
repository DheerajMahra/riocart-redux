import React from 'react'
import './Button.css'

const  Button = props => (
    <span
    className={ props.secondary ? "btn--secondary" : "btn--primary" }
    onClick={() => { if(!props.event){ return } props.event()}}
    >
    {props.children}
    </span>
)

export default Button
