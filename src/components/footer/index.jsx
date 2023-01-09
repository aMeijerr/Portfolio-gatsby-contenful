import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import facebook from "../../assets/Facebook.svg";
import instagram from "../../assets/Instagram.svg";
import github from "../../assets/Github.svg";
import linkedin from "../../assets/LinkedIn.svg";

const FooterLinksContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
`;

const LinkItem = styled.li`
  padding: 1em;
  color: #white;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-bottom: 2px solid transparent;
  transition: all 220ms ease-in-out;
  &:hover {
    border-bottom: 4px solid #FB8500;
  }
`;
  
const Footer = () => {
    return (
        <FooterLinksContainer>
          <LinksWrapper>
            <LinkItem>
              <Link to="https://dif.se/"><img src={facebook} alt="facebook-link" width="40" height="40"/></Link>
            </LinkItem>
            <LinkItem>
              <Link to="https://dif.se/"><img src={instagram} alt="instagram-link" width="40" height="40"/></Link>
            </LinkItem>
            <LinkItem>
              <Link to="https://dif.se/"><img src={github} alt="github-link" width="40" height="40"/></Link>
            </LinkItem>
            <LinkItem>
              <Link to="https://dif.se/"><img src={linkedin} alt="linkedin-link" width="40" height="40"/></Link>
            </LinkItem>
          </LinksWrapper>
        </FooterLinksContainer>
      );
    }

export default Footer;