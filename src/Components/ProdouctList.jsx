import React, { Component, useState } from "react";
import Products from "./Products.jsx";

export default class ProdouctList extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.products !== this.props.products) {
      // Some Ajax Call =>
    }
  }

  renderproducts = () => {
    if (this.props.products.length === 0) return <h1>Go Back To Shoping</h1>;
    const { onRemove, change, onInc, onDec, products } = this.props;

    return products.map((maped_Products, index) => {
      return (
        <Products
          Products={products}
          change={(event) => change(event, maped_Products.id)}
          onInc={() => onInc(maped_Products.id)}
          onDec={() => onDec(maped_Products.id)}
          onRemove={() => onRemove(maped_Products.id)}
          products={maped_Products}
          key={index}
        />
      );
    });
  };

  render() {
    return <div>{this.renderproducts()}</div>;
  }
}
