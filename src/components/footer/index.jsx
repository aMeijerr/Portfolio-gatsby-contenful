import React from 'react';
import styled from 'styled-components';
import { Link, graphql, useStaticQuery } from 'gatsby';

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
    border-bottom: 4px solid #fb8500;
  }
`;

const Footer = () => {
  const data = useStaticQuery(FooterLinksQuery);

  return (
    <FooterLinksContainer>
      <LinksWrapper>
        {data.allContentfulFooterLinks.edges.map((edge) => {
          const {
            icon: {
              file: { url: iconUrl },
            },
          } = edge.node;
          return (
            <LinkItem key={iconUrl}>
              <Link to="https://dif.se/">
                <img src={iconUrl} alt="tech-icon" width="40" height="40" />
              </Link>
            </LinkItem>
          );
        })}
      </LinksWrapper>
    </FooterLinksContainer>
  );
};

export default Footer;

export const FooterLinksQuery = graphql`
  query FooterLinksQuery {
    allContentfulFooterLinks {
      edges {
        node {
          icon {
            file {
              url
            }
          }
        }
      }
    }
  }
`;
