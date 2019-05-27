import React, { Component } from "react";
import Product from "./Product";
import Title from "./title";
import { storeProducts } from "../data";
import { ProductConsumer } from "../context";

class ProductList extends Component {
  state = {
    products: storeProducts
  };
  render() {
    console.log(this.state.products);
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Naše " title="Produkty" />
            <div className="row" />
            <ProductConsumer>
              {value => {
                return <h1>{value}</h1>;
              }}
            </ProductConsumer>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;

//<Product />
