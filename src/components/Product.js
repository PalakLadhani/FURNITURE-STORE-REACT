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
  flex-direction: row;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 900px; // Limit width for large screens

  @media (max-width: 768px) {
    flex-direction: column; // Stack elements vertically on smaller screens
    gap: 15px;
    width: 90%; // Optionally adjust the width for mobile screens to provide more space
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 400px; // Keep a max width to ensure the image doesn't become too large
  height: auto;
  object-fit: contain; // Ensure the full image is displayed without cropping or zoom
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  margin: 0 auto; // Center the image if needed
`;
const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%; // Ensure details use the available width without exceeding limits
`;

const ProductTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: 1.1rem;
  color: #555;
`;

export default Product;
