// src/components/Product.js
import React from "react";
import styled from "styled-components";

const Product = ({ image, name, description }) => {
  return (
    <ProductContainer>
      <ProductImage src={image} alt={name} />
      <ProductDetails>
        <ProductTitle>{name}</ProductTitle>
        <ProductDescription>{description}</ProductDescription>
      </ProductDetails>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%; // Ensures equal width across all products
  max-width: 250px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px; // Set a fixed height for consistency
  object-fit: cover;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 15px;
`;
const ProductTitle = styled.h2`
  font-size: 1.3rem;
  color: #333;
  font-family: "Roboto Slab", serif;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: #555;
  font-family: "Arial", sans-serif;
  line-height: 1.5;
`;

export default Product;
