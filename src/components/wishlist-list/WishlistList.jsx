import React from 'react'
import {ListGroup} from 'reactstrap'
import WishlistItem from './wishlist-item/WishlistItem'

const WishlistList = props => {

    const{ items, removeFromWishlist } = props

    return(
        <ListGroup className="wishlist-list">
        {
            items.map(item => (
                <WishlistItem
                    key={item.id}
                    item={item}
                    removeFromWishlist={removeFromWishlist}
                />
            ))
        }
        </ListGroup>
    )
}

export default WishlistList