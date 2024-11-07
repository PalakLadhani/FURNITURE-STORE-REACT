import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { links } from "../utils/constants";
import NavIcons from "./NavIcons";
import { useProductsContext } from "../context/products_context";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { openSidebar } = useProductsContext();
  const { user } = useAuth0();

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={Logo} alt="Open to Sky Woodcrafts" />
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url} className="nav-link">
                  {text}
                </Link>
              </li>
            );
          })}
          {user && (
            <li>
              <Link to="/checkout" className="nav-link">
                Checkout
              </Link>
            </li>
          )}
        </ul>
        <NavIcons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  background-color: #fdfdfd;
  padding: 0.5rem 0;

  .nav-center {
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
    }

    .nav-toggle {
      background: transparent;
      border: none;
      color: #333;
      font-size: 1.5rem;
      cursor: pointer;
      margin-left: 1rem;
    }

    @media (min-width: 992px) {
      .nav-toggle {
        display: none;
      }
    }
  }

  .nav-links {
    display: none;
    @media (min-width: 992px) {
      display: flex;
    }
  }

  .nav-link {
    color: black;
    font-weight: bold;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    text-decoration: none;

    &:hover {
      color: #555;
    }
  }

  /* Mobile-friendly adjustments */
  @media (max-width: 768px) {
    .nav-header img {
      width: 100px; /* Smaller logo */
    }

    .nav-center {
      padding: 0.5rem;
    }

    .nav-links {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      padding-top: 1rem;
    }

    .nav-link {
      font-size: 0.9rem; /* Adjust font size */
      padding: 0.3rem 0.8rem; /* Adjust padding */
    }
  }
`;

export default Navbar;
