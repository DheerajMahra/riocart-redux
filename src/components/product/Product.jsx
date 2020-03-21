import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Badge, ListGroupItem} from 'reactstrap'

const Product = props => {

    const {details} = props

    return(
        <Link to={`/ViewProduct/${details.id}`} className="pd-link">
            
            <ListGroupItem key={details.id} className="mb-4 shadow-sm">

                <Row>
                
                    <Col md="4">
                        <img src={details.img} className="product-img w-100" alt="product"/>
                    </Col>

                    <Col md="8">
                        <h5 className="mb-0 d-inline-block">{details.title}</h5><br />  
                        <Badge color="success font-weight-light">{details.rating} &#9733;</Badge>
                        <p className="mb-0 mt-2 text-success">Special Price</p>
                        <h2 className="d-inline-block mr-2">&#x20b9;{details.offerPrice}</h2>
                        <span className="d-inline-block text-muted"><del>&#x20b9;{details.price}</del></span>
                        <p className="mb-0">{details.desc}</p>
                    </Col>

                </Row>

            </ListGroupItem>

        </Link>
    )
}

export default Product