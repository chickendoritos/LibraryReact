import React, { Component } from 'react';
import Book from "./Book";
import Cart from "./Cart";
import books from "../data/books";

class App extends Component {
  state = {
    books: books,
    cartItems: {}
  };
  addBookToCart = (bookName) => {
    const cartItems = { ...this.state.cartItems };
    cartItems[`book${Date.now()}`] = bookName;
    this.setState({ cartItems });
  };
  removeBookFromCart = (key) => {
    const cartItems = { ...this.state.cartItems };
    delete cartItems[key];
    this.setState({ cartItems });
  };
  render() {
    const bookListSyle = {
      width: "400px",
      display: "inline-block",
      float: "left"
    };
    const cartSyle = {
      width: "400px",
      display: "inline-block",
      float: "left",
      "padding-top" : "100px"
    };
    return (
      <div>
        <div style={bookListSyle}>
          <h1>Welcome to the library!</h1>
          <h3>Add books to your cart.</h3>
          {Object.keys(this.state.books).map(key => <Book key={key} index={key} book={this.state.books[key]} addBookToCart={this.addBookToCart} />)}
        </div>
        <div style={cartSyle}>
        <h3>Your Cart Below</h3>
          <Cart cartItems={this.state.cartItems} removeBookFromCart={this.removeBookFromCart} />
          <h4>You're checking out {Object.keys(this.state.cartItems).length} books!</h4>
        </div>
      </div>
    );
  }
}

export default App;
