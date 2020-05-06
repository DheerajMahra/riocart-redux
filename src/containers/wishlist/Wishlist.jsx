import React from 'react'
import { connect } from 'react-redux'
import {Container, Row, Col} from 'reactstrap'
import { getAllWishlists } from '../../redux/reducers/wishlist'
import { removeFromWishlist } from '../../redux/actions'
import WishlistList from '../../components/wishlist-list/WishlistList'
import EmptyCart from '../../components/shared/EmptyCart'

const Wishlist = props => {

    const { wishlistItems, removeFromWishlist } = props

    return (
        <Container style={{marginTop: "2.8rem"}}>
            <Row>
                <Col md="8" className="m-auto">
                {
                    wishlistItems.length ?
                    <WishlistList
                        items={wishlistItems}
                        removeFromWishlist={removeFromWishlist}
                    /> :
                    <EmptyCart />
                }
                    
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = state => ({
    wishlistItems: getAllWishlists(state.products, state.wishlist)
})

const mapDispatchToProps = dispatch => ({
    removeFromWishlist: id => dispatch(removeFromWishlist(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist)
