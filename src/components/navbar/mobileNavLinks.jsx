import React, { useState } from "react";
import styled from "styled-components";
import { MenuToggle } from "./menuToggle";
import { Link } from "gatsby";
import Logo from "../../images/Logo3.png";

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
  background: #001D2C;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #white;
  font-weight: 500;
  font-size: 24px;
  display: flex;
  margin-bottom: 10px;
  border-left: 2px solid transparent;
  transition: all 220ms ease-in-out;
  &:hover {
    border-left: 4px solid #FB8500;
`;

const LogoPlacement = styled.div`
  position: fixed;
  bottom: 45px;
  right: 45px;
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
                <Link to="/projects">Projects</Link>
            </LinkItem>
            <LinkItem>
                <Link to="/about">About me</Link>
            </LinkItem>
            <LinkItem>
                <Link to="/contact">Contact</Link>
            </LinkItem>
            <LogoPlacement>
              <img className="site-logo" src={Logo} alt="Site logo" />
            </LogoPlacement>
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}