// src/pages/ProductDetail.js (or a similar component for product details)
import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom"; // If you're using React Router for navigation
import { doorsData as productsData } from "../Data/data"; // Adjust the import for product data

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData.find((item) => item.id === parseInt(id)); // Get product by ID

  return (
    <ProductDetailContainer>
      <ProductImage src={product.image} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductDescription>{product.description}</ProductDescription>
    </ProductDetailContainer>
  );
};

// Styled Components for Product Detail Page
const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  max-width: 100%;
  width: 100%;
`;

const ProductImage = styled.img.attrs(() => ({
  loading: "lazy", // This enables lazy loading for images
}))`
  width: 100%;
  max-width: 400px;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const ProductName = styled.h1`
  font-size: 2.5rem;
  margin-top: 20px;
`;

const ProductDescription = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-top: 20px;
`;

export default ProductDetail;
