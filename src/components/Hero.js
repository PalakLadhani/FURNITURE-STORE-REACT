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
  justify-items: center; /* Center alignment for grid items */
  padding: 3rem;
  background: linear-gradient(
      to right,
      rgba(240, 244, 248, 0.9),
      rgba(230, 235, 241, 0.9)
    ),
    url(${heroImage}) center/cover no-repeat;
  height: 100vh;
  color: #34495e; /* Set a softer dark color for text */

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    height: auto; /* Adjust height for larger screens */
  }
`;

const Content = styled.article`
  text-align: center;
  padding: 2rem;

  h1 {
    font-size: 2.5rem; /* Reduced size */
    font-weight: 700;
    margin-bottom: 1rem;
    color: #2c3e50; /* Main heading color */
    span {
      color: #e74c3c; /* Highlight color */
    }
  }

  p {
    font-size: 1.1rem; /* Slightly smaller for better readability */
    line-height: 1.8; /* Improved line height for readability */
    max-width: 600px; /* Wider max-width for better content fit */
    margin: 0 auto 2rem;
    color: #555; /* Softer gray for better readability */
  }

  .hero-btn {
    padding: 0.75rem 1.5rem;
    background-color: #e74c3c; /* Button color */
    color: #fff;
    font-size: 1rem;
    text-transform: uppercase;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-decoration: none; /* Remove underline for link */
  }

  .hero-btn:hover {
    background-color: #c0392b; /* Darker shade on hover */
  }
`;

const ImgContainer = styled.article`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  .main-img {
    width: 100%;
    max-width: 700px;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 768px) {
    margin-top: 0; /* Reset margin on larger screens */
  }
`;

export default Hero;
