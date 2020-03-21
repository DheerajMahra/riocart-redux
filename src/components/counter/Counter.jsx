import React, { Component } from 'react'
import './Counter.css'

export class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: this.props.quantity
        }
    }

    handleIncrement = () => {
        this.setState(prevState => ({
            value: prevState.value + 1
        }), function(){
            this.props.updateQuantity(this.state.value)
        })
    }

    handleDecrement = () => {
        if(this.state.value <= 1) return 

        this.setState(prevState => ({
            value: prevState.value - 1
        }), function(){
            this.props.updateQuantity(this.state.value)
        })
    }

    render() {
        return (
            <div className="counter">
                <input
                    type="number"
                    className="counter-value"
                    value={this.state.value}
                    min="1"
                    readOnly
                >
                </input>
                <span className="counter-dec" onClick={() => this.handleDecrement()}>_</span>
                <span className="counter-inc" onClick={() => this.handleIncrement()}>+</span>
            </div>
        )
    }
}

export default Counter
