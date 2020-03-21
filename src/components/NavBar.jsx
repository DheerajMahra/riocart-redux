import React from 'react'
import {Link} from 'react-router-dom'
import {
  Badge,
  Container,
  Navbar,
  NavbarBrand,
  Nav,  
  NavItem} from 'reactstrap'

const NavBar = props => {

  const {totalItems, totalWishlistItems} = props

  return (
    <div className="mb-4">

      <Navbar color="light shadow" light fixed="top">
      <Container>

        <Link to="/">
          <NavbarBrand 
            className="d-flex justify-content-center align-items-center">
              <ion-icon name="logo-react" style={{fontSize: "24px", marginRight: "5px"}}></ion-icon>
              Riocart
          </NavbarBrand>
        </Link>

        <Nav className="flex-row" navbar>

            <NavItem className="mr-3">
              <Link  to="/wishlist" className="d-flex justify-content-center align-items-center">
                <ion-icon name="heart-outline" style={{fontSize: "24px"}}></ion-icon>
                <Badge className="ml-1" color={totalWishlistItems ? "primary" : "secondary"}> {totalWishlistItems}
                </Badge>
              </Link>
            </NavItem>

            <NavItem>
              <Link  to="/cart" className="d-flex justify-content-center align-items-center">
                <ion-icon name="cart-outline" style={{fontSize: "24px"}}></ion-icon>
                <Badge className="ml-1" color={totalItems ? "success" : "secondary"}>{totalItems}
                </Badge>
              </Link>
            </NavItem>

        </Nav>

      </Container>
      </Navbar>

    </div>
  );
}

export default NavBar;