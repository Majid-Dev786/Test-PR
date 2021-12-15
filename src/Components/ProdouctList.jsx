import React, { Component, useState } from "react";
import Products from "./Products.jsx";

export default class ProdouctList extends Component {
  renderproducts = () => {
    if (this.props.products.length === 0) return <h1>Go Back To Shoping</h1>;

    return this.props.products.map((x, i) => {
      return (
        <Products
          Change={(e) => this.imputHandler(e, x.id)}
          onInc={() => this.props.onInc(x.id)}
          onDec={() => this.props.onDec(x.id)}
          onRemove={() => this.props.onRemove(x.id)}
          products={x}
          key={i}
        />
      );
    });
  };

  render() {
    return <div>{this.renderproducts()}</div>;
  }
}
