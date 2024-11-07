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
  padding: 1.5rem 0;

  .featured {
    display: grid;
    gap: 1.5rem;
    margin: 0 auto;

    img {
      height: 200px;
    }
  }

  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2.5rem;
    }
  }
`;

export default FeaturedProducts;
