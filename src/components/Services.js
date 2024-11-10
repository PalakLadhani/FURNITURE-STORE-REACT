import React from "react";
import styled from "styled-components";
import { HiColorSwatch, HiBookOpen, HiBadgeCheck, HiEye } from "react-icons/hi";
import { FaRegAddressCard } from "react-icons/fa";
import { MdContactPhone, MdEmail } from "react-icons/md";

const Services = () => {
  return (
    <ServicesContainer>
      <div className="section-center">
        <article className="header">
          <h3>More about our company</h3>
        </article>
        <div className="services-center">
          <article className="service">
            <span className="icon">
              <FaRegAddressCard />
            </span>
            <h4>Address</h4>
            <p>404, Rich Empire, Lane No 5, Kutwal Colony, Lohegaon, Pune-15</p>
          </article>
          <article className="service">
            <span className="icon">
              <MdContactPhone />
            </span>
            <h4>Contact Number</h4>
            <p>7498474952</p>
          </article>
          <article className="service">
            <span className="icon">
              <MdEmail />
            </span>
            <h4>Email Id</h4>
            <p>Nilesh@otswoodcraft.com</p>
          </article>
          <article className="service">
            <span className="icon">
              <HiEye />
            </span>
            <h4>Vision</h4>
            <p>
              To inspire through sustainable woodcraft, merging innovation with
              timeless design.
            </p>
          </article>
        </div>
      </div>
    </ServicesContainer>
  );
};

const ServicesContainer = styled.section`
  h3,
  h4 {
    color: #4a3c72; /* Deep lavender color for headings */
  }
  padding: 5rem 0;
  background: #e3eaf3; /* Same background color from Counter.js */
  .header h3 {
    margin-bottom: 2rem;
    text-align: center;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: #6c4f8c; /* Slightly darker lavender for text */
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: #ffffff; /* White background for service cards */
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for a modern look */
    p {
      color: #7f5a8b; /* Light purple for service text */
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: #e1d4eb; /* Lavender background for icon */
    color: #4a3c72; /* Deep lavender for icon color */
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;

export default Services;
