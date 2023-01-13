import * as React from 'react';
import Layout from '../components/Layout';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as styles from '../styles/404.module.css';
import { Link } from 'gatsby';

const NotFoundPage = () => {
  const query = useStaticQuery(graphql`
    query PageNotFoundQuery {
      allContentful404Page {
        edges {
          node {
            title
            text
            image {
              gatsbyImageData(
                height: 350
                resizingBehavior: PAD
                placeholder: BLURRED
                layout: FIXED
              )
            }
          }
        }
      }
    }
  `);

  const data = query.allContentful404Page.edges[0].node;
  const img = getImage(data.image);
  console.log(data);
  return (
    <Layout>
      <section className={styles.container}>
        <GatsbyImage image={img} alt={data.title} />
        <div className={styles.text}>
          <h2>{data.title}</h2>
          <h3>{data.text}</h3>
          <Link to="/" className={styles.btn}>
            Return home
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
