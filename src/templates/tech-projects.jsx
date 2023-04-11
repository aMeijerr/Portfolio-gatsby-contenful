import React from 'react';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';
import * as styles from '../styles/projects.module.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Seo } from '../components/seo';

const TechProjectsPage = ({ data }) => {
  const { edges: projects } = data.allContentfulProjects;

  const techList = projects
    .map(({ node }) => node.tech.title)
    .reduce((acc, curr) => {
      return acc.includes(curr) ? acc : [...acc, curr];
    }, []);

  return (
    <Layout>
      <section>
        <nav className={styles.tech__navbar}>
          <Link to="/projects">
            <h3>All /</h3>
          </Link>
          {techList.map((tech) => {
            return (
              <Link key={tech} to={`/projects/category/${tech}`}>
                <h3>{tech} /</h3>
              </Link>
            );
          })}
        </nav>

        {projects.map(({ node }) => {
          const { title, slug, projectImages, tech } = node;
          const projectImage = getImage(projectImages[2]);
          return (
            <div className={styles.projects__container} key={title}>
              <hr />
              <h2>{title}</h2>
              <p className={styles.tech__stack}>{tech.title}</p>
              <div className={styles.img__container}>
                <GatsbyImage image={projectImage} alt={title} />
              </div>
              <Link to={`/project/${slug}`}>
                <h4>View project</h4>
              </Link>
            </div>
          );
        })}
      </section>
    </Layout>
  );
};

export default TechProjectsPage;

export const Head = () => <Seo title="Category page" />;

export const query = graphql`
  query TechProjectPageQuery($techSlug: String) {
    allContentfulProjects(filter: { tech: { title: { eq: $techSlug } } }) {
      edges {
        node {
          title
          slug
          description
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
          tech {
            title
          }
        }
      }
    }
  }
`;
