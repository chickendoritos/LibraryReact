import React, { Component } from 'react';

class Cart extends Component {
    renderCartItem = key => {
        const cartItem = this.props.cartItems[key];
        return (
            <div>
                {cartItem}
                <button onClick={() => this.props.removeBookFromCart(key)}>X Remove From Cart</button>
                <br /><br />
            </div>
        );
    };
    render() {
        return (
            <div>
                {Object.keys(this.props.cartItems).map(this.renderCartItem)}
            </div>
        );
    }
}

export default Cart;