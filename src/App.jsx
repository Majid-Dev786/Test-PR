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
    const filterd_Id = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: filterd_Id });
  };
  
  inputHandler = (e, id) => {             
    const index = this.state.products.findIndex((items) => items.id === id);

    const products_Index = this.state.products[index]; // <= The problem was here with products_Index, it couldn't get the proper index because i shouldn't used the bracket and spread operator (...)        

    products_Index.title = e.target.value;

    const products_Clone = [...this.state.products];

    products_Clone[index] = products_Index;

    this.setState({ products_Clone });
  };

  incroment_Handler = (id) => {   
    
    const index = this.state.products.findIndex((items) => items.id === id);

    const products_Index = this.state.products[index]; // <= alse same problem here

    products_Index.quantity++;

    const products_Clone = [...this.state.products];

    products_Clone[index] = products_Index;

    this.setState({ products_Clone });
  };

  deccroment_Handler = (id) => {         
    const index = this.state.products.findIndex((x) => x.id === id);

    const products_Index = this.state.products[index]; //<= and same problem agin
    
    if (products_Index.quantity === 0) {
      const filterd_Id = this.state.products.filter((p) => p.id !== id);

      this.setState({ products: filterd_Id });
    } else {
      const products_Clone = [...this.state.products];

      products_Index.quantity--;

      products_Clone[index] = products_Index;

      this.setState({ products_Clone });
    }
  };
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
          change={this.inputHandler}
          onInc={this.incroment_Handler}
          onDec={this.deccroment_Handler}
        />
      </div>
    );
  }
}
export default App;
