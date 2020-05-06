import React from 'react'
import {Link} from 'react-router-dom'
import { Container, Navbar, NavbarBrand } from 'reactstrap'
import { connect } from 'react-redux'
import { getTotalCartItems } from '../../redux/reducers/cart'
import { getTotalWishlistItems } from '../../redux/reducers/wishlist'

import NavList from '../../components/nav-list/NavList'

const NavBar = props => {

    const { totalCartItems, totalWishlistItems } = props

    return (
        <div className="navbar">
        <div className="mb-4">

        <Navbar color="light shadow" light fixed="top">
        <Container>
        
            <Link to="/">
            <NavbarBrand 
                className="d-flex justify-content-center align-items-center">
                <ion-icon name="logo-react" style={{fontSize: "24px", marginRight: "5px"}}></ion-icon>
                Riocart
            </NavbarBrand>
            </Link>

            <NavList
                totalCartItems={totalCartItems}
                totalWishlistItems={totalWishlistItems}
            />

        </Container>
        </Navbar>

        </div>
        </div>
    )
}

const mapStateToProps = state => ({
    totalCartItems: getTotalCartItems(state.cart),
    totalWishlistItems: getTotalWishlistItems(state.wishlist)
})

export default connect(mapStateToProps)(NavBar)
