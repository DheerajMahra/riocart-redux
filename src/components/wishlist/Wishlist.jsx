import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import WishlistList from './WishlistList'
import EmptyCart from '../shared/EmptyCart'

export default function Wishlist(props) {
    const {products, wishlist} = props
    const wishlistItems = wishlist.map(index => products[index])

    return (
        <Container style={{marginTop: "5rem"}}>
            <Row>
                <Col md="8" className="m-auto">
                {
                    wishlist.length ?
                    <WishlistList items={wishlistItems} handleRemoveFromWishlist={props.handleRemoveFromWishlist}/> :
                    <EmptyCart />
                }
                </Col>
            </Row>
        </Container>
    )
}
