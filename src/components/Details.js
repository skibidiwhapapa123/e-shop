import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-purple my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end title */}
              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid " alt="produkt" />
                </div>

                <div className="col-10 mx-auto col-md-6 my-3 ">
                  <h2>Model: {title}</h2>
                  <h4 className="  text-muted  mt-3 mb-2">
                    Výrobce: <span className="text-capitalize">{company}</span>
                  </h4>
                  <h4 className="text-pink">
                    <strong>
                      Cena:
                      <span className="ml-1 "> {price}kč</span>
                    </strong>
                  </h4>
                  <p className="font-weight-bold mt-3 mb-0">
                    Informace o produktu:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  <div>
                    <Link to="/">
                      <ButtonContainer>Produkty</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                      }}
                    >
                      {inCart ? "V košíku" : "Koupit"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
