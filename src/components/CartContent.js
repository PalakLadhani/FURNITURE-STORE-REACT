import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <CartContentContainer className="section section-center">
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className="link-container">
        <Link to="/products" className="link-btn">
          Add more products
        </Link>
        <button
          type="button"
          className="link-btn clear-btn"
          onClick={clearCart}
        >
          Clear cart
        </button>
      </div>
      <CartTotal />
    </CartContentContainer>
  );
};

const CartContentContainer = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }

  .link-btn {
    text-transform: capitalize;
    padding: 0.5rem 1rem;
    background: #333;
    color: white;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
    &:hover {
      background: #555;
    }
  }

  .clear-btn {
    background: #cc0000;
  }
`;

export default CartContent;
