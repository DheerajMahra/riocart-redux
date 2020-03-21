import React from 'react'
import {ListGroup} from 'reactstrap'
import WishlistItem from './WishlistItem'

export default function WishlistList(props) {
    return (
        <ListGroup className="wishlist-list">
        {
            props.items.map(item => <WishlistItem key={item.id} item={item}  handleRemoveFromWishlist={props.handleRemoveFromWishlist}/>)
        }
        </ListGroup>
    )
}
