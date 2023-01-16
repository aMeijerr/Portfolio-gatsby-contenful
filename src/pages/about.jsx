import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import * as styles from '../styles/about.module.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { useStaticQuery } from 'gatsby';
import { SEO } from '../components/seo';

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
  },
};

export default function AboutPage() {
  const data = useStaticQuery(AboutQuery);
  const { title, description, education, experience } =
    data.allContentfulAboutMe.edges[0].node;
  const profileImage = getImage(
    data.allContentfulAboutMe.edges[0].node.profileImage
  );
  return (
    <Layout>
      <section>
        {data.allContentfulAboutMe.edges.map(({ node }) => {
          return (
            <div className={styles.about__container} key={node.title}>
              <h2>{title}</h2>
              <hr />
              <h1>Alex Meijer</h1>
              <article className={styles.profile__info}>
                <GatsbyImage image={profileImage} alt={node.title} />
                <p>{description}</p>
              </article>
              <section className={styles.education}>
                <span>{renderRichText(education, options)}</span>
                <span>{renderRichText(experience, options)}</span>
              </section>
            </div>
          );
        })}
      </section>
    </Layout>
  );
}

export const Head = () => <SEO title="About me" />;

const AboutQuery = graphql`
  query MyQuery {
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
