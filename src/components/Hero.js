// src/components/Hero.js
import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

// Import door images
import doorImage1 from "../assets/door1.jpg";
import doorImage2 from "../assets/door5.jpg";
import doorImage3 from "../assets/door4.jpg";
import doorImage4 from "../assets/door3.jpg";
import doorImage5 from "../assets/door5.jpg";
import doorImage6 from "../assets/door6.jpg";
import doorImage7 from "../assets/door7.jpg";

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "ease-in-out",
    arrows: false,
  };

  return (
    <HeroContainer>
      <Slider {...settings}>
        <Slide>
          <img src={doorImage1} alt="Door Solutions" />
          <Caption>
            Introducing a Phenomenon For Complete Door Solutions
          </Caption>
        </Slide>
        <Slide>
          <img src={doorImage2} alt="Lifestyle Doors" />
          <Caption>Lifestyle Doors Crafted With Unmatched Durability</Caption>
        </Slide>
        <Slide>
          <img src={doorImage3} alt="Possibilities with our doors" />
          <Caption>Step into a World of Possibilities with Our Doors!</Caption>
        </Slide>
        <Slide>
          <img src={doorImage4} alt="Modern Door Designs" />
          <Caption>Modern Designs for Every Home</Caption>
        </Slide>
        <Slide>
          <img src={doorImage5} alt="High-Quality Wooden Doors" />
          <Caption>Crafted with Quality and Precision</Caption>
        </Slide>
        <Slide>
          <img src={doorImage6} alt="Elegant Wooden Door" />
          <Caption>Elegance and Strength in Every Design</Caption>
        </Slide>
        <Slide>
          <img src={doorImage7} alt="Classic Door Styles" />
          <Caption>Classic Styles for Timeless Appeal</Caption>
        </Slide>
      </Slider>
    </HeroContainer>
  );
};

// Styled Components
const HeroContainer = styled.section`
  width: 100%;
  position: relative;
`;

const Slide = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 90vh;
    object-fit: contain; /* Change to 'contain' for full view */
    background-color: #f0f0f0; /* Light background to fill extra space */
  }
`;

const Caption = styled.div`
  position: absolute;
  bottom: 60px;
  width: 100%;
  color: #fff;
  text-align: center;
  font-size: 1.8rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 8px 0;
    bottom: 40px;
  }
`;

export default Hero;
