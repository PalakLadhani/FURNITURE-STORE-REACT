import React from "react";
import styled from "styled-components";
import { doorsData } from "../Data/data"; // Import doors data directly
import Product from "./Product";

const FeaturedProducts = () => {
  return (
    <FeaturedProductsContainer className="section">
      <div className="title">
        <h2>Featured Products</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {/* Use doorsData to display only the first three door designs */}
        {doorsData.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </FeaturedProductsContainer>
  );
};

const FeaturedProductsContainer = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
      object-fit: contain; /* Ensures the entire door image is visible */
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
