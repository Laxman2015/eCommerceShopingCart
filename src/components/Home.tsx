import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { State, getBookLists, Book as BookInterface } from "../actions";
import Book from "./Book";

class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      bookLists: [],
      cartLists: [],
    };
  }

  render() {
    const { bookLists } = this.props;
    if (bookLists.bookLists.length === 0) return <div>Loading...</div>;

      const list = bookLists.bookLists[0].map((item:BookInterface, index: number) => {
        return <Book book={item} key={index} />
      });

    return (
      <div className="main">
        <div className="flex-container">{list}</div>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => ({ bookLists: state.bookList });

const mapDispatchToProps = {
  getBookLists: getBookLists,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
