import _ from 'lodash'
import { combineReducers } from 'redux'
import * as actionTypes from '../constants/actionTypes'

const byId = (state = {}, action) => {

    switch(action.type) {
        case actionTypes.RECEIVE_PRODUCTS:
            return {
                ...state,
                ...action.payload.products.reduce((obj, product) => {
                    obj[product.id] = product
                    return obj
                }, {})
            }
        default:
            return state
    }
}

const allIds = (state = [], action) => {

     switch(action.type) {
        case actionTypes.RECEIVE_PRODUCTS:
            let ids = action.payload.products.map(product => product.id)
            return [...state, ...ids]
        default:
            return state
    }
}

const selectedQuantityById = (state = {}, action) => {

    switch(action.type) {

        case actionTypes.RECEIVE_PRODUCTS:
            return {
                ...state,
                ...action.payload.products.reduce((obj, product) => {
                    obj[product.id] = 1
                    return obj
                }, {})
            }

        case actionTypes.INCREMENT_QUANTITY:
            return {
                ...state,
                [action.payload.productId]: state[action.payload.productId] + 1
            }

        case actionTypes.DECREMENT_QUANTITY:

            if(state[action.payload.productId] === 1)
            return state
            
            return {
                ...state,
                [action.payload.productId]: state[action.payload.productId] - 1
            }

        case actionTypes.CHECKOUT:
             return {
                ...state,
                ...action.payload.allProductsId.reduce((obj, productId) => {
                    obj[productId] = 1
                    return obj
                }, {})
            }

        default:
            return state
    }
}

const products = combineReducers({ byId, allIds, selectedQuantityById })
export default products

//utility functions
export const getProduct = (products, id) => products.byId[id]

export const getAllProducts = products => _.values(products.byId)

export const getAllProductsId = products => products.allIds

export const getSelectedQuantity = (products, id) =>
products.selectedQuantityById[id]