// src/components/FeaturedProducts.js
import React from "react";
import styled from "styled-components";
import { doorsData as featuredProducts } from "../Data/data"; // Featured product data
import Product from "./Product"; // Import Product component for individual product

const FeaturedProducts = () => {
  return (
    <FeaturedSection>
      <FeaturedHeading>Featured Products</FeaturedHeading>
      <ProductList>
        {featuredProducts.slice(0, 10).map(
          (
            product // Show only first 10 products
          ) => (
            <Product key={product.id} {...product} />
          )
        )}
      </ProductList>
    </FeaturedSection>
  );
};

// Styled Components
const FeaturedSection = styled.section`
  width: 100%;
  padding: 40px 20px;
  background-color: #f8f8f8;
  text-align: center;
`;

const FeaturedHeading = styled.h2`
  font-size: 2.8rem;
  font-family: "Helvetica Neue", sans-serif;
  color: #333;
  margin-bottom: 30px;
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(250px, 1fr)
  ); // Responsive grid
  gap: 20px;
  padding: 10px 0;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr; // Stack 2 items per row on mobile
  }
`;

export default FeaturedProducts;
