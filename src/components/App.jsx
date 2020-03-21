import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './NavBar'
import ProductList from './product/'
import Cart from './cart/'
import ViewProduct from './viewproduct/'
import Wishlist from './wishlist/'
import Checkout from './checkout/'
import ScrollToTop from './ScrollToTop'
import productsApi from '../assets/productsApi' 


export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            products: [],
            wishlist: [],
            cart: [],
            totalItems: 0,
            totalAmount: 0,
            quantity: 1
        }
    }

    //Fake API fetch
    getProducts = () => {
        this.setState({products: productsApi})
    }

    componentDidMount(){
        //Call getProducts() here.
        this.getProducts()
    }

    calcTotalItems = () => {
        this.setState(prevState => ({
            totalItems: prevState.cart.length
        }))
    }

    calcTotalAmount = () => {
        const cartItems = this.state.cart
        if(cartItems.length === 0){
            this.setState({totalAmount: 0})
        }else{
            const totalAmount = cartItems.reduce((total, item) => total + (this.parseToInt(item.details.offerPrice) * item.quantity), 0)
            this.setState({totalAmount})
        }
    }

    handleAddToCart = selectedProduct => {
        //Check if product exists in cart
        const cart = this.state.cart
        const productId = selectedProduct.details.id

        if(cart.some(prod => prod.details.id === productId)){
            //product exists, only update its quantity
            const productQuantity = selectedProduct.quantity
            //find its index in the cart
            const index = cart.findIndex(el => el.details.id === productId)
            //update its quantity
            cart[index].quantity = cart[index].quantity + productQuantity
            //update cart and update total cart amount
            this.setState({cart}, () => {this.calcTotalAmount()})
        }else{
            //product not exists, add product to cart and update total cart amount
            this.setState({cart: [...this.state.cart, selectedProduct]}, () => {this.calcTotalAmount()})
        }

        //calcTotalAmount()
        //calc total amount gets called before cart is updated in the state as set state is async. Moved calcTotalAmount() to setState callback.

        //update total items after updating/adding cart items.
        this.calcTotalItems()
        //make quantity to 1 again
        this.setState({quantity: 1})
    }

    handleRemoveFromCart = prodId => {
        const cartItems = this.state.cart
        const index = cartItems.findIndex(item => item.details.id === prodId)
        cartItems.splice(index, 1)
        this.setState({cart: cartItems})
        //update total amount and total items after removing from cart
        this.calcTotalAmount()
        this.calcTotalItems()
    }

    handleAddToWishlist = prodId => {
        //check if product already in wishlist
        if(this.state.wishlist.includes(prodId)) return 
        //else add to wishlist
        this.setState({wishlist: [...this.state.wishlist, prodId]})
    }

    handleRemoveFromWishlist = prodId => {
        const wishlist = this.state.wishlist
        const index = wishlist.indexOf(prodId)
        wishlist.splice(index, 1)
        this.setState({wishlist})
    }

    updateQuantity = quantity => {
        this.setState({quantity})
    }

    reset = () => {
        this.setState({
            totalAmount: 0,
            totalItems: 0,
            cart: [],
            wishlist: []
        })
    }

    parseToInt = str => parseInt(str.split(',').join(''))

    render(){
        return(
            <Router>
                <ScrollToTop />
                <NavBar
                    totalItems={this.state.totalItems}
                    totalWishlistItems={this.state.wishlist.length}
                />
                <Switch>

                    <Route
                        exact path="/"
                        render={ props => 
                            <ProductList
                                {...props}
                                products={this.state.products}
                            />}
                    >
                    </Route>

                    <Route 
                        path="/ViewProduct/:pid"
                        render={ props => 
                            <ViewProduct 
                                {...props}
                                products={this.state.products}
                                cart={this.state.cart}
                                quantity={this.state.quantity}
                                handleAddToCart={this.handleAddToCart}
                                updateQuantity={this.updateQuantity}
                                wishlist={this.state.wishlist}
                                handleAddToWishlist={this.handleAddToWishlist}
                                handleRemoveFromWishlist={this.handleRemoveFromWishlist}
                            />}
                    >
                    </Route>

                    <Route 
                        path="/cart"
                        render= {props =>
                            <Cart
                                {...props}
                                items={this.state.cart}
                                totalAmount={this.state.totalAmount}
                                handleRemoveFromCart={this.handleRemoveFromCart}
                            />}
                    >
                    </Route>

                    <Route 
                        path="/wishlist"
                        render= {props =>
                            <Wishlist
                                {...props}
                                wishlist={this.state.wishlist}
                                products={this.state.products}
                                handleRemoveFromWishlist={this.handleRemoveFromWishlist}
                            />}
                    >
                    </Route>

                    <Route 
                        path="/Checkout"
                        render={props => <Checkout {...props} totalAmount={this.state.totalAmount} reset={this.reset}/>}
                    >
                    </Route>
                    
                </Switch>  
            </Router>

        )
    }
}