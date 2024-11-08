// src/components/Product.js
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Product = ({ id, image, name }) => {
  return (
    <ProductContainer>
      <div className="container">
        <img src={image} alt={name} />
        <Link to={`/product/${id}`} className="link">
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
      </footer>
    </ProductContainer>
  );
};

const ProductContainer = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    border-radius: var(--radius);
    transition: var(--transition);
  }

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
  }

  .container:hover img {
    opacity: 0.9;
  }

  .container:hover .link {
    opacity: 1;
  }

  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 576px) {
    footer {
      flex-direction: column;
      text-align: center;
    }

    img {
      height: auto;
    }
  }
`;
export default Product;
