import { combineReducers } from 'redux'
import * as actionTypes from '../constants/actionTypes'

const addedIds = (state = [], action) => {
    switch(action.type) {

        case actionTypes.ADD_TO_WISHLIST:
            //Check if productId already present
            if(state.indexOf(action.payload.productId) !== -1)
            return state
            return [...state, action.payload.productId].reverse()

        case actionTypes.REMOVE_FROM_WISHLIST:
            return state.filter(id => action.payload.productId !== id)

        case actionTypes.CHECKOUT:
            return []
            
        default:
            return state
    }
}

const wishlist = combineReducers({ addedIds })
export default wishlist

//utility functions
export const isWishlisted = (wishlist, id) => wishlist.addedIds.includes(id)

export const getTotalWishlistItems = wishlist => wishlist.addedIds.length

export const getAllWishlists = (products, wishlist) =>
wishlist.addedIds.map(id => products.byId[id])