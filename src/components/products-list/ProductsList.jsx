import React from 'react'
import {Container, Row, Col, ListGroup} from 'reactstrap'

import ProductItem from './product-item/ProductItem'

const ProductsList = props => {

    const { products } = props

    return (
        <Container style={{marginTop: "2.8rem"}}>
        <Row>
        <Col>
            <ListGroup>
            {
                products.map(prod => <ProductItem key={prod.id} details={prod} />)
            }
            </ListGroup>
        </Col>
        </Row>
        </Container>
    )
}

export default ProductsList
