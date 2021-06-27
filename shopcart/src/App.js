import './App.css';
import TheNav from "./navbar";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { products } from "./Products"
import { locations } from "./LocationData"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products,
      locations: locations,    
    }
  }

  onIncrement = (addvalue) => {
    if(addvalue.value < 10) {
      const updatedValue = addvalue.value++;
      this.setState({updatedValue});
    }
  }
  onDecrement = (decvalue) => {
    if(decvalue.value > 0) {
      const updatedValue = decvalue.value--;
      this.setState({updatedValue});
    }
  }

  // totalValue = () => { 
  //   this.state.products
  //   .map((prod) => prod.value)
  //   .reduce((acc, curr, index) => acc + curr, 0)}

  render() {
    return (
      {}, 
      (
        <div className="App">
          <TheNav totalValue={this.state.products
            .map((prod) => prod.value)
            .reduce((acc, curr, index) => acc + curr, 0)}
            prods={this.state.products} locationData={this.state.locations} onIncrement={this.onIncrement}
            onDecrement={this.onDecrement} />
        </div>
      )
    )
  }
}

export default App;
