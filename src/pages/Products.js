// src/pages/Products.js
import React from "react";
import styled from "styled-components";
import { doorsData as productsData } from "../Data/data"; // Make sure the correct path is used
import Product from "../components/Product"; // Product component for each item

const Products = () => {
  return (
    <ProductListContainer>
      {productsData.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </ProductListContainer>
  );
};

const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(250px, 1fr)
  ); // Responsive grid
  gap: 20px;
  padding: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    padding: 10px;
    grid-template-columns: 1fr 1fr; // For mobile, show 2 items per row
  }
`;

export default Products;
