import React from 'react'
import './WishlistItem.css'
import {Link} from 'react-router-dom'
import {Row, Col, ListGroupItem} from 'reactstrap'

const WishlistItem = props => {

    const { item, removeFromWishlist } = props
    const{ id, title, img, desc } = item

    return (
        <Link
            to={`/ViewProduct/${id}`}
            className="wl-link"
        >
            <ListGroupItem className="mb-4 shadow-sm">
                <Row>

                    <Col md="4">
                        <img src={img} className="w-100 cart-img" alt="wishlist"/>
                    </Col>
                    
                    <Col md="8">
                        <div className="prod-details">
                            <h5 className="mb-2">{title}</h5>
                            <p>{`${desc.substring(0, 150)}...`}</p>
                            <span 
                                style={{color : "#fb641c"}}
                                className="cart-remove"
                                onClick={e =>  {
                                    e.preventDefault()
                                    removeFromWishlist(id)
                                }}
                            >REMOVE</span>
                        </div>
                    </Col>
                </Row>
            </ListGroupItem>
        </Link>
    )
}

export default WishlistItem
