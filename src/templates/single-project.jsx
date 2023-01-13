import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import * as styles from '../styles/single-project.module.css';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { DeviceSize } from '../components/responsive';
import { useMediaQuery } from 'react-responsive';

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
  },
};

const SingleProjectPage = ({ data }) => {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  const project = data.contentfulProjects;

  return (
    <Layout>
      <main className={styles.single__container}>
        <h2>{project.title}</h2>

        {/* //Rendrerar ut tech-ikoner dynamiskt efter contenfuls techstack */}
        <ul>
          {project.techStack.map((tech) => {
            return <p className={styles.tech__stack}>{tech}</p>;
            // return <img src={require(`../assets/${tech}.svg`).default} alt="tech-icon" width="40" height="40"/>
          })}
        </ul>

        <p>{project.description}</p>

        {isMobile ? (
          <div className={styles.img__mobile}>
            {project.projectImages.map((img, i) => {
              const image = getImage(img);
              return <GatsbyImage image={image} alt={project.title} key={i} />;
            })}
          </div>
        ) : (
          <div className={styles.img__container}>
            {project.projectImages.map((img, i) => {
              const image = getImage(img);
              return <GatsbyImage image={image} alt={project.title} key={i} />;
            })}
          </div>
        )}
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
      techStack
      projectImages {
        title
        gatsbyImageData(
          height: 300
          width: 350
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
