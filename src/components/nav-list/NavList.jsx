import React from 'react'
import { Nav } from 'reactstrap'

import NavListItem from './NavListItem.jsx'

const NavList = props => {

    const { totalCartItems, totalWishlistItems } = props

    return (
        <Nav className="flex-row" navbar>

            <NavListItem to="/wishlist" count={totalWishlistItems} blue>
                <ion-icon name="heart-outline" style={{fontSize: "24px"}}></ion-icon>
            </NavListItem>

            <NavListItem to="/cart" count={totalCartItems}>
                <ion-icon name="cart-outline" style={{fontSize: "24px"}}></ion-icon>
            </NavListItem>

        </Nav>
    )
}

export default NavList