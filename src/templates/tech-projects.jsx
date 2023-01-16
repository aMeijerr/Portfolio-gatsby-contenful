import React from 'react';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';
import * as styles from '../styles/projects.module.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { SEO } from '../components/seo';

const TechProjectsPage = ({ data }) => {
  let TechList = [];
  return (
    <Layout>
      <section>
        {/* Skapar en lista med alla tekniker som finns i projekt */}
        {data.allContentfulProjects.edges.forEach((edge) => {
          const projectTech = edge.node.tech.title;
          if (!TechList.includes(projectTech)) {
            TechList.push(projectTech);
          }
        })}

        {/* Skriver ut alla tekniker som finns i projektet som en lista */}
        <nav className={styles.tech__navbar}>
          <Link to={'/projects'}>
            <h3>All</h3>
          </Link>
          {TechList.map((tech) => {
            return (
              <Link to={'/projects/category/' + tech}>
                <h3>{tech}</h3>
              </Link>
            );
          })}
        </nav>
        {data.allContentfulProjects.edges.map(({ node }) => {
          const slug = node.slug;
          const projectImage = getImage(node.projectImages[2]);
          return (
            <div className={styles.projects__container} key={node.title}>
              <hr />
              {/* <div className={styles.title__container}> */}
              <h2>{node.title}</h2>
              <p className={styles.tech__stack}>{node.tech.title}</p>
              {/* </div> */}
              <div className={styles.img__container}>
                <GatsbyImage image={projectImage} alt={node.title} />
              </div>
              <Link to={'/project/' + slug}>
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

export const Head = () => <SEO title="Category page" />;

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
