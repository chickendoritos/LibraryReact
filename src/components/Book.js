import React, { Component } from 'react';

class Book extends Component {
  render() {
    return (
      <div className="book">
        <h3>{this.props.book.name}</h3>
        <p>{this.props.book.desc}</p>
        <button className="customBtn" onClick={() => this.props.addBookToCart(this.props.book.name)}>Add To Cart</button>
      </div>
    );
  }
}

export default Book;