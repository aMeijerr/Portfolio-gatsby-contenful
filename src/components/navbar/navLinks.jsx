import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
`;

const LinksWrapper = styled.ul`
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #white;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;
  &:hover {
    border-top: 4px solid #fb8500;
  }
`;

export function NavLinks(props) {
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <Link to="/">Home</Link>
        </LinkItem>
        <LinkItem>
          <Link to="/projects">Projects</Link>
        </LinkItem>
        <LinkItem>
          <Link to="/about">About me</Link>
        </LinkItem>
        <LinkItem>
          <Link to="/contact">Contact</Link>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}
