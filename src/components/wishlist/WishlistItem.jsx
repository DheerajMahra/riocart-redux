import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, ListGroupItem} from 'reactstrap'

const shortString = (str, len) => str.length > len ? `${str.substring(0, len)}...` : str

export default function WishlistItem(props) {
    const{id, title, img, desc} = props.item

    return (
        <Link to={`/ViewProduct/${id}`} style={{textDecoration: "none",
    color: "inherit"}}>
            <ListGroupItem className="mb-4 shadow-sm">
                <Row>

                    <Col md="4">
                        <img src={img} className="w-100 cart-img" alt="wishlist"/>
                    </Col>
                    
                    <Col md="8">
                        <div className="prod-details">
                            <h5 className="mb-2">{title}</h5>
                            <p>{shortString(desc, 200)}</p>
                        </div>
                    </Col>
                </Row>
            </ListGroupItem>
        </Link>
    )
}
