import React from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap'

function PriceList(props) {
    return (
        <ListGroup className="shadow-sm mb-4">
            <ListGroupItem>Price ( {props.items.length} item )<span className="float-right">&#x20b9;{props.totalAmount}</span></ListGroupItem>
            <ListGroupItem>Delivery Fee<span className="float-right">&#x20b9;0</span></ListGroupItem>
            <ListGroupItem color="success"><b>TOTAL AMOUNT<span className="float-right">&#x20b9;{props.totalAmount}</span></b></ListGroupItem>
        </ListGroup>
    )
}

export default PriceList
