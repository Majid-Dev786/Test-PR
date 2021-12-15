// import React from "react";
import styles from "../Css/product.module.css";
import { BiTrash } from "react-icons/bi";
import React, { Component } from "react";

class Products extends Component {
  render() {
    return (
      <div className={styles.products}>
        <p>
          Products is {this.props.products.title}: {this.props.products.price}{" "}
          {this.props.children}
        </p>

        <p>{this.props.products.description}</p>

        <span className={styles.quantity}>{this.props.products.quantity}</span>

        <input
          className={styles.input}
          type='text'
          onChange={this.props.Change}
        />

        <button
          onClick={this.props.onDec}
          className={`${styles.button} ${
            this.props.products.quantity === 0 && styles.remove
          }`}>
          {this.props.products.quantity > 0 ? "-" : <BiTrash />}
        </button>

        <button
          onClick={this.props.onInc}
          className={`${styles.button} ${styles.inc}`}>
          +
        </button>

        <button className={styles.button} onClick={this.props.onRemove}>
          Delete
        </button>
      </div>
    );
  }
}
export default Products;
