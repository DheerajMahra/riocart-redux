import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import './Checkout.css'

export default class Checkout extends React.Component {
    
    componentWillUnmount(){
        this.props.reset()
    }

    render(){
        return (
            <Container style={{marginTop: "5.3rem"}}>
                <Row>
                    <Col md="8" className="m-auto text-center">
                        <h4 className="lead text-muted font-italic">You shop like a Pro! Thankyou.</h4>
                        <h2 className="font-weight-bold">You spent &#x20b9;{this.props.totalAmount}</h2>
                        <img src="https://cdni.iconscout.com/illustration/free/thumb/shopping-fun-1567066-1322717.png" alt="shopping" className="checkout-img"/>
                        <h4 className="lead text-muted font-italic mb-4">While we're making your products ready, you can star this project on Github.</h4>
                        <p className="text-muted small"><mark>Made with React by Dheeraj Mahra</mark></p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
