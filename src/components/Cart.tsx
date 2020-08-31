import React from "react";
import { connect } from "react-redux";
import { State, OrderedBook } from "../actions";
import Ordered from "./Ordered";

class Cart extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { cartList } = this.props;
    if (cartList.cartList.length === 0) return <div>Card List is empty, Please add item to procced checkout</div>;

      const list = cartList.cartList.map((item:OrderedBook, index: number) => {
        return <Ordered item={item} key={index} cart={true}/>
      });

    return (
      <div className="main">
        <div className="orderedBook">{list}</div>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => ({ cartList: state.cartList });

export default connect(mapStateToProps, null)(Cart);
