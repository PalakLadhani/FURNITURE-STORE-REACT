import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    axios({
      method: "POST",
      url: "https://formspree.io/f/xknpaqgw",
      data: new FormData(form),
    })
      .then((response) => {
        if (response.status === 200) {
          form.reset();
          setStatus("SUCCESS");
        }
      })
      .catch((error) => {
        console.log(error);
        setStatus("ERROR");
      });

    setTimeout(() => {
      setStatus("");
    }, 5000);
  };

  return (
    <ContactContainer>
      <div className="section-center">
        <h3>Contact Us</h3>
        <div className="content">
          <p>
            We’d love to hear from you! Please fill out the form below and we’ll
            get back to you as soon as possible.
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-input"
              placeholder="name"
              name="name"
            />
            <input
              type="tel"
              className="form-input"
              placeholder="mobile no"
              name="mobile"
            />
            <textarea
              className="form-input"
              placeholder="message"
              name="message"
            />
            <button type="submit" className="submit-btn">
              Send Message
            </button>
            {status === "SUCCESS" && (
              <span className="message">Thank you for contacting us!</span>
            )}
            {status === "ERROR" && (
              <span className="message">
                Something went wrong! Try again later.
              </span>
            )}
          </form>
        </div>
      </div>
    </ContactContainer>
  );
};

const ContactContainer = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .message {
    color: var(--clr-primary-3);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
    border-radius: var(--radius);
  }

  .form-input {
    color: var(--clr-grey-3);
    width: 100%;
  }

  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }

  .submit-btn {
    background: var(--clr-primary-6);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }

  .submit-btn:hover {
    color: var(--clr-white);
  }

  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 2rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`;

export default Contact;
