import React from 'react'
import {Container, Row, Col, ListGroup} from 'reactstrap'
import './Product.css'
import Product from './Product'

const  ProductList = props => {

    const {products} = props 

    return(
        <Container>
            <Row>
                <Col>
                    <ListGroup style={{marginTop: "3.8rem"}}>
                    {
                        products.map(prod => <Product key={prod.id} details={prod}/>)
                    }
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductList 