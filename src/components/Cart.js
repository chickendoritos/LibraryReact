import React, { Component } from 'react';

class Cart extends Component {
    renderCartItem = key => {
        const cartItem = this.props.cartItems[key];
        return (
            <div className="cartItem" key={key}>
                <h3>{cartItem}</h3>
                <button className="customBtn redBtn" onClick={() => this.props.removeBookFromCart(key)}>Remove From Cart</button>
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