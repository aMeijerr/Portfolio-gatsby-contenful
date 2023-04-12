import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import * as styles from '../styles/about.module.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { useStaticQuery } from 'gatsby';
import { Seo } from '../components/seo';

const options = {
  renderMark: {
    bold: (text) => <strong>{text}</strong>,
  },
  renderNode: {
    paragraph: (node, children) => <p>{children}</p>,
  },
};

export default function AboutMePage() {
  const { allContentfulAboutMe } = useStaticQuery(query);

  const { title, description, education, experience, profileImage } =
    allContentfulAboutMe.edges[0].node;

  const image = getImage(profileImage);
  return (
    <Layout>
      <section>
        {allContentfulAboutMe.edges.map(({ node }) => (
          <div className={styles.about__container} key={node.title}>
            <h2>{title}</h2>
            <hr />
            <h1>Alex Meijer</h1>
            <article className={styles.profile__info}>
              <GatsbyImage image={image} alt={title} />
              <p>{description}</p>
            </article>
            <section className={styles.education}>
              <span>{renderRichText(education, options)}</span>
              <span>{renderRichText(experience, options)}</span>
            </section>
          </div>
        ))}
      </section>
    </Layout>
  );
}

export const Head = () => <Seo title="About me" />;

const query = graphql`
  query {
    allContentfulAboutMe {
      edges {
        node {
          title
          description
          profileImage {
            gatsbyImageData(
              height: 350
              resizingBehavior: PAD
              placeholder: BLURRED
              layout: FIXED
            )
          }
          education {
            raw
          }
          experience {
            raw
          }
        }
      }
    }
  }
`;
