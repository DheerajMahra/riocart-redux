import React from 'react'
import './Cart.css'
import {Container, Row, Col, Badge} from 'reactstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeFromCart } from '../../redux/actions'
import { getTotalItemPrice, getTotalPrice } from '../../redux/reducers'
import { getTotalCartItems, getAllCartItems, getQuantity }
from '../../redux/reducers/cart'
import CartList from '../../components/cart-list/CartList'
import PriceList from '../../components/price-list/PriceList'
import EmptyCart from '../../components/shared/EmptyCart'
import Button from '../../components/shared/button/Button'

const Cart = props => {

    const { cartItems, totalItems, getQuantity, removeFromCart, getTotalItemPrice, totalPrice, checkout } = props

    return(
    <Container style={{marginTop: "2.8rem"}}>
        <Row>

        <Col md="8">
            <div className="my-cart">
            {
                totalItems ?
                <>
                <h5 className="my-2">MY CART ({totalItems})</h5> 
                <CartList
                    items={cartItems}
                    getQuantity={getQuantity}
                    removeFromCart={removeFromCart}
                    getTotalItemPrice={getTotalItemPrice}
                />
                </> :
                <EmptyCart />
            }
            </div>
        </Col>

        <Col md="4">
            <div className="price-list">
                <h5 className="my-2">PRICE DETAILS</h5>
                <PriceList
                    totalItems={totalItems}
                    totalPrice={totalPrice}
                />
                <div className="d-flex justify-content-center mb-4">
                {   
                    totalItems ? 
                    <Link to="/Checkout">
                        <Button>Checkout</Button>
                    </Link> : null
                }
                </div>
            </div>
        </Col>
        </Row>
    </Container>
    )
}

const mapStateToProps = state => ({
    cartItems: getAllCartItems(state.products, state.cart),
    totalItems: getTotalCartItems(state.cart),
    getQuantity: id => getQuantity(state.cart, id),
    getTotalItemPrice: id => getTotalItemPrice(state, id),
    totalPrice: getTotalPrice(state)
})

const mapDispatchToProps = dispatch => ({
    removeFromCart: id => dispatch(removeFromCart(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)