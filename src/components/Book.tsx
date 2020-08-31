import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Book as BookInterface, addToCart } from "../actions";
import { connect } from "react-redux";

export interface Props {
  book: BookInterface;
  key: number;
}

class Book extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    const { id, title, desc } = this.props.book;

    return (
      <div
        className="flex-contant"
        onClick={(e) => {
          e.preventDefault();
          this.props.history.push(`/bookDetails/${id}`);
        }}
      >
        <div className="image"></div>
        <div className="text">
          <h3>{title}</h3>
          <p>{desc}</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              this.props.addToCart({ ...this.props.book, quantity: 1 });
              alert("Added Successfully");
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addToCart: addToCart,
};

export default connect(null, mapDispatchToProps)(withRouter(Book));
