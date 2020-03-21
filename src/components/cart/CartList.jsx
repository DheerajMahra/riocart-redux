import React, { Component } from 'react'
import {ListGroup} from 'reactstrap'
import CartItem from './CartItem'

export class CartList extends Component {
    render() {
        return (
            <div>
                <ListGroup className="cart-list">
                {
                    this.props.items.map(item => <CartItem key={item.details.id} item={item} handleRemoveFromCart={this.props.handleRemoveFromCart}/>)
                }
                </ListGroup>
            </div>
        )
    }
}

export default CartList
