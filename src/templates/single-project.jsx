import * as React from 'react';
import { useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import * as styles from '../styles/single-project.module.css';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { DeviceSize } from '../components/responsive';
import { useMediaQuery } from 'react-responsive';
import { Seo } from '../components/seo';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SingleProjectPage = ({ data }) => {
  const [settings] = useState({
    dots: true,
    infinite: true,
    autoplay: true,
    adaptiveHeight: true,
    pauseOnHover: true,
    autoplaySpeed: 4000,
  });

  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  const project = data.contentfulProjects;

  const renderLink = () =>
    renderRichText(project.link, {
      renderMark: {
        [MARKS.BOLD]: (text) => <strong>{text}</strong>,
      },
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      },
    }).map((link) => (
      <div className={styles.project_link}>
        <h4>{link}</h4>
      </div>
    ));

  const renderProjectImages = () =>
    project.projectImages.map((img, i) => {
      const image = getImage(img);

      return (
        <GatsbyImage
          image={image}
          alt={project.title}
          key={`${project.title}-${i}`}
        />
      );
    });

  return (
    <Layout>
      <main className={styles.single__container} key={project.title}>
        <h2>{project.title}</h2>
        {/* Renders tech icons dynamically */}
        <div>
          {project.techStack.map((tech) => (
            <p className={styles.tech__stack} key={tech}>
              {tech}
            </p>
          ))}
        </div>

        <p>{project.description}</p>

        {isMobile ? (
          <Slider
            {...settings}
            className={styles.img__mobile}
            style={{ width: 300 }}
          >
            {renderProjectImages()}
          </Slider>
        ) : (
          <div className={styles.img__container}>{renderProjectImages()}</div>
        )}
        {renderLink()}
      </main>
    </Layout>
  );
};

export default SingleProjectPage;

export const Head = () => <Seo title="Single project page" />;

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
