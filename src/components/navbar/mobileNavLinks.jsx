import React, { useState } from "react";
import styled from "styled-components";
// import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";
import { Link } from "gatsby";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
`;

const LinksWrapper = styled.ul`
  z-index: 98;
  margin: 0;
  padding: 65px 0 0 20px;
  display: flex;
  height: 100%;
  list-style: none;
  background: radial-gradient(at top left, #1b263b 0%, #0d1b2a 100%);
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 65px;
  border-left: 2px solid #a8dadc;
  opacity: 0.99;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #white;
  font-weight: 500;
  font-size: 24px;
  display: flex;
  margin-bottom: 10px;
`;

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
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
      )}
    </NavLinksContainer>
  );
}