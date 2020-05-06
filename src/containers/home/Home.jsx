import React from 'react'
import { connect } from 'react-redux'
import { getAllProducts } from '../../redux/reducers/products'

import ProductsList from '../../components/products-list/ProductsList'

const Home = props => {

    const { products } = props
    
    return (
        <div className="home">
            <ProductsList products={products}/>
        </div>
    )
}

const mapStateToProps = state => ({
    products: getAllProducts(state.products)
})

export default connect(mapStateToProps)(Home)
