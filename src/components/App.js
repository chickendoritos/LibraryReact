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
    if (this.bookExistsInCart(bookName)) {
      const cartItems = { ...this.state.cartItems };
      cartItems[bookName] = bookName;
      this.setState({ cartItems });
    } else {
      alert("You've already added this book!");
    }
  };
  removeBookFromCart = (key) => {
    const cartItems = { ...this.state.cartItems };
    delete cartItems[key];
    this.setState({ cartItems });
  };
  bookExistsInCart = (key) => {
    var result = false;
    if (this.state.cartItems[key] === undefined)
      result = true;

    return result;
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
      float: "left"
    };
    return (
      <div>
        <h1>Welcome to the library!</h1>
        <div className="box" style={bookListSyle}>
          <h3>Add books to your cart!</h3>
          {Object.keys(this.state.books).map(key => <Book key={key} index={key} book={this.state.books[key]} addBookToCart={this.addBookToCart} />)}
        </div>
        <div className="box" style={cartSyle}>
          <h3>Your Cart Below</h3>
          <Cart cartItems={this.state.cartItems} removeBookFromCart={this.removeBookFromCart} />
          <h4>You're checking out {Object.keys(this.state.cartItems).length} books!</h4>
        </div>
      </div>
    );
  }
}

export default App;
