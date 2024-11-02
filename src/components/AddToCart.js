import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import Amount from "./Amount";
import { useCartContext } from "../context/cart_context";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, stock, colors } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      let newAmount = oldAmount + 1;

      if (newAmount > stock) {
        newAmount = stock;
      }
      return newAmount;
    });
  };

  const decrease = () => {
    setAmount((oldAmount) => {
      let newAmount = oldAmount - 1;

      if (newAmount < 1) {
        newAmount = 1;
      }
      return newAmount;
    });
  };

  return (
    <AddToCartContainer>
      <div className="colors">
        <span>Colors: </span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                className={`${
                  mainColor === color ? "color-btn active" : "color-btn"
                } `}
                style={{ background: color }}
                onClick={() => setMainColor(color)}
              >
                {mainColor === color ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="btn-container">
        <Amount amount={amount} increase={increase} decrease={decrease} />
        <Link
          to="/cart"
          className="btn"
          onClick={() => addToCart(id, mainColor, amount, product)}
        >
          Add to cart
        </Link>
      </div>
    </AddToCartContainer>
  );
};

const AddToCartContainer = styled.section`
  margin-top: 2rem;

  .colors {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    span {
      font-weight: bold;
      margin-right: 0.5rem;
    }
    .color-btn {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      margin-right: 0.5rem;
      border: none;
      cursor: pointer;
      opacity: 0.8;
      &.active {
        opacity: 1;
      }
      svg {
        color: white;
        font-size: 0.75rem;
      }
    }
  }

  .btn-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .btn {
      width: 150px;
      padding: 0.75rem;
      background-color: #333;
      color: white;
      border: none;
      border-radius: 5px;
      text-align: center;
      cursor: pointer;
      margin-top: 1rem;
      transition: background 0.3s;
      &:hover {
        background: #555;
      }
    }
  }
`;

export default AddToCart;
