import React, { Component } from "react";

class Ordered extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    const { id, title, desc, quantity } = this.props.item;
    return (
      <div className="details">
        <div className="image"></div>
        <div className="text">
          <h3>{title}</h3>
          <div>{this.props.cart ? <input type="Number" value={quantity}/>: <h3>{quantity}</h3>}</div>
          <p>{desc}</p>
          {!this.props.cart ? <p>{'Delivered'}</p>: ''}
        </div>
      </div>
    );
  }
}

export default Ordered;
