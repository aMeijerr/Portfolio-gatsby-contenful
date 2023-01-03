import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import * as styles from '../styles/single-project.module.css';
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { DeviceSize } from "../components/responsive";
import { useMediaQuery } from "react-responsive";
import vue from '../assets/vue.svg'
import html from '../assets/html5.svg'
import css from '../assets/css3.svg'

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <strong>{text}</strong>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
  },
}

const SingleProjectPage = ({ data }) => {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  const project = data.contentfulProjects;

  return (
    <Layout>
        <main className={styles.single__container}>
          <h2>{project.title}</h2>

          {/* Utkast på techikoner, måste lägga in kategorier i Contentful som sedan loopas över
          ungefär som bilderna. Behöver vara dynamiskt */}
          <div className={styles.tech}>
            <h4>Tech:</h4>
            <img src={vue} alt="vue-icon" width="40" height="40"/>
            <img src={html} alt="html-icon" width="40" height="40"/>
            <img src={css} alt="css-icon" width="40" height="40"/>
          </div>

          {isMobile ? (
            <div className={styles.img__mobile}>
                {project.projectImages.map((img, i) => {
                const image = getImage(img);
                return <GatsbyImage image={image} alt={project.title} key={i}/>
                })}
            </div>
          ) : (
            <div className={styles.img__container}>
              {project.projectImages.map((img, i) => {
              const image = getImage(img);
              return <GatsbyImage image={image} alt={project.title} key={i}/>
              })}
            </div>
          )
          }
          
          <p>{project.description}</p>
          <h4>{renderRichText(project.link, options)}</h4>
        </main>
    </Layout>
  );
};

export default SingleProjectPage;

export const Head = () => <title>Alex webdev</title>;

export const query = graphql`
  query SingleProjectPageQuery($slug: String) {
  contentfulProjects(slug: { eq: $slug }) {
    title
    slug
    description
    projectImages {
      title
      gatsbyImageData(
            height: 450
            resizingBehavior: PAD
            placeholder: BLURRED
            layout: FIXED
        )
      }
      link {
        raw
      }
  }
}
`;