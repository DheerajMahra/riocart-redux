import React from 'react'
import {Container, Row, Col, Badge} from 'reactstrap'
import './ViewProduct.css'
import Counter from '../counter/'
import Button from '../shared/button/Button'

export default class ViewProduct extends React.Component{

    constructor(props){
        super(props)
        this.product = this.props.products[this.props.match.params.pid]
        this.cart = this.props.cart

        this.state = {
            selectedProduct: null,
            isWishlist: this.props.wishlist.includes(this.product.id)
        } 
    }

    addToCart = quantity => {
        this.setState({
            selectedProduct: {
                details: this.product,
                quantity: quantity
            }
        }, function(){
            this.props.handleAddToCart(this.state.selectedProduct)
        })
    }

    addToWishlist = prodId => {
        const isWishlisted = this.state.isWishlist

        if(isWishlisted){
            this.props.handleRemoveFromWishlist(prodId)
        }else{
            this.props.handleAddToWishlist(prodId)
        }
        this.setState(prevState => ({
            isWishlist: !prevState.isWishlist
        }))
    }

    render(){
 
        return(
            <Container style={{marginTop: "5.3rem"}}>
                <Row>

                    <Col md="5">
                        <img src={this.product.img} className="w-100" alt="product"/>
                        <Counter
                            quantity={this.props.quantity}
                            updateQuantity={this.props.updateQuantity}
                        />
                    </Col>

                    <Col md="7">
                        <h5 className="mb-0 d-inline-block">{this.product.title}</h5>
                        <span className="float-right">
                            <ion-icon name="heart-outline"></ion-icon>
                        </span>
                        <br />
                        <Badge color="success font-weight-light">{this.product.rating} &#9733;</Badge>
                        <p className="mb-0 mt-2 text-success">Special Price</p>
                        <h2 className="d-inline-block mr-2">&#x20b9;{this.product.offerPrice}</h2>
                        <span className="d-inline-block text-muted"><del>&#x20b9;{this.product.price}</del></span>
                        <p className="font-weight-bold">Available Offers</p>
                        <p className="mb-1">
                        <ion-icon name="pricetags-outline"></ion-icon>
                        <small className="font-weight-bold mx-2">Bank offer</small>
                        <span>10% off* with Axis Bank Buzz Credit Card</span>
                        </p>
                        <p className="mb-1">
                        <ion-icon name="pricetags-outline"></ion-icon>
                        <small className="font-weight-bold mx-2">Bank offer</small>
                        <span>5% Unlimited Cashback on Shopcart Card</span>
                        </p>
                        <p>
                        <ion-icon name="reload-outline"></ion-icon>
                        <span className="ml-2">Get upto ₹6450 off on exchange</span>
                        </p>
                        <p className="font-weight-bold">Product Description</p>
                        <p>{this.product.desc}</p>
                        <div className="btn-container">
                            <Button
                            text={this.state.isWishlist ? "Wishlisted" : "Wishlist"}
                            event={() => this.addToWishlist(this.product.id)}
                            />
                            <Button
                            text="Add to Cart"
                            event={() => this.addToCart(this.props.quantity)}
                            />
                        </div>
                    </Col>

                </Row>
            </Container>
            
        )
    }
}