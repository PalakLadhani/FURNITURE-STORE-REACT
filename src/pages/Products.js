import React from "react";
import styled from "styled-components";
import { doorsData as productsData } from "../Data/data"; // Ensure the correct path to data.js
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export default Products;
