import React from 'react'
import './Cart.css'
import {Container, Row, Col} from 'reactstrap'
import {Link} from 'react-router-dom'
import CartList from './CartList'
import PriceList from './PriceList'
import EmptyCart from '../shared/EmptyCart'
import Button from '../shared/button/Button'

export default class Cart extends React.Component{
    render(){
        return(
        <Container style={{marginTop: "5rem"}}>
            <Row>

                <Col md="8">
                    <div className="my-cart">
                    {
                        this.props.items.length ?
                        <>
                        <h5 className="my-2">MY CART ({this.props.items.length})</h5> 
                        <CartList
                            items={this.props.items}
                            handleRemoveFromCart={this.props.handleRemoveFromCart}
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
                            items={this.props.items}
                            totalAmount={this.props.totalAmount}
                        />
                        <div className="d-flex justify-content-center mb-4">
                        {   
                            this.props.items.length ? 
                            <Link to="/Checkout"><Button text="checkout"/></Link> : 
                            null
                        }
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        )
    }
}