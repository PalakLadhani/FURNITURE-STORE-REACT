// src/pages/About.js
import React from "react";
import styled from "styled-components";
import PageHero from "../components/PageHero";
import image from "../assets/about_us.jpg"; // Ensure this path is correct

const teamMembers = [
  {
    name: "Santosh Paigude",
    designation: "CEO",
    contact: "123-456-7890",
    email: "santosh@otswoodcraft.com",
  },
  {
    name: "Vishhal Saraf",
    designation: "Director",
    contact: "123-456-7891",
    email: "vishhal@otswoodcraft.com",
  },
  {
    name: "Dilip Patel",
    designation: "Factory Management Head",
    contact: "123-456-7892",
    email: "dilip@otswoodcraft.com",
  },
  {
    name: "Vikash Dorle",
    designation: "HOD",
    contact: "123-456-7893",
    email: "vikash@otswoodcraft.com",
  },
  {
    name: "Soniya Saraf",
    designation: "Head Sales & Marketing",
    contact: "123-456-7894",
    email: "soniya@otswoodcraft.com",
  },
  {
    name: "Nilesh Malviy",
    designation: "Sales Manager",
    contact: "123-456-7895",
    email: "nilesh@otswoodcraft.com",
  },
];

const About = () => {
  return (
    <main>
      <AboutContainer className="page section section-center">
        <img src={image} alt="about us" />
        <ContentWrapper>
          <article>
            <div className="title">
              <h2>Our team</h2>
              <div className="underline"></div>
              <br />
              <p>
                Our dedicated team is committed to delivering excellence and
                quality in every aspect of our work.
              </p>
            </div>
            <TeamContainer>
              {teamMembers.map((member, index) => (
                <TeamCard key={index}>
                  <h3>{member.name}</h3>
                  <p>{member.designation}</p>
                  <table>
                    <tbody>
                      <tr>
                        <th>Contact:</th>
                        <td>{member.contact}</td>
                      </tr>
                      <tr>
                        <th>Email:</th>
                        <td>{member.email}</td>
                      </tr>
                    </tbody>
                  </table>
                </TeamCard>
              ))}
            </TeamContainer>
          </article>
        </ContentWrapper>
      </AboutContainer>
    </main>
  );
};

const AboutContainer = styled.section`
  display: grid;
  gap: 4rem;
  padding: 2rem;

  img {
    width: 100%;
    max-width: 100%; /* Ensure image fits within container */
    height: auto;
    max-height: 500px; /* Restrict height to avoid distortion */
    object-fit: contain;
    border-radius: var(--radius);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    margin: 0 auto; /* Center image horizontally */
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr;

  .title {
    text-align: center;
    position: relative;
    margin-bottom: 2rem;
  }

  .underline {
    width: 50px;
    height: 4px;
    background-color: red;
    margin: 0 auto;
    margin-top: 10px;
  }

  // Add space between the title/underline and the team container
  .title + p {
    margin-top: 2rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    padding: 4rem;
  }
`;

const TeamContainer = styled.div`
  display: grid;
  gap: 3rem;
  margin-top: 2rem;
  padding: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TeamCard = styled.div`
  background: #ffffff;
  border-radius: var(--radius);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  h3 {
    margin-bottom: 0.5rem;
    color: var(--clr-primary-5);
    font-size: 1.5rem;
  }

  p {
    color: var(--clr-grey-3);
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  table {
    width: 100%;
    margin-top: 0.5rem;

    th {
      text-align: right;
      color: var(--clr-grey-5);
      font-weight: normal;
      padding-right: 0.5rem;
      font-size: 1rem;
    }

    td {
      text-align: left;
      color: var(--clr-grey-2);
      font-size: 1rem;
    }
  }
`;

export default About;
