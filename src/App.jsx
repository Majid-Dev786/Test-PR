import React, { Component } from "react";
import "./Css/index.css";
import "./Css/App.css";
import ProdouctList from "./Components/ProdouctList";
import Navbar from "./Components/Navbar";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }
  state = {
    products: [
      {
        title: "Iphone",
        price: "1100$",
        description: "13 Pro Max",
        quantity: 3,
        id: 1,
      },
      {
        title: "Galaxy",
        price: "700$",
        description: "21 Ultra",
        quantity: 2,
        id: 2,
      },
      {
        title: "One Plus",
        price: "900$",
        description: "9T Pro",
        quantity: 1,
        id: 3,
      },
    ],
  };
  removeHadler = (id) => {
    const filterd = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: filterd });
  };

  ///////////////////////////////////// Problem is Probably Here /////////////////////////////////
  ///////////////////////// increment and decrement Handler is not working ///////////////////////
  ////////////// Also When the Quantity Reaches Zero Component Will Not Get Deleted //////////////
  //////////////////////////////// and imput Handler is not working ////////////////////////////////

  inputHandler = (e, id) => {
    const index = this.state.products.findIndex((items) => items.id === id);

    const products_Index = { ...this.state.products[index] };

    products_Index.title = e.target.value;

    const products_Copy = [...this.state.products];

    products_Copy[index] = products_Index;

    this.setState({ products_Copy });
  };

  incroment_Handler = (id) => {
    // let copy = [...this.state.products];
    // let select_products = copy.find((x) => x.id === id);
    // select_products.quantity++;
    // this.setState({ copy });
    const index = this.state.products.findIndex((items) => items.id === id);

    const products_Index = { ...this.state.products[index] };

    products_Index.quantity++;

    const products_Copy = [...this.state.products];

    products_Copy[index] = products_Index;

    this.setState({ products_Copy });
  };

  deccroment_Handler = (id) => {
    // let copy = [...this.state.products];
    // let find_products = copy.find((x) => x.id === id);
    // if (find_products.quantity === 0) {
    //   const filtered = copy.filter((x) => x.id !== id);
    //   this.setState({ copy: filtered });
    // } else {
    //   find_products.quantity--;
    //   this.setState({ copy });
    // }
    const index = this.state.products.findIndex((x) => x.id === id);

    const products_Index = { ...this.state.products[index] };

    if (products_Index.quantity === 0) {
      const filterd = this.state.products.filter((p) => p.id !== id);

      this.setState({ products: filterd });
    } else {
      const products_Copy = [...this.state.products];

      products_Index.quantity--;

      products_Copy[index] = products_Index;

      this.setState({ products_Copy });
    }
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("this is prevProps =>", prevProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  render() {
    console.log("render");
    return (
      <div className='contatiner' id='title'>
        <Navbar
          total_Items={this.state.products.filter((p) => p.quantity > 0).length}
        />
        <h1>Shoping App</h1>
        <ProdouctList
          products={this.state.products}
          onRemove={this.removeHadler}
          Change={this.inputHandler}
          onInc={this.incroment_Handler}
          onDec={this.deccroment_Handler}
        />
      </div>
    );
  }
}
export default App;
