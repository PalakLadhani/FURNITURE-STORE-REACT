import React from "react";
import styled from "styled-components";

const CEOSection = () => {
  return (
    <CEOContainer>
      <div className="ceo-content">
        <div className="ceo-photo">
          {/* You can upload an image here */}
          <img src="https://via.placeholder.com/150" alt="CEO" />
        </div>
        <div className="ceo-description">
          <h2>John Doe</h2>
          <p>
            John Doe is the CEO of Open to Sky Woodcrafts. With over 20 years of
            experience in the woodworking industry, he has led the company to
            remarkable growth. Under his leadership, the company has expanded
            into multiple cities, serving thousands of happy customers. His
            vision is to continuously innovate and deliver the finest wooden
            products.
          </p>
        </div>
      </div>
    </CEOContainer>
  );
};

const CEOContainer = styled.section`
  padding: 5rem 0;
  background: linear-gradient(
    to right,
    #e0f7fa,
    #ffffff
  ); /* Soft Blue Gradient */
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  margin-top: 2rem;
  border-radius: 10px;

  .ceo-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .ceo-photo {
    flex-shrink: 0;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
  }

  .ceo-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .ceo-description {
    flex-grow: 1;
    max-width: 800px;
    color: var(--clr-grey-5);
    text-align: left;
  }

  .ceo-description h2 {
    font-size: 2rem;
    font-weight: bold;
    color: var(--clr-primary-4);
    margin-bottom: 1rem;
  }

  .ceo-description p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--clr-grey-3);
  }

  @media (max-width: 768px) {
    .ceo-content {
      flex-direction: column;
      text-align: center;
    }

    .ceo-description h2 {
      font-size: 1.8rem;
    }

    .ceo-description p {
      font-size: 1rem;
    }
  }
`;

export default CEOSection;
