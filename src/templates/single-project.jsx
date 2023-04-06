import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import * as styles from '../styles/single-project.module.css';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { DeviceSize } from '../components/responsive';
import { useMediaQuery } from 'react-responsive';
import { SEO } from '../components/seo';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
  },
};

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  adaptiveHeight: true,
  pauseOnHover: true,
  autoplaySpeed: 4000,
};

const SingleProjectPage = ({ data }) => {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  const project = data.contentfulProjects;

  return (
    <Layout>
      <main className={styles.single__container} key={project.title}>
        <h2>{project.title}</h2>
        {/* //Rendrerar ut tech-ikoner dynamiskt efter contenfuls techstack */}
        <div>
          {project.techStack.map((tech) => {
            return <p className={styles.tech__stack}>{tech}</p>;
          })}
        </div>

        <p>{project.description}</p>

        {isMobile ? (
          <Slider
            {...settings}
            className={styles.img__mobile}
            style={{ width: 300 }}
          >
            {project.projectImages.map((img, i) => {
              const image = getImage(img);
              return <GatsbyImage image={image} alt={project.title} key={i} />;
            })}
          </Slider>
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

export const Head = () => <SEO title="Single project page" />;

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
          height: 280
          width: 330
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
