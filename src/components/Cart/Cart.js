import React, { Component } from "react";
import Title from "../title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CardTotals";
import { ProductConsumer } from "../../context";
import EmptyCart from "./EmptyCart";
export default class Store extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return <EmptyCart />;
            } else {
              return (
                <React.Fragment>
                  <Title name="Váš" title=" Košík" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />
                </React.Fragment>
              );
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}