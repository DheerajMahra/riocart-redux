import { combineReducers } from 'redux'
import products, * as fromProducts from './products'
import cart, * as fromCart from './cart'
import wishlist from './wishlist'

const rootReducer = combineReducers({
    products,
    cart,
    wishlist
})

export default rootReducer

//parseToInt converts product price "12,000" -> 12000
const parseToInt = str => parseInt(str.split(',').join(''))

//total price of individual product -> (product X it's quantity)
export const getTotalItemPrice = (state, id) =>
    fromCart.getQuantity(state.cart, id) *
    parseToInt(fromProducts.getProduct(state.products, id).offerPrice)

//total price of all items, final payable amount
export const getTotalPrice = (state) => 
state.cart.addedIds
    .map(id => getTotalItemPrice(state, id))
    .reduce((total, price) => total + price, 0)