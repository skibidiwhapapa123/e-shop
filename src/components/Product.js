import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { ProductConsumer } from "../context";

class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {value => (
              <div
                className="img-container p-5"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/detaily">
                  <img src={img} alt="produkt" className="card-img-top" />
                </Link>
                <button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className=" pink mb-0" disabled>
                      V košíku
                    </p>
                  ) : (
                    <i className="fas fa-cart-plus pink" />
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          {/* card footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0 fs-1">
              <b>{title}</b>
            </p>
            <h5 className="text-pink font-italic mb-0">{price}Kč</h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

const ProductWrapper = styled.div`
  .pink {
    color: var(--Pink);
  }
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }

  .card-footer {
    backgorund: transparent;
    border-top: transparent;
    transition: all 0.5s linear;
  }

  &:hover {
    .card {
      border: 0.05rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.5s linear;
  }

  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: var(--Purple);
    font-size: 1.4rem;
    border-radius: 0.3rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.5s linear;
  }

  img-container:hover {
    transform: scale(1.1);
  }

  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    cursor: pointer;
  }
  p {
    font-size: 1rem;
  }
   {
    color: var(--Purple);
  }
  .fs-1 {
    font-size: 0.8rem;
  }
`;

export default Product;
