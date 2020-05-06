import * as actionTypes from '../constants/actionTypes'
import shop from '../../api/shop'

//PRODUCT ACTIONS
const receiveProducts = products => ({
    type: actionTypes.RECEIVE_PRODUCTS,
    payload: { products }
})

export const getProductsFromApi = () => dispatch => {
    //shop.getProducts(), fake api request
    dispatch(receiveProducts(shop.getProducts()))
}

export const incrementQuantity = productId => ({
    type: actionTypes.INCREMENT_QUANTITY,
    payload: { productId }
})

export const decrementQuantity = productId => ({
    type: actionTypes.DECREMENT_QUANTITY,
    payload: { productId }
})

//WISHLIST ACTIONS
export const addToWishlist = productId => ({
    type: actionTypes.ADD_TO_WISHLIST,
    payload: { productId }
})

export const removeFromWishlist = productId => ({
    type: actionTypes.REMOVE_FROM_WISHLIST,
    payload: { productId }
})

//CART ACTIONS
export const addToCart = (productId, quantity) => ({
    type: actionTypes.ADD_TO_CART,
    payload: { productId, quantity }
})

export const removeFromCart = productId => ({
    type: actionTypes.REMOVE_FROM_CART,
    payload: { productId }
})

export const checkout = allProductsId => ({
    type: actionTypes.CHECKOUT,
    payload: { allProductsId }
})