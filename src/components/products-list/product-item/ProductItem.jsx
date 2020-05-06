import React from 'react'
import './ProductItem.css'
import { Link } from 'react-router-dom'
import { Row, Col, Badge, ListGroupItem } from 'reactstrap'

const ProductItem = props => {
    
    const { id, img, title, rating, offerPrice, price, desc } = props.details

    return (
        <Link to={`/ViewProduct/${id}`} className="pd-link">

        <ListGroupItem key={id} className="mb-4 shadow-sm">

            <Row>
            
                <Col md="4">
                    <img src={img} className="product-img w-100" alt="product"/>
                </Col>

                <Col md="8">
                    <h5 className="mb-0 d-inline-block">{title}</h5><br />  
                    <Badge color="success font-weight-light">{rating} &#9733;</Badge>
                    <p className="mb-0 mt-2 text-success">Special Price</p>
                    <h2 className="d-inline-block mr-2">&#x20b9;{offerPrice}</h2>
                    <span className="d-inline-block text-muted"><del>&#x20b9;{price}</del></span>
                    <p className="mb-0">{desc}</p>
                </Col>

            </Row>

        </ListGroupItem>

        </Link>
    )
}

export default ProductItem
