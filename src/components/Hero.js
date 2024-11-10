import React from "react";
import styled from "styled-components";
import Slider from "react-slick"; // Import carousel library

// Import door images
import doorImage1 from "../assets/door1.avif";
import doorImage2 from "../assets/door2.avif";
import doorImage3 from "../assets/door4.jpg";
import doorImage4 from "../assets/door3.jpg"; // New Door Image 1
import doorImage5 from "../assets/door5.jpg"; // New Door Image 2

const Hero = () => {
  // Carousel settings with left-right slide effect
  const settings = {
    dots: false, // Hide navigation dots
    infinite: true,
    speed: 1000, // Set speed of transition (1 second)
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Change slide every 3 seconds
    cssEase: "ease-in-out", // Smooth sliding effect
    arrows: false, // Hide navigation arrows (optional)
  };

  return (
    <HeroContainer>
      <Slider {...settings}>
        <Slide>
          <img src={doorImage1} alt="Door Solutions" />
          <Caption>
            <h1>Introducing a Phenomenon For Complete Door Solutions</h1>
          </Caption>
        </Slide>
        <Slide>
          <img src={doorImage2} alt="Lifestyle Doors" />
          <Caption>
            <h1>Lifestyle Doors Crafted With Unmatched Durability</h1>
          </Caption>
        </Slide>
        <Slide>
          <img src={doorImage3} alt="Possibilities with our doors" />
          <Caption>
            <h1>Step into a World of Possibilities with Our Doors!</h1>
          </Caption>
        </Slide>
        <Slide>
          <img src={doorImage4} alt="Modern Door Designs" />
          <Caption>
            <h1>Modern Designs for Every Home</h1>
          </Caption>
        </Slide>
        <Slide>
          <img src={doorImage5} alt="High-Quality Wooden Doors" />
          <Caption>
            <h1>Crafted with Quality and Precision</h1>
          </Caption>
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
    height: 100vh; // Full screen height
    object-fit: cover; // Ensure the image fills the container without distortion
  }
`;

const Caption = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    background: rgba(0, 0, 0, 0.5); // Background behind text for readability
    padding: 1rem;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.8rem;
      padding: 0.8rem;
    }
  }
`;

export default Hero;
