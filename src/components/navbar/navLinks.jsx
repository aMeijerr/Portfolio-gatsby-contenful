import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #white;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;
  &:hover {
    border-top: 2px solid #a8dadc;
  }
`;

// const Link = styled.a`
//   text-decoration: none;
//   color: inherit;
//   font-size: inherit;
// `;

export function NavLinks(props) {
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <Link to="/">Home</Link>
        </LinkItem>
        <LinkItem>
          <Link to="/products">Products</Link>
        </LinkItem>
        <LinkItem>
          <Link to="/about">About us</Link>
        </LinkItem>
        <LinkItem>
          <Link to="/team">The team</Link>
        </LinkItem>
        <LinkItem>
          <Link to="/policy">Our policy</Link>
        </LinkItem>
        <LinkItem>
          <Link to="/contact">Contact</Link>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}