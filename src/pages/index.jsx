import { Link } from 'gatsby';
import * as React from 'react';
import * as styles from '../styles/home.module.css';
import { useStaticQuery, graphql } from 'gatsby';

const IndexPage = () => {
  const data = useStaticQuery(LandingPageQuery);
  const { title, text } = data.allContentfulBackgroundImage.edges[0].node;

  const bgImage =
    data.allContentfulBackgroundImage.edges[0].node.bgImage.file.url;
  return (
    <section
      className={styles.landing}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }}
    >
      <div className={styles.landing__content}>
        <h2>
          I'm <span className={styles.landing__name}>{title}</span>
        </h2>
        <h3>{text}</h3>
        <Link className={styles.btn} to="/projects">
          Show projects
        </Link>
      </div>
    </section>
  );
};

export default IndexPage;

export const Head = () => <title>Alex Meijer Web Development</title>;

export const LandingPageQuery = graphql`
  query LandingPageQuery {
    allContentfulBackgroundImage {
      edges {
        node {
          title
          text
          bgImage {
            file {
              url
              fileName
            }
          }
        }
      }
    }
  }
`;
