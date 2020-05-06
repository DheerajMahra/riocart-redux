import React from 'react'
import {Link} from 'react-router-dom'
import { NavItem, Badge } from 'reactstrap'

const NavListItem = props => {

    const { count, to, blue} = props
    let color = count ? (blue ? 'primary' : 'success') : 'secondary'
    
    return (
        <NavItem className="mr-3">
            <Link  to={to} className="d-flex justify-content-center align-items-center">
                {props.children}
                <Badge
                    className="ml-1"
                    color={color}
                >{count}</Badge>
            </Link>
        </NavItem>
    )
}

export default NavListItem