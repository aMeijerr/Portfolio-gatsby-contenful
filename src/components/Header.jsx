import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

const Header = () => {
    const data = useStaticQuery(graphql`
        query SiteInfo {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const { title } = data.site.siteMetadata;

    return (
        <nav className="header">
            <h1>{ title }</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
            )
}

export default Header