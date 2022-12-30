import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { NavLinks } from "./navLinks";
import { DeviceSize } from "../responsive";
import { MobileNavLinks } from "./mobileNavLinks";
import { Link } from "gatsby";
// import { graphql, useStaticQuery } from "gatsby";
import Logo from "../../images/Logo3.png";

const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
`;

const LeftSection = styled.div`
  display: flex;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`;

const RightSection = styled.div`
  display: flex;
`;

const Navbar = (props) => {
    // const data = useStaticQuery(graphql`
    //     query SiteInfo {
    //         site {
    //             siteMetadata {
    //                 title
    //             }
    //         }
    //     }
    // `)
    // const { title } = data.site.siteMetadata;
    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return (
    <NavbarContainer>
      <LeftSection>
        <Link to="/">
          <img className="site-logo" src={Logo} alt="Site logo" />
        </Link>
      </LeftSection>
      <MiddleSection>
        {!isMobile && <NavLinks />}
      </MiddleSection>
      <RightSection>
        {isMobile && <MobileNavLinks />}
      </RightSection>
    </NavbarContainer>
  );
}

export default Navbar;