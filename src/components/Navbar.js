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
          {/* Uncomment if you want the sidebar toggle */}
          {/* <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button> */}
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;

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
      width: 200px;
    }
  }

  .nav-toggle {
    background: transparent;
    border: none;
    color: #333;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .nav-links {
    display: none;
    @media (min-width: 992px) {
      display: flex;
      justify-content: center;
    }
  }

  .nav-link {
    color: black;
    font-weight: 600;
    font-size: 1.1rem;
    margin: 0 0.5rem;
    padding: 0.5rem 1rem;
    text-transform: uppercase; /* Add this line for uppercase links */
    transition: color 0.3s ease;
    &:hover {
      color: #555;
    }
  }
`;

export default Navbar;
