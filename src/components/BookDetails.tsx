import React, { Component } from "react";
import { Book as BookInterface, addToCart, State, Book } from "../actions";
import { connect } from "react-redux";

export interface Props {
  book: BookInterface;
  key: number;
}

class BookDetails extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    const { match, bookLists} = this.props;
    const itemId = match ? match.params.id : 1;
    if(!bookLists.bookLists[0]) return <div>Loading...</div>;
    
    const { id, title, desc } = bookLists.bookLists[0].filter((item: Book) => item.id == itemId)[0];

    return (
      <div className="details">
        <div className="image"></div>
        <div className="text">
          <h3>{title}</h3>
          <p>{desc}</p>
          <button
            onClick={() => this.props.addToCart({id, title, desc, quantity: 1})}
          >
            Add To Cart
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: State) => ({ bookLists: state.bookList });

const mapDispatchToProps = {
  addToCart: addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
