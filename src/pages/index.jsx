import { Link } from 'gatsby';
import * as React from 'react';
import * as styles from '../styles/home.module.css';
import { useStaticQuery, graphql } from 'gatsby';
import { Seo } from '../components/seo';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query LandingPageQuery {
      allContentfulLandingPage {
        edges {
          node {
            title
            text
            bgImage {
              file {
                url
              }
            }
          }
        }
      }
    }
  `);

  const {
    title,
    text,
    bgImage: {
      file: { url: bgImageUrl },
    },
  } = data.allContentfulLandingPage.edges[0].node;

  return (
    <section
      className={styles.landing}
      style={{
        backgroundImage: `url(${bgImageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
      }}
    >
      <div className={styles.landing__content}>
        <h2 className={styles.landing__name}>{title}</h2>
        <h3>{text}</h3>
        <Link className={styles.btn} to="/projects">
          Show projects
        </Link>
      </div>
    </section>
  );
};

export default IndexPage;

export const Head = () => <Seo />;
