import React, { Component } from 'react'
import { Row, Col, ListGroupItem } from 'reactstrap'

export default class CartItem extends Component {
  
    parseToInt = str => parseInt(str.split(',').join(''))

    render() {

        const {id, img,  title, offerPrice, seller} = this.props.item.details
        const {quantity} = this.props.item

        return (
            <ListGroupItem className="mb-4 shadow-sm">
                <Row>

                    <Col md="4">
                        <img src={img} className="w-100 cart-img" alt="cart item"/>
                    </Col>

                    <Col md="8">
                        <div className="prod-details">
                            <h5 className="m-0">{title}</h5>
                            <p className="small text-muted m-0 mb-2">Seller: {seller}</p>
                            <p className="text-muted m-0">Quantity: {quantity}</p>
                            <p className="text-muted mb-3">{quantity} x &#x20b9;{offerPrice} = <span className="bold">&#x20b9;{quantity * this.parseToInt(offerPrice)}</span></p>
                            <span 
                            style={{color : "#fb641c"}}
                            className="cart-remove"
                            onClick={() => this.props.handleRemoveFromCart(id)}>
                            REMOVE</span>
                        </div>
                    </Col>
                    
                </Row>
            </ListGroupItem>
        )
    }
}
