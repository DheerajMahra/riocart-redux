import React from 'react'
import './Counter.css'

const Counter = props => {

    const { quantity, incrementQuantity, decrementQuantity } = props

    return(
        <div className="counter">
            <input
                type="number"
                className="counter__value"
                value={quantity}
                readOnly
            ></input>
            <span className="counter__dec" onClick={decrementQuantity}>_</span>
            <span className="counter__inc" onClick={incrementQuantity}>+</span>
        </div>
    )
}

export default Counter
