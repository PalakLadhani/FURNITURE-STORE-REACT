// src/components/ProductDetails.js
import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { doorsData } from "../Data/data"; // Import doors data

const ProductDetails = () => {
  const { id } = useParams();
  const product = doorsData.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Product not found.</p>;
  }

  const {
    image,
    name,
    description = "Premium quality doors with elegant designs.",
  } = product;

  return (
    <ProductDetailsContainer>
      <img src={image} alt={name} />
      <div className="details">
        <h2>{name}</h2>
        <p>{description}</p>
        {/* Add any other details you want to display here */}
      </div>
    </ProductDetailsContainer>
  );
};

const ProductDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;

  img {
    width: 300px;
    height: 400px;
    object-fit: cover;
    border-radius: var(--radius);
  }

  .details {
    max-width: 500px;

    h2 {
      font-size: 2rem;
      color: var(--clr-primary-5);
    }

    p {
      margin-top: 1rem;
      font-size: 1.1rem;
      color: var(--clr-grey-5);
    }
  }
`;

export default ProductDetails;
