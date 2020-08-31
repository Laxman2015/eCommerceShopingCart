import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { State, OrderedBook } from "../actions";
import Ordered from "./Ordered";

class OrderedBooks extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { orderedList } = this.props;
    if (orderedList.orderedList.length === 0) return <div>Loading...</div>;

      const list = orderedList.orderedList[0].map((item:OrderedBook, index: number) => {
        return <Ordered item={item} key={index} />
      });

    return (
      <div className="main">
        <div className="orderedBook">{list}</div>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => ({ orderedList: state.orderedList });

export default connect(mapStateToProps, null)(OrderedBooks);
