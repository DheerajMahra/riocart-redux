import React from 'react'
import './CartList.css'
import {ListGroup} from 'reactstrap'
import CartItem from './cart-item/CartItem'

const CartList = props => {

    const { items, getQuantity, removeFromCart, getTotalItemPrice } = props

    return (
        <div>
            <ListGroup className="cart-list">
            {
                items.map(item => (
                    <CartItem
                        key={item.id}
                        item={item}
                        getQuantity={getQuantity}
                        removeFromCart={removeFromCart}
                        getTotalItemPrice={getTotalItemPrice}
                    />)
                )
            }
            </ListGroup>
        </div>
    )
}

export default CartList
