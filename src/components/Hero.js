import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-door.webp"; // Replace this with your chosen image path

const Hero = () => {
  return (
    <HeroContainer>
      <Content>
        <h1>
          Welcome to Open to Sky Woodcrafts
          <br />
          <span>Crafting Quality & Elegance</span>
        </h1>
        <p>
          Discover premium doors, frames, and furniture at Open to Sky
          Woodcrafts. Each piece is meticulously crafted to reflect style and
          durability, enhancing the beauty of your space. Our commitment to
          quality ensures that every product meets the highest standards for
          your home or office.
        </p>
        <Link to="/products" className="btn hero-btn">
          Explore Our Collection
        </Link>
      </Content>
      <ImgContainer>
        <img src={heroImage} alt="Elegant wooden door" className="main-img" />
      </ImgContainer>
    </HeroContainer>
  );
};
const HeroContainer = styled.section`
  display: grid;
  align-items: center;
  justify-items: center;
  padding: 2rem;
  background: linear-gradient(
      to right,
      rgba(240, 244, 248, 0.9),
      rgba(230, 235, 241, 0.9)
    ),
    url(${heroImage}) center/cover no-repeat;
  color: #34495e;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    height: 100vh;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    text-align: center;
    height: auto;
  }
`;
const Content = styled.article`
  text-align: center;
  padding: 1rem; /* Reduced padding */

  h1 {
    font-size: 2rem; /* Smaller font for mobile */
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #2c3e50;

    span {
      color: #e74c3c;
      display: block;
      font-size: 1.5rem; /* Smaller span font */
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    max-width: 100%; /* Fit content */
    margin: 0 auto 1.5rem;
    color: #555;
  }

  .hero-btn {
    padding: 0.6rem 1.2rem; /* Adjusted for mobile */
    font-size: 0.9rem;
    margin-top: 1rem;
  }
`;

const ImgContainer = styled.article`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  .main-img {
    width: 100%;
    max-width: 500px; /* Scaled down for mobile */
    border-radius: 8px;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

export default Hero;
